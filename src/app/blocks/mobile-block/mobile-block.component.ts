import { Component } from '@angular/core';
import { PictureSize } from 'src/app/models/attributes/picture-size.model';

@Component({
  selector: 'app-mobile-block',
  templateUrl: './mobile-block.component.html',
  styleUrls: ['./mobile-block.component.scss']
})
export class MobileBlockComponent {

  profilePictureSize: PictureSize = { width: '10rem', height: '10rem' };

}
