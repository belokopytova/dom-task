const NUM_OF_CELLS = 16;

export default class GoblinGame {
  constructor(element) {
    this.element = element;
    this.cells = [];
    this.goblinInterval = null;
  }

  addCells(count = NUM_OF_CELLS) {
    this.cells = Array.from({ length: count }, () => {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      this.element.append(cell);
      return cell;
    });
  }

  clearActive() {
    this.cells.forEach((cell) => cell.classList.remove("cell-active"));
  }

  addGoblin() {
    this.clearActive();

    let nextCell = Math.floor(Math.random() * this.cells.length);

    if (this.cells.length > 1) {
      while (nextCell === this.currentCell) {
        nextCell = Math.floor(Math.random() * this.cells.length);
      }
    }
    this.currentCell = nextCell;
    this.cells[nextCell].classList.add("cell-active");
  }

  startGame() {
    this.addCells();
    this.goblinInterval = setInterval(() => this.addGoblin(), 1500);
  }

  stopGame() {
    if (this.goblinInterval) {
      clearInterval(this.goblinInterval);
      this.goblinInterval = null;
    }
  }
}
