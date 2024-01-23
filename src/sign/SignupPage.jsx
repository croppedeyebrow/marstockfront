import { useState } from "react";
import {
  Background,
  InputContainer,
  Logo,
  InputBox,
  CheckBox,
  CheckBoxLabel,
  Link,
} from "./SignStyle";
import headlogo from "../images/LogoSymbolHorizonWhite.svg";
import NoneBtnModalComponent from "../utils/component/NoneBtnModalComponent";

const SignupPage = () => {
  const [allAgree, setAllAgree] = useState(false);
  const [termsAgree, setTermsAgree] = useState(false);
  const [privacyAgree, setPrivacyAgree] = useState(false);
  const [openEmailModal, setOpenEmailModal] = useState(false);

  // 모달창 닫기
  const onClickClose = (e) => {
    setOpenEmailModal(false);
  };

  // 이메일 인증
  const checkEmail = (e) => {
    //  console.log(e.target.value);
    //  console.log("이벤트 발생");
    const emailRegex = /^[a-zA-Z0-9]+@.+\.com$/;
    const email = e.target.value;
    if (emailRegex.test(email)) {
      setOpenEmailModal(true);
    } else alert("이메일을 확인하세요");
  };

  const handleAllAgree = (e) => {
    setAllAgree(e.target.checked);
    setTermsAgree(e.target.checked);
    setPrivacyAgree(e.target.checked);
  };

  //   const closeButtonStyle = {};
  return (
    <>
      <Background>
        <Link to="/">
          <Logo src={headlogo} alt="logo" />
        </Link>
        <InputContainer>
          <div id="title">Sign up</div>
          <InputBox placeholder="E-Mail" onBlur={checkEmail}></InputBox>
          <NoneBtnModalComponent
            isOpen={openEmailModal}
            customButton={false}
            close={false}
            closeText="확인"
            content={
              <>
                <p>인증 받을 이메일을 입력하시오.</p>
                <InputBox
                  backgroundColor="white"
                  color="black"
                  placeholder="E-mail"
                ></InputBox>
              </>
            }
          />
          <InputBox placeholder="Password"></InputBox>
          <InputBox placeholder="Confirm Password"></InputBox>
          <InputBox placeholder="Phone"></InputBox>
          <InputBox placeholder="Nickname"></InputBox>
          <InputBox placeholder="birth"></InputBox>
          <div id="agreeBox">
            <CheckBoxLabel style={{ fontWeight: "500", fontSize: "1.7rem" }}>
              <CheckBox checked={allAgree} onChange={handleAllAgree} />
              모두 동의
            </CheckBoxLabel>
            <CheckBoxLabel>
              <CheckBox
                checked={termsAgree}
                onChange={(e) => setTermsAgree(e.target.checked)}
              />
              이용약관
            </CheckBoxLabel>
            <CheckBoxLabel>
              <CheckBox
                checked={privacyAgree}
                onChange={(e) => setPrivacyAgree(e.target.checked)}
              />
              개인정보처리방침
            </CheckBoxLabel>
          </div>
          <div id="signbutton">Sign up</div>
        </InputContainer>
      </Background>
    </>
  );
};

export default SignupPage;
