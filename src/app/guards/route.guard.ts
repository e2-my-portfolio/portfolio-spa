import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate {

  private MOBILE_URL = '/mobile';
  private HOME_URL = '/home';

  constructor(private device: DeviceDetectorService,
              private location: Location) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
    console.log('Route: ', route);
    console.log('state: ', state);

    if (this.isNotMobilePathOnMobileDevice(state)) {
      this.location.go(this.MOBILE_URL);
    } else if (this.isMobilePathOnNotMobileDevice(state)) {
      this.location.go(this.HOME_URL);
    }
    return true;
  }

  private isNotMobilePathOnMobileDevice(state: RouterStateSnapshot): boolean {
    return !state.url.startsWith(this.MOBILE_URL) && this.device.isMobile();
  }

  private isMobilePathOnNotMobileDevice(state: RouterStateSnapshot): boolean {
    return state.url.startsWith(this.MOBILE_URL) && !this.device.isMobile();
  }
  
}
