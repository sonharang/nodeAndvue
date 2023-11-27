const url = require('url');
//레거시방식
let legercy = url.parse('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');
console.log(legercy);
//표준방식
let whatwg = new URL('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');
console.log(whatwg);
console.log(whatwg.searchParams);
console.log(whatwg.searchParams.get('query'));