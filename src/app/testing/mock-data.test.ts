import { Story } from '../models/data/story.model';
import { SocialLinks } from '../models/data/social-links.model';
import { Basics } from '../models/data/basics.model';
import { Skill, SkillsGroup } from '../models/data/skills.model';
import { Experience, Project } from '../models/data/experience.model';
import { Company } from '../models/data/company.model';

export class Mock {

    public static socialLinks: SocialLinks = {
        linkedinUrl: 'https://linkedin.com',
        facebookUrl: 'https://fb.com',
        instagramUrl: 'https://instagram.com',
        overflowUrl: 'https://stackoverflow/com',
        githubUrl: 'https://github.com'
    };

    public static stories: Story[] = [
        {
            title: 'First description',
            content: 'Some first decription\nwith multi lines of\n text.'
        },
        {
            title: 'Second description',
            content: 'Short description text.'
        }
    ];

    public static basics: Basics = {
        name: 'Jack',
        surname: 'Sparrow',
        position: 'Captain',
        city: 'Port Royal',
        country: 'Caribbean',
        description: 'Pirate boat The Black Pearl captain',
        companyName: 'The Black Pearl'
    };

    public static skillLevel2: Skill = {
        name: 'Skill 1',
        level: 2
    };

    public static skillLevel5: Skill = {
        name: 'Skill 2',
        level: 5
    };

    public static skillLevel1: Skill = {
        name: 'Skill 3',
        level: 1
    };

    public static skillGroup: SkillsGroup = {
        name: 'Skill Group 1',
        order: 1,
        skills: [
            Mock.skillLevel2,
            Mock.skillLevel1,
            Mock.skillLevel5
        ]
    };

    public static project1: Project = {
        name: 'Project1',
        description: 'Project1 description'
    };

    public static project2: Project = {
        name: 'Project1',
        description: 'Project1 description'
    };

    public static company: Company = {
        name: 'The Black Pearl',
        url: 'www.google.com',
        location: 'Caribbean'
    };

    public static experience: Experience = {
        company: this.company,
        position: 'Captain',
        projects: [ this.project1, this.project2 ],
        stack: 'Boats',
        startDate: '1567'
    };

}
