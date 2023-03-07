function solution(price) {
  if (price >= 500000) {
    price *= 0.8;
  } else if (price >= 300000) {
    price *= 0.9;
  } else if (price >= 100000) {
    price *= 0.95;
  }
  return Math.floor(price);
}


if문 조건식 사용해서 Math.floor 소수점 이하 를 버리는 정수를 구하였음