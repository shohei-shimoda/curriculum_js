class Taiyaki {
  constructor(guzai) {
      this.guzai = guzai;
  }
  Ingredients() {
      console.log('中身は' + this.guzai + 'です');
  }
}
let anko = new Taiyaki('あんこ');
anko.Ingredients();
let cream = new Taiyaki('クリーム');
cream.Ingredients();
let cheese = new Taiyaki('チーズ');
cheese.Ingredients();