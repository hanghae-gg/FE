import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ExHeader from "../../shared/ExHeader";
import styled from "styled-components";
import axios from "axios";

const Summoners = () => {
  const { id } = useParams();
  const [datas, setDatas] = useState([]);

  const fetchData = async () => {
    console.log(typeof id);
    const { data } = await axios.post(`http://3.38.107.133/records`, id);
    setDatas(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <StBackground>
      <ExHeader />
      <StUserGroup>
        <div>
          <Stimg
            src="https://opgg-static.akamaized.net/images/profile_icons/profileIcon507.jpg?image=q_auto,f_webp,w_auto&v=1674817419282
          "
          />
        </div>
        <UserNRefresh>
          <UserName>유저이름 {datas.nickname}</UserName>
          <RefreshData>전적갱신{datas.win}</RefreshData>
        </UserNRefresh>
      </StUserGroup>
    </StBackground>
  );
};
export default Summoners;

const StBackground = styled.div`
  background-color: #31313c;
  height: 100vh;
`;

const StUserGroup = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 50px;
  margin-left: 20px;
  height: 80vh;
`;

const Stimg = styled.img`
  border-radius: 10px 10px 10px 10px;
`;

const UserNRefresh = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.div`
  margin-top: 20px;
  margin-left: 30px;
  font-size: x-large;
  color: white;
`;

const RefreshData = styled.button`
  width: 90px;
  height: 40px;
  border-radius: 5px 5px 5px 5px;
  background-color: #5383e8;
  margin-top: 20px;
  margin-left: 25px;
  color: white;
`;
