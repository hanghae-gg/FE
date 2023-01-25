import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

// 토큰 값 로컬스토리지에서 지정가져오기
const token = localStorage.getItem("Authorizationtest");

const Comment = ({ comment }) => {
  // console.log("commentId :", commentId);
  //   console.log("comment :", comment.commentId);
  //   console.log("boardId :", boardId);
  const [isCommentEditMode, setIsCommentEditMode] = useState(false);
  const [editcomment, setEditcomment] = useState({
    comment: "",
  });

  const onDeleteComment = async () => {
    const result = window.confirm("삭제하시겠습니까?");
    if (result) {
      await axios.delete(`${process.env.REACT_APP_LIST}/comment/${comment.commentId}`, {
        headers: {
          Authorization: token,
        },
      });
      return window.location.reload();
    } else {
      return;
    }
  };

  const onEditComment = async (e) => {
    await axios.patch(`${process.env.REACT_APP_LIST}/comment/${comment.commentId}`, e, {
      headers: {
        Authorization: token,
      },
    });
  };
  return (
    <>
      {!isCommentEditMode ? (
        <StCommentBox>
          작성자: {comment.username}
          <br />
          <StBold>{comment.comment}</StBold>
          <br />
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
          <StEditDoneButton onClick={() => onEditComment(editcomment)}>수정 완료</StEditDoneButton>
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
  margin: 10px 0 0;
  /* border: 1px solid black; */
  width: 500px;
  height: 40px;
  background-color: aliceblue;
  padding: 15px;
  font-size: 14px;
  border-radius: 10px;
`;
const StButton = styled.button`
  /* margin: auto; */
  background-color: black;
  margin-left: 15px;
  margin-top: 3px;
  text-align: center;
  width: 70px;
  height: 30px;
  opacity: 0.9;
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  align-items: center;
  border-radius: 50px;
  border: 1px solid black;
  font-weight: bold;
  font-size: 10px;
  color: white;
  cursor: pointer;
  justify-content: center;
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
  margin-top: -50px;
`;
const StBold = styled.div`
  font-weight: bold;
`;
