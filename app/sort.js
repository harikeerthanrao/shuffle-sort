import { Parent } from "./parent.js";

class Sort extends Parent {

    constructor() {
        super();
        this.sortBtnElm = null;
    }
    attachEvent() {
        this.sortBtnElm = document.getElementById("btn-sort");
        this.sortBtnElm.addEventListener("click", () => this.sortTiles());
    }
    sortTiles() {
        const tiles = Array.from(this.blockSectionElm.children);
        const randomTiles = this.generateSortOrder(tiles);
        this.paintTiles(randomTiles);
    }
    generateSortOrder(tiles) {
        if (tiles.length === 1) {
            return tiles;
        }
        const mid = Math.floor(tiles.length / 2);
        const left = this.generateSortOrder(tiles.slice(0, mid));
        const right = this.generateSortOrder(tiles.slice(mid, tiles.length));
        return this.mergeTiles(left, right);
    }
    mergeTiles(left, right) {
        const orderedTiles = [];
        let leftPos = 0, rightPos = 0, resultPos = 0;

        while (leftPos < left.length && rightPos < right.length) {
            const leftId = Number(left[leftPos].id.split("-")[1]);
            const rightId = Number(right[rightPos].id.split("-")[1]);

            if (leftId >= rightId) {
                orderedTiles[resultPos] = right[rightPos];
                rightPos++;
            } else {
                orderedTiles[resultPos] = left[leftPos];
                leftPos++;
            }
            resultPos++;
        }
        while (leftPos < left.length) {
            orderedTiles[resultPos] = left[leftPos];
            leftPos++;
            resultPos++;
        }
        while (rightPos < right.length) {
            orderedTiles[resultPos] = right[rightPos];
            rightPos++;
            resultPos++;
        }
        return orderedTiles;
    }

}
const sortInstance = new Sort();

export const bindSort = () => sortInstance.attachEvent();