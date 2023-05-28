import { Component, Input } from '@angular/core';
import { SocialLinks } from 'src/app/models/data/social-links.model';
import { AnalyticsService } from 'src/app/services/analytics.service';

@Component({
  selector: 'app-social-links-bar',
  templateUrl: './social-links-bar.component.html',
  styleUrls: ['./social-links-bar.component.scss']
})
export class SocialLinksBarComponent {

  constructor(private analytics: AnalyticsService) { }

  @Input() data: SocialLinks;

  logClick(eventName: string): void {
    this.analytics.logEvent(eventName);
  }

}
