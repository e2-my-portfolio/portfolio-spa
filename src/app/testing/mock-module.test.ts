import { Component, Injectable, Input, NgModule } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { Collection } from '../constants/collections';

@Component({selector: 'app-about-text-container', template: ''})
class AboutTextContainerComponent {
    @Input() data: any;
    @Input() animationDelay: any;
}

@Component({selector: 'app-contact-form', template: ''})
class ContactFormComponent {}

@Component({selector: 'app-skills-group-content', template: ''})
class SkillsGroupContentComponent {
    @Input() skills: any;
}

@Component({selector: 'app-progress-animation', template: ''})
class ProgressAnimationComponent {
    @Input() progress: any;
}

@Component({selector: 'app-skills-group', template: ''})
class SkillsGroupComponent {
    @Input() skillGroup: any;
}

@Component({selector: 'app-curves-animation', template: ''})
class CurvesAnimationComponent { }

@Component({selector: 'app-navigation-block', template: ''})
class NavigationBlockComponent { }

@Component({selector: 'app-home-block', template: ''})
class HomeBlockComponent { }

@Component({selector: 'app-experience-block', template: ''})
class ExperienceBlockComponent { }

@Component({selector: 'app-about-block', template: ''})
class AboutBlockComponent { }

@Component({selector: 'app-contatcs-block', template: ''})
class ContactsBlockComponent { }

@Component({selector: 'app-navigation-buttons', template: ''})
class NavigationButtonsComponent { }

@Injectable({providedIn: 'root'})
class FirestoreService {

    constructor(firestore: Firestore) {}

    getCollectionItem<T>(collection: string | Collection): Observable<any> {
        return of('');
    }

    getCollectionItems<T>(collection: string | Collection): Observable<any[]> {
        return of([]);
    }
}

@Injectable({providedIn: 'root'})
class FirestorageService {
    constructor(storage: Storage) {}

    getCvFileUrl(): Observable<string> {
        return of('');
    }

    getProfilePictureUrl(): Observable<unknown> {
        return of();
    }
}

@Injectable({providedIn: 'root'})
class DeviceDetectorService {
    isMobile(): boolean {
        return false;
    }
}

@Injectable({providedIn: 'root'})
class ReCaptchaV3Service {
    execute(action: string): any {
        return of('token');
    }
}


@NgModule({
    declarations: [
        AboutTextContainerComponent,
        ContactFormComponent,
        SkillsGroupContentComponent,
        ProgressAnimationComponent,
        SkillsGroupComponent,
        CurvesAnimationComponent,
        NavigationBlockComponent,
        HomeBlockComponent,
        ExperienceBlockComponent,
        AboutBlockComponent,
        ContactsBlockComponent,
        NavigationButtonsComponent
    ],
    imports: [
    ],
    providers: [
        FirestoreService,
        FirestorageService
    ],
    exports: [
        AboutTextContainerComponent,
        ContactFormComponent,
        SkillsGroupContentComponent,
        ProgressAnimationComponent,
        SkillsGroupComponent,
        CurvesAnimationComponent,
        NavigationBlockComponent,
        HomeBlockComponent,
        ExperienceBlockComponent,
        AboutBlockComponent,
        ContactsBlockComponent,
        NavigationButtonsComponent
    ],
    bootstrap: []
  })
export class MockModule {
    static firestoreService: FirestoreService = new FirestoreService({} as Firestore);
    static firestorageService: FirestorageService = new FirestorageService({} as Storage);
    static deviceDetector: DeviceDetectorService = new DeviceDetectorService();
    static recaptcha: ReCaptchaV3Service = new ReCaptchaV3Service();

    static routes = [
        { path: 'home', component: HomeBlockComponent },
        { path: 'about', component: AboutBlockComponent },
        { path: 'experience', component: ExperienceBlockComponent },
        { path: 'contacts', component: ContactsBlockComponent }
    ];
}
