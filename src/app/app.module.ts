import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireFunctionsModule, REGION } from '@angular/fire/functions';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAnalyticsModule,
    AngularFireStorageModule,
    AngularFireFunctionsModule,
    AngularFireAuthModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [{ provide: REGION, useValue: 'asia-northeast1' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
