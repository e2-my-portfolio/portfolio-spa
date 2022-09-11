import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FirestoreService } from 'src/app/services/firestore.service';
import { MockModule } from 'src/app/testing/mock-module.test';
import { MainPageComponent } from './main-page.component';

describe('MainPageComponent', () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MainPageComponent
      ],
      imports: [
        RouterTestingModule,
        MockModule,
      ],
      providers: [
        { provide: FirestoreService, useValue: MockModule.firestoreService },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
