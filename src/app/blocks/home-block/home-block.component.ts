import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Collection } from 'src/app/constants/collections';
import { Company } from 'src/app/models/data/company.model';
import { Unsubscribable } from 'src/app/operators/unsubscribtion.operator';
import { FirestorageService } from 'src/app/services/firestorage.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { HomePageData } from './models/home-page.data';

@Component({
  selector: 'app-home-block',
  templateUrl: './home-block.component.html',
  styleUrls: ['./home-block.component.scss']
})
export class HomeBlockComponent extends Unsubscribable() implements OnInit {
//https://github.com/scttcper/ng2-adsense
  title: string;
  name: string;
  info: string;
  company: Company;
  description: string;
  loading = true;

  constructor(private firestore: FirestoreService,
              private firestorage: FirestorageService) {
    super();
  }

  ngOnInit(): void {
    this.firestore.getCollectionItem<HomePageData>(Collection.HOME_TAB_DATA)
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                  .pipe(takeUntil(this.unsubscribe))
                  .subscribe(data => this.setupData(data));
  }

  downloadCV(): void {
    this.firestorage.getCvFileUrl().subscribe((url: string) => {
      const downloadLink = document.createElement('a');
      console.log(url);
      downloadLink.download = `cv.pdf`;
      downloadLink.href = url;
      downloadLink.target = '_blank';
      downloadLink.click();
      downloadLink.remove();
    });
  }

  private setupData(data: HomePageData): void {
    this.title = `Hello. I'm `;
    this.name = data.fullName;
    this.info = `I'm a ${data.position.toLowerCase()} living in ${data.address}. Currently I'm working in `;
    this.company = data.company;
    this.description = data.description;
    this.loading = false;
  }

}
