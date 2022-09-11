import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FirestoreService } from 'src/app/services/firestore.service';
import { MockModule } from 'src/app/testing/mock-module.test';
import { SocialLinksBarComponent } from './social-links-bar.component';

describe('SocialLinksBarComponent', () => {
  let component: SocialLinksBarComponent;
  let fixture: ComponentFixture<SocialLinksBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialLinksBarComponent ],
      imports: [
      ],
      providers: [
        { provide: FirestoreService, useValue: MockModule.firestoreService },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialLinksBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
