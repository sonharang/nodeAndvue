const process = require('process');
console.log(process.env.JAVA_HOME); //환경변수 전체 값 => process.env, 하나의 값 => process.env.키값

const os = require('os');
console.log(os.cpus()); //cpu 코어 정보
console.log(os.tmpdir()); // 임시 저장 경로 