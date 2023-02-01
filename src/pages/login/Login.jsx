import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __postLogin } from "../../redux/modules/loginSlice";
import styled from "styled-components";
import Kakaologin from "./Kakaologin";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //초기값
  const initialState = {
    username: "",
    password: "",
  };

  //유저 스테이트 생성
  const [user, setUser] = useState(initialState);

  //로그인 체크 전역변수 불러오기
  const loginCheck = useSelector((state) => state.userList.isLogin);
  console.log(loginCheck);

  //로그인에 필요한 인풋값 유저스테이트에 저장
  const onChangeLoginHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  //로그인 POST 요청
  const onSubmitLoginHandler = (e) => {
    e.preventDefault();
    if (user.username.trim() === "" || user.password.trim() === "") {
      alert("체크피료해");
    }
    dispatch(__postLogin(user));
  };

  //로그인 체크 확인 시 메인페이지로 이동
  useEffect(() => {
    loginCheck && navigate("/");
  }, [loginCheck, navigate]);

  return (
    <StLayOut>
      <StLoginBox>
        <div className="loginBox">
          <div className="smallBox">
            <div>
              <h1 className="logoBox">
                <StLogo
                  onClick={() => navigate("/")}
                  src="https://member.op.gg/img_opgglogo.1924961d.svg"
                />
              </h1>
            </div>
            <StH2>간편 로그인</StH2>
            <div>
              {/* <a href="https://kauth.kakao.com/oauth/authorize?client_id=bb8c316ab6b257776807176ec5c9609c&redirect_uri=http://hh.gg.s3-website.ap-northeast-2.amazonaws.com&response_type=code"> */}
              <a href="https://kauth.kakao.com/oauth/authorize?client_id=bb8c316ab6b257776807176ec5c9609c&redirect_uri=http://localhost:3000&response_type=code">
                <img
                  src="http://papaspick.com/web/upload/2019_web/icon/kakao_login.jpg"
                  style={{ width: 380, height: 60, marginTop: 5 }}
                />
              </a>
            </div>
            <form>
              <StFaceButton>
                <span>
                  <StFaceImg src="https://member.op.gg/icon_facebook_wh.6ab689d7.svg"></StFaceImg>
                  <span className="faceSpan">페이스북으로 로그인</span>
                </span>
              </StFaceButton>

              <StLoginLine>
                <span className="line">OR</span>
              </StLoginLine>
              <StLoginEmail>이메일 로그인</StLoginEmail>
              <div>
                <StId
                  required //아무것도 입력하지 않으면 안되게
                  type="text"
                  name="username"
                  placeholder="아이디"
                  onChange={onChangeLoginHandler}
                ></StId>
              </div>
              <div>
                <StId
                  required //아무것도 입력하지 않으면 안되게
                  type="password"
                  name="password"
                  placeholder="비밀번호"
                  onChange={onChangeLoginHandler}
                ></StId>
              </div>
              <StLoginCheck>
                <div>
                  <span className=" member__Checkbox ">
                    <input className="checkbox" type="checkbox" />
                  </span>
                  <label>로그인 상태 유지하기</label>
                </div>
              </StLoginCheck>
              <StLoginButton onClick={onSubmitLoginHandler}>로그인</StLoginButton>
              <StSignUp>
                OP.GG에 처음이세요?
                <span>
                  <a onClick={() => navigate("/SignUp")}>회원가입하기</a>
                </span>
              </StSignUp>
            </form>
          </div>
        </div>
      </StLoginBox>
    </StLayOut>
  );
};

export default Login;

const StLayOut = styled.div`
  position: relative;
  min-height: 100%;
  background-color: #f3f5f7;
`;

const StLoginBox = styled.div`
  position: relative;
  min-width: 320px;
  min-height: 100%;
  padding: 120px 0 170px;
  .loginBox {
    position: relative;
    margin: 0 auto;
    width: 450px;
    min-height: 682px;
    background-color: #fff;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
  }
  .smallBox {
    margin: 0 40px;
    padding-bottom: 40px;
  }
  .logoBox {
    padding-top: 48px;
    text-align: center;
    margin-bottom: 42px;
  }
`;

