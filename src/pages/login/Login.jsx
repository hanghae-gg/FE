import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __postLogin } from "../../redux/modules/loginSlice";

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
    <div>
      <form>
        <h1>이메일 로그인</h1>
        <input
          required //아무것도 입력하지 않으면 안되게
          type="text"
          name="username"
          placeholder="아이디"
          onChange={onChangeLoginHandler}
        ></input>
        <input
          required //아무것도 입력하지 않으면 안되게
          type="password"
          name="password"
          placeholder="비밀번호"
          onChange={onChangeLoginHandler}
        ></input>
        <button onClick={onSubmitLoginHandler}>로그인</button>
        <button
          onClick={() => {
            navigate("/SignUp");
          }}
        >
          회원가입
        </button>
      </form>
    </div>
  );
};

export default Login;
