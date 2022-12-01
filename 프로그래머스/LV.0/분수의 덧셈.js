function solution(denum1, num1, denum2, num2) {
  let a = num1 * denum2 + num2 * denum1;
  let b = num1 * num2;
  let maximum = 1;
  for (let i = 1; i <= a; i++) {
    if (a % i === 0 && b % i === 0) {
      maximum = i;
    }
  }
  return [a / maximum, b / maximum];
}

// 첫 번째 분수의 분자와 분모를 뜻하는 denum1, num1, 두 번째 분수의 분자와 분모를 뜻하는 denum2, num2가 매개변수로 주어집니다.
//  두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.
