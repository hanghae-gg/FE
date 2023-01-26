# 클론프로젝트 "항해.GG" (React)

<!-- ### :link: [프로젝트 바로가기](http://clone--project.s3-website.ap-northeast-2.amazonaws.com/ "프로젝트") -->

<br/>

## :pushpin: Summary

**OP.GG라는 게임 커뮤니티 사이트를 최대한 유사하게 구현한 프로젝트입니다.** 서비스되고 있는 웹페이지를 선정하여 CSS적으로 최대한 유사하게 구현해보는 것을 목적으로 실시한 프로젝트입니다.

기존 프로젝트의 MVP 기능과 스코프를 비슷하게 하여, React와 Redux의 사용을 숙달할 수 있었고 현업에서 어떤 CSS속성을 사용하는지 공부해보고, 내것으로 만들 수 있는 시간이었습니다. 평소에 자주 사용하였지만 정확한 원리를 모르고 사용했었던 속성들에 대해서 공부하는 시간을 가질수 있었습니다.
모든페이지를 구현해보고싶었지만, 1주일이라는 시간적 제약으로 인하여 메인페이지와 커뮤니티 페이지만 구현하였습니다.

<br/>

## :bulb: 주요기능

1. 회원가입(유효성검사, 헬퍼 텍스트, 중복확인)
2. 로그인(토큰저장)
3. 로그인/로그아웃 상태에 따른 헤더 반응
4. 게시글 작성/조회/수정/삭제(이미지포함)
5. 댓글 작성/조회/수정/삭제
6. 좋아요 기능, 조회수 기능
7. 리스트 조회
8. 유저 전적 검색
   <br/>

## :mag_right: Meaning

그동안 정확한 기능을 모르고 사용해왔던 CSS 속성들을 자세하게 알아가며 적용해본 프로젝트입니다. MVP기능의 스코프는 이전 프로젝트와 유사하지만, 실제로 많은 사용자가 이용하고 있는 웹페이지를 유사하게 클론해본다는 점에서 의미가 있는 프로젝트였습니다.

기존의 프로젝트는 UI/UX적인 요소가 반영되지않고, 기능구현만을 위한 단순한 디자인의 프로젝트였기때문에 CSS 적용이 쉬운편이었습니다. 하지만 사용자의 편의성을 고려해 만들어진 실제 웹페이지의 네비게이션바와 여러가지 드롭다운 모션, 화면의 배치는 구성이 복잡하고 CSS 속성들에 자세히 알지 못하면 구현하기 어려운 작업이었습니다.

개발자도구를 이용해 화면의 구성이 어떻게 이루어지고, 네비게이션 바에는 어떤 애니메이션기능이 있는지 확인해보면서 지금까지 아무 생각없이 이용해왔던 웹페이지들이 얼마나 복잡하게 이루어져있는지 깨달을 수 있었습니다. 개발자로서 로직을 잘짜고, 알고리즘을 효율적으로 풀어나가는 역량도 중요하겠지만, 고객이 원하고 내가 원하는 화면을 마음대로 구현할 수 있는 역량도 중요하다는 것을 직접 느껴볼 수 있는 시간이었습니다.

프로젝트 기간이 부족하여, 소셜로그인 기능과 에디터를 활용한 게시판 구현을 실현하지 못한게 아쉬운 프로젝트기간이었지만 짧은 기간 동안 많은 내용을 공부할 수 있었던 시간이었습니다.

실제 웹페이지와 정말 유사하게 구현할 수 있을 정도로 CSS를 공부했고, 라이브러리를 사용하지않고 페이지네이션을 구현해보고, 검색기능을 추가해 적용시켜 볼 수 있었습니다. 그리고 Redux의 보일러코드를 줄여주고 불편한 API 통신 절차를 개선해줄 React-query와 Recoil을 일부적용해 봄으로써 프론트엔드 개발자로써 기술스택의 범위를 확장했다는 점에서 의미가 있었습니다.

<br/>

## :hammer: Technology Stack
<img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white"/><img src="https://img.shields.io/badge/Redux-764ABC?style=flat&logo=Redux&logoColor=white"/><img src="https://img.shields.io/badge/Axios-5A29E4?style=flat&logo=Axios&logoColor=white"/><img src="https://img.shields.io/badge/Json-000000?style=flat&logo=Json&logoColor=white"/><img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=flat&logo=Tailwind&logoColor=white"/><img src="https://img.shields.io/badge/styled-components-DB7093?style=flat&logo=Tailwind&logoColor=white"/>

<br/>

## :family: Members

1. 이정우(Frontend)
2. 홍정기(Frontend)
3. 왕윤종(Backend)
4. 이상휘(Backend)
5. 이신정(Backend)
6. 유민우(Backend)

<br/>  
  
<!-- ## :camera: 로그인 페이지  
![스크린샷_20221106_105926](https://user-images.githubusercontent.com/113274559/203824357-a870d33b-6aa5-42b0-afe5-b0fe82bbef98.png)
![스크린샷_20221125_124159](https://user-images.githubusercontent.com/113274559/203824380-7d2d0057-a390-4ebf-a656-c6983b50362b.png)

## :camera: 회원가입 페이지

![스크린샷_20221125_124125](https://user-images.githubusercontent.com/113274559/203825688-8152e890-bce9-4fe6-a3a7-81cb2bde04a4.png)  
![스크린샷_20221125_124142](https://user-images.githubusercontent.com/113274559/203825711-7fd6ecb8-a0d1-494c-8c16-7b54af6e0352.png)

## :camera: 메인페이지

![스크린샷_20221125_124102](https://user-images.githubusercontent.com/113274559/203825503-7930f2ae-fe3e-4806-b563-58afad6e5cf8.png)

## :camera: 전체 글 조회

![스크린샷_20221125_124227](https://user-images.githubusercontent.com/113274559/203825079-d139e1e6-89c4-4606-9ccb-12c143cda6ab.png)

## :camera: 상세 글 조회

![스크린샷_20221125_124305](https://user-images.githubusercontent.com/113274559/203825114-ad6fb0c4-187b-4f67-8f87-85cb1035bc06.png)

## :camera: 댓글CRUD

![스크린샷_20221125_124320](https://user-images.githubusercontent.com/113274559/203825189-e0187796-b7bc-427c-8cbe-cc3e95a8e596.png) -->
