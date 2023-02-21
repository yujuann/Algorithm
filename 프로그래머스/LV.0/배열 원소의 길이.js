
const solution = strlist => strlist.map(str => str.length);
// map 을 사용한 반복문
배열의 담는 기능


function solution(strlist) {
    var answer = [];
    for(var i=0; i<strlist.length; i++){
        answer[i]=strlist[i].length;
    }
    return answer;
}
// for 문 루프를 사용하 코드
