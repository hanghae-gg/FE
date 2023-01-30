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
        <StDetailALl>
          {!isEditMode && (
            <StDetailBox>
              <StPicwithDesc>
                <StListPic>
                  <StImage
                    src={mylist.imageUrl}
                    style={{ width: "80%", height: "80%" }}
                  />
                </StListPic>
                <StDecsBox>
                  <StDescDIv>
                    <h3>{mylist.title}</h3>
                    <br />
                    <StDesc>설명: </StDesc>
                    {mylist.content}
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
                  <StImage
                    src={mylist.imageUrl}
                    style={{ width: "80%", height: "80%" }}
                  />
                  <h3>게시글 수정하기 </h3>
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
                  <br />
                  설명 :
                  <StDescInput
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
      </JK>
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
  justify-content: center;
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
  cursor: pointer;
`;
const StButtonDiv1 = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 170px;
  margin-top: 10px;
  margin-bottom: 20px;
`;
const StButtonDiv = styled.div`
  display: flex;
  justify-content: center;
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
