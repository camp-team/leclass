import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LessonGetService } from 'src/app/services/lesson-get.service';
import { Lesson } from 'src/app/interfaces/lesson';
import { Location } from '@angular/common';
import { UserService } from 'src/app/services/user.service';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { ListService } from 'src/app/services/list.service';
import { switchMap, take, map } from 'rxjs/operators';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit {

  user = this.authService.user;

  lesson: Lesson;

  safePlayerUrl: SafeResourceUrl;

  creater: User;

  listItemIds: string[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private locationService: Location,
    private lessonGetService: LessonGetService,
    private userService: UserService,
    private authService: AuthService,
    private listService: ListService,
    private domSanitizer: DomSanitizer,
    private titleService: Title,
    private meta: Meta
  ) {
    this.activatedRoute.queryParamMap.pipe(
      take(1),
      switchMap((params) => {
        return this.lessonGetService.getLesson(params.get('id'));
      }),
      map((lesson: Lesson) => {
        this.lesson = lesson;
        this.safePlayerUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(lesson.playerUrl);
        return lesson;
      }))
      .subscribe((lesson: Lesson) => {
        this.userService.getUser(lesson.createrId).subscribe((creater: User) => {
          this.creater = creater;
        });

        this.titleService.setTitle(`Leclass | ${lesson.title}`);

        this.meta.addTags([
          { name: 'description', content: `${lesson.title}`},
          { property: 'og:title', content: `${lesson.title}` },
          { property: 'og:description', content: `${lesson.title}` },
          { property: 'og:url', content: location.href },
          { property: 'og:image', content: 'https://leclass-prod.web.app/assets/images/leclass.jpg' }
        ]);
      });

    this.listService.getListItemIds(this.authService.user.uid).pipe(take(1)).subscribe((listItemIds: string[]) => {
      this.listItemIds = listItemIds;
    });
  }

  ngOnInit(): void {
  }

  navigateBack() {
    this.locationService.back();
  }

  addToList() {
    this.listService.addToList(this.authService.user.uid, this.lesson.id);
  }

  removeFromList() {
    this.listService.removeFromList(this.authService.user.uid, this.lesson.id);
  }

}
