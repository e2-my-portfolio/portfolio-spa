import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  private storage: Storage;

  constructor() {
    this.storage = window.sessionStorage;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  save(key: string, object: any): void {
    if (key && key.length > 0) {
      this.storage.setItem(key, JSON.stringify(object));
    }
  }

  saveString(key: string, value: string): void {
    if (key && key.length > 0) {
      this.storage.setItem(key, value);
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  get(key: string): any {
    return JSON.parse(this.storage.getItem(key));
  }

  getString(key: string): string {
    return this.storage.getItem(key);
  }

  remove(key: string): void {
    this.storage.removeItem(key);
  }

}
