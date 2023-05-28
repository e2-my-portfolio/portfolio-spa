import { Component, OnInit } from '@angular/core';
import { Observable, takeUntil } from 'rxjs';
import { Collection } from 'src/app/constants/collections';
import { StorageKey } from 'src/app/constants/storage-keys';
import { PictureSize } from 'src/app/models/attributes/picture-size.model';
import { SocialLinks } from 'src/app/models/data/social-links.model';
import { Unsubscribable } from 'src/app/operators/unsubscribtion.operator';
import { AnalyticsService } from 'src/app/services/analytics.service';
import { FirestorageService } from 'src/app/services/firestorage.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { SessionStorageService } from 'src/app/services/session-storage.service';
import { StringUtils } from 'src/app/utils/string.utils';

@Component({
  selector: 'app-mobile-block',
  templateUrl: './mobile-block.component.html',
  styleUrls: [
    './mobile-block.component.scss',
    '../navigation-block/components/social-links-bar/social-links-bar.component.scss'
  ]
})
export class MobileBlockComponent extends Unsubscribable() implements OnInit {

  socialLinks$: Observable<SocialLinks>;
  profilePictureSize: PictureSize = { width: '10rem', height: '10rem' };

  picture: string;

  constructor(private firestore: FirestoreService,
              private firestorage: FirestorageService,
              private sessionStorage: SessionStorageService,
              private analytics: AnalyticsService) {
    super();
    this.picture = this.sessionStorage.getString(StorageKey.PICTURE);
  }

  ngOnInit(): void {
    this.analytics.logEvent('mobile_view');
    this.socialLinks$ = this.firestore.getCollectionItem<SocialLinks>(Collection.SOCIAL);
    if (StringUtils.isBlank(this.picture)) {
      this.firestorage.getProfilePictureUrl()
                      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                      .pipe(takeUntil(this.unsubscribe))
                      .subscribe((picture) => {
        this.picture = picture;
        this.sessionStorage.saveString(StorageKey.PICTURE, this.picture);
      });
    }
  }

}
