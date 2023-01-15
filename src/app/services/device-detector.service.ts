import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class DeviceDetectorService {

    isMobile(): boolean {
        return this.isMobileWidth();
    }

    private hasTouchScreen(): boolean {
        let hasTouchScreen = false;
        if ('maxTouchPoints' in navigator) {
            hasTouchScreen = navigator.maxTouchPoints > 0;
        } else if ('msMaxTouchPoints' in navigator) {
            hasTouchScreen = navigator['msMaxTouchPoints'] > 0;
        } else {
            const mQ = matchMedia?.('(pointer:coarse)');
            if (mQ?.media === '(pointer:coarse)') {
                hasTouchScreen = !!mQ.matches;
            } else if ('orientation' in window) {
                hasTouchScreen = true;
            } else {
                const UA = navigator.userAgent;
                hasTouchScreen =
                /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
                /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA);
            }
        }
        return hasTouchScreen;
    }

    private isMobileWidth(): boolean {
        return window.matchMedia('(max-width: 768px)').matches;
    }
}
