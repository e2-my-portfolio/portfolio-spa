import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoaderComponent implements OnChanges {

  @Input() isLoading = true;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.isNewChange(changes)) {
      this.isLoading = changes.isLoading.currentValue
    }
  }

  private isNewChange(changes: SimpleChanges): boolean {
    return changes &&
            changes.isLoading &&
            changes.isLoading.currentValue &&
            changes.isLoading.currentValue !== changes.isLoading.previousValue;
  }

}
