
const add4 = n => n + 4;
const mul2 = n => n * 2;

function findExpression(target) {
  function helper(current, expression) {
    if (current === target) return expression;
    if (current > target) return undefined;
    let tryMul = helper(current * 2, expression + " *2");
    if (tryMul !== undefined) return tryMul;

    let tryAdd = helper(current + 4, expression + " +4");
    if (tryAdd !== undefined) return tryAdd;

    return undefined;
  }

  return helper(1, "1");
}
console.log(findExpression(103))

