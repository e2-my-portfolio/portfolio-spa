import { Injectable } from "@angular/core";
import { Storage, ref, getDownloadURL, listAll } from "@angular/fire/storage";
import { Observable, from, map, switchMap } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class FirestorageService {

    private CV_PATH = '/cv';
    private PROFILE_PIC_PATH = '/profile-pic';

    // https://www.bezkoder.com/angular-13-firebase-storage/
    // https://dev.to/jdgamble555/angular-12-with-firebase-9-49a0
    // https://firebase.google.com/docs/storage/web/download-files

    constructor(private storage: Storage) { }

    getCvFileUrl(): Observable<string> {
        return this.getAllDownloadUrls(this.CV_PATH)
            .pipe(switchMap((urls: string[]) => this.getFileDownloadUrl(urls.length > 0 ? urls[0] : '')));
    }

    getProfilePictureUrl(): Observable<string> {
        return this.getAllDownloadUrls(this.PROFILE_PIC_PATH)
            .pipe(switchMap((urls: string[]) => this.getFileDownloadUrl(urls.length > 0 ? urls[0] : '')));
    }

    private getFileDownloadUrl(path: string): Observable<string> {
        return from(getDownloadURL(ref(this.storage, path)));
    }

    private getAllDownloadUrls(path: string): Observable<string[]> {
        return from(listAll(ref(this.storage, path))).pipe(map(resultList => {
            return resultList.items.map((ref) => {
                return ref.fullPath;
            })
        }));
    }

   

}
