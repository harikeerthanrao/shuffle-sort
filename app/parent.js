export class Parent {

    constructor() {
        if (this.constructor == Parent) {
            throw new Error("Abstract class cannot be instantiated");
        }
        this.blockSectionElm = document.getElementById("blocks");
    }
    paintTiles(randomTiles) {
        randomTiles.forEach((val) => {
            this.blockSectionElm.appendChild(val);
        });
    }
}