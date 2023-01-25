import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Comments from "./comments/Comments";

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
  const token = localStorage.getItem("Authorizationtest");

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

  return (
    <>
      <StDetailALl>
        {!isEditMode && (
          <StDetailBox>
            <StPicwithDesc>
              <StListPic>
                <StImage src={mylist.image} />
              </StListPic>
              <StDecsBox>
                <StDescDIv>
                  <h3>{mylist.title}</h3>
                  <br />
                  <StDesc>설명: </StDesc>
                  {mylist.contet}
                  <hr />
                </StDescDIv>
              </StDecsBox>
            </StPicwithDesc>
            <StButtonDiv>
              <StButton
                size="large"
                onClick={() => {
                  setIsEditMode(true);
                }}
              >
                글 수정
              </StButton>
              <StButton
                size="large"
                onClick={() => {
                  onDeletThisList();
                }}
              >
                글 삭제
              </StButton>
            </StButtonDiv>
            {/* <StLoveVIew>
              <StLove>💜 {mylist.love}</StLove>
              <StView>👀 {mylist.visit}</StView>
            </StLoveVIew> */}
          </StDetailBox>
        )}
        {isEditMode && (
          <StDetailBox>
            <StDecs2Box>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  onEditThisList(updatedList);
                  setIsEditMode(false);
                }}
              >
                <h3>🐾 게시글 수정하기 🐾</h3>
                이름 :
                <StInput
                  required
                  type="text"
                  placeholder={mylist.title}
                  onChange={(ev) => {
                    setUpdatedList({
                      ...updatedList,
                      listName: ev.target.value,
                    });
                  }}
                />
                <br />
                나이 :{" "}
                <StInput
                  required
                  type="number"
                  min="1"
                  placeholder={mylist.age}
                  onChange={(ev) => {
                    setUpdatedList({
                      ...updatedList,
                      age: ev.target.value,
                    });
                  }}
                />
                <br />
                성별 :{" "}
                <StInput
                  required
                  type="text"
                  placeholder={mylist.gender}
                  onChange={(ev) => {
                    setUpdatedList({
                      ...updatedList,
                      gender: ev.target.value,
                    });
                  }}
                />
                <input type="file" />
                <br />
                설명 :{" "}
                <StDescInput
                  required
                  type="text"
                  placeholder={mylist.text}
                  onChange={(ev) => {
                    setUpdatedList({
                      ...updatedList,
                      text: ev.target.value,
                    });
                  }}
                />
                <br />{" "}
                <StButtonDiv1>
                  <StButton type="submit " size="large">
                    저장
                  </StButton>
                  <StButton
                    size="large"
                    onClick={() => {
                      setIsEditMode(false);
                    }}
                  >
                    뒤로
                  </StButton>
                </StButtonDiv1>
              </form>
            </StDecs2Box>
          </StDetailBox>
        )}
      </StDetailALl>
      {!isEditMode && <Comments />}
    </>
  );
};

export default Detail;
const StDetailALl = styled.div`
  margin-top: 20px;
  text-align: center;
  display: flex;
  //아래로 정열
  flex-direction: column;
  //가운데 배열
  align-items: center;
`;

const StDetailBox = styled.div`
  display: flex;
  //가운데 배열
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StListPic = styled.div`
  width: 300px;
  height: 300px;
  margin: auto;
  margin-left: 10px;
`;
const StDecs2Box = styled.div`
  width: 600px;
  height: 700px;
  margin: auto;
  margin-left: 10px;
  display: flex;
  align-items: center;
  background-color: #ececec;
  border-radius: 15px;
`;
const StDecsBox = styled.div`
  border-left: solid #dadada 1px;
  width: 300px;
  height: 300px;
  margin: auto;
  margin-left: 10px;
`;

const StPicwithDesc = styled.div`
  display: flex;
  //가운데 배열
  align-items: center;
  border-radius: 15px;
  background-color: aliceblue;
  justify-content: center;
`;

// const StLoveVIew = styled.div`
//   border-radius: 20px;
//   padding: 20px;
//   width: 600px;
//   height: 50px;
//   margin-top: 20px;
//   display: flex;
//   justify-content: space-around;
// `;

// const StLove = styled.div`
//   margin-top: 5px;
//   background-color: #ececec;
//   border-radius: 20px;
//   text-align: center;
//   padding-top: 15px;
//   width: 200px;
//   height: 40px;
// `;

// const StView = styled.div`
//   margin-top: 5px;
//   background-color: #ececec;
//   border-radius: 20px;
//   text-align: center;
//   padding-top: 15px;
//   width: 200px;
//   height: 40px;
// `;
const StButton = styled.button`
  margin: 10px auto auto 10px;
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
  /* justify-content: space-between; */
  cursor: pointer;
  /* align-items: left; */
  /* font-family: "Noto Sans KR", sans-serif; */
`;
const StButtonDiv1 = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 170px;
  margin-top: 10px;
  margin-bottom: 20px;
`;
const StButtonDiv = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: auto;
`;
const StInput = styled.input`
  width: 300px;
  height: 20px;
  border-radius: 15px;
  border: none;
  padding: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
`;
const StDescInput = styled.input`
  width: 300px;
  height: 400px;
  border-radius: 15px;
  border: none;
  padding: 5px;
  margin-top: 15px;
`;
const StDesc = styled.div`
  color: gray;
`;
const StDescDIv = styled.div`
  width: 200px;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

const StImage = styled.img`
  width: 240px;
  height: 240px;
  justify-content: center;
  margin: auto;
  display: flex;
  align-items: center;
  margin-top: 30px;
  border-radius: 10px;
`;
