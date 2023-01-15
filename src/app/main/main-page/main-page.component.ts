import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'src/app/services/device-detector.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  isMobile = false;
  adSlot = 0;
  adClient = '';


  constructor(public deviceDetector: DeviceDetectorService) { }

  ngOnInit(): void {
    this.isMobile = this.deviceDetector.isMobile();
    this.adClient = environment.adSense.client;
    this.adSlot = environment.adSense.adSlots.pageBottom;
  }

}
