import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'src/app/services/device-detector.service';
import { Story } from 'src/app/models/data/story.model';
import { FirestoreService } from 'src/app/services/firestore.service';
import { SessionStorageService } from 'src/app/services/session-storage.service';
import { Unsubscribable } from 'src/app/operators/unsubscribtion.operator';
import { StorageKey } from 'src/app/constants/storage-keys';
import { Collection } from 'src/app/constants/collections';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-about-block',
  templateUrl: './about-block.component.html',
  styleUrls: ['./about-block.component.scss']
})
export class AboutBlockComponent extends Unsubscribable() implements OnInit {

  dataList: Story[] = [];
  isMobile = false;
  loading = true;

  constructor(private deviceDetector: DeviceDetectorService,
              private firestore: FirestoreService,
              private sessionStorage: SessionStorageService) {
    super();
    this.dataList = this.sessionStorage.get(StorageKey.STORIES) as Story[] | [];
  }

  ngOnInit(): void {
    this.isMobile = this.deviceDetector.isMobile();
    if (!this.dataList || this.dataList.length === 0) {
      this.firestore.getCollectionItems<Story>(Collection.STORIES)
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(data => {
        this.dataList = data;
        this.sessionStorage.save(StorageKey.STORIES, this.dataList);
        this.loading = false;
      });
    } else {
      this.loading = false;
    }
  }

}
