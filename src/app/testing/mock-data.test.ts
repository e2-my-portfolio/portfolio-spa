import { HomePageData } from '../models/data/home-page.data';
import { Skill, SkillGroup } from '../blocks/skills-block/models/skills.data';
import { AboutDescription } from '../models/data/about.model';
import { Profile } from '../models/data/profile.model';
import { SocialLinks } from '../models/data/social-links.model';
import { WorkingPosition, Workplace } from '../models/data/workplace.model';

export class Mock {

    public static profile: Profile = {
        name: 'John',
        surname: 'Wick',
        position: 'Contract Killer'
    };

    public static socialLinks: SocialLinks = {
        linkedinUrl: 'https://linkedin.com',
        facebookUrl: 'https://fb.com',
        overflowUrl: 'https://stackoverflow/com',
        githubUrl: 'https://github.com'
    };

    /*  ABOUT TAB  */
    public static aboutDescription: AboutDescription[] = [
        {
            title: 'First description',
            content: 'Some first decription\nwith multi lines of\n text.'
        },
        {
            title: 'Second description',
            content: 'Short description text.'
        }
    ];


    /* WORKING PLACE */
    public static positionInGoogle: WorkingPosition = {
        name: 'Business Analyst',
        projects: [
          'Facebook search panel.',
          'Facebook for business.',
          'Facebook icons.'
        ],
        stack: 'Photoshop, Google Search, Android SDK, Facebook SDK',
        startDate: '2015/11/15',
        endDate: '2016/02/10'
    };

    public static workplaceGoogle: Workplace = {
        companyName: 'Google',
        positions: [ Mock.positionInGoogle ]
    };

    public static positionInAwesomeBank: WorkingPosition = {
        name: 'Software engineer',
        projects: [
          'Bank main frame application'
        ],
        stack: 'COBOL, MS Servers',
        startDate: '2012/11/15',
        endDate: '2013/02/10'
    };

    public static workplaceAwesomeBank: Workplace = {
        companyName: 'Awesome Bank',
        positions: [ Mock.positionInAwesomeBank ]
    };

    public static positionInFacebook1: WorkingPosition = {
        name: 'Business Analyst',
        projects: [
          'Facebook search panel.',
          'Facebook for business.',
          'Facebook icons.'
        ],
        stack: 'Photoshop, Google Search, Android SDK, Facebook SDK',
        startDate: '2017/01/10',
        endDate: '2018/06/23'
    };

    public static positionInFacebook2: WorkingPosition = {
        name: 'Solution Developer',
        projects: [
          'Sushi restaurant mobile app. Mobile app is used by user who wants to pre-order food'
        ],
        stack: 'Java, Kotlin, Android SDK, C++',
        startDate: '2019/05/15'
    };

    public static workplaceFacebook: Workplace = {
        companyName: 'Facebook',
        positions: [
            Mock.positionInFacebook1,
            Mock.positionInFacebook2
        ]
    };

    public static workplaces: Workplace[] = [
        Mock.workplaceGoogle,
        Mock.workplaceAwesomeBank,
        Mock.workplaceFacebook
    ];

    public static homeTabData: HomePageData = {
        fullName: `${Mock.profile.name} ${Mock.profile.surname}`,
        address: 'New York, US',
        company: {
            name: 'Russian crime syndicate',
            url: ''
        },
        description: 'Baba Yaga',
        position: Mock.profile.position
    };

    public static skillLevel2: Skill = {
        name: 'Skill 1',
        level: '2'
    };

    public static skillLevel5: Skill = {
        name: 'Skill 2',
        level: '5'
    };

    public static skillLevel1: Skill = {
        name: 'Skill 3',
        level: '1'
    };

    public static skillGroup: SkillGroup = {
        name: 'Skill Group 1',
        position: 1,
        skills: [
            Mock.skillLevel2,
            Mock.skillLevel1,
            Mock.skillLevel5
        ]
    };

}
