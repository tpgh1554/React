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
// import Section from "./Section";
// import MyComponent from "./MyComponent";
// import Say from "./Say";
// import Clock from "./Clock";
// import EventPractice from "./EventPractice";
// import FruitSelect from "./FruitSelect";
// import Table from "./Table";
// import UserList from "./UserList";
// import TodoList from "./TodoList";
// import CreateRef from "./Ref";
// import HooksCnt from "./Hooks1";
// import NameCard from "./HooksPrac";
import ExComponent from "./UseRef2";
// import Info from "./UseEffect";
// import ReducerCnt from "./UseReducer";
// import Average from "./UseMemo";
// 컴포넌트의 재활용
function App() {
  return (
    <>
      {/* <Say /> */}
      {/* <Clock /> */}
      {/* <EventPractice /> */}
      {/* <FruitSelect /> */}
      {/* <Table /> */}
      {/* <UserList /> */}
      {/* <TodoList /> */}
      {/* <CreateRef /> */}
      {/* <HooksCnt /> */}
      {/* <NameCard /> */}
      <ExComponent />
      {/* <Info /> */}
      {/* <ReducerCnt /> */}
      {/* <Average /> */}
    </>
  );
}

export default App;
