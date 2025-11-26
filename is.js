const is = {
  num: (n) => typeof n == "number",
  nan: (n) => Number.isNaN(n),
  str: (n) => typeof n == "string",
  bool: (n) => typeof n == "boolean",
  undef: (n) => typeof n == "undefined",
  def: (n) => typeof n != "undefined",
  arr: (n) => Array.isArray(n),
  obj: (n) => typeof n == "object" && n != null && !arr(n),
  fun: (n) => typeof n == "function",
  truthy: (n) => !!n,
  falsy: (n) => !n,
};
