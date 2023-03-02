import React from "react";

function Counter() {
  const plusBtn = () => {
    console.log("+1");
  };
  const minusBtn = () => {
    console.log("-1");
  };
  //함수를 만들고 버튼에 클릭 함수를 만들어야해!
  //   리액트에서 엘리먼트에 이벤트! 설정해줄때 on이벤트 이름
  //   onClick = {실행하고 싶은 함수 이름} 형태로 설정 해야한다
  //   주의 할점은 이벤트를 설정할 때에는 함수 타입의 값을 넣어줘야 한다.

  // 함수 값이 const plusBtn = () => {
  //     console.log("+1");
  //   }; 이걸 말하는 거임
  return (
    <>
      <h1>0</h1>
      <button onClick={plusBtn}>+1</button>
      <button onClick={minusBtn}>-1</button>
    </>
  );
}

export default Counter;
