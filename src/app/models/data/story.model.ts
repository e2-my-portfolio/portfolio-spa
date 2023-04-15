import { DataObject } from './data-object';

export interface Story extends DataObject {
    title: string;
    content: string;
}
