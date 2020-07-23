interface Math {
    /** Radians-to-degreess */
    readonly RAD2DEG: number;
    /** Degrees-to-radians */
    readonly DEG2RAD: number;
    clamp(value: number, min: number, max: number): number;
    clamp01(value: number): number;
    truncate(value: number, digits: number): number;
    repeat(value: number, length: number): number;
    randomInt(min: number, max: number): number;
    randomFloat(min: number, max: number): number;
    average(array: number[]): number;
    sum(array: number[]): number;
    lerp(start: number, end: number, amount: number): number;
    alpha(value: number, min: number, max: number): number;
    factorial(n: number): number;
    fib(n: number): number;
    /** Greatest Common Divisor */
    gcd(a: number, b: number): number;
    /** Lowest Common Divisor */
    lcd(a: number, b: number): number;
    /** Converts from degrees to radians */
    radians(degress: number): number;
    /** Converts from radians to degrees */
    degrees(radians: number): number;
    sqr(value: number): number;
    isInt(value: number): boolean;
    isFloat(value: number): boolean;
    isEven(value: number): boolean;
    isOdd(value: number): boolean;
    isNumber(value: number): boolean;
    isNegative(value: number): boolean;
    isPositive(value: number): boolean;
    isZero(value: number): boolean;
    isNonZero(value: number): boolean;
}