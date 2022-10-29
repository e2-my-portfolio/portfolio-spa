import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'src/app/services/device-detector.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  isMobile = false;

  constructor(public deviceDetector: DeviceDetectorService) { }

  ngOnInit(): void {
    this.isMobile = this.deviceDetector.isMobile();
  }

}
