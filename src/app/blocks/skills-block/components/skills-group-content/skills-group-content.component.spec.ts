import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FirestoreService } from 'src/app/services/firestore.service';
import { MockModule } from 'src/app/testing/mock-module.test';
import { SkillsGroupContentComponent } from './skills-group-content.component';

describe('SkillsGroupContentComponent', () => {
  let component: SkillsGroupContentComponent;
  let fixture: ComponentFixture<SkillsGroupContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SkillsGroupContentComponent
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
    fixture = TestBed.createComponent(SkillsGroupContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
