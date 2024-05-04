// useRef : 컴포넌트 내부 변수값 유지

import { useEffect, useRef } from "react"

const ExComponent = () => {
    const myBtnRef = useRef(null);

    useEffect (() => {
        if(myBtnRef.current) { // 값이 있으면 실행
            myBtnRef.current.innerText = "클릭하세요";
        }
    }, []);
    // 컴포넌트 내부 변수를 useRef를 사용하여 값을 유지
    const count = useRef(0);

    const handleClick = () => {
        count.current += 1;
        alert(`클릭 횟수 : ${count.current}`)
    };
    return (
        <div>
            <button ref={myBtnRef} onClick={handleClick}>초기 상태</button>
        </div>
    );
}
export default ExComponent;