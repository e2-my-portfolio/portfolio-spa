import { Component, Input } from '@angular/core';
import { Experience } from 'src/app/models/data/experience.model';
import { DeviceDetectorService } from 'src/app/services/device-detector.service';

@Component({
  selector: 'app-experience-collapsible-content',
  templateUrl: './experience-collapsible-content.component.html',
  styleUrls: [
    './experience-collapsible-content.component.scss',
    './../../../../animations/neumorphism.scss'
  ]
})
export class ExperienceCollapsibleContentComponent {

  @Input() experience: Experience;

  constructor(public deviceDetector: DeviceDetectorService) { }

}
