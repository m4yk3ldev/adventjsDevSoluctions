// https://adventjs.dev/es/challenges/2022/3

const packOfGifts = ["book", "doll", "ball"];
const reindeers = ["dasher", "dancer"];

function distributeGifts(packOfGifts, reindeers) {
  let lenRein = 0;
  reindeers.map((rein) => {
    lenRein += rein.length * 2;
  });
  let lenPack = 0;
  packOfGifts.map((pack) => {
    lenPack += pack.length;
  });
  console.log(lenRein,lenPack);
  return Math.ceil(lenRein/lenPack)
}
// el pack de regalos pesa 4 + 4 + 4 = 12
// los renos pueden llevar (2 * 6) + (2 * 6) = 24
// por lo tanto, Santa Claus puede entregar 2 cajas de regalos
console.log(distributeGifts(packOfGifts, reindeers));
