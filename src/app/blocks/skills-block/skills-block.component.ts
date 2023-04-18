import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Collection } from 'src/app/constants/collections';
import { StorageKey } from 'src/app/constants/storage-keys';
import { SkillsGroup } from 'src/app/models/data/skills.model';
import { Unsubscribable } from 'src/app/operators/unsubscribtion.operator';
import { FirestoreService } from 'src/app/services/firestore.service';
import { SessionStorageService } from 'src/app/services/session-storage.service';

@Component({
  selector: 'app-skills-block',
  templateUrl: './skills-block.component.html',
  styleUrls: ['./skills-block.component.scss']
})
export class SkillsBlockComponent extends Unsubscribable() implements OnInit {

  skills: SkillsGroup[];

  constructor(private firestore: FirestoreService,
              private sessionStorage: SessionStorageService) {
    super();
    this.skills = this.sessionStorage.get(StorageKey.SKILLS) as SkillsGroup[] | [];
  }

  ngOnInit(): void {
    if (!this.skills || this.skills.length === 0) {
      this.firestore.getCollectionItems<SkillsGroup>(Collection.SKILLS)
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        .pipe(takeUntil(this.unsubscribe))
        .subscribe((groups: SkillsGroup[]) => {
          this.skills = groups.sort((a, b) => a.order < b.order ? -1 : 1);
          this.sessionStorage.save(StorageKey.SKILLS, this.skills);
        });
    }
  }

}
