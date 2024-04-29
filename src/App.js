import { Fragment } from "react";
import "./App.css";
// JSX : JavaScript에 XML을 추가, 확장한 문법
// html 태그 사용 시 반드시 닫힘 태그가 존재해야 함
// 컴포넌트가 반환 될 때 태그는 한개여야 한다
// 자바스크립트 코드를 중괄호를 사용해 데이터 바인딩 할 수 있음
// 조건부 연산자 : {} 내에서 조건부 연산자 사용 가능
// 조건부 랜더링 : && 연산자의 특징을 활용해서 조건에 따라 화면 렌더링
// 인라인 스타일링 :
// import Greeting from "./Greeting";
// import Welcome from "./Welcome";
import Section from "./Section";
import MyComponent from "./MyComponent";
// 컴포넌트의 재활용
function App() {
  return (
    <>
      <Section title="스포츠" content="오늘의 프로야구는 기아가 1등입니다." />
      <Section title="정치" content="오늘의 영수 회담이 진행 중입니다." />
      <hr />
      <MyComponent name="은채" age={20} />
      <MyComponent age={33} />
      <MyComponent name="카즈하" />
      <MyComponent>dd르세라핌입니다.</MyComponent>
    </>
  );
}

export default App;
