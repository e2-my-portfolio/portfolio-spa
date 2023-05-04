import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Collection } from 'src/app/constants/collections';
import { StorageKey } from 'src/app/constants/storage-keys';
import { Experience } from 'src/app/models/data/experience.model';
import { Unsubscribable } from 'src/app/operators/unsubscribtion.operator';
import { FirestoreService } from 'src/app/services/firestore.service';
import { SessionStorageService } from 'src/app/services/session-storage.service';

@Component({
  selector: 'app-experience-block',
  templateUrl: './experience-block.component.html',
  styleUrls: ['./experience-block.component.scss']
})
export class ExperienceBlockComponent extends Unsubscribable() implements OnInit {

  experiences: Experience[];

  constructor(private sessionStorage: SessionStorageService,
              private firestore: FirestoreService) {
    super();
    this.experiences = this.sortExperiences(this.sessionStorage.get(StorageKey.EXPERIENCES) as Experience[] | []);
  }

  ngOnInit(): void {
    if (!this.experiences || this.experiences.length === 0) {
      this.firestore.getCollectionItems<Experience>(Collection.EXPERIENCES)
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        .pipe(takeUntil(this.unsubscribe))
        .subscribe((experiences: Experience[]) => {
          this.experiences = this.sortExperiences(experiences);
          this.sessionStorage.save(StorageKey.EXPERIENCES, this.experiences);
        });
    }
  }

  private sortExperiences(experiences: Experience[]): Experience[] {
    if (!experiences || experiences.length < 1) { return []; }
    const sorted = experiences.sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());
    sorted.forEach(experience => {
      if (!experience.endDate || experience.endDate.trim() === "") {
        experience.endDate = "Now"
      }
    }
    );
    return sorted;
  }

}
