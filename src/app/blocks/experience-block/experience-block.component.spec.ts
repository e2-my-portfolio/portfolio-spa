import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { WorkplaceSortPipe } from 'src/app/pipes/workplace-sort.pipe';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Mock } from 'src/app/testing/mock-data.test';
import { MockModule } from 'src/app/testing/mock-module.test';
import { ExperienceBlockComponent } from './experience-block.component';

describe('ExperienceBlockComponent', () => {
  let component: ExperienceBlockComponent;
  let fixture: ComponentFixture<ExperienceBlockComponent>;
  let firestoreService: FirestoreService;
  let firestoreSpy: jest.SpyInstance;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ExperienceBlockComponent,
        WorkplaceSortPipe
      ],
      imports: [
        MockModule,
      ],
      providers: [
        { provide: FirestoreService, useValue: MockModule.firestoreService },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceBlockComponent);
    component = fixture.componentInstance;
    firestoreService = TestBed.inject(FirestoreService);
    firestoreSpy = jest.spyOn(firestoreService, 'getCollectionItems');
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should get workplaces on init', () => {
    firestoreSpy.mockReset().mockReturnValue(of([Mock.workplaces]));
    component.ngOnInit();
    expect(component.workplaces).toEqual([Mock.workplaces]);
  });
});
