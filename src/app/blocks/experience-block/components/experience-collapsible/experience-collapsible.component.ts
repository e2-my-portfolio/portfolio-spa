import { Component, Input } from '@angular/core';
import { FadeInAnimation } from 'src/app/animations/custom-animations';
import { Experience } from 'src/app/models/data/experience.model';
import { DeviceDetectorService } from 'src/app/services/device-detector.service';

@Component({
  selector: 'app-experience-collapsible',
  templateUrl: './experience-collapsible.component.html',
  styleUrls: ['./experience-collapsible.component.scss'],
  animations: [FadeInAnimation]
})
export class ExperienceCollapsibleComponent {

  @Input() visible ?= false;
  @Input() experience: Experience;
  @Input() animationDelay = 0;

  constructor(public deviceDetector: DeviceDetectorService) { }

  toggle(): void {
    this.visible = !this.visible;
  }
}
