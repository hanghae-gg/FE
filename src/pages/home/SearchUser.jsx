import React from "react";
import { useState } from "react";

const HomeMain = ({ history }) => {
  const [username, setUsername] = useState("");

  const handleInput = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    history.push("/summoner/" + username);
  };

  return (
    <div className="homeMain-container">
      <div className="l-container">
        <div className="index-logo">
          <div id="logo">
            <img
              src="img/homeLogo.png"
              className="Image"
              title="베이가"
              alt="베이가"
            />
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="summoner-search-form"
          autoComplete="off"
        >
          <input
            type="text"
            name="username"
            onChange={handleInput}
            className="summoner-search-form__text__suggest"
            placeholder="소환사명 ..."
            autoComplete="off"
          />
          {/* 검색 버튼 부분 */}
          <button type="submit" className="summoner-search-form__button">
            <img src="img/searchBtn.gif" alt="검색" className="btnImg" />
          </button>
        </form>
        {/* 커뮤니티 글목록 부분    */}
      </div>
    </div>
  );
};

export default HomeMain;
