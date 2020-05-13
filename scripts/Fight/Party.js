


export class Party {

    constructor(members) {
        this.members = members;
    }

    swapPositions(pos1, pos2) {
        var temp = this.members[ pos2 ];

        this.members[ pos2 ] = this.members[ pos1 ];
        this.members[ pos1 ] = this.members[ pos2 ];
    }

}