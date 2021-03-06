interface Math {
  clamp(x: number, min: number, max: number): number;
  clamp01(x: number): number;
  truncated(x: number, digits: number): number;
  cycle(x: number, length: number): number;
  randomInt(min: number, max: number): number;
  randomFloat(min: number, max: number): number;
  average(array: number[]): number;
  sum(array: number[]): number;
  multiply(x: number, array: number[]): number[];
  operations(fns: Function[], array: number[]): number[];
  operation(fns: Function[], x: number): number;
  lerp(start: number, end: number, amount: number): number;
  normalize(x: number, min: number, max: number): number;
  normalize01(x: number, min: number, max: number): number;
  factorial(n: number): number;
  fib(n: number): number;
  square(n: number): number;
  cube(n: number): number;
  not(n: number): number;
  getBaseLog(x: number, y: number): number;
  multiply(x: number, y: number): number;
  divide(x: number, y: number): number;
  inRange(value: number, min: number, max: number): boolean;
  lt(x: number, y: number): boolean;
  lte(x: number, y: number): boolean;
  gt(x: number, y: number): boolean;
  gte(x: number, y: number): boolean;
  add(x: number, y: number): number;
  subtract(x: number, y: number): number;
  lcm(x: number, y: number): number;
  lcd(x: number, y: number): number;
  hcf(x: number, y: number): number;
  gcd(x: number, y: number): number;
  toRadians(degress: number): number;
  toDegrees(radians: number): number;
  sqr(x: number): number;
  isInt(x: number): boolean;
  isFloat(x: number): boolean;
  isEven(x: number): boolean;
  isOdd(x: number): boolean;
  isNumber(x: number): boolean;
  isNegative(x: number): boolean;
  isPositive(x: number): boolean;
  isZero(x: number): boolean;
  isNonZero(x: number): boolean;
  randomBoolean(): boolean;
  ctg(x: number): number;
  actg(x: number): number;
  round5(x: number): number;
  roundN(x: number, y: number): number;
  roundGauss(x: number, decimal: number): number;
  copysign(x: number, y: number): number;
  unique(array: number[]): number[];
  difference(x: number, y: number): number;
  repeat(x: number, y: number): number;
  // Bitwise functions
  bitAnd(x: number, y: number): number;
  bitNot(x: number): number;
  bitOr(x: number, y: number): number;
  bitXor(x: number, y: number): number;
  leftShift(x: number, y: number): number;
  rightArithShift(x: number, y: number): number;
  rightLogShift(x: number, y: number): number;
}
