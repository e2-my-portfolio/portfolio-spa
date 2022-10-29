import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { DeviceDetectorService } from 'src/app/services/device-detector.service';
import { WorkingPosition } from 'src/app/models/data/workplace.model';

@Component({
  selector: 'app-workplace-collapsible-content',
  templateUrl: './workplace-collapsible-content.component.html',
  styleUrls: [
    './workplace-collapsible-content.component.scss',
    './../../../../animations/neumorphism.scss'
  ]
})
export class WorkplaceCollapsibleContentComponent {

  @Input() positions: WorkingPosition[];

  constructor(public deviceDetector: DeviceDetectorService) { }

}
