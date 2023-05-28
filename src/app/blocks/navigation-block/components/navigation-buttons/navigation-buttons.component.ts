import { AfterViewChecked, ChangeDetectionStrategy, Component, ElementRef,
          OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AnalyticsService } from 'src/app/services/analytics.service';

@Component({
  selector: 'app-navigation-buttons',
  templateUrl: './navigation-buttons.component.html',
  styleUrls: ['./navigation-buttons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationButtonsComponent implements OnInit, AfterViewChecked {

  @ViewChild('homeBtn')
  homeButton: ElementRef;
  @ViewChild('aboutBtn')
  aboutButton: ElementRef;
  @ViewChild('skillsBtn')
  skillsButton: ElementRef;
  @ViewChild('experienceBtn')
  experienceButton: ElementRef;
  @ViewChild('contatcsBtn')
  contactsButton: ElementRef;

  private HIGHLIGHT_CLASS = 'active-nav-link';

  constructor(private router: Router,
              private renderer: Renderer2,
              private analytics: AnalyticsService) { }

  ngOnInit(): void {
    const path = this.router.routerState.snapshot.url;
    void this.router.navigate([`${path}`])
  }

  ngAfterViewChecked(): void {
    let button: ElementRef;
    const path = this.router.routerState.snapshot.url;
    switch (path) {
      case '/about': button = this.aboutButton; break;
      case '/skills': button = this.skillsButton; break;
      case '/experience': button = this.experienceButton; break;
      case '/contacts': button = this.contactsButton; break;
      default: button = this.homeButton; break;
    }
    this.highlightButton(button);
  }

  toHomePage(): void {
    this.analytics.logEvent('open_home_tab');
    void this.router.navigate(['/home']);
    this.highlightButton(this.homeButton);
  }

  toAboutPage(): void {
    this.analytics.logEvent('open_about_tab');
    void this.router.navigate(['/about']);
    this.highlightButton(this.aboutButton);
  }

  toSkillsPage(): void {
    this.analytics.logEvent('open_skills_tab');
    void this.router.navigate(['/skills']);
    this.highlightButton(this.skillsButton);
  }

  toExperiencePage(): void {
    this.analytics.logEvent('open_experience_tab');
    void this.router.navigate(['/experience']);
    this.highlightButton(this.experienceButton);
  }

  toContactsPage(): void {
    this.analytics.logEvent('open_contacts_tab');
    void this.router.navigate(['/contacts']);
    this.highlightButton(this.contactsButton);
  }

  private highlightButton(button: ElementRef): void {
    this.resetAllButtons();
    this.renderer.addClass(button.nativeElement, this.HIGHLIGHT_CLASS);
  }

  private resetAllButtons(): void {
    this.renderer.removeClass(this.homeButton.nativeElement, this.HIGHLIGHT_CLASS);
    this.renderer.removeClass(this.aboutButton.nativeElement, this.HIGHLIGHT_CLASS);
    this.renderer.removeClass(this.skillsButton.nativeElement, this.HIGHLIGHT_CLASS);
    this.renderer.removeClass(this.experienceButton.nativeElement, this.HIGHLIGHT_CLASS);
    this.renderer.removeClass(this.contactsButton.nativeElement, this.HIGHLIGHT_CLASS);
  }

}
