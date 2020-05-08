import * as Content from "../PageElements/MainContent/MainContent.js";
import * as Human from "../PageElements/Sprites/Human.js";
import * as c from "../Creature/Creature.js";
import * as r from "../Creature/Race.js";
import * as a from "../Creature/Attributes.js";
import * as s from "../Creature/Skills.js";


export class Account {

    constructor(username = 'nl', password = 'nl') {
        this.username = username.toLowerCase(); //For login, all lowercase.
        this.password = password; //Eventually we want to encrypt this!
        this.usernameCase = username; //For display, with the originally inputted casing.

        this.contentPage = Content.CONTENT_CREATOR;

        this.skin = Human.SKIN[0];
        this.hair = Human.HAIR[0];
        this.hairColor = Human.HAIR_COLOR[0];
        this.eyeColor = Human.EYE_COLOR[0];

        this.primaryBackground = null;
        this.combatBackground = null;

        this.character = new c.Creature(this.usernameCase,
            1, new r.Race('Human'),
            new a.Attributes(), new s.Skills()
            );
    }

    CharacterSprite(width, height, x, y) {
        var sprite = Human.Human(width, height, x, y, this.skin, this.hair, this.hairColor, this.eyeColor);

        return sprite;
    }

}