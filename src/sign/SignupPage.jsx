import GlobalStyle from "../utils/style/GlobalStyle";
import Header from "../utils/style/Header";
import Footer from "../utils/style/Footer";
import InlineContainer from "../utils/style/InlineContainer";
import styled from "styled-components";
import { useState } from "react";
import { Background, InputContainer, Logo, InputBox, CheckBox, CheckBoxLabel } from "./SignStyle";
import headlogo from "../images/LogoSymbolHorizonWhite.svg";

const SignupPage = () => {
   const [allAgree, setAllAgree] = useState(false);
   const [termsAgree, setTermsAgree] = useState(false);
   const [privacyAgree, setPrivacyAgree] = useState(false);
   
   const handleAllAgree = (e) => {
      setAllAgree(e.target.checked);
      setTermsAgree(e.target.checked);
      setPrivacyAgree(e.target.checked);
   }
   return (
      <>
         <Background>
            <Logo src={headlogo} alt="logo"/>
            <InputContainer>
               <div id="title">Sign up</div>
               <InputBox id="inputid" placeholder="E-Mail"></InputBox>
               <InputBox id="inputpw" placeholder="Password"></InputBox>
               <InputBox id="inputpw" placeholder="Confirm Password"></InputBox>
               <InputBox id="inputpw" placeholder="Phone"></InputBox>
               <InputBox id="inputpw" placeholder="Nickname"></InputBox>
               <InputBox id="inputpw" placeholder="birth"></InputBox>
               <div id="agreeBox">
                  <CheckBoxLabel style={{fontWeight: "500", fontSize: "1.7rem"}}>
                  <CheckBox checked={allAgree} onChange={handleAllAgree} />
                  모두 동의
                  </CheckBoxLabel>
                  <CheckBoxLabel>
                  <CheckBox checked={termsAgree} onChange={(e) => setTermsAgree(e.target.checked)}/>
                  이용약관
                  </CheckBoxLabel>
                  <CheckBoxLabel>
                  <CheckBox checked={privacyAgree} onChange={(e) => setPrivacyAgree(e.target.checked)}/>
                  개인정보처리방침
                  </CheckBoxLabel>
               </div>
               <div id="signbutton">Sign up</div>
            </InputContainer>
         </Background>
      </>
   )
}

export default SignupPage;