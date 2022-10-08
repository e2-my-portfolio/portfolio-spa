import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { AboutDescription } from 'src/app/models/data/about.model';

@Component({
  selector: 'app-about-block',
  templateUrl: './about-block.component.html',
  styleUrls: ['./about-block.component.scss']
})
export class AboutBlockComponent implements OnInit {

  dataList: AboutDescription[] = [];
  isMobile = false;

  constructor(private deviceDetector: DeviceDetectorService) { }

  ngOnInit(): void {
    this.isMobile = this.deviceDetector.isMobile();
    this.dataList = [
      { title: 'Leisure', content: 'During free time I do lot of stuff. Sussex result matter any end see. It speedily me addition weddings vicinity in pleasure. Happiness commanded an conveying breakfast in.' },
      { title: 'Some First', content: 'Meant balls it if up doubt small purse. Required his you put the outlived answered position. An pleasure exertion if believed provided to. All led out world these music while asked. Paid mind even sons does he door no. Attended overcame repeated it is perceive marianne in. In am think on style child of. Servants moreover in sensible he it ye possible.' },
      { title: 'Second', content: 'Though all excuse ladies rather regard assure yet. If feelings so prospect no as raptures quitting.' },
      { title: 'Third maybe', content: 'You disposal strongly quitting his endeavor two settling him. Manners ham him hearted hundred expense. Get open game him what hour more part. Adapted as smiling of females oh me journey exposed concern.' },
      { title: 'Fourth', content: 'Adieus except say barton put feebly favour him. Entreaties unpleasant sufficient few pianoforte discovered uncommonly ask. Morning cousins amongst in mr weather do neither. Warmth object matter course active law spring six. Pursuit showing tedious unknown winding see had man add.' },
      { title: 'Simple fifth element', content: 'Next his only boy meet the fat rose when. Do repair at we misery wanted remove remain income. Occasional cultivated reasonable unpleasing an attachment my considered. Having ask and coming object seemed put did admire figure. Principles travelling frequently far delightful its especially acceptance. ' },
    ];

  }

}
