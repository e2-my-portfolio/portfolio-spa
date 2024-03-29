import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Mock } from 'src/app/testing/mock-data.test';
import { MockModule } from 'src/app/testing/mock-module.test';
import { SkillsBlockComponent } from './skills-block.component';
import { SessionStorageService } from 'src/app/services/session-storage.service';
import { StorageKey } from 'src/app/constants/storage-keys';

describe('SkillsBlockComponent', () => {
  let component: SkillsBlockComponent;
  let fixture: ComponentFixture<SkillsBlockComponent>;
  let firestoreService: FirestoreService;
  let firestoreSpy: jest.SpyInstance;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SkillsBlockComponent
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
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsBlockComponent);
    component = fixture.componentInstance;
    firestoreService = TestBed.inject(FirestoreService);
    firestoreSpy = jest.spyOn(firestoreService, 'getCollectionItems');

    const sessionStorage = new SessionStorageService();
    sessionStorage.remove(StorageKey.SKILLS);
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should get skills on init', () => {
    firestoreSpy.mockReset().mockReturnValue(of([Mock.skillGroup]));
    component.ngOnInit();
    expect(component.skills).toEqual([Mock.skillGroup]);
  });
});
