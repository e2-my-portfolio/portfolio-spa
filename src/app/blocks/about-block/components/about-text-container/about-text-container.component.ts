import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FadeInAnimation } from 'src/app/animations/custom-animations';
import { Story } from 'src/app/models/data/story.model';

@Component({
  selector: 'app-about-text-container',
  templateUrl: './about-text-container.component.html',
  styleUrls: ['./about-text-container.component.scss'],
  animations: [FadeInAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutTextContainerComponent {

  MORE = 'more...';
  LESS = 'less...';

  @Input() animationDelay = 0;
  @Input() data?: Story;
  expanded = false;
  toggleText = this.MORE;

  toggleExpandable() {
    this.expanded = !this.expanded;
    this.toggleText = this.expanded ? this.LESS : this.MORE;
  }

}
