import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ExHeader from "../../shared/ExHeader";
import styled from "styled-components";
import axios from "axios";

const Summoners = () => {
  const { id } = useParams();
  const [datas, setDatas] = useState([]);

  const fetchData = async () => {
    axios
      .post(`http://3.38.107.133/records`, id, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setDatas(res);
        console.log(res);
      });
  };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <>
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
        <StHistories>
          <StOneListBox>
            <div>
              <StOneList>
                <StTitleDelete>
                  <Unit>에이</Unit>
                </StTitleDelete>
                <StImage style={{ width: "20%", height: "20%" }} />
              </StOneList>
            </div>
          </StOneListBox>
          <Listt>
            {datas?.map((data) => (
              <StOneListBox key={data.postId}>
                <div>
                  <StOneList>
                    <StTitleDelete>
                      <Unit>{data.title}</Unit>
                    </StTitleDelete>
                    <StImage src={data.image} style={{ width: "20%", height: "20%" }} />
                  </StOneList>
                </div>
              </StOneListBox>
            ))}
          </Listt>
        </StHistories>
      </StBackground>
    </>
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

const StHistories = styled.div``;

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
