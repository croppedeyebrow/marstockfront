import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
   box-sizing: border-box;
  } 

  body {
   margin: 0px;
   padding: 0px;
   font-family: 'Noto Sans KR', sans-serif;
   background-color: var(--mainblack);
  }

  html {
   font-size: 10px;
  }

  :root {
   --mainblack: #111111; // 배경 검은색
	--maindarkpurple: #330033; // 흰배경용 어두운보라
	--mainpurple: #6633cc; // 메인 보라색
	--mainlightpurple: #ab81ff; // 보조 연보라색
   --downblue: #5c76ff; // 하락 파랑
   --upred: #ff5c5c; // 상승 빨강
   --mainorange: #ff6600; // 메인 주황색
   --mainlightorange: #ff954f; // 메인 연주황색
   --gradientorange: linear-gradient(to top, rgba(17, 17, 17, 0.5) 15%, rgba(255, 102, 0, 0.5) 100% ); // background: var(--gradient); 형식으로 배경색 지정 가능
   --gradientpurple: linear-gradient(to top, rgba(17, 17, 17, 0.5) 15%, rgba(102, 51, 204, 0.5) 100% ); // background: var(--gradient); 형식으로 배경색 지정 가능
  }
`;

export default GlobalStyle;