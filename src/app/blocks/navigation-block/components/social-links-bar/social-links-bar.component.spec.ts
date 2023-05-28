import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SocialLinksBarComponent } from './social-links-bar.component';
import { MockModule } from 'src/app/testing/mock-module.test';
import { AnalyticsService } from 'src/app/services/analytics.service';

describe('SocialLinksBarComponent', () => {
  let component: SocialLinksBarComponent;
  let fixture: ComponentFixture<SocialLinksBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SocialLinksBarComponent
      ],
      providers: [
        { provide: AnalyticsService, useValue: MockModule.analytics }
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
    expect(component.data).toBeUndefined();
  });
});
