// @ts-check

// 아래 주석 사용 시 다음 한줄 ESLint 체크 안함.
/* eslint-disable-next-line */
console.log('ESLint Test1');

// 아래 주석 사용 시 다음 한줄 ESLint 규칙에 no-console 사용에 대한 것만 예외 처리
/* eslint-disable-next-line no-console */
console.log('ESLint Test2');

const some = 'Hello';
const result = Math.log(some); // 'some'에 대한 type 체크 >> " // @ts-check "
console.log(result);

// 아래 주석부터는 ESLint 규칙 점검하지 않음
/* eslint-disable */
