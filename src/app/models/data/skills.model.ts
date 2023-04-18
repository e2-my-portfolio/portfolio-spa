export interface SkillsGroup {
    name: string;
    order: number;
    skills: Skill[];
}

export interface Skill {
    name: string;
    level: number;
}
