import GlobalStyle from "../utils/style/GlobalStyle";
import Header from "../utils/style/Header";
import Footer from "../utils/style/Footer";
import InlineContainer from "../utils/style/InlineContainer";
import styled from "styled-components";
import { useState } from "react";
import { Background, InputContainer, Logo, InputBox, Link } from "./SignStyle";
import headlogo from "../images/LogoSymbolHorizonWhite.svg";

const FindIdPage = () => {
   
   return (
      <>
         <Background>
            <Link to="/"><Logo src={headlogo} alt="logo"/></Link>
            <InputContainer style={{gap:"2rem"}}>
               <div id="title">Find Id</div>
               <InputBox id="inputid" placeholder="Phone"></InputBox>
               <div id="codebutton">인증번호 전송</div>
               <InputBox id="inputpw" placeholder="Code"></InputBox>
               <div id="codebutton">인증번호 확인</div>
               <div id="linktext">
                  <Link to={"/findpw"} style={{textAlign:"center", marginTop:"2rem"}}><span id="forgetpw">비밀번호가 기억나지 않아요</span></Link>
               </div>
               <Link to={"/signup"}><div id="linktext" style={{textAlign:"center"}}>아직 계정이 없으신가요?</div></Link>
            </InputContainer>
         </Background>
      </>
   )
}

export default FindIdPage;