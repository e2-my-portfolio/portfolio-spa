import { Component } from '@angular/core';
import { DeviceDetectorService } from 'src/app/services/device-detector.service';

@Component({
  selector: 'app-contacts-block',
  templateUrl: './contacts-block.component.html',
  styleUrls: ['./contacts-block.component.scss']
})
export class ContactsBlockComponent {

  constructor(public deviceDetector: DeviceDetectorService) { }

}
