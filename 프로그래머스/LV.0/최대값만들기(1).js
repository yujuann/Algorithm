function solution(numbers) {
  let array = numbers.sort((a, b) => b - a);

  return array[0] * array[1];
}


Array.prototype.sort() 사용함 
최대값 만들기