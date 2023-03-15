function solution(str1, str2) {
  return str1.includes(str2) ? 1 : 2;
}
방법 1,2
function solution(str1, str2) {
  if (str1.includes(str2)) {
    return 1;
  } else {
    return 2;
  }
}
제한사항
1 ≤ str1의 길이 ≤ 100
1 ≤ str2의 길이 ≤ 100
문자열은 알파벳 대문자, 소문자, 숫자로 구성되어 있습니다.