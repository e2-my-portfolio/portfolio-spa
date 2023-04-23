import { Company } from "./company.model";

export interface Experience {
    company: Company;
    position: string;
    projects?: Project[];
    stack: string;
    startDate: string;
    endDate?: string;
}

export interface Project {
    name: string;
    description: string;
}
