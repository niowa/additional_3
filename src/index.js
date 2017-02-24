//module.exports =
function getBase(base) {
  let bank = +base;
  let go = false;
  for (var i = 2, step = 2; bank != 0;) {
    if (bank % i === 1) {
        bank = Math.floor(bank / i);
        go = true;
    }
    else if (go === true) {
      go = false;
      bank = +base;
      step++;
      i = step;
    }
    else i = ++step;
  }
  return i;
}
