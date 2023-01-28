import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import JK from "../../shared/JKHeader";

const Lists = () => {
  const navigate = useNavigate();
  const [lists, setLists] = useState([]);
  // 토큰 값 로컬스토리지에서 지정가져오기
  const token = localStorage.getItem("Authorizationtest");

  const fetchList = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_LIST}/posts`, {
      headers: {
        Authorization: token,
      },
    });
    setLists(data);
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <Listt>
      {lists?.map((list) => (
        <StOneListBox key={list.postId}>
          <div
            key={list.postId}
            onClick={() => {
              console.log(list.postId);
              navigate(`/Detail/${list.postId}`);
            }}
          >
            <div>
              <StOneList>
                <StTitleDelete>
                  <Unit>{list.title}</Unit>
                </StTitleDelete>
                <StImage src={list.image} style={{ width: "20%", height: "20%" }} />
              </StOneList>
            </div>
          </div>
        </StOneListBox>
      ))}
    </Listt>
  );
};

export default Lists;

const StOneListBox = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 10px;
  background-color: #b1c9b0;
  /* border: 1px solid gray; */
  padding: 15px;
  border-radius: 20px;
  width: 700px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StTitleDelete = styled.div`
  margin-right: 240px;
  margin-left: 30px;
`;

const StOneList = styled.div`
  max-width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Listt = styled.div`
  height: fit-content;
  max-width: 1440px;
  /* display: grid; */
  grid-template-columns: repeat(4, 1fr);
  flex-direction: column;
  place-items: center;
  gap: 10px 0px;
  margin-top: 5px;
`;

const Unit = styled.div`
  margin-top: 10px;
  text-align: center;
  font-size: 25px;
  line-height: 20px;
  height: 40px;
  width: 200px;
  color: #000000;
`;

const StImage = styled.img`
  border-radius: 10px 10px 10px 10px;
  max-width: 200px;
  margin-left: -100px;
`;
