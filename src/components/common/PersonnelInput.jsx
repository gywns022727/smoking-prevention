import React from "react";
import styled from "styled-components";
import Calendar from "../../images/calendar.png";
import check from "../../images/check.png";

export default function PersonnelSelect() {
  return (
    <Container>
      <img src={check} alt="" />
      <Title>작성일</Title>
      <Input type={"date"} autoComplete={"off"} />
    </Container>
  );
}

const Container = styled.div`
  width: 400px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  > img {
    width: 24px;
    margin-right: 10px;
  }
`;

const Title = styled.p`
  width: 45px;
  color: black;
  margin-right: 10px;
  font-size: 15px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 200px;
  height: 30px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 400;
  color: white;
  background: #ff3c38;
  text-align: center;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #eee;
    font-size: 12px;
    font-weight: 300;
  }
  &::-webkit-calendar-picker-indicator {
    margin-top: 5px;
    padding-right: 15px;
    width: 20px;
    height: 20px;
    background: url(${Calendar});
    background-repeat: no-repeat;
  }
`;
