import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { Collection } from 'src/app/constants/collections';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Mock } from 'src/app/testing/mock-data.test';
import { MockModule } from 'src/app/testing/mock-module.test';
import { ProfilePictureComponent } from '../components/profile-picture/profile-picture.component';
import { NavigationButtonsComponent } from './components/navigation-buttons/navigation-buttons.component';
import { SocialLinksBarComponent } from './components/social-links-bar/social-links-bar.component';
import { NavigationBlockComponent } from './navigation-block.component';
import { FirestorageService } from 'src/app/services/firestorage.service';
import { SessionStorageService } from 'src/app/services/session-storage.service';

describe('NavigationBlockComponent', () => {
  let component: NavigationBlockComponent;
  let fixture: ComponentFixture<NavigationBlockComponent>;
  let firestorageService: FirestorageService;
  let firestorageSpy: jest.SpyInstance;
  let firestoreService: FirestoreService;
  let firestoreSpy: jest.SpyInstance;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        NavigationButtonsComponent,
        SocialLinksBarComponent,
        NavigationBlockComponent,
        ProfilePictureComponent
      ],
      imports: [
        RouterTestingModule,
      ],
      providers: [
        SessionStorageService,
        { provide: FirestoreService, useValue: MockModule.firestoreService },
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        { provide: FirestorageService, useValue: MockModule.firestorageService },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationBlockComponent);
    component = fixture.componentInstance;
    firestoreService = TestBed.inject(FirestoreService);
    firestoreSpy = jest.spyOn(firestoreService, 'getCollectionItem');
    firestorageService = TestBed.inject(FirestorageService);
    firestorageSpy = jest.spyOn(firestorageService, 'getProfilePictureUrl')
                      .mockReturnValue(of('https://freetestdata.com/wp-content/uploads/2021/09/500kb.png'));
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should init profile data', () => {
    firestoreSpy.mockReset().mockReturnValue(of(Mock.basics));
    expect(component.loading).toBeTruthy();
    component.ngOnInit();
    expect(firestoreSpy).toHaveBeenCalledWith(Collection.BASICS);
    expect(firestorageSpy).toHaveBeenCalledTimes(1);
    expect(component.data).toEqual(Mock.basics);
    expect(component.picture).toEqual('https://freetestdata.com/wp-content/uploads/2021/09/500kb.png');
    expect(component.loading).toBeFalsy();
  });

  test('should init social links observable', () => {
    firestoreSpy.mockReset().mockReturnValue(of(Mock.socialLinks));
    expect(component.loading).toBeTruthy();
    component.ngOnInit();
    expect(firestoreSpy).toHaveBeenCalledWith(Collection.SOCIAL);
    component.socialLinks$.subscribe(links => {
      expect(links).toEqual(Mock.socialLinks);
    });
    expect(component.loading).toBeFalsy();
  });
});
