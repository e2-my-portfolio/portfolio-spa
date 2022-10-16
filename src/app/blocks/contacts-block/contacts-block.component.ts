import { Component } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-contacts-block',
  templateUrl: './contacts-block.component.html',
  styleUrls: ['./contacts-block.component.scss']
})
export class ContactsBlockComponent {

  constructor(public deviceDetector: DeviceDetectorService) { }

}
