module.exports = (a,b, callback) => {
  setTimeout(() => {
    if (!a || !b) {
      const message = `The params a or b are null, a = ${a}, b =  ${b}.`
      callback(new Error(message), {});
    } else {
      callback(null, {
        addition: () => a + b,
        subtraction: () => a - b,
      })
    }
  }, 2000);
}