import { Parent } from "./parent.js";

class Shuffle extends Parent {

    constructor() {
        super();
        this.shuffleBtnElm = null;
        this.tiles = [];
        this.tileOrder = [];
    }
    attachEvent() {
        this.shuffleBtnElm = document.getElementById("btn-shuffle");
        this.shuffleBtnElm.addEventListener("click", () => this.randomiseTiles());
    }
    randomiseTiles() {
        this.tiles = this.getTileCollection(this.tiles);
        this.tileOrder = [...this.tiles];
        const randomTiles = this.generateRandomOrder();

        this.paintTiles(randomTiles);
    }
    getTileCollection(tiles) {
        if (this.blockSectionElm.children.length && tiles.length === 0) {
            Array.from(this.blockSectionElm.children).forEach((val) => {
                tiles.push(val);
            });
        }
        return tiles;
    }
    generateRandomOrder() {
        const tile = [];
        let i = this.tileOrder.length;

        while (i--) {
            const j = Math.floor(Math.random() * (i + 1));
            tile.push(this.tileOrder[j]);
            this.tileOrder.splice(j, 1);
            this.blockSectionElm.firstChild ? this.blockSectionElm.firstChild.remove : 0;
        }
        return tile;
    }
}
const shuffleInstance = new Shuffle();

export const bindShuffle = () => shuffleInstance.attachEvent();