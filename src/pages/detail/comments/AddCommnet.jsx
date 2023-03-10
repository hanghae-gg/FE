import React, { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";

const AddCommentForm = () => {
  const { id } = useParams();
  const [comment, setComment] = useState({
    comment: "",
  });
  // 토큰 값 로컬스토리지에서 지정가져오기
  const token = localStorage.getItem("accessToken");

  const submitCommentHandler = (comment) => {
    axios.post(`${process.env.REACT_APP_LIST}/comments/${id}`, comment, {
      headers: {
        Authorization: token,
      },
    });
    alert("댓글이 추가되었습니다!");
    window.location.reload();
  };
  //

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submitCommentHandler(comment);
      }}
    >
      <StIncludeBtnandInput>
        <StInput
          placeholder="댓글을 추가하세요. (100자 이내)"
          name="content"
          type="text"
          onChange={(ev) => {
            setComment({
              ...comment,
              comment: ev.target.value,
            });
          }}
          maxLength={100}
        />
        <StButton type="submit">추가하기</StButton>
      </StIncludeBtnandInput>
    </form>
  );
};

export default AddCommentForm;

const StInput = styled.input`
  width: 350px;
  height: 50px;
  margin: 0px 20px 0px 0px;
  border-radius: 20px;
  border: solid white 1px;
  background-color: #f1f1f1;
  padding-left: 15px;
`;
const StButton = styled.button`
  background-color: black;
  text-align: center;
  width: 70px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  border: 1px solid black;
  font-weight: bold;
  font-size: 13px;
  color: white;
  cursor: pointer;
  align-items: center;
  text-align: center;
`;
const StIncludeBtnandInput = styled.div`
  align-items: center;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 20px;
  width: 600px;
`;
