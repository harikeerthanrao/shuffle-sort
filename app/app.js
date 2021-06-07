import { bindShuffle } from "./shuffle.js";
import { bindSort } from "./sort.js";

const app = () => {
   bindShuffle();
   bindSort();
};
document.addEventListener("DOMContentLoaded", app);