import { TOAButton } from "../../TOA/TOA-Button.js";
import * as Human from "../../Sprites/Human.js";
import { MAIN_CONTENT_ID, CONTENT_GAME_HOME } from "../MainContent.js";
import { attachChildren } from "../../ElementBuilder.js";
import { accountInterface } from "../../../main.js";
import { page } from "../../../main.js";



export const CREATOR_TITLE_ID = 'creator-title';

export function Creator(account) {
    var creatorTitle = document.createElement('div');
    creatorTitle.id = CREATOR_TITLE_ID;
    creatorTitle.innerText = 'Create Your Character';

    //Primary Background Buttons
    //Combat Background Buttons

    return [ 
        creatorTitle,
        SpriteDisplay(account),
        SpriteButtonContainer(account),
        PrimaryBackgroundContainer(account),
        CombatBackgroundContainer(account),
        DoneButton(account)
    ];
}



export const CREATOR_SPRITE_DISPLAY_ID = 'creator-sprite-display';

export function SpriteDisplay(account) {
    var spriteDisplay = document.createElement('span');
    spriteDisplay.id = CREATOR_SPRITE_DISPLAY_ID;

    var sprite = account.CharacterSprite(240, 320, '0px', '0px');
    
    spriteDisplay.appendChild(sprite);

    return spriteDisplay;
}

export const SPRITE_BUTTON_CONTAINER_ID = 'sprite-button-container';
export const SPRITE_BUTTON_CLASS = 'sprite-button';
export const SPRITE_BUTTON_LEFT_CLASS = 'sprite-button-left';
export const SPRITE_BUTTON_RIGHT_CLASS = 'sprite-button-right';

export function SpriteButtonContainer(account) {
    var spriteButtonContainer = document.createElement('div');
    spriteButtonContainer.id = SPRITE_BUTTON_CONTAINER_ID;

    var children = [
        SpriteButtonGroup( Human.HAIR, account, 'Hair' ),
        SpriteButtonGroup( Human.HAIR_COLOR, account, 'Hair Color' ),
        SpriteButtonGroup( Human.EYE_COLOR, account, 'Eyes' ),
        SpriteButtonGroup( Human.SKIN, account, 'Skin' )
    ];

    attachChildren(spriteButtonContainer, children);

    return spriteButtonContainer;
}


export const SPRITE_BUTTON_GROUP_CLASS = 'sprite-button-group';
export const SPRITE_BUTTON_TITLE_CLASS = 'sprite-button-title';

export function SpriteButtonGroup(cycleArray, account, sTitle) {
    var spriteButtonGroup = document.createElement('div');

    var buttonForward = TOAButton( function(){ return spriteCycle(cycleArray, account, SPRITE_BUTTON_RIGHT_CLASS) } );
    buttonForward.classList.add(SPRITE_BUTTON_CLASS);
    buttonForward.classList.add(SPRITE_BUTTON_RIGHT_CLASS);

    var buttonBackward = TOAButton( function(){ return spriteCycle(cycleArray, account, SPRITE_BUTTON_LEFT_CLASS) } );
    buttonBackward.classList.add(SPRITE_BUTTON_CLASS);
    buttonBackward.classList.add(SPRITE_BUTTON_LEFT_CLASS);

    var title = document.createElement('span');
    title.classList.add(SPRITE_BUTTON_TITLE_CLASS);
    title.classList.add('no-select');
    title.innerText = sTitle;

    var children = [ buttonBackward, title, buttonForward ];

    spriteButtonGroup.classList.add(SPRITE_BUTTON_GROUP_CLASS);
    attachChildren( spriteButtonGroup, children );

    return spriteButtonGroup;
}

