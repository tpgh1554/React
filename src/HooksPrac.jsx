import { useState } from "react";

const NameCardPrn = ({ nameCard }) => {
  const NameCard = () => {
    const [nameCard, setNameCard] = useState({
      name: "",
      position: "",
      company: "",
      addr: "",
      email: "",
    });
    const [submit, setSubmit] = useState(false);
    const onChange = (key, value) => {
      setNameCard({ ...nameCard, [key]: value });
    };

    const onSubmit = () => {
      setSubmit(true);
    };

    return (
      <>
        <h1>회원 정보 입력</h1>
        <input
          type="text"
          placeholder="이름 입력"
          value={nameCard.name}
          onChange={(e) => onChange("name", e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="직책 입력"
          value={nameCard.position}
          onChange={(e) => onChange("position", e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="회사 입력"
          value={nameCard.company}
          onChange={(e) => onChange("company", e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="주소 입력"
          value={nameCard.addr}
          onChange={(e) => onChange("addr", e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="이메일 입력"
          value={nameCard.email}
          onChange={(e) => onChange("email", e.target.value)}
        />
        <br />
        <button onClick={onSubmit}>제출</button>
        {submit && <NameCardPrn nameCard={nameCard} />}
      </>
    );
  };
};
export default NameCardPrn;
