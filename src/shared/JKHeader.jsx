import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const JK = ({ children }) => {
  const navigate = useNavigate();
  function Header() {
    return (
      <>
        <StSidebarContentHeader>
          <>
            <div className="account-info">
              <span className="account__tier">
                <img
                  className="account__tier-icon"
                  src="https://talk.op.gg/images/game/icon-community-lol.png"
                  alt="level"
                ></img>
              </span>
              <div className="account__info"></div>
            </div>
            <Stjkbtngroup>
              <Stjkbtn
                className="sidebar-button__item-login"
                onClick={() => {
                  navigate("/Write");
                }}
              >
                글작성
              </Stjkbtn>
              <Stjkbtn
                className="sidebar-button__item-login"
                onClick={() => {
                  navigate("/List");
                }}
              >
                리스트
              </Stjkbtn>
              <Stjkbtn
                className="sidebar-button__item-login"
                onClick={() => {
                  navigate("/");
                }}
              >
                홈
              </Stjkbtn>
              <Stjkbtn
                className="sidebar-button__item-login"
                onClick={() => {
                  window.localStorage.clear();
                  navigate("/");
                }}
              >
                로그아웃
              </Stjkbtn>
            </Stjkbtngroup>

            <div className="sidebar-button--row">
              <div className="sidebar-button__item"></div>
            </div>
          </>
        </StSidebarContentHeader>
        <StNotice>
          <a href="https://funky-nail-e73.notion.site/5-SA-fd426716c90a4a3fbda6e395bd9f9b10">
            항해99 OP.GG 5조 클론코딩 SA보러가기
          </a>
        </StNotice>
      </>
    );
  }

  function Footer() {
    return (
      <footer className="bg-slate-800 mt-auto p-5">
        <h1 className="text-2xl md:text-4xl text-white">Footer</h1>
      </footer>
    );
  }

  const layoutStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "90vh",
  };

  return (
    <body>
      <StBackground>
        <Header />
        <div style={{ ...layoutStyles }}>{children}</div>
        {/* <Footer /> */}
      </StBackground>
    </body>
  );
};
export default JK;

const StNotice = styled.div`
  background-color: #000000c0;
  text-align: center;
  padding: 12px 16px;
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  a {
    color: #ffffff;
    text-decoration: none;
    cursor: pointer;
  }
`;

const StBackground = styled.div`
  background-color: #ecfdf5;
  height: 100vh;
`;

const Stjkbtn = styled.button`
  border: black 1px;
  color: white;
  box-shadow: 0px 0px 0px 0px #007144;
  &:hover {
    transition: 0.5s;
    box-shadow: 0px 5px 0px 0px #007144;
    margin-top: 15px;
    margin-bottom: 5px;
  }
`;

const Stjkbtngroup = styled.div`
  margin-left: 20%;
  margin-right: 20%;
  display: flex;
  justify-content: space-between;
`;

const StSidebarContentHeader = styled.div`
  background-color: #46cfa7;
  padding: 16px;

  .sidebar-button-logout {
    display: table;
    width: 100%;
    table-layout: fixed;
  }
  .sidebar-button__item-logout {
    padding-right: 0;
    padding-left: 0;
    display: table-cell;
  }
  .account-info {
    padding-bottom: 16px;
    display: block;

    .account__tier {
      width: 54px;
      height: 54px;
      float: left;
      .account__tier-icon {
        width: 54px;
        height: 54px;
      }
    }
    .account__info {
      float: left;
      width: calc(100% - 62px);
      margin-left: 8px;
    }
    .account__name {
      line-height: 17px;
      font-size: 14px;
      font-weight: 700;
      color: #1e2022;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .account__level {
      margin-top: 4px;
      line-height: 15px;
      font-size: 12px;
      color: #16ae81;
    }
    .level-chart {
      height: 6px;
      margin-top: 8px;
      border-radius: 4px;
      background-color: #ebeef1;
    }
    .level-chart__gauge {
      width: 18%;
      height: 6px;
      border-radius: 4px;
      background-image: linear-gradient(95deg, #1ea1f7, #46cfa7);
    }
    .level-next {
      margin-top: 4px;
      line-height: 15px;
      font-size: 12px;
      text-align: right;
      color: #98a0a7;
    }
  }
  .sidebar-button-login {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 16px;
  }
  .sidebar-button__item-login {
    padding-left: 0;
    display: table-cell;
    margin-top: 16px;
    .white-button {
      width: 79.328px;
      display: block;
      padding: 11px 0 10px;
      line-height: 17px;
      font-size: 14px;
      background-color: #fff;
      box-sizing: border-box;
      text-align: center;
      color: #46cfa7;
      border-radius: 4px;
      border: 1px solid #46cfa7;
      cursor: pointer;
      &:hover {
        background-color: #dddfe4;
      }
    }
    .green-button {
      width: 79.328px;
      display: block;
      padding: 11px 0 10px;
      line-height: 17px;
      font-size: 14px;
      background-color: #46cfa7;
      box-sizing: border-box;
      text-align: center;
      color: #fff;
      border-radius: 4px;
      border: 1px solid #46cfa7;
      cursor: pointer;
      &:hover {
        background-color: #0fb180;
      }
    }
  }
  .link-button {
    text-decoration: none;
    display: block;
  }
  .link-button-green {
    text-decoration: none;
    display: block;
  }
  .sidebar-button--row {
    margin-top: 8px;
    display: table;
    width: 100%;
    table-layout: fixed;
  }
  .sidebar-button__item {
    padding-right: 0;
    padding-left: 0;
    display: table-cell;
    button {
      width: 100%;
      display: block;
      padding: 11px 0 10px;
      line-height: 17px;
      font-size: 14px;
      box-sizing: border-box;
      text-align: center;
      border-color: #46cfa7;
      background-color: #46cfa7;
      color: #fff;
      border-radius: 4px;
      border: 1px solid #dddfe4;
      cursor: pointer;
      &:hover {
        background-color: #0fb180;
      }
    }
  }
`;
