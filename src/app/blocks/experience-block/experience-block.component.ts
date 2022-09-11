import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Collection } from 'src/app/constants/collections';
import { Workplace } from 'src/app/models/data/workplace.model';
import { Unsubscribable } from 'src/app/operators/unsubscribtion.operator';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-experience-block',
  templateUrl: './experience-block.component.html',
  styleUrls: ['./experience-block.component.scss']
})
export class ExperienceBlockComponent extends Unsubscribable() implements OnInit {

  workplaces: Workplace[];

  constructor(private firestore: FirestoreService) {
    super();
  }

  ngOnInit(): void {
    this.firestore.getCollectionItems<Workplace>(Collection.EXPERIENCE_TAB_DATA)
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                  .pipe(takeUntil(this.unsubscribe))
                  .subscribe((workplaces: Workplace[]) => {
                    this.workplaces = workplaces;
                  });
  }

}
