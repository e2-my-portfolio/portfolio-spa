import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutBlockComponent } from './blocks/about-block/about-block.component';
import { ContactsBlockComponent } from './blocks/contacts-block/contacts-block.component';
import { ExperienceBlockComponent } from './blocks/experience-block/experience-block.component';
import { HomeBlockComponent } from './blocks/home-block/home-block.component';
import { MobileBlockComponent } from './blocks/mobile-block/mobile-block.component';
import { SkillsBlockComponent } from './blocks/skills-block/skills-block.component';
import { RouteGuard } from './guards/route.guard';
import { MainPageComponent } from './main/main-page/main-page.component';

const routes: Routes = [{
  path: '',
  component: MainPageComponent,
  children: [
    { path: 'home', component: HomeBlockComponent, canActivate: [RouteGuard] },
    { path: 'about', component: AboutBlockComponent, canActivate: [RouteGuard] },
    { path: 'skills', component: SkillsBlockComponent, canActivate: [RouteGuard] },
    { path: 'experience', component: ExperienceBlockComponent, canActivate: [RouteGuard] },
    { path: 'contacts', component: ContactsBlockComponent, canActivate: [RouteGuard] },
    { path: 'mobile', component: MobileBlockComponent, canActivate: [RouteGuard] },
    { path: '**', redirectTo: 'home' }
  ]}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
