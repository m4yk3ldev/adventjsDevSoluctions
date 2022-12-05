const gifts = ["cat", "game", "socks"];

function wrapping(gifts) {
  const giftsReturn = gifts.map((item) => {
    const asterisk = "*".repeat(item.length + 2);
    return asterisk + "\\n*" + item + "*\\n" + asterisk;
  });
  return giftsReturn;
}
const wrapped = wrapping(gifts);

console.log(wrapped);
const test = [
  "*****\\n*cat*\\n*****",
  "******\\n*game*\\n******",
  "*******\\n*socks*\\n*******",
];

console.log({ test, wrapped }, test === wrapped);
