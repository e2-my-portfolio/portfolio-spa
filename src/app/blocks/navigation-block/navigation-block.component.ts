import { Component, OnInit } from '@angular/core';
import { Observable, zip } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { Collection } from 'src/app/constants/collections';
import { StorageKey } from 'src/app/constants/storage-keys';
import { Basics } from 'src/app/models/data/basics.model';
import { SocialLinks } from 'src/app/models/data/social-links.model';
import { Unsubscribable } from 'src/app/operators/unsubscribtion.operator';
import { FirestorageService } from 'src/app/services/firestorage.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { SessionStorageService } from 'src/app/services/session-storage.service';
import { StringUtils } from 'src/app/utils/string.utils';

@Component({
  selector: 'app-navigation-block',
  templateUrl: './navigation-block.component.html',
  styleUrls: ['./navigation-block.component.scss']
})
export class NavigationBlockComponent extends Unsubscribable() implements OnInit {

  socialLinks$: Observable<SocialLinks>;
  loading = true;
  data: Basics;
  picture: string;

  constructor(private firestore: FirestoreService,
              private firestorage: FirestorageService,
              private sessionStorage: SessionStorageService) {
    super();
    this.data = this.sessionStorage.get(StorageKey.BASICS) as Basics;
    this.picture = this.sessionStorage.getString(StorageKey.PICTURE);
  }

  ngOnInit(): void {
    this.socialLinks$ = this.firestore.getCollectionItem<SocialLinks>(Collection.SOCIAL);

    if (!this.data || StringUtils.isBlank(this.picture) || Object.keys(this.data).length === 0) {
      const basics$ = this.firestore.getCollectionItem<Basics>(Collection.BASICS);
      const pictureLink$ = this.firestorage.getProfilePictureUrl();
      zip(basics$, pictureLink$)
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        .pipe(takeUntil(this.unsubscribe))
        .pipe(map(([basics, picture]) => {
          this.sessionStorage.save(StorageKey.BASICS, this.data);
          this.sessionStorage.saveString(StorageKey.PICTURE, this.picture);
          return [basics, picture];
        }))
        .subscribe(([basics, picture]) => {
          this.data = basics as Basics;
          this.picture = picture as string;
          this.loading = false;
      });
    } else {
      this.loading = false;
    }
  }

  resolveFullName(data: Basics): string {
    return StringUtils.isNotBlank(data.middleName) ?
      StringUtils.capitalize(`${data.name} ${data.middleName} ${data.surname}`).trim() :
      StringUtils.capitalize(`${data.name} ${data.surname}`).trim();
  }

}
