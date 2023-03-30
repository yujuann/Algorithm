function solution(numbers, direction) {
  if (direction === "right") {
    numbers.unshift(numbers.pop());
  } else {
    numbers.push(numbers.shift());
  }
  return numbers;
}
배열을 회전하는 방법은`unshift()`, `pop()`, `push()`, `shift()` 네 가지 메소드를 사용합니다