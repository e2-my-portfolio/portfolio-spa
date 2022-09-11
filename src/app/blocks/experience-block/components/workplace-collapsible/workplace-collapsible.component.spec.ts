import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Mock } from 'src/app/testing/mock-data.test';
import { MockModule } from 'src/app/testing/mock-module.test';
import { WorkplaceCollapsibleComponent } from './workplace-collapsible.component';

describe('WorkplaceCollapsibleComponent', () => {
  let component: WorkplaceCollapsibleComponent;
  let fixture: ComponentFixture<WorkplaceCollapsibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        WorkplaceCollapsibleComponent
      ],
      imports: [
        BrowserAnimationsModule,
        MockModule,
      ],
      providers: [
        { provide: FirestoreService, useValue: MockModule.firestoreService },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkplaceCollapsibleComponent);
    component = fixture.componentInstance;
    component.workplace = Mock.workplaceFacebook;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should toggle visibility', () => {
    expect(component.visible).toBeFalsy();
    component.toggle();
    expect(component.visible).toBeTruthy();
    component.toggle();
    expect(component.visible).toBeFalsy();
  });
});
