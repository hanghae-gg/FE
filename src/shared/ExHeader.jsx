import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const MainHeader = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("accessToken");

  const LogoutButton = () => {
    localStorage.removeItem("accessToken");

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
              <HeaderLoginButton onClick={LogoutButton}>
                로그아웃
              </HeaderLoginButton>
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
            <StSecondLolA to="/">홈</StSecondLolA>
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
  margin-left: 10px;
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
  float: right;
  color: white;
  border: 0px;
  border-radius: 5px;
  width: 68px;
  height: 26px;
  background-color: #5383e8;
  cursor: pointer;
`;
