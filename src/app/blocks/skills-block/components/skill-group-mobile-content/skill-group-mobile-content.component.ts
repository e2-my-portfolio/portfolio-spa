import { Component, Input } from '@angular/core';
import { Skill } from '../../models/skills.data';

@Component({
  selector: 'app-skill-group-mobile-content',
  templateUrl: './skill-group-mobile-content.component.html',
  styleUrls: ['./skill-group-mobile-content.component.scss']
})
export class SkillGroupMobileContentComponent {

  @Input() skills: Skill[];

}
