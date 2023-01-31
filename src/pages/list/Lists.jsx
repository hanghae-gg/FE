import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import JK from "../../shared/JKHeader";

const Lists = () => {
  const navigate = useNavigate();
  const [lists, setLists] = useState([]);
  // 토큰 값 로컬스토리지에서 지정가져오기
  const token = localStorage.getItem("accessToken");

  const fetchList = async () => {
    console.log(process.env.REACT_APP_LIST);
    const { data } = await axios.get(`${process.env.REACT_APP_LIST}/posts`, {
      headers: {
        Authorization: token,
      },
    });
    setLists(data);
  };
  console.log(lists);
  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div>
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
                <StImage
                  src={list.imageUrl}
                  style={{ width: "210px", height: "100px" }}
                />
              </StOneList>
            </div>
          </div>
        </StOneListBox>
      ))}
    </div>
  );
};

export default Lists;

const StOneListBox = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 10px;
  background-color: #c4ddc3;
  /* border: 1px solid gray; */
  padding: 15px;
  border-radius: 20px;
  width: 700px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const StTitleDelete = styled.div`
  margin-right: 240px;
  margin-left: 30px;
`;

const StOneList = styled.div`
  max-width: 1400px;
  display: flex;
  justify-content: space-between;
  &:hover {
    transition: 0.5s;
    background-color: #c8ee9d;
    overflow: hidden;
    scale: 1.2;
  }
`;

const Unit = styled.div`
  margin-top: 36px;
  margin-left: 15%;
  font-size: 25px;
  width: 200px;
  color: #000000;
`;

const StImage = styled.img`
  border-radius: 10px 10px 10px 10px;
  max-width: 400px;
  margin-right: 1%;
`;
