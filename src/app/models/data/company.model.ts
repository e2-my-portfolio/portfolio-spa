import { DataObject } from './data-object';

export interface Company extends DataObject {
    name: string;
    url?: string;
    location?: string;
}
