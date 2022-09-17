import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main/main-page/main-page.component';
import { AppTabsModule } from './blocks/app-tabs.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/compat/storage';
import { environment } from 'src/environments/environment';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } 
from '@angular/fire/storage';
import {
  getAnalytics,
  provideAnalytics,
  /*ScreenTrackingService,
  UserTrackingService*/
} from '@angular/fire/analytics';
// import { RecaptchaV3Module, RECAPTCHA_V3_SITE_KEY } from 'ng-recaptcha';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AppTabsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAnalytics(() => getAnalytics()),
    provideStorage(() => getStorage())
 //   RecaptchaV3Module
  ],
  providers: [
    { provide: BUCKET, useValue: `${environment.firebase.storageBucket}` },
 //   { provide: RECAPTCHA_V3_SITE_KEY, useValue: environment.recaptcha.siteKey },
 // analytics
    /*ScreenTrackingService,
    UserTrackingService*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
