import { Component, OnInit } from '@angular/core';
import { Lesson } from 'src/app/interfaces/lesson';
import { LessonGetService } from 'src/app/services/lesson-get.service';

@Component({
  selector: 'app-theoryofknowledge',
  templateUrl: './theoryofknowledge.component.html',
  styleUrls: ['./theoryofknowledge.component.scss']
})
export class TheoryofknowledgeComponent implements OnInit {

  lessons: Lesson[];

  initialLoading: boolean;

  constructor(
    private lessonGetService: LessonGetService
  ) {
    this.initialLoading = true;
    this.lessonGetService.getSpecificLessons('Theory of Knowledge').subscribe((lessons: Lesson[]) => {
      this.lessons = lessons;
      setTimeout(() => {
        this.initialLoading = false;
      }, 500);
    });
  }

  ngOnInit(): void {
  }

}
