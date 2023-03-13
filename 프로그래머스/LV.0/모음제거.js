function solution(my_string) {
  return my_string.replace(/[aeiou]/g, "");
}

replace 문자열 모음(a, e, i, o, u)을 찾아 제거하는 함수를 작성한 것
my_string.replace() 메서드를 사용하여 문자열에서 /[aeiou]/g 정규식에 해당하는 부분을 찾아 빈 문자열('')로 대체합니다. 
여기서 g 플래그는 문자열에서 모든 부분에 대해 검색