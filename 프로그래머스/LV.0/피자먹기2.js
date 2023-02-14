function solution(n) {
  let pizza = 1;
  // 초기화
  while ((pizza * 6) % n) {
    pizza++;
  }
  //   while 반복문 사용
  return pizza;
}
