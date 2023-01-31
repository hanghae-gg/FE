import React from "react";

export default function Kakaologin() {
  return (
    <div>
      <a href="https://kauth.kakao.com/oauth/authorize?client_id=bb8c316ab6b257776807176ec5c9609c&redirect_uri=localhost:8080_URL&response_type=code">
        <img
          src="https://developers.kakao.com/docs/latest/ko/assets/style/images/design-guide/login-button-standard.png"
          style="height:60px"
        />
      </a>
    </div>
  );
}
