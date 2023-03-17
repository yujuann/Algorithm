function solution(my_string) {
  return my_string
    .match(/[0-9]/g)
    .map(Number)
    .reduce((a, c) => a + c, 0);
}


/ 내가 생각한 방식
function solution(my_string) {
    var numStr = my_string.replace(/\D/g, ''); // 숫자가 아닌 문자를 모두 제거
    var sum = 0;
    for (var i = 0; i < numStr.length; i++) {
      sum += parseInt(numStr[i]); // 문자열에서 숫자를 추출하여 더하기
    }
    return sum;
  }
  