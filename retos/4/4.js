/**
 * @param {{l: number;w: number;h: number;}[]} boxes
 */
function fitsInOneBox(boxes,) {
  boxes.sort((a, b,) => {
    if (a.l < b.l && a.w < b.w && a.h < b.h) {
      return -1;
    }
    return 1;
  },);
  let result = true;
  boxes.map((box, i,) => {
    if (boxes[i + 1] === undefined) return undefined;
    if (
      box.l >= boxes[i + 1].l ||
      box.w >= boxes[i + 1].w ||
      box.h >= boxes[i + 1].h
    ) {
      result = false;
    }
    return true;
  },);
  return result;
}

module.exports = fitsInOneBox;