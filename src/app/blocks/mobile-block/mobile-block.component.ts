import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Collection } from 'src/app/constants/collections';
import { PictureSize } from 'src/app/models/attributes/picture-size.model';
import { SocialLinks } from 'src/app/models/data/social-links.model';
import { Unsubscribable } from 'src/app/operators/unsubscribtion.operator';
import { FirestoreService } from 'src/app/services/firestore.service';

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

  constructor(private firestore: FirestoreService) {
    super();
  }

  ngOnInit(): void {
    this.socialLinks$ = this.firestore.getCollectionItem<SocialLinks>(Collection.SOCIAL);
  }

}
