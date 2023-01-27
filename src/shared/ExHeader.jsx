// import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
// import { useRecoilState } from "recoil";
import styled from "styled-components";
// import { logoutState } from "../redux/modules/userSlice";
// import { Login } from "../store/store";

const MainHeader = () => {
  const navigate = useNavigate();
  //   const dispatch = useDispatch();
  const token = localStorage.getItem("Access_Token");

  //   const [isLogin, setIsLogin] = useRecoilState(Login);
  const LogoutButton = () => {
    localStorage.removeItem("Access_Token");

    // dispatch(logoutState());
    // setIsLogin(false);
    navigate("/");
    alert("로그아웃이 완료되었습니다");
  };
  return (
    <StHeader>
      <StHeaderContainer>
        <StLogoContainer>
          <StLogoLink to="/">
            <StLogoImg src="https://s-lol-web.op.gg/images/icon/opgglogo.svg?v=1666684602785" />
          </StLogoLink>
        </StLogoContainer>
        <StNavigationContontainer>
          <StTolkpggContainer>
            <StTolkpggBox>
              <StTolkpggSpan>
                <StTolkpggImg src="https://opgg-gnb.akamaized.net/static/images/icons/img-navi-lol-white.svg?image=q_auto,f_webp,w_48&v=1666684602785" />
              </StTolkpggSpan>
              리그오브레전드
            </StTolkpggBox>
          </StTolkpggContainer>
          <StNavigationListContainer>
            {token ? (
              <StHeaderLogoutToggle>
                <StDropdown>
                  <StDropDownList>
                    <StDropDownListItem>
                      <StUserSetButton>계정 설정</StUserSetButton>
                      <StUserSetButton onClick={LogoutButton}>
                        로그아웃
                      </StUserSetButton>
                    </StDropDownListItem>
                  </StDropDownList>
                </StDropdown>
              </StHeaderLogoutToggle>
            ) : (
              <HeaderLoginButton onClick={() => navigate("/login")}>
                로그인
              </HeaderLoginButton>
            )}
          </StNavigationListContainer>
        </StNavigationContontainer>
      </StHeaderContainer>
      <StSecondHeaderContainer>
        <StSecondNavigationContentainer>
          <StLeftHeader>
            <StSecondLolA>홈</StSecondLolA>
            <StSecondWatchA to="/List">커뮤니티</StSecondWatchA>
          </StLeftHeader>
        </StSecondNavigationContentainer>
      </StSecondHeaderContainer>
    </StHeader>
  );
};

export default MainHeader;

const StHeader = styled.div`
  min-height: 40px;
  background-color: #28344e;
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  position: sticky;
  top: 0;
  word-break: keep-all;
`;
const StHeaderContainer = styled.div`
  background-color: rgb(40, 52, 78);
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  flex-wrap: nowrap;
  -webkit-box-pack: justify;
  justify-content: space-between;
  position: relative;
  box-sizing: border-box;
  height: 40px;
  padding: 0 0 0 98px;
  vertical-align: baseline;
`;
const StLogoContainer = styled.div`
  margin: 0;
  padding: 0;
  border: 0;
  word-break: keep-all;
  position: absolute;
  left: 0;
  top: 0;
  width: 98px;
  background: #5383e8;
  vertical-align: baseline;
`;
const StLogoLink = styled(Link)`
  text-decoration: none;
  margin: 0;
  border: 0;
  word-break: keep-all;
  display: block;
  padding: 12px 0;
  color: #fff;
  font-size: 16px;
  text-align: center;
  line-height: 0;
  cursor: pointer;
`;
const StNavigationContontainer = styled.div`
  margin: 0;
  padding: 0;
  border: 0;
  word-break: keep-all;
  -webkit-box-flex: 1;
  flex: 1;
  display: flex;
`;
// margin-right: 120px!important;
const StLogoImg = styled.img`
  width: 65px;
  height: 16px;
`;
const StTolkpggContainer = styled.div`
  margin: 0;
  padding: 0;
  border: 0;
  word-break: keep-all;
  position: relative;
  display: inline-block;
  height: 40px;
  background: #5383e8;
  color: #fff;
`;
const StTolkpggBox = styled.div`
  margin: 0;
  border: 0;
  word-break: keep-all;
  position: relative;
  height: 40px;
  line-height: 40px;
  padding: 0 12px 0 32px;
  color: #fff;
  font-size: 12px;
  white-space: nowrap;
  box-sizing: border-box;
  vertical-align: middle;
`;
const StTolkpggSpan = styled.span`
  padding: 0;
  border: 0;
  word-break: keep-all;
  position: absolute;
  left: 3px;
  top: 50%;
  align-content: center;
  width: 24px;
  height: 24px;
  margin: -12px 0 0;
  display: flex;
`;
const StTolkpggImg = styled.img`
  margin: 0;
  padding: 0;
  word-break: keep-all;
  max-width: 100%;
  border: none;
  vertical-align: top;
  width: 100%;
  height: 100%;
`;
const StNavigationListContainer = styled.div`
  margin: 0;
  padding: 0;
  border: 0;
  word-break: keep-all;
  -webkit-box-flex: 1;
  flex: 1;
  vertical-align: baseline;
`;

const StSecondHeaderContainer = styled.div`
  padding: 0;
  overflow-x: hidden;
  overflow: visible;
  background: #5383e8;
  border-bottom: 1px solid #5383e8;
  border: 0;
  vertical-align: baseline;
  margin: 0;
  height: 48px;
`;
const StSecondNavigationContentainer = styled.div`
  max-width: 1044px;
  margin: 0 auto;
  display: block;
  padding: 0;
  border: 0;
`;
const StLeftHeader = styled.div`
  float: left;
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  justify-content: flex-start;
  align-items: center;
  width: auto;
`;
const StSecondLolA = styled(Link)`
  display: block;
  float: left;
  line-height: 48px;
  margin-left: 0;
  position: relative;
  align-items: center;
  height: 48px;
  font-size: 15px;
  box-sizing: border-box;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
`;
const StSecondWatchA = styled(Link)`
  display: block;
  float: left;
  line-height: 48px;
  position: relative;
  display: flex;
  align-items: center;
  height: 48px;
  font-size: 15px;
  box-sizing: border-box;
  color: #00fede;
  margin-left: 24px;
  text-decoration: none;
  cursor: pointer;
  margin: 0;
  padding: 0;
  border: 0;
  margin-left: 24px;
`;

const HeaderLoginButton = styled.button`
  font-size: 12px;
  margin-top: 7px;
  margin-right: 10px;
  min-width: 50px;
  vertical-align: top;
  text-align: center;
  line-height: 15px;
  padding: 8px 0 7px;
  float: right;
  color: white;
  border: 0px;
  border-radius: 5px;
  width: 68px;
  height: 26px;
  background-color: #5383e8;
  cursor: pointer;
`;
const StHeaderLogoutToggle = styled.button`
  margin-top: 4px;
  float: right;
  background: none;
  display: flex;
  position: relative;
  cursor: pointer;
  margin: 0;
  font-size: 14px;
  outline: 0;
  appearance: auto;
  text-rendering: auto;
  letter-spacing: normal;
  word-spacing: normal;
  line-height: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  text-align: center;
  align-items: flex-start;
  box-sizing: border-box;
  border: 0px;
  flex-direction: column;
`;
const StHeaderLogoutSpan = styled.span`
  font-size: 12px;
  color: #c3cbd1;
  position: relative;
  min-width: 120px;
  text-align: right;
  vertical-align: middle;
  float: right;
`;
const StLogoutImg = styled.img`
  padding: 4px 0 4px 4px;
  vertical-align: middle;
`;
const StDropdown = styled.div`
  justify-content: left;
  text-align: left;
  display: none;
  top: 40px;
  right: 5px;
  position: absolute;
  width: 160px;
  box-shadow: 0 4px 12px 0 rgb(0 0 0 / 20%);
  background-color: #fff;
  ${StHeaderLogoutToggle}:hover & {
    display: block;
  }
`;
const StDropDownList = styled.ul`
  list-style: none;
  display: block;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 15px;
`;
const StDropDownListItem = styled.li`
  display: flex;
  margin: 0;
  border: 0;
  vertical-align: baseline;
  flex-direction: column;
  justify-content: left;
`;
const StUserSetButton = styled.a`
  box-sizing: border-box;
  padding: 0;
  font-size: 14px;
  color: #1e2022;
  border: 0;
  border-radius: 0;
  width: 100%;
  padding: 10px 0;
`;
