import { Component, OnInit, OnDestroy } from '@angular/core';
import { Lesson } from 'src/app/interfaces/lesson';
import { LessonGetService } from 'src/app/services/lesson-get.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit, OnDestroy {

  lessons: Lesson[];

  initialLoading: boolean;

  subscription: Subscription;

  subjects = [
    'Language & Literature',
    'Analysis & Approaches',
    'Japanese',
    'Physics',
    'Computer Science',
    'Economics',
    'Theory of Knowledge',
    'IB DP'
  ];

  constructor(
    private lessonGetService: LessonGetService,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private meta: Meta,
    private router: Router
  ) {
    this.initialLoading = true;
    this.subscription = this.activatedRoute.queryParamMap.pipe(
      switchMap((params) => {
        const subject = params.get('subject');

        if (!this.subjects.includes(subject)) {
          this.router.navigateByUrl('/404');
        }

        this.titleService.setTitle(`${subject} | Leclass`);

        this.meta.addTags([
          { name: 'description', content: `Subject | ${subject}` },
          { property: 'og:title', content: `Subject | ${subject}` },
          { property: 'og:description', content: `Subject | ${subject}` },
          { property: 'og:url', content: location.href },
          { property: 'og:image', content: 'https://leclass-prod.web.app/assets/images/leclass.jpg' }
        ]);

        return this.lessonGetService.getSpecificLessons(subject);
      }))
      .subscribe((lessons: Lesson[]) => {
        this.lessons = lessons;
        this.initialLoading = false;
      });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
