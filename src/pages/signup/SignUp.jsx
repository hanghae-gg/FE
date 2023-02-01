// src/pages/home.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import { __postUser } from "../../redux/modules/loginSlice";
import { useDispatch } from "react-redux";
import { __checkId } from "../../redux/modules/loginSlice";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialState = {
    username: "",
    email: "",
    password: "",
    check_password: "",
  };

  //유저 스테이트 생성
  const [user, setUser] = useState(initialState);

  //유저 스테이트 구조분해 할당
  const { email, password, username, check_password } = user;

  //상태관리 위해 초기값 세팅
  const [usernameInput, setusernameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passInput, setPassInput] = useState("");
  const [checkpassInput, setcheckpassInput] = useState("");

  //정규식
  const regEmail =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/;
  const regPassword = /^(?=.[A-Za-z])(?=.\\d)[A-Za-z\\d@$!%*#?&]{8,16}$/;
  const regusername = /^[a-z0-9_-]{4,20}$/;
  //유효성 검사 및 유저 스테이트 작성
  const onChangeUserHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });

    if (name === "username")
      !regusername.test(value)
        ? setusernameInput("소문자 + 숫자 + 언더바/하이픈 허용 4~20자리입니다.")
        : setusernameInput("");

    if (name === "email")
      !regEmail.test(value)
        ? setEmailInput("이메일 형식으로 입력해주세요.")
        : setEmailInput("");

    if (name === "password")
      !regPassword.test(value)
        ? setPassInput(
            `8~16자의 영문 대소문자와 숫자로 입력해주세요.
                           특수문자(!@#$%^&*)도 사용 가능합니다.`
          )
        : setPassInput("");

    if (name === "check_password")
      password !== value
        ? setcheckpassInput("비밀번호가 불일치합니다")
        : setcheckpassInput("");
  };

  // 회원가입 POST요청 및 공백 존재 시 경고창 생성
  const onSubmitUserHandler = (e) => {
    e.preventDefault();
    if (username.trim() === "" || password.trim() === "") {
      return alert("아이디랑 비밀번호를 입력해주세요!");
    }
    if (password !== check_password) {
      return alert("다시 비번좀!");
    }
    dispatch(
      __postUser({
        username,
        password,
        email,
      })
    );
    navigate("/login");
  };
  const onSubmitUserCheckHandler = (e) => {
    e.preventDefault();
    if (username.trim() === "") {
      return alert("아이디를 입력해주세요!");
    }
    dispatch(
      __checkId({
        username,
        password,
        email,
      })
    );
  };

  return (
    <StLayOut>
      <StLoginBox>
        <div className="loginBox">
          <div className="smallBox">
            <h1 className="logoBox">
              <StImg
                onClick={() => navigate("/")}
                src="https://member.op.gg/img_opgglogo.1924961d.svg"
              ></StImg>
            </h1>
            <form>
              <h2 className="signUpTitle">기본정보입력</h2>
              <div className="signUpSub">
                회원가입을 위해서 이메일 인증이 진행되며, 인증이 완료되기 전까지
                회원가입이 완료가 되지 않습니다.
              </div>
              <StPwBox>
                <input
                  type="text"
                  name="username"
                  value={username}
                  placeholder="아이디를 입력해주세요"
                  onChange={onChangeUserHandler}
                ></input>
                <StButton onClick={onSubmitUserCheckHandler}>중복체크</StButton>
              </StPwBox>
              <p id="help-user" className="help">
                {usernameInput}
              </p>

              <StPwBox>
                <input
                  type="email"
                  name="email"
                  value={email}
                  placeholder="이메일을 입력해주세요"
                  onChange={onChangeUserHandler}
                ></input>
              </StPwBox>
              <p id="help-user" className="help">
                {emailInput}
              </p>
              <StPwBox>
                <input
                  type="password"
                  name="password"
                  value={password}
                  placeholder="비밀번호를 입력하세요"
                  onChange={onChangeUserHandler}
                ></input>
              </StPwBox>
              <p id="help-password1" className="help">
                {passInput}
              </p>
              <StPwBox>
                <input
                  type="password"
                  name="check_password"
                  value={check_password}
                  placeholder="비밀번호 확인해주세요"
                  onChange={onChangeUserHandler}
                ></input>
              </StPwBox>
              <p id="help-password2" className="help">
                {checkpassInput}
              </p>
              <StSignUpButtonBox>
                <button
                  onClick={onSubmitUserHandler}
                  className="signUpDisabledBtn"
                >
                  회원가입
                </button>
                <button
                  className="signUpBtn"
                  onClick={() => navigate("/Login")}
                >
                  취소
                </button>
              </StSignUpButtonBox>
              <StLoginPlace>
                이미 회원이신가요?
                <a onClick={() => navigate("/login")}>로그인하기</a>
              </StLoginPlace>
            </form>
          </div>
        </div>
      </StLoginBox>
    </StLayOut>
  );
};

export default SignUp;

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
const StButton = styled.button`
  border: 1px solid #ddd;
  height: 40px;
  width: 80px;
  border-radius: 10px;
  background-color: #46cfa7;
  padding-top: 5px;
  padding-bottom: 10px;
  margin-left: 20%;
  &:hover {
    background: #b075fd;
    color: white;
    transition: 0.5s;
  }
`;

const StPwBox = styled.div`
  margin-top: 27px;
  position: relative;
  padding: 10px 0 11px;
  border-bottom: 1px solid #dddfe4;
  input {
    position: relative;
    z-index: 10;
    border: 0;
    padding: 0;
    background-color: transparent;
    outline: 0;
    ::placeholder {
      font-weight: 400;
      font-size: 14px;
      line-height: 19px;
      width: 100%;
      color: #7b858e;
      bottom: 3px;
      left: 0;
      top: 11px;
      transform-origin: bottom left;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      transition-property: color, bottom, transform;
    }
  }
`;
const StSignUpButtonBox = styled.div`
  margin-top: 40px;
  content: "";
  display: block;
  clear: both;
  .signUpBtn {
    font-size: 16px;
    border-radius: 3px;
    text-decoration: none;
    color: #fff;
    border: 0;
    height: 56px;
    position: relative;
    font-weight: 400;
    line-height: 19px;
    text-align: center;
    background-color: #d5e3ec;
    font-weight: 700;
    cursor: pointer;
    line-height: 56px;
    padding: 0 20px;
    float: right;
    width: 180px;
  }
  .signUpDisabledBtn {
    font-size: 16px;
    border-radius: 3px;
    text-decoration: none;
    color: #fff;
    border: 0;
    height: 56px;
    position: relative;
    font-weight: 400;
    line-height: 19px;
    text-align: center;
    cursor: default;
    font-weight: 700;
    background-color: #1ea1f7;
    line-height: 56px;
    padding: 0 20px;
    float: left;
    width: 180px;
  }
  .canCle {
    background-color: #fff;
    color: #1e2022;
    border: 1px solid #dddfe4;
    font-weight: 400;
    font-size: 16px;
    border-radius: 3px;
    text-decoration: none;
    float: left;
    width: 217px;
    height: 56px;
    cursor: pointer;
  }
`;
const StLoginPlace = styled.div`
  margin-top: 100px;
  text-align: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 60px;
  a {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #1ea1f7;
    text-decoration: underline;
    padding: 0;
    background-color: transparent;
    border: 0;
    margin-left: 12px;
    cursor: pointer;
  }
`;

const StImg = styled.img`
  width: 190px;
  height: 48px;
  cursor: pointer;
`;
