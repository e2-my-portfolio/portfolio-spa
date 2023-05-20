import { DataObject } from './data-object';

export interface SocialLinks extends DataObject {
    linkedinUrl?: string;
    facebookUrl?: string;
    instagramUrl?: string;
    overflowUrl?: string;
    githubUrl?: string;
}
