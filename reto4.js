const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
  { l: 3, w: 1, h: 3 },
];

/**
 * @param {{l: number;w: number;h: number;}[]} boxes
 */
function fitsInOneBox(boxes) {
  boxes.sort((a, b) => {
    if (a.l < b.l && a.w < b.w && a.h < b.h) {
      return -1;
    }
    return 1;
  });
  let result = true;
  boxes.map((box, i) => {
    if (boxes[i + 1] === undefined) return;
    if (
      box.l >= boxes[i + 1].l ||
      box.w >= boxes[i + 1].w ||
      box.h >= boxes[i + 1].h
    ) {
      result = false;
    }
  });
  return result;
}

fitsInOneBox(boxes);
fitsInOneBox([
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
]);
fitsInOneBox([
  { l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 3 },
  { l: 2, w: 2, h: 2 },
]);
fitsInOneBox([
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
  { l: 2, w: 10, h: 2 },
]);
