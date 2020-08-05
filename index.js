const
    R2D = 180 / Math.PI,
    D2R = Math.PI / 180
Math.truncated = (n, digits) => {
    if (null == digits) return Math.trunc(n)
    let pow = Math.pow(10, digits)
    return Math.round(n * pow) / pow
}
Math.lerp = (start, end, amt) => (1 - amt) * start + amt * end
Math.average = array => Math.sum(array) / array.length
Math.sum = array => array.reduce((p, c) => p + c, 0)
Math.isInt = n => Number(n) === n && n % 1 === 0
Math.isFloat = n => Number(n) === n && n % 1 !== 0
Math.clamp = (n, min, max) => Math.max(min, Math.min(n, max))
Math.clamp01 = (n) => Math.clamp(n, 0, 1)
Math.cycle = (n, length) => n > 0 ? n % length : length + n % length
Math.distance = (x1, y1, x2, y2) => Math.sqr(x1 - x2) + Math.sqr(y1 - y2)
Math.randomInt = (min, max) => Math.floor(min + Math.random() * (max + 1 - min))
Math.randomFloat = (min, max) => Math.random() * (max - min) + min
Math.normalize = (val, min, max) => (val - min) / (max - min)
Math.normalize01 = (val, min, max) => Math.clamp01(Math.normalize(val, min, max))
Math.factorial = n => (n != 1) ? n * Math.factorial(n - 1) : 1
Math.fib = n => n <= 1 ? n : Math.fib(n - 1) + Math.fib(n - 2)
Math.gcd = (x, y) => (y == 0) ? (x) : (Math.gcd(y, x % y))
Math.lcd = (x, y) => (x / Math.gcd(x, y)) * y
Math.toRadians = n => n * D2R
Math.toDegrees = n => n * R2D
Math.sqr = n => n * n
Math.isEven = n => n % 2 === 0
Math.isOdd = n => n % 2 !== 0
Math.isPositive = n => n > 0
Math.isNegative = n => n < 0
Math.isZero = n => Math.isNumber(n) && n == 0
Math.isNonZero = n => Math.isNumber(n) && n != 0
Math.isNumber = n => "number" == typeof n && Number(n) === n
Math.randomBoolean = () => !!Math.randomInt(0, 1)
Math.ctg = (x) => 1 / Math.tan(x)
Math.actg = (x) => Math.PI / 2 - Math.atan(x)
Math.round5 = (x) => Math.roundN(x, 5)
Math.roundN = (x, y) => Math.round(x / y) * y
Math.roundGauss = (x, decimal) => {
    let d = decimal || 0,
        m = Math.pow(10, d),
        n = +(d ? x * m : x).toFixed(8),
        i = Math.floor(n),
        f = n - i,
        e = 1e-8,
        r = (f > 0.5 - e && f < 0.5 + e) ?
        ((i % 2 == 0) ? i : i + 1) : Math.round(n)
    return d ? r / m : r
}
Math.copysign = (x, y) => y < 0 ? x < 0 ? x : -x : x > 0 ? x : -x
Math.multiply = (x, y) => y.map(v => v + x)
Math.operations = (x, y) => y.map(v => Math.operation(x, v))
Math.operation = (x, y) => x.reduce((p, fn) => fn(p), y)
Math.unique = (x) => [...new Set(x)]
Math.difference = (x, y) => x > y ? -(x - y) : y - x
Math.repeat = (x, y) => Math.abs(x / y > 0 ? Math.floor(x / y) : Math.ceil(x / y))