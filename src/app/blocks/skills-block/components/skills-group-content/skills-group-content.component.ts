import { Component, Input } from '@angular/core';
import { Skill } from 'src/app/models/data/skills.model';

@Component({
  selector: 'app-skills-group-content',
  templateUrl: './skills-group-content.component.html',
  styleUrls: ['./skills-group-content.component.scss']
})
export class SkillsGroupContentComponent {

  @Input() skills: Skill[];

}
