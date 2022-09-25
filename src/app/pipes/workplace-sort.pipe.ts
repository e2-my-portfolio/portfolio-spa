import { Pipe, PipeTransform } from '@angular/core';
import { WorkingPosition, Workplace } from '../models/data/workplace.model';

@Pipe({
  name: 'workplaceSort'
})
export class WorkplaceSortPipe implements PipeTransform {

  private PRESENT = 'Present';

  transform(workplaces: Workplace[]): Workplace[] {
    return (workplaces && workplaces.length > 0) ?
          this.sort(workplaces) :
          [];
  }

  private sort(workplaces: Workplace[]): Workplace[] {
    workplaces.forEach(company => this.sortCompanyPositions(company));
    workplaces.sort((company1, company2) => {
      return company1.endDate !== this.PRESENT ?
            this.getDateInMilis(company1.endDate) - this.getDateInMilis(company2.endDate) :
            -1;
    });
    return workplaces;
  }

  private sortCompanyPositions(company: Workplace): void {
    const position = company.positions.find((p: WorkingPosition) => this.isCurrentPosition(p));
    if (position) {
      const index = company.positions.findIndex(p => p === position);
      if (index > -1) {
        company.positions.splice(index, 1);
      }
      position.endDate = this.PRESENT;
    }
    company.positions.sort((position1, position2) => {
      return this.getDateInMilis(position1.endDate) - this.getDateInMilis(position2.endDate);
    });

    if (position) {
      company.positions.push(position);
    }

    company.positions.reverse();
    company.endDate = company.positions[0].endDate;
    company.startDate = company.positions[company.positions.length - 1].startDate;
  }

  private getDateInMilis(date: string): number {
    return new Date(date).getMilliseconds();
  }

  private isCurrentPosition(position: WorkingPosition): boolean {
    return position.endDate === undefined ||
          position.endDate === null ||
          position.endDate.trim() === '';
  }

}
