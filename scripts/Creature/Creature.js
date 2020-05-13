import { Attributes } from "./Attributes.js";



export class Creature {
    
    constructor(name, level, race, attributes, skills) {
        this.name = name;
        this.level = level;
        this.exp = 0;
        this.race = race;
        this.attributes = attributes;
        this.skills = skills;

        this.hp = 100;
        this.maxHp = this.hp;
        this.ap = 100;
        this.maxAp = this.ap;
        this.mp = 100;
        this.maxMp = this.mp;

        this.attackPower = 10;
        this.magicPower = 10;
        this.accuracy = 10;
        this.evasion = 10;
        this.physicalDefense = 0;
        this.magicDefense = 0;
    }

    rollInitiative() {
        var agiBase = 0.25 * this.attributes.agi;

        var randomPart = (Math.random() * this.attributes.agi) + agiBase;

        alert(randomPart);
    }

}