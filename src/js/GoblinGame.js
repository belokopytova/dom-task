export default class GoblinGame {
  constructor(element) {
    this.element = element;
    this.cells = [];
    this.goblinInterval = null;
  }

  addTiles(count = 16) {
    this.cells = Array.from({ length: count }, () => {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      this.element.appendChild(cell);
      return cell;
    });
  }

  clearActive() {
    this.cells.forEach((tile) => tile.classList.remove("cell-active"));
  }

  addGoblin() {
    // const inactiveTiles = this.cells.filter(
    //   (cell) => !cell.classList.contains("cell-active")
    // );

    // const currentActive = this.cells.find((t) => t.classList.contains("cell-active"));
    // let nextTile;

    // do {
    //   nextTile = inactiveTiles[Math.floor(Math.random() * inactiveTiles.length)];
    // } while (currentActive && nextTile === currentActive);

    // this.clearActive();
    // nextTile.classList.add("cell-active");
    this.clearActive();
    const nextTile = this.cells[Math.floor(Math.random() * this.cells.length)];
    nextTile.classList.add("cell-active");
  }

  startGame() {
    this.addTiles();
    this.goblinInterval = setInterval(() => this.addGoblin(), 1500);
  }

  stopGame() {
    if (this.goblinInterval) {
      clearInterval(this.goblinInterval);
      this.goblinInterval = null;
    }
  }
}
