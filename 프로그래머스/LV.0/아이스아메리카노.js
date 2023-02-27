function solution(money) {
  return [Math.floor(money / 5500), money % 5500];
}

//    마실 수 있는 잔, 남은 돈 2가지를 찾아야 한다.

//      나누기 / 나머지
// 소수점을
// / 연산은 소수점까지 계산이 되서 나온다. 그래서 Math.floor 사용하여 소수점 이하를 버린다.
const solution = (money) => [Math.floor(money / 5500), money % 5500];
