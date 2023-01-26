import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ExHeader from "../../shared/ExHeader";

const MainPage = () => {
  const navigate = useNavigate();
  useEffect(() => {}, []);

  return (
    <>
      <ExHeader></ExHeader>
      <StBackground>
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
        </div>
      </StBackground>
    </>
  );
};
export default MainPage;

const StBackground = styled.div`
  background-color: #292828;
`;

const StImgDiv = styled.div`
  margin: auto;
  text-align: center;
`;

const StImg = styled.img`
  max-height: 224px;
  margin: 50px auto;
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
