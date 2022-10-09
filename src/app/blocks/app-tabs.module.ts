import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsBlockComponent } from './skills-block/skills-block.component';
import { SkillsGroupComponent } from './skills-block/components/skills-group/skills-group.component';
import { SkillsGroupContentComponent } from './skills-block/components/skills-group-content/skills-group-content.component';
import { NavigationButtonsComponent } from './navigation-block/components/navigation-buttons/navigation-buttons.component';
import { SocialLinksBarComponent } from './navigation-block/components/social-links-bar/social-links-bar.component';
import { HomeBlockComponent } from './home-block/home-block.component';
import { WorkplaceCollapsibleComponent } from './experience-block/components/workplace-collapsible/workplace-collapsible.component';
import { WorkplaceCollapsibleContentComponent } from './experience-block/components/workplace-collapsible-content/workplace-collapsible-content.component';
import { ExperienceBlockComponent } from './experience-block/experience-block.component';
import { ContactFormComponent } from './contacts-block/components/contact-form/contact-form.component';
import { ContactsBlockComponent } from './contacts-block/contacts-block.component';
import { AboutBlockComponent } from './about-block/about-block.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { CurvesAnimationComponent } from '../animations/curves-animation/curves-animation.component';
import { NavigationBlockComponent } from './navigation-block/navigation-block.component';
import { ProgressAnimationComponent } from '../animations/progress-animation/progress-animation.component';
import { TakeEveryPipe } from '../pipes/take-every.pipe';
import { AboutTextContainerComponent } from './about-block/components/about-text-container/about-text-container.component';
import { WorkplaceSortPipe } from '../pipes/workplace-sort.pipe';
import { MultilinePipe } from '../pipes/multiline.pipe';
import { RecaptchaFormsModule, RecaptchaSettings, RecaptchaV3Module, RECAPTCHA_BASE_URL, RECAPTCHA_LANGUAGE, RECAPTCHA_SETTINGS, RECAPTCHA_V3_SITE_KEY } from 'ng-recaptcha';
import { environment } from 'src/environments/environment';
import { MobileBlockComponent } from './mobile-block/mobile-block.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ProfilePictureComponent } from './components/profile-picture/profile-picture.component';
import { HLineComponent } from './components/h-line/h-line.component';
import { SkillGroupMobileContentComponent } from './skills-block/components/skill-group-mobile-content/skill-group-mobile-content.component';

@NgModule({
  declarations: [
    SkillsGroupComponent,
    SkillsGroupContentComponent,
    SkillsBlockComponent,
    NavigationButtonsComponent,
    SocialLinksBarComponent,
    HomeBlockComponent,
    WorkplaceCollapsibleComponent,
    WorkplaceCollapsibleContentComponent,
    ExperienceBlockComponent,
    ContactFormComponent,
    ContactsBlockComponent,
    AboutBlockComponent,
    CurvesAnimationComponent,
    NavigationBlockComponent,
    ProgressAnimationComponent,
    TakeEveryPipe,
    AboutTextContainerComponent,
    WorkplaceSortPipe,
    MultilinePipe,
    MobileBlockComponent,
    LoaderComponent,
    ProfilePictureComponent,
    HLineComponent,
    SkillGroupMobileContentComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RecaptchaV3Module
  ],
  exports: [
    SkillsGroupComponent,
    SkillsGroupContentComponent,
    SkillsBlockComponent,
    NavigationButtonsComponent,
    SocialLinksBarComponent,
    HomeBlockComponent,
    WorkplaceCollapsibleComponent,
    WorkplaceCollapsibleContentComponent,
    ExperienceBlockComponent,
    ContactFormComponent,
    ContactsBlockComponent,
    AboutBlockComponent,
    CurvesAnimationComponent,
    NavigationBlockComponent,
    ProgressAnimationComponent,
    WorkplaceSortPipe,
    RecaptchaV3Module,
    RecaptchaFormsModule,
    MobileBlockComponent,
  ],
  providers: [
    {
      provide: RECAPTCHA_V3_SITE_KEY,
      useValue: environment.recaptcha.siteKey
    },
    {
      provide: RECAPTCHA_BASE_URL,
      useValue: 'https://recaptcha.net/recaptcha/api.js'
    },
    {
      provide: RECAPTCHA_LANGUAGE,
      useValue: 'en-US'
    },
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: { siteKey: `${environment.recaptcha.siteKey}` } as RecaptchaSettings,
    },
  ],
  bootstrap: [
    ContactFormComponent
  ]
})
export class AppTabsModule { }
