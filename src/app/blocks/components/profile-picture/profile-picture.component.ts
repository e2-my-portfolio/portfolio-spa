import { Component, Input } from '@angular/core';
import { PictureSize } from 'src/app/models/attributes/picture-size.model';

@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.scss']
})
export class ProfilePictureComponent {

  @Input() pictureSize?: PictureSize = { width: '6rem', height: '6rem' };

}
