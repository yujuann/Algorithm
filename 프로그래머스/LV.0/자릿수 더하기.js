function solution(n) {
  return n
    .toString()
    .split("")
    .reduce((acc, cur) => acc + Number(cur), 0);
}


문자로 바꿀지  <-> 숫자로 바꿀지 

Number / ParseInt / +n /n +''/ n.toString /
(n + '') .split
주어진 값으 n 이 숫자라서 
1. 숫자를 문자열로 바꿔야한다.
2. split 사용하기
3. 리듀스 사용해서 반복해서  다시 문자열을 숫자로 바꾸기 