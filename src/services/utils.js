// find the distance between two points
function distance(p1, p2) {
    return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}
// find the angle between two points
function angle(p1, p2) {
    return Math.atan2(p2.y - p1.y, p2.x - p1.x);
}

// find the orthogonal projection between two lines
function projection(p1, p2, p3) {
    let a = angle(p1, p2);
    let b = angle(p2, p3);
    let x = p2.x - p1.x;
    let y = p2.y - p1.y;
    let c = Math.cos(a + b);
    let s = Math.sin(a + b);
    let d = x * c + y * s;
    let p = {
        x: x * d / c,
        y: y * d / s
    };
    return p;
}

// create interpolation between two points
const interpolate = (p1, p2, t) => {
    return {
        x: p1.x + t * (p2.x - p1.x),
        y: p1.y + t * (p2.y - p1.y)
    };
}

// create a react traansition
const transition = (props, duration = 300, ease = 'ease-out') => {
    return {
        transition: `all ${duration}ms ${ease}`,
        ...props
    };
}
// react async fetch function
const fetchAsync = (url, options = {}) => {
    return new Promise((resolve, reject) => {
        fetch(url, options).then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error(response.statusText);
        }).then(resolve).catch(reject);
    });
}
// react async await fetch function
const fetchAsyncAwait = (url, options = {}) => {
    return new Promise((resolve, reject) => {
        fetch(url, options).then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error(response.statusText);
        }).then(resolve).catch(reject);
    });
}
// promisify input function
const promisify = (fn, context) => {
    return (...args) => new Promise((resolve, reject) => {
        fn.call(context, ...args, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}

// the meaning of human life
const humanLife = (age) => {
    let years = age / 365;
    let months = (age - years * 365) / 30;
    let days = age - years * 365 - months * 30;
    return `${years} years ${months} months ${days} days`;
}
// function human values
const humanValues = (values) => {
    let result = [];
    for (let key in values) {
        result.push(`${key}: ${values[key]}`);
    }
    return result.join(', ');
}

// creat function about love
const love = (name, age) => {
    return `${name} is ${age} years old`;
}
