Math.RAD2DEG = 180 / Math.PI
Math.DEG2RAD = Math.PI / 180
Math.truncate = (n,digits) =>{if(null==digits)return Math.trunc(n);let pow=Math.pow(10,digits);return~~(n*pow)/pow}
Math.lerp = (start, end, amt) => (1 - amt) * start + amt * end
Math.average = array => Math.sum(array) / array.length
Math.sum = array => array.reduce((p, c) => p + c, 0)
Math.isInt = n => Number(n) === n && n % 1 === 0
Math.isFloat = n => Number(n) === n && n % 1 !== 0
Math.clamp = (n, min, max) => Math.max(min, Math.min(n, max))
Math.clamp01 = (n) => Math.clamp(n, 0, 1)
Math.repeat = (n, length) => n > 0 ? n % length : length + n % length
Math.distance = (x1, y1, x2, y2) => Math.sqr(x1 - x2) + Math.sqr(y1 - y2)
Math.randomInt = (min, max) => Math.floor(min + Math.random() * (max + 1 - min))
Math.randomFloat = (min, max) => Math.random() * (max - min) + min
Math.alpha = (n, min, max) => (n - min) / (max - min)
Math.factorial = n => n < 2 ? 1 : n * Math.factorial(n - 1);
Math.fib = n => n <= 1 ? n : Math.fib(n - 1) + Math.fib(n - 2)
Math.gcd = (a, b) => (b == 0) ? (a) : (Math.gcd(b, a % b))
Math.lcd = (a, b) => (a / Math.gcd(a, b)) * b
Math.radians = n => n * Math.DEG2RAD
Math.degrees = n => n * Math.RAD2DEG
Math.sqr = n => n * n
Math.isEven = n => n % 2 == 0
Math.isOdd = n => !Math.isEven(n)
Math.isPositive = n => n > 0
Math.isNegative = n => n < 0
Math.isZero = n => Math.isNumber(n) && n == 0
Math.isNonZero = n => Math.isNumber(n) && n != 0
Math.isNumber = value => "number" == typeof value && (value === Number(value) && (value !== 1 / 0 && !1 !== value))