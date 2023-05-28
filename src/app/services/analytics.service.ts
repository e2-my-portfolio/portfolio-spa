import { Injectable } from "@angular/core";
import { Analytics, logEvent } from "@angular/fire/analytics";

@Injectable({ providedIn: 'root' })
export class AnalyticsService {

    constructor(private analytics: Analytics) { }

    logEvent(name: string): void {
        logEvent(this.analytics, name);
    }

}
