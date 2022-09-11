import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Collection } from 'src/app/constants/collections';
import { Profile } from 'src/app/models/data/profile.model';
import { SocialLinks } from 'src/app/models/data/social-links.model';
import { Unsubscribable } from 'src/app/operators/unsubscribtion.operator';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-navigation-block',
  templateUrl: './navigation-block.component.html',
  styleUrls: ['./navigation-block.component.scss']
})
export class NavigationBlockComponent extends Unsubscribable() implements OnInit {

  profile: Profile;
  socialLinks$: Observable<SocialLinks>;
  loading = true;

  constructor(private firestore: FirestoreService) {
    super();
  }

  ngOnInit(): void {
    this.firestore.getCollectionItem<Profile>(Collection.PROFILE)
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                  .pipe(takeUntil(this.unsubscribe))
                  .subscribe(profile => {
      this.profile = profile;
      this.loading = false;
    });
    this.socialLinks$ = this.firestore.getCollectionItem<SocialLinks>(Collection.SOCIAL);
  }

}
