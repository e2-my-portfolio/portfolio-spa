import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Collection } from 'src/app/constants/collections';
import { Unsubscribable } from 'src/app/operators/unsubscribtion.operator';
import { FirestoreService } from 'src/app/services/firestore.service';
import { SkillGroup } from './models/skills.data';

@Component({
  selector: 'app-skills-block',
  templateUrl: './skills-block.component.html',
  styleUrls: ['./skills-block.component.scss']
})
export class SkillsBlockComponent extends Unsubscribable() implements OnInit {

  skills: SkillGroup[];

  constructor(private firestore: FirestoreService) {
    super();
  }

  ngOnInit(): void {
    this.firestore.getCollectionItems<SkillGroup>(Collection.SKILLS_TAB_DATA)
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                  .pipe(takeUntil(this.unsubscribe))
                  .subscribe((groups: SkillGroup[]) => {
                    this.skills = groups.sort((a, b) => a.position < b.position ? -1 : 1);
                  });
  }

}
