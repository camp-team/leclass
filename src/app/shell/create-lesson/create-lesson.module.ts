import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateLessonRoutingModule } from './create-lesson-routing.module';
import { CreateLessonComponent } from './create-lesson/create-lesson.component';
import { FroalaEditorModule } from 'angular-froala-wysiwyg';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import {MatSelectModule} from '@angular/material/select';
import { ImageCropperModule } from 'ngx-image-cropper';
import {MatDialogModule} from '@angular/material/dialog';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [CreateLessonComponent, DeleteDialogComponent],
  imports: [
    CommonModule,
    CreateLessonRoutingModule,
    FroalaEditorModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSlideToggleModule,
    MaterialFileInputModule,
    MatSelectModule,
    ImageCropperModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatProgressBarModule
  ]
})
export class CreateLessonModule { }
