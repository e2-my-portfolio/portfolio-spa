import { Company } from 'src/app/models/data/company.model';

export interface HomePageData {
    fullName: string;
    address: string;
    company: Company;
    description: string;
    position: string;
}