const StLogo = styled.img`
  width: 128px;
  height: 32px;
  cursor: pointer;
`;

const StH2 = styled.div`
  font-weight: 400;
  font-size: 16px;
  margin-top: -6%;
  margin-bottom: 10px;
  line-height: 50px;
`;

const StFaceButton = styled.button`
  margin-top: 12px;
  width: 100%;
  background-color: #3c5a99;
  line-height: 20px;
  font-size: 16px;
  border-radius: 3px;
  display: inline-block;
  text-decoration: none;
  color: #fff;
  border: 0;
  height: 56px;

  .faceSpan {
    font-size: 16px;
    line-height: 19px;
    font-weight: 700;
    color: #fff;
    display: inline-block;
    vertical-align: top;
    margin-top: 4px;
  }
`;

const StFaceImg = styled.img`
  display: inline-block;
  margin-right: 16px;
`;

const StAppleButton = styled.button`
  margin-top: 12px;
  width: 100%;
  background-color: #212529;
  line-height: 20px;
  box-sizing: border-box;
  font-size: 16px;
  border-radius: 3px;
  display: inline-block;
  text-decoration: none;
  color: #fff;
  border: 0;
  height: 56px;
  .appleSpan {
    font-size: 16px;
    line-height: 19px;
    font-weight: 700;
    color: #fff;
    display: inline-block;
    vertical-align: top;
    margin-top: 4px;
  }
`;
const StAppleImg = styled.img`
  display: inline-block;
  margin-right: 16px;
  width: 24px;
  aspect-ratio: auto 24 / 24;
  height: 24px;
`;

const StLoginLine = styled.div`
  position: relative;
  margin-top: 24px;
  font-weight: 400;
  font-size: 12px;
  color: #c5cbd0;
  text-align: center;
  vertical-align: top;
  line-height: 14px;

  .line::before {
    position: absolute;
    top: 6px;
    content: "";
    display: block;
    width: 160px;
    height: 1px;
    background-color: #dddfe4;
    margin-left: 210px;
  }
  .line::after {
    position: absolute;
    top: 6px;
    content: "";
    display: block;
    width: 160px;
    height: 1px;
    background-color: #dddfe4;
  }
`;

const StLoginEmail = styled.h2`
  margin-top: 42px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`;

const StId = styled.input`
  width: 100%;
  margin-top: 27px;
  position: relative;
  padding: 10px 0 11px;
  border-bottom: 1px solid #dddfe4;
`;
const StLoginCheck = styled.div`
  position: relative;
  div {
    float: left;
    margin-top: 16px;
  }
  span {
    position: relative;
    display: inline-block;
    vertical-align: top;
    font-size: 0;
    width: 22px;
    height: 22px;
    border-radius: 3px;
    background-color: #fff;
    border: 1px solid #dddfe4;
  }
  .checkbox {
    position: absolute;
    z-index: 9;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    outline: 0;
    -webkit-appearance: none;
    margin: 0;
    cursor: pointer;
  }
  .member__Checkbox::after {
    position: absolute;
    left: 5px;
    top: 5px;
    content: "";
    display: block;
    width: 13px;
    height: 10px;
    background: url(https://member.op.gg/icon_check_bl.10732f6d.svg) no-repeat 0 0;
  }
  label {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #52595f;
    margin-left: 8px;
    margin-top: 4px;
    line-height: 17px;
    display: inline-block;
  }
  .PwTrimButton {
  }
`;

const StLoginButton = styled.button`
  font-size: 16px;
  border-radius: 3px;
  display: inline-block;
  text-decoration: none;
  color: #fff;
  border: 0;
  height: 56px;
  margin-top: 40px;
  width: 100%;
  position: relative;
  font-weight: 400;
  line-height: 19px;
  text-align: center;
  background-color: #1ea1f7;
  font-weight: 700;
  cursor: pointer;
  line-height: 56px;
  padding: 0 20px;
`;

const StSignUp = styled.div`
  position: relative;
  text-align: center;
  margin-top: 16px;

  span {
    margin-left: 12px;
  }
  a {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #1ea1f7;
    text-decoration: underline;
    cursor: pointer;
  }
`;
