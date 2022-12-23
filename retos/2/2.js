// https://adventjs.dev/es/challenges/2022/2

function countHours(year, holidays) {
  return (
    holidays
      .map((holiday) => {
        return new Date(`${holiday}/${year}`).getDay();
      })
      .filter((item) => item !== 0 && item !== 6).length * 2
  );
}

// 01/06 es el 6 de enero, jueves. Cuenta.
// 04/01 es el 1 de abril, un viernes. Cuenta.
// 12/25 es el 25 de diciembre, un domingo. No cuenta.

console.log (countHours(2022, ["01/06", "04/01", "12/25"]) === 4); // 2 días -> 4 horas extra en el año
