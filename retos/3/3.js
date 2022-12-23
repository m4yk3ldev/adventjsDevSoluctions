/**
 * @param {string[]} packOfGifts
 * @param {string[]} reindeers
 */
function distributeGifts(packOfGifts, reindeers) {
  return Math.trunc(
    reindeers.reduce((acc, current) => {
      return acc + current.length * 2
    }, 0) /
      packOfGifts.reduce((acc, current) => {
        return acc + current.length
      }, 0)
  )
}

module.exports = distributeGifts
