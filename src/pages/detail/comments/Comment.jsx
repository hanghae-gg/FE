import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

// 토큰 값 로컬스토리지에서 지정가져오기
const token = localStorage.getItem("accessToken");

const Comment = ({ comment }) => {
  const [isCommentEditMode, setIsCommentEditMode] = useState(false);
  const [editcomment, setEditcomment] = useState({
    comment: "",
  });
  console.log(comment);
  const onDeleteComment = async () => {
    const result = window.confirm("삭제하시겠습니까?");
    if (result) {
      await axios.delete(
        `${process.env.REACT_APP_LIST}/comments/${comment.id}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
    } else {
      return;
    }
  };

  const onEditComment = async (e) => {
    await axios.patch(
      `${process.env.REACT_APP_LIST}/comments/${comment.id}`,
      e,
      {
        headers: {
          Authorization: token,
        },
      }
    );
  };

  console.log(comment.id);
  return (
    <>
      {!isCommentEditMode ? (
        <StCommentBox>
          작성자: {comment.username}
          <br />
          <StBold>{comment.comment}</StBold>
          <StButtons>
            <StButton
              size="large"
              onClick={() => {
                setIsCommentEditMode(true);
              }}
            >
              댓글 수정
            </StButton>
            <StButton
              size="large"
              onClick={() => {
                onDeleteComment(comment.id);
              }}
            >
              댓글 삭제
            </StButton>
          </StButtons>
        </StCommentBox>
      ) : (
        <StEditCommentForm>
          <StcommentEditInput
            required
            type="text"
            onChange={(ev) => {
              setEditcomment({
                ...editcomment,
                comment: ev.target.value,
              });
            }}
          />
          <StEditDoneButton onClick={() => onEditComment(editcomment)}>
            수정 완료
          </StEditDoneButton>
        </StEditCommentForm>
      )}
    </>
  );
};

export default Comment;

const StcommentEditInput = styled.input`
  background-color: #dadada;
  border: none;
  border-radius: 15px;
  height: 25px;
  width: 250px;
  margin-top: 10px;
`;
const StEditCommentForm = styled.form`
  display: flex;
  flex-direction: row;
`;

const StCommentBox = styled.div`
  margin-top: 10px;
  margin-left: 30px;
  /* border: 1px solid black; */
  width: 500px;
  height: 60px;
  background-color: aliceblue;
  padding: 15px;
  font-size: 14px;
  border-radius: 10px;
`;
const StButton = styled.button`
  border: 1px solid #ddd;
  height: 40px;
  width: 80px;
  border-radius: 10px;
  background-color: #46cfa7;
  padding-top: 5px;
  padding-bottom: 10px;
  margin-left: 5px;
  &:hover {
    background: #b075fd;
    color: white;
    transition: 0.5s;
  }
`;

const StEditDoneButton = styled.button`
  /* margin: auto; */
  background-color: black;
  margin-top: 10px;
  margin-left: 10px;
  text-align: center;
  width: 70px;
  height: 30px;
  opacity: 0.9;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  border: 1px solid black;
  font-weight: bold;
  font-size: 10px;
  color: white;
  cursor: pointer;
  /* font-family: "Noto Sans KR", sans-serif; */
`;
const StButtons = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-top: -35px;
`;
const StBold = styled.div`
  font-weight: bold;
  margin-top: 5px;
`;
