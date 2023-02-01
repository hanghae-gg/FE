import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ExHeader from "../../shared/ExHeader";
import styled from "styled-components";
import axios from "axios";

const Summoners = () => {
  const { id } = useParams();
  const [datas, setDatas] = useState([]);
  const [win, setWin] = useState(true);

  const fetchData = async () => {
    axios
      .post(
        `${process.env.REACT_APP_LIST}/records`,
        {
          nickname: id,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        setDatas(res.data.data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <StBackground>
        <ExHeader />
        <StSummoners>
          <StProfile>
            <StUserGroup>
              <Stimg
                src="https://opgg-static.akamaized.net/images/profile_icons/profileIcon507.jpg?image=q_auto,f_webp,w_auto&v=1674817419282
                "
                style={{ width: "120px", height: "100px" }}
              />
              <UserNRefresh>
                <UserName>{id}</UserName>
                <RefreshData>전적갱신{datas.win}</RefreshData>
              </UserNRefresh>
              <Stimg1
                src="https://w.namu.la/s/b758c3050554b37b5a42718e539a5a37ef1a46959790c798e01fb9e32ef1ab1b8613bb426f5f2dce7dbbf0ccaf29c15d03e90d0dfca0f23bc178b438d32540268b9a3bbff82dc55641f31a7acfdf9f739d69c5bba0d609ac0595b9fca22905e6765e6b9bb431bbc2e9221d3c8cb5faa1"
                style={{ width: "350px", height: "200px" }}
              />
            </StUserGroup>
          </StProfile>

          <StHistories>
            <Listt>
              {datas?.map((data) => (
                <>
                  {data.win ? (
                    <StOneListBox primary={data.win} key={data.kda}>
                      <StOneList>
                        <Win>승리</Win>
                        <StChampionName>
                          <div className="ml-4 mb-3"> {data.championName}</div>
                          <Stchamp
                            src={`https://opgg-static.akamaized.net/meta/images/lol/champion/${data.championName}.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_96&v=1675051980225`}
                            alt={data.championName}
                            style={{ width: "100px", height: "80px" }}
                          />
                        </StChampionName>
                      </StOneList>
                      <Unit>
                        {data.kills}/ {data.deaths} /{data.assists}
                        <br />
                        {data.kda}
                      </Unit>
                    </StOneListBox>
                  ) : (
                    <StOneListBox primary={data.win} key={data.kda}>
                      <StOneList>
                        <StLose>패배</StLose>
                        <StChampionName>
                          <div className="ml-4 mb-3"> {data.championName}</div>
                          <Stchamp
                            src={`https://opgg-static.akamaized.net/meta/images/lol/champion/${data.championName}.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_96&v=1675051980225`}
                            alt={data.championName}
                            style={{ width: "100px", height: "80px" }}
                          />
                        </StChampionName>
                      </StOneList>
                      <Unit>
                        {data.kills}/ {data.deaths} /{data.assists}
                        <br />
                        {data.kda}
                      </Unit>
                    </StOneListBox>
                  )}
                </>
              ))}
            </Listt>
          </StHistories>
        </StSummoners>
      </StBackground>
    </>
  );
};
export default Summoners;

const StBackground = styled.div`
  background-color: #ebeef1;
  height: 200vh;
`;

const StProfile = styled.div`
  background-color: white;
  height: 230px;
  width: 100vw;
`;

const StSummoners = styled.div`
  display: flex;
  flex-direction: column;
`;

const StUserGroup = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 50px;
  margin-left: 29%;
  height: 200px;
`;

const Stimg = styled.img`
  border-radius: 10px 10px 10px 10px;
`;
const Stimg1 = styled.img`
  border-radius: 10px 10px 10px 10px;
  margin-left: 28%;
  margin-top: -35px;
`;
const Stchamp = styled.img`
  border-radius: 30px 30px 30px 30px;
  height: 10%;
  width: 10%;
`;

const UserNRefresh = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.div`
  margin-top: 20px;
  margin-left: 30px;
  font-size: x-large;
  color: black;
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

const StHistories = styled.div`
  margin-left: 24%;
`;

const Listt = styled.div`
  max-width: 70%;
  flex-direction: column;
  gap: 10px 0px;
  margin-top: 5px;
`;

const StOneListBox = styled.div`
  margin-left: 14%;
  margin-top: 10px;
  background-color: #ffbac3;
  color: black;
  font-size: 20px;

  padding: 15px;
  border-radius: 20px;
  max-width: 1000px;
  width: 70%;
  height: 20%;
  display: flex;
  justify-content: space-between;

  ${(props) =>
    props.primary &&
    `
    background : #B3CDFF;
  `}
`;

const StOneList = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 30px;
`;

const Unit = styled.div`
  display: flex;
  justify-content: flex-end;
  text-align: center;
  font-size: 20px;
  height: 40px;
  width: 300px;
  color: black;
  margin: 42px 200px 0px 0px;
`;

const Win = styled.div`
  width: 120px;
  font-size: 30px;
  color: #4242fa;
  margin: 40px 50px 10px 10px;
`;

const StLose = styled.div`
  width: 120px;
  font-size: 30px;
  margin: 40px 50px 10px 10px;
  color: #fd3838ee;
`;
const StChampionName = styled.div`
  width: 120px;
  font-size: 20px;
  margin: 0px 150px 10px 10px;
`;
