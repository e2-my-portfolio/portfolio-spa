import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SocialLinksBarComponent } from './social-links-bar.component';

describe('SocialLinksBarComponent', () => {
  let component: SocialLinksBarComponent;
  let fixture: ComponentFixture<SocialLinksBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialLinksBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialLinksBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
