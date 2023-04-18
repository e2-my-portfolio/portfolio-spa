import { Component, Input } from '@angular/core';
import { Skill } from 'src/app/models/data/skills.model';

@Component({
  selector: 'app-skill-group-mobile-content',
  templateUrl: './skill-group-mobile-content.component.html',
  styleUrls: ['./skill-group-mobile-content.component.scss']
})
export class SkillGroupMobileContentComponent {

  @Input() skills: Skill[];

}
