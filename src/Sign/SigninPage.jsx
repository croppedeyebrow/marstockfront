import GlobalStyle from "../utils/style/GlobalStyle";
import Header from "../utils/style/Header";
import Footer from "../utils/style/Footer";
import InlineContainer from "../utils/style/InlineContainer";
import styled from "styled-components";
import { useState } from "react";
import { Background, InputContainer, Logo, InputBox } from "./SignStyle";
import headlogo from "../images/LogoSymbolHorizonWhite.svg";

const SigninPage = () => {
   
   return (
      <>
         <Background>
            <Logo src={headlogo} alt="logo"/>
            <InputContainer>
               <div id="title">Login</div>
               <InputBox id="inputid" placeholder="E-Mail"></InputBox>
               <InputBox id="inputpw" placeholder="Password"></InputBox>
               <div id="linktext">
                  <span id="forgetid">이메일이 기억나지 않아요</span>
                  <span id="forgetpw">비밀번호가 기억나지 않아요</span>
               </div>
               <div id="signbutton">Sign in</div>
               <div id="linktext" style={{textAlign:"center"}}>아직 계정이 없으신가요?</div>
            </InputContainer>
         </Background>
      </>
   )
}

export default SigninPage;