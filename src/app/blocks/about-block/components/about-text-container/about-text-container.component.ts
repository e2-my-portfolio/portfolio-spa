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

  data1: Story = {
    title: 'Leisure',
    content: `<b>Padel tennis</b><div>I like to play padel tennis with my wife and friends. Playing once or twice a week.</div>
    <b>3D print</b><div>During one of my b-days I got 3D printer as a present. Now I spend a lot of time to print and paint 3D action figures. Most of them are Marvel or video games characters. I find them online, somewhere in one of the 3D models databases. My future goal is to learn how to create 3D models by my self. This hobby helps me improve my creativity.</div>
    <b>Trips</b><div>I like to travel a lot. I take about 2-3 trips during one year. I have already visited most of the countries in Europe. All the best trips that I had is somewhere where it's always hot and sunny. I like hiking in the mountains. Mostly I like mountains which is in Portugal, Spain or Greece islands. The countries that I want to visit in near future is Cuba, India and Japan. All these countries have different cultures and I am interesting to know more about them.</div>
    <b>Lego constructors</b><div>During my free time I like to create something interesting from LEGO bricks. Most of my builds are spaceships or vehicles. During my whole life I have collected lot of LEGO constructors. This hobby helps me improve my logical and architectural thinking.</div>`
  }

  toggleExpandable() {
    this.expanded = !this.expanded;
    this.toggleText = this.expanded ? this.LESS : this.MORE;
  }

}
