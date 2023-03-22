const solution = (my_string) => {
  return my_string
    .replace(/[a-z]/gi, "")
    .split("")
    .sort((a, b) => a - b)
    .map((el) => Number(el));
};


문자열에서 알파벳을 제외한 숫자만 추출하여 오름차순으로
정렬한 배열을 반환 하는 함수 식이다.

.replace(/[a-z]/gi, "") 대소문자 구분없이 알파벳을 제외한
모든 문자를 제거하는 역할을 합니다. 

/[a-z]/gi,'' 알파벳 소문자와 대문자를 모두 대상으로 하고 
g,i 플래그를 사용해 전제 문자열 에서 모두 검색해 대소문자를 구분하지 않는다.Number