import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import JK from "../../shared/JKHeader";

// 토큰 값 로컬스토리지에서 지정가져오기
const token = localStorage.getItem("Authorizationtest");

const Index = () => {
  const navigate = useNavigate();
  const [lists, setLists] = useState([]);

  const fetchList = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_LIST}/posts`, {
      headers: {
        Authorization: token,
      },
    });
    setLists(data);
  };

  const onClickDeleteLists = async (id) => {
    const result = window.confirm("삭제하시겠습니까?");
    if (!token) {
      return alert("로그인을 해주세요");
    } else {
      if (result) {
        await axios.delete(`${process.env.REACT_APP_LIST}/posts/${id}`, {
          headers: {
            Authorization: token,
          },
        });
      } else {
        return;
      }
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <JK>
      <StContent>
        <Listt>
          {lists?.map((list) => {
            return (
              <StOneListBox key={list.postId}>
                <div
                  key={list.postId}
                  onClick={() => {
                    navigate(`/Detail/${list.postId}`);
                  }}
                >
                  <StImage src={list.image} style={{ width: "100%", height: "100%" }} />
                </div>
                <div>
                  <StOneList>
                    <br />
                    <div>
                      <span>
                        <Unit>{list.title}</Unit>
                      </span>
                    </div>
                    <br />
                    <div>
                      <StButton
                        type="button"
                        onClick={() => {
                          onClickDeleteLists(list.postId);
                        }}
                      >
                        삭제하기
                      </StButton>
                    </div>
                  </StOneList>
                </div>
              </StOneListBox>
            );
          })}
        </Listt>
      </StContent>
    </JK>
  );
};

export default Index;

const StOneListBox = styled.div`
  margin-left: 20px;
  background-color: #dadada;
  /* border: 1px solid gray; */
  padding: 15px;
  border-radius: 20px;
  width: 300px;
  height: fit-content;
`;

const StOneList = styled.div``;

const Listt = styled.div`
  height: fit-content;
  max-width: 1440px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
  gap: 70px 0px;
  margin-top: 35px;
`;

const Unit = styled.div`
  text-align: center;
  font-size: 30px;
  line-height: 20px;
  color: #000000;
`;
const StButton = styled.button`
  margin: auto;
  background-color: black;
  margin-top: 10px;
  text-align: center;
  width: 70px;
  height: 30px;
  opacity: 0.9;
  display: flex;
  flex-direction: column;
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
const StImage = styled.img`
  width: 240px;
  height: 240px;
  justify-content: center;
  margin: auto;
  display: flex;
  align-items: center;
`;

const StContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
