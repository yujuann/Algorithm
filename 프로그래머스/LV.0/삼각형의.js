
const solution = (sides)=> {
    sides.sort((a,b)=>a-b);
    return (sides[0] + sides[1] > sides[2] ? 1 : 2)
}




sides.sort((a,b) => a-b);
sort 오름차순 정렬 하기
return 비교하기 삼항 연산자로 
return (sides[0] + sides[1] > sides[2] ? 1 : 2)

numbers.sort((a,b) => b-a)