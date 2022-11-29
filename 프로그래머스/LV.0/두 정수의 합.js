function solution(a, b) {
  var answer = 0;
  answer = ((a + b) * (Math.abs(b - a) + 1)) / 2;
  return answer;
}

// 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
// 예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

// Math.abs() 사용함 숫자의 절대값을 반환합니다.
// 가우스 공식 사용 하여 n(n+1)/2
