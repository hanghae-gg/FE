import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Comments from "./comments/Comments";
import JK from "../../shared/JKHeader";

const Detail = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const [mylist, setMylist] = useState([]);
  //수정 모드 설정
  const [isEditMode, setIsEditMode] = useState(false);
  const [updatedList, setUpdatedList] = useState({
    title: "",
    content: "",
  });

  // 토큰 값 로컬스토리지에서 지정가져오기
  const token = localStorage.getItem("accessToken");

  // 게시물 수정하기
  const onEditThisList = (e) => {
    axios.patch(`${process.env.REACT_APP_LIST}/posts/${id}`, e, {
      headers: {
        Authorization: token,
      },
    });
  };

  const onDeletThisList = () => {
    const result = window.confirm("게시글을 지울까요?");
    if (result) {
      axios.delete(`${process.env.REACT_APP_LIST}/posts/${id}`, {
        headers: {
          Authorization: token,
        },
      });
      return navigate("/List");
    } else {
      return;
    }
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_LIST}/posts/${id}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((appData) => {
        setMylist(appData.data);
      }, []);
  }, [id, token]);
  console.log(updatedList);
  return (
    <>
      <JK>
        <StDiv>
          {!isEditMode && (
            <div>
              <div>
                <StBox>
                  <StH3>
                    <h3 className="text-2xl">제목: {mylist.title}</h3>
                  </StH3>
                  <img
                    src={mylist.imageUrl}
                    style={{ width: "550px ", height: "330px" }}
                  />
                  <StText>설명: {mylist.content} </StText>
                </StBox>
              </div>
              <div>
                <StButtons
                  size="large"
                  onClick={() => {
                    setIsEditMode(true);
                  }}
                >
                  글 수정
                </StButtons>
                <StButtons
                  size="large"
                  onClick={() => {
                    onDeletThisList();
                  }}
                >
                  글 삭제
                </StButtons>
              </div>
            </div>
          )}
          {isEditMode && (
            <div>
              <div>
                <StBox1
                  onSubmit={(e) => {
                    e.preventDefault();
                    onEditThisList(updatedList);
                    setIsEditMode(false);
                  }}
                >
                  <h3>게시글 수정하기 </h3>
                  <div>
                    제목 :
                    <StInput
                      required
                      type="text"
                      placeholder={mylist.title}
                      onChange={(ev) => {
                        setUpdatedList({
                          ...updatedList,
                          title: ev.target.value,
                        });
                      }}
                    />
                  </div>
                  <img
                    src={mylist.imageUrl}
                    style={{ width: "550px ", height: "330px" }}
                  />
                  <div>
                    <h2>설명</h2>
                    <Textarea
                      required
                      type="text"
                      placeholder={mylist.content}
                      onChange={(ev) => {
                        setUpdatedList({
                          ...updatedList,
                          content: ev.target.value,
                        });
                      }}
                    />
                  </div>

                  <StBtBox>
                    <StButtons1 type="submit " size="large">
                      저장
                    </StButtons1>
                    <StButtons1
                      size="large"
                      onClick={() => {
                        setIsEditMode(false);
                      }}
                    >
                      뒤로
                    </StButtons1>
                  </StBtBox>
                </StBox1>
              </div>
            </div>
          )}
        </StDiv>
      </JK>
      {!isEditMode && <Comments />}
    </>
  );
};

export default Detail;
const StDiv = styled.div`
  position: absolute;
  background-color: #ebeef1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 80vh;
  margin-bottom: 10%;
`;

const StBox = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  min-width: 700px;
  height: 60vh;
`;

const StBox1 = styled.form`
  background-color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  min-width: 700px;
  height: 70vh;
`;
const StH3 = styled.div`
  width: 600px;
  height: 50px;
  border: 1px solid black;
  padding: 8px;
`;

const StInput = styled.input`
  margin-left: 10px;
  width: 500px;
  height: 40px;
  border: 1px solid black;
  padding: 8px;
`;
const StText = styled.div`
  width: 600px;
  margin-top: 10px;
  border: 1px solid gray;
  height: 200px;
  padding: 8px;
  font-size: 14px;
`;
const StButtons = styled.button`
  border: 1px solid #ddd;
  height: 50px;
  width: 100px;
  border-radius: 10px;
  background-color: #46cfa7;
  padding-top: 5px;
  margin-top: 30px;
  margin-left: 24%;
  margin-bottom: 19%;
  padding-bottom: 10px;
  &:hover {
    background: #b075fd;
    color: white;
    transition: 0.5s;
  }
`;

const StButtons1 = styled.button`
  border: 1px solid #ddd;
  height: 50px;
  width: 100px;
  border-radius: 10px;
  background-color: #46cfa7;
  padding-top: 5px;
  padding-bottom: 10px;
  margin: 0px 100px 0px 100px;
  &:hover {
    background: #b075fd;
    color: white;
    transition: 0.5s;
  }
`;
const StBtBox = styled.div`
  float: left;
`;

const Textarea = styled.textarea`
  margin-top: 10px;
  border: 1px solid gray;
  width: 550px;
  height: 200px;
  padding: 8px;
  font-size: 14px;
`;
