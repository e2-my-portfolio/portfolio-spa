import { Component, Input, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'src/app/services/device-detector.service';
import { SkillGroup } from '../../models/skills.data';

@Component({
  selector: 'app-skills-group',
  templateUrl: './skills-group.component.html',
  styleUrls: ['./skills-group.component.scss']
})
export class SkillsGroupComponent implements OnInit {

  @Input() skillGroup: SkillGroup;
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
