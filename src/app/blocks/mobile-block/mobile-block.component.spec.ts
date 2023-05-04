import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Collection } from 'src/app/constants/collections';
import { FirestorageService } from 'src/app/services/firestorage.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Mock } from 'src/app/testing/mock-data.test';
import { MockModule } from 'src/app/testing/mock-module.test';
import { HLineComponent } from '../components/h-line/h-line.component';
import { ProfilePictureComponent } from '../components/profile-picture/profile-picture.component';
import { ContactsBlockComponent } from '../contacts-block/contacts-block.component';
import { SocialLinksBarComponent } from '../navigation-block/components/social-links-bar/social-links-bar.component';
import { SkillsBlockComponent } from '../skills-block/skills-block.component';

import { MobileBlockComponent } from './mobile-block.component';
import { MobileBackgroundComponent } from './components/mobile-background/mobile-background.component';

describe('MobileBlockComponent', () => {
  let component: MobileBlockComponent;
  let fixture: ComponentFixture<MobileBlockComponent>;
  let firestoreService: FirestoreService;
  let firestoreSpy: jest.SpyInstance;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MobileBlockComponent,
        HLineComponent,
        ContactsBlockComponent,
        SkillsBlockComponent,
        ProfilePictureComponent,
        SocialLinksBarComponent,
        MobileBackgroundComponent
      ],
      imports: [
        MockModule
      ],
      providers: [
        { provide: FirestoreService, useValue: MockModule.firestoreService },
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        { provide: FirestorageService, useValue: MockModule.firestorageService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileBlockComponent);
    component = fixture.componentInstance;
    firestoreService = TestBed.inject(FirestoreService);
    firestoreSpy = jest.spyOn(firestoreService, 'getCollectionItem')
                    .mockReturnValue(of(Mock.socialLinks));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.profilePictureSize).toStrictEqual({
      width: '10rem',
      height: '10rem'
    });
  });

  it('should get social links observable on init', () => {
    component.ngOnInit();
    expect(firestoreSpy).toBeCalledWith(Collection.SOCIAL);
  });
});
