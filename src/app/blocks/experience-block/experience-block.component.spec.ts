import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Mock } from 'src/app/testing/mock-data.test';
import { MockModule } from 'src/app/testing/mock-module.test';
import { ExperienceBlockComponent } from './experience-block.component';
import { SessionStorageService } from 'src/app/services/session-storage.service';
import { StorageKey } from 'src/app/constants/storage-keys';

describe('ExperienceBlockComponent', () => {
  let component: ExperienceBlockComponent;
  let fixture: ComponentFixture<ExperienceBlockComponent>;
  let firestoreService: FirestoreService;
  let firestoreSpy: jest.SpyInstance;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ExperienceBlockComponent
      ],
      imports: [
        MockModule,
      ],
      providers: [
        SessionStorageService,
        { provide: FirestoreService, useValue: MockModule.firestoreService },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceBlockComponent);
    component = fixture.componentInstance;
    firestoreService = TestBed.inject(FirestoreService);
    firestoreSpy = jest.spyOn(firestoreService, 'getCollectionItems');

    const sessionStorage = new SessionStorageService();
    sessionStorage.remove(StorageKey.EXPERIENCES);
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should get experiences on init', () => {
    firestoreSpy.mockReset().mockReturnValue(of([Mock.experience]));
    component.ngOnInit();
    expect(component.experiences).toEqual([Mock.experience]);
  });
});