function spriteCycle(cycleArray, account, dirClass) {
    var mod = 0;
    if (dirClass == SPRITE_BUTTON_LEFT_CLASS) { //Left = backwards in array, right = forwards
        mod = -1;
    }
    else {
        mod = 1;
    }

    var currentSprite;

    if (cycleArray == Human.HAIR) { //Find current sprite from type of cycle array
        currentSprite = account.hair;    
    }
    else if (cycleArray == Human.HAIR_COLOR) {
        currentSprite = account.hairColor;
    }
    else if (cycleArray == Human.EYE_COLOR) {
        currentSprite = account.eyeColor;
    }
    else {
        currentSprite = account.skin;
    }

    var currentIndex = cycleArray.indexOf(currentSprite); //Find current index in sprite arrays
    var newSprite;

    if (mod == 1 && currentIndex == cycleArray.length-1) { //Find new sprite from new index
        newSprite = cycleArray[0];
    }
    else if (mod == -1 && currentIndex == 0) {
        newSprite = cycleArray[ cycleArray.length-1 ];
    }
    else {
        newSprite = cycleArray[ currentIndex+mod ];
    }

    if (cycleArray == Human.HAIR) { //Set accounts sprite
        account.hair = newSprite;    
    }
    else if (cycleArray == Human.HAIR_COLOR) {
        account.hairColor = newSprite;
    }
    else if (cycleArray == Human.EYE_COLOR) {
        account.eyeColor = newSprite;
    }
    else {
        account.skin = newSprite;
    }

    //Redraw human
    var display = document.getElementById(CREATOR_SPRITE_DISPLAY_ID);
    var mainContent = document.getElementById(MAIN_CONTENT_ID);

    display.outerHTML = '';
    mainContent.appendChild( SpriteDisplay(account) );
}



export const BACKGROUND_CONTAINER_CLASS = 'background-container';

export const PRIMARY_BACKGROUND_CONTAINER_ID = 'primary-background-container';
function PrimaryBackgroundContainer(account) {
    var primaryBackgroundContainer = document.createElement('div');
    primaryBackgroundContainer.id = PRIMARY_BACKGROUND_CONTAINER_ID;
    primaryBackgroundContainer.classList.add(BACKGROUND_CONTAINER_CLASS);

    var title = document.createElement('div');
    title.id = 'primary-bg-title';
    title.innerText = 'Primary Background';
    title.classList.add('no-select', 'bg-titles');
    primaryBackgroundContainer.appendChild(title);

    var options = [
        BackgroundOptionContainer(BACKGROUND_HUMBLE, account),
        BackgroundOptionContainer(BACKGROUND_STUDENT, account)
    ];

    attachChildren(primaryBackgroundContainer, options);

    return primaryBackgroundContainer;
}

export const COMBAT_BACKGROUND_CONTAINER_ID = 'combat-background-container';
function CombatBackgroundContainer(account) {
    var combatBackgroundContainer = document.createElement('div');
    combatBackgroundContainer.id = COMBAT_BACKGROUND_CONTAINER_ID;
    combatBackgroundContainer.classList.add(BACKGROUND_CONTAINER_CLASS);

    var title = document.createElement('div');
    title.id = 'combat-bg-title';
    title.innerText = 'Combat Background';
    title.classList.add('no-select', 'bg-titles');
    combatBackgroundContainer.appendChild(title);

    var options = [
        BackgroundOptionContainer(COMBAT_BACKGROUND_FIGHTER, account),
        BackgroundOptionContainer(COMBAT_BACKGROUND_MAGE, account)
    ];

    attachChildren(combatBackgroundContainer, options);

    return combatBackgroundContainer;
}

export const BACKGROUND_OPTION_CONTAINER_CLASS = 'background-option-container';
export const BACKGROUND_OPTION_TITLE_CLASS = 'background-option-title';
export const BACKGROUND_OPTION_DESCRIPTION_CLASS = 'background-option-description';

