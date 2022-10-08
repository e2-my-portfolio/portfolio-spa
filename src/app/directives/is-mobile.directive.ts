import { Directive, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Directive({
  selector: '[isMobile]'
})
export class IsMobileDirective implements OnInit, OnDestroy {

  private timeOuts: NodeJS.Timeout[] = [];

  constructor(private deviceService: DeviceDetectorService,
              private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef) { }

  ngOnInit() {
    if (this.deviceService.isMobile()) {
      this.timeOuts.push(
        setTimeout(() => this.viewContainer.createEmbeddedView(this.templateRef), 0)
      );
    } else {
      this.timeOuts.push(
        setTimeout(() => this.viewContainer.clear(), 0)
      );
    }
  }

  ngOnDestroy(): void {
    if (this.timeOuts && this.timeOuts.length > 0) {
      this.timeOuts.forEach(timeout => clearTimeout(timeout));
    }
  }
}
