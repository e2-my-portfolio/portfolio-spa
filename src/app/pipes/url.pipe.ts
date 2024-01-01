import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeValue } from '@angular/platform-browser';

@Pipe({
  name: 'secure'
})
export class UrlPipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer) { }

  transform(value: string | undefined, type?: string): SafeValue {
    let result = {} as SafeValue;
    switch (type?.toLowerCase()) {
      case 'resource': result = this.domSanitizer.bypassSecurityTrustResourceUrl(value ? value : ''); break;
      case 'html': result = this.domSanitizer.bypassSecurityTrustHtml(value ? value : ''); break;
      default: result = this.domSanitizer.bypassSecurityTrustUrl(value ? value : ''); break;
    }
    return result;
  }

}
