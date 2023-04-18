import { Component, Input, OnInit } from '@angular/core';
import { SkillsGroup } from 'src/app/models/data/skills.model';
import { DeviceDetectorService } from 'src/app/services/device-detector.service';

@Component({
  selector: 'app-skills-group',
  templateUrl: './skills-group.component.html',
  styleUrls: ['./skills-group.component.scss']
})
export class SkillsGroupComponent implements OnInit {

  @Input() skillGroup: SkillsGroup;
  visible = false;
  isMobile = false;

  constructor(private deviceDetector: DeviceDetectorService) { }

  ngOnInit(): void {
    this.isMobile = this.deviceDetector.isMobile();
  }

  toggle(): void {
    this.visible = !this.visible;
  }

}
