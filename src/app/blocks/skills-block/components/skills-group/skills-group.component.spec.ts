import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Mock } from 'src/app/testing/mock-data.test';
import { MockModule } from 'src/app/testing/mock-module.test';
import { SkillsGroupComponent } from './skills-group.component';

describe('SkillsGroupComponent', () => {
  let component: SkillsGroupComponent;
  let fixture: ComponentFixture<SkillsGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SkillsGroupComponent
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
    fixture = TestBed.createComponent(SkillsGroupComponent);
    component = fixture.componentInstance;
    component.skillGroup = Mock.skillGroup;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
