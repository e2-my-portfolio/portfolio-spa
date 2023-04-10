import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'src/app/services/device-detector.service';
import { takeUntil } from 'rxjs/operators';
import { Collection } from 'src/app/constants/collections';
import { Company } from 'src/app/models/data/company.model';
import { Unsubscribable } from 'src/app/operators/unsubscribtion.operator';
import { FirestorageService } from 'src/app/services/firestorage.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { SessionStorageService } from 'src/app/services/session-storage.service';
import { Basics } from 'src/app/models/data/basics.model';
import { StorageKey } from 'src/app/constants/storage-keys';
import { StringUtils } from 'src/app/utils/string.utils';

@Component({
  selector: 'app-home-block',
  templateUrl: './home-block.component.html',
  styleUrls: ['./home-block.component.scss']
})
export class HomeBlockComponent extends Unsubscribable() implements OnInit {

  title: string;
  name: string;
  info: string;
  company: Company;
  description: string;
  loading = true;

  private data: Basics;
  private cvUrl: string;

  constructor(public deviceDetector: DeviceDetectorService,
              private firestore: FirestoreService,
              private firestorage: FirestorageService,
              private sessionStorage: SessionStorageService) {
    super();
    this.data = this.sessionStorage.get(StorageKey.BASICS) as Basics;
    this.cvUrl = this.sessionStorage.getString(StorageKey.CV);
  }

  ngOnInit(): void {
    if (this.data) {
      this.setupData(this.data);
    } else {
      this.firestore.getCollectionItem<Basics>(Collection.BASICS)
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        .pipe(takeUntil(this.unsubscribe))
        .subscribe(data => {
          this.sessionStorage.save(StorageKey.BASICS, data)
          this.setupData(data)
        });
    }
  }

  downloadCV(): void {
    if (StringUtils.isNotBlank(this.cvUrl)) {
      this.downloadCvFrom(this.cvUrl);
    } else {
      this.firestorage.getCvFileUrl()
        .pipe(takeUntil(this.unsubscribe))
        .subscribe((url: string) => {
          this.downloadCvFrom(url);
      });
    }
  }

  private setupData(data: Basics): void {
    this.title = `Hello. I'm `;
    this.name = this.resolveFullName(data
      );
    this.info = `I'm a ${data.position.toLowerCase()} living in ${this.resolveAddress(data)}. Currently I'm working in `;
    this.company = this.resolveCompany(data);
    this.description = data.description;
    this.loading = false;
  }

  private resolveFullName(data: Basics): string {
    return StringUtils.isNotBlank(data.middleName) ?
      StringUtils.capitalize(`${data.name} ${data.middleName} ${data.surname}`).trim() :
      StringUtils.capitalize(`${data.name} ${data.surname}`).trim();
  }

  private resolveAddress(data: Basics): string {
    return StringUtils.isNotBlank(data.city) ?
      StringUtils.capitalize(`${data.city}, ${data.country}`) :
      StringUtils.capitalize(data.country);
  }

  private resolveCompany(data: Basics): Company {
    return {
      name: data.companyName,
      url: data.companyUrl
    }
  }

  private downloadCvFrom(url: string) {
    const downloadLink = document.createElement('a');
    downloadLink.download = `cv.pdf`;
    downloadLink.href = url;
    downloadLink.target = '_blank';
    downloadLink.click();
    downloadLink.remove();
  }

}
