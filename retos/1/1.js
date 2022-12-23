
/**
 * @param {string[]} gifts
 */
function wrapping(gifts) {
  const giftsReturn = gifts.map((item) => {
   const asterisk = "*".repeat(item.length + 2);
   return asterisk + "\n*" + item + "*\n" + asterisk;
 });
 return giftsReturn;
}
module.exports = wrapping;

