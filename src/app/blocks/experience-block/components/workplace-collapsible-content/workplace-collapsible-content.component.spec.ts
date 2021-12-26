import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FirestoreService } from 'src/app/services/firestore.service';
import { MockModule } from 'src/app/testing/mock-module.test';
import { WorkplaceCollapsibleContentComponent } from './workplace-collapsible-content.component';

describe('WorkplaceCollapsibleContentComponent', () => {
  let component: WorkplaceCollapsibleContentComponent;
  let fixture: ComponentFixture<WorkplaceCollapsibleContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        WorkplaceCollapsibleContentComponent
      ],
      providers: [
        { provide: FirestoreService, useValue: MockModule.firestoreService },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkplaceCollapsibleContentComponent);
    component = fixture.componentInstance;
    component.positions = [];
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