const PRIMARY_BG_TYPE = 'primary'; const COMBAT_BG_TYPE = 'combat';
export const BACKGROUND_HUMBLE = { type: PRIMARY_BG_TYPE, name: 'Humble',
description: `Your beginnings were humble. You have had your fair share of obstacles, but it has not been an entirely dreary life either. Choosing this background will give a balanced boost to attributes and practical skills.` };
export const BACKGROUND_STUDENT = { type: PRIMARY_BG_TYPE, name: 'Student',
description: `You were a hard-working student, who found success studying the arts. Choosing this background will boost your intelligence attribute and knowledge-based skills.` };

export const COMBAT_BACKGROUND_FIGHTER = { type: COMBAT_BG_TYPE, name: 'Fighter',
description: `A natural brawler.` };
export const COMBAT_BACKGROUND_MAGE = { type: COMBAT_BG_TYPE, name: 'Mage',
description: `A spell-caster and dabbler of the arcane.` };

function BackgroundOptionContainer(background, account) {
    var backgroundOptionContainer = document.createElement('div');
    backgroundOptionContainer.classList.add(BACKGROUND_OPTION_CONTAINER_CLASS);

    //Title
    var title = document.createElement('span');
    title.innerText = background.name;
    title.classList.add(BACKGROUND_OPTION_TITLE_CLASS);
    title.classList.add('no-select');

    //Select
    var select = TOAButton( function(){ return BackgroundOptionSelect( background.type, background.name, account ) } );
    select.innerText = 'Select';
    select.classList.add(BACKGROUND_OPTION_SELECT_CLASS);
    select.id = BUTTON_SECRET_ID(background.name);

    //Description
    var description = document.createElement('div');
    description.innerText = background.description;
    description.classList.add('no-select');
    description.classList.add(BACKGROUND_OPTION_DESCRIPTION_CLASS);

    var children = [title, select, description];
    attachChildren(backgroundOptionContainer, children);

    return backgroundOptionContainer;
}

export const BACKGROUND_OPTION_SELECT_CLASS = 'background-option-select';
export const BG_SELECTED_CLASS = 'bg-selected';
export const BG_PRIMARY_SELECTED_CLASS = 'bg-primary-selected';
export const BG_COMBAT_SELECTED_CLASS = 'bg-combat-selected';

function BUTTON_SECRET_ID(name) { return 'SECRET-ID-' + name };

function BackgroundOptionSelect(bgType, backgroundName, account) {
    var searchClass;

    switch (bgType) {
        case PRIMARY_BG_TYPE:
            account.primaryBackground = backgroundName;
            searchClass = BG_PRIMARY_SELECTED_CLASS;
            break;
        default:
            account.combatBackground = backgroundName;
            searchClass = BG_COMBAT_SELECTED_CLASS;
    }


    //var matchingClass = document.getElementById( BUTTON_SECRET_ID(backgroundName) ).parentElement;
    var matchingClass = document.getElementsByClassName(searchClass);

    if (matchingClass[0] != undefined) {
        matchingClass[0].classList.remove(searchClass, BG_SELECTED_CLASS);
    }

    document.getElementById( BUTTON_SECRET_ID(backgroundName) ).classList.add( searchClass, BG_SELECTED_CLASS );
}



export const DONE_BUTTON_ID = 'cc-done-button';

function DoneButton(account) {
    var doneButton = TOAButton( function(){ return done(account) } );
    doneButton.id = DONE_BUTTON_ID;
    doneButton.innerText = 'Finish';

    return doneButton;
}

function done(account) {
    var didPrimary = document.getElementsByClassName(BG_PRIMARY_SELECTED_CLASS);
    var didCombat = document.getElementsByClassName(BG_COMBAT_SELECTED_CLASS);

    if (didPrimary[0] == undefined || didCombat[0] == undefined) {
        alert('Select both a primary and combat background');
    }
    else {
        account.contentPage = CONTENT_GAME_HOME;
        accountInterface.storeCurrentAccount(account);
        page.resetPage();
    }
}