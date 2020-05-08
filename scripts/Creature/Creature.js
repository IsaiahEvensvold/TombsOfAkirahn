import { Attributes } from "./Attributes.js";



export class Creature {
    
    constructor(name, level, race, attributes, skills) {
        this.name = name;
        this.level = level;
        this.exp = 0;
        this.race = race;
        this.attributes = attributes;
        this.skills = skills;
    }

}