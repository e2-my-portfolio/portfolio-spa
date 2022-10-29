import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FirestorageService } from 'src/app/services/firestorage.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { MockModule } from 'src/app/testing/mock-module.test';

import { MobileBlockComponent } from './mobile-block.component';

describe('MobileBlockComponent', () => {
  let component: MobileBlockComponent;
  let fixture: ComponentFixture<MobileBlockComponent>;
  let firestoreService: FirestoreService;
  let firestoreSpy: jest.SpyInstance;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MobileBlockComponent
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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
