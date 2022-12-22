// https://adventjs.dev/es/challenges/2022/3

const packOfGifts = ["book", "doll", "ball"];
const reindeers = ["dasher", "dancer"];

function distributeGifts(packOfGifts, reindeers) {
  return Math.trunc(
    reindeers.reduce((acc, current) => {
      return acc + current.length * 2;
    }, 0) /
      packOfGifts.reduce((acc, current) => {
        return acc + current.length;
      }, 0)
  );
}
// el pack de regalos pesa 4 + 4 + 4 = 12
// los renos pueden llevar (2 * 6) + (2 * 6) = 24
// por lo tanto, Santa Claus puede entregar 2 cajas de regalos
console.log(distributeGifts(packOfGifts, reindeers),2);
console.log(distributeGifts(["videogames", "console"], ["midu"]), 0);
console.log(
  distributeGifts(
    ["game", "videoconsole", "computer"],
    [
      "midudev",
      "pheralb",
      "codingwithdani",
      "carlosble",
      "blasco",
      "facundocapua",
      "madeval",
      "memxd",
    ]
  ),
  5
);
