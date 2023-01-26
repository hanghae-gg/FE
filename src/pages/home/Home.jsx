import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ExHeader from "../../shared/ExHeader";
import lol from "../img/lol.jpg";

const MainPage = () => {
  const navigate = useNavigate();
  useEffect(() => {}, []);

  return (
    <StBackground>
      <ExHeader></ExHeader>
      <StNotice>
        <a href="https://talk.op.gg/s/lol/free/5502311">
          항해99 OP.GG 5조 클론코딩
        </a>
      </StNotice>
      <StImgDiv>
        <StImg src="https://opgg-static.akamaized.net/logo/20221024143822.5f982558178b4dbf96c34ae9b2706d92.png?image=q_auto,f_webp,w_auto&v=1666684602785" />
      </StImgDiv>
      <div className="container mx-auto px-1">
        <StInputBox>
          <StFormBox>
            <StSelectBox>
              <StSmall>Region</StSmall>
              <StSelect>
                <StOption>Korea</StOption>
              </StSelect>
            </StSelectBox>
            <StInputDiv>
              <label>Search</label>
              <input type="text" placeholder="소환사명, 소환사명, ..." />
            </StInputDiv>
            <StSubmitButton>.GG</StSubmitButton>
          </StFormBox>
        </StInputBox>
        <Stboard
          onClick={() => {
            navigate(`/List`);
          }}
        >
          <h1 className="text-4xl italic ml-44 pt-28">게시글로 이동...</h1>
        </Stboard>
      </div>
    </StBackground>
  );
};
export default MainPage;

const StBackground = styled.div`
  background-color: #5383e8;
  height: 100vh;
`;

const StImgDiv = styled.div`
  margin: auto;
  text-align: center;
`;

const StImg = styled.img`
  max-height: 224px;
  margin: 50px auto;
`;
const StNotice = styled.div`
  background-color: #fff064;
  text-align: center;
  padding: 12px 16px;
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  a {
    color: #080101;
    text-decoration: none;
    cursor: pointer;
  }
`;
const StInputBox = styled.div`
  position: relative;
  width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const StFormBox = styled.form`
  background-color: white;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 19%);
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  border-radius: 30px;
  height: 60px;
  text-align: left;
`;

const StSelectBox = styled.div`
  padding-left: 32px;
  padding-right: 8px;
  margin-right: 8px;
  position: relative;
  height: 40px;
`;
const StInputDiv = styled.div`
  position: relative;
  height: 40px;

  label {
    position: absolute;
    z-index: 100;
    display: block;
    font-size: 12px;
    font-weight: bold;
    margin-bottom: 4px;
    font-style: normal;
    cursor: pointer;
  }

  input {
    position: relative;
    width: 480px;
    padding: 20px 0 0;
    border: 0;
    box-sizing: border-box;
    font-size: 14px;
    line-height: 20px;
  }
`;

const StSubmitButton = styled.button`
  background-color: white;
  background-image: url(https://s-lol-web.op.gg/images/icon/icon-gg.svg);
  background-repeat: no-repeat;
  background-size: 42px;
  background-position: 12px center;
  width: 49px;
  font-size: 0;
  box-sizing: content-box;
  cursor: pointer;
  padding-left: 12px;
  height: 90%;
  border: 0px;
  margin-right: 20px;
`;

const StSmall = styled.small`
  display: block;
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 10px;
  font-style: normal;
`;

const StSelect = styled.select`
  border-radius: 0;
  background: #fff;
  border: none;
  vertical-align: middle;
`;

const StOption = styled.option`
  font-weight: normal;
  display: block;
  white-space: nowrap;
  min-height: 1.2em;
  padding: 0px 2px 1px;
`;

const Stboard = styled.div`
  width: 40%;
  height: 300px;
  background-color: white;
  margin-left: 32%;
  margin-top: 8%;
  border-radius: 20px;
  &:hover {
    color: #03000c;
    transition: 0.5s;
    background-image: url(${lol});
    background-position: center;
  }
`;
