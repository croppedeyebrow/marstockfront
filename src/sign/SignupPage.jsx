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
import CommonAxios from "../utils/CommonAxios";
import SmsApi from "../api/SmsApi";

const SignupPage = () => {
  const [allAgree, setAllAgree] = useState(false);
  const [termsAgree, setTermsAgree] = useState(false);
  const [privacyAgree, setPrivacyAgree] = useState(false);
  const [openEmailModal, setOpenEmailModal] = useState(false);
  const [isClose, setIsClose] = useState(true);
  const [sms, setSms] = useState(false);

  // 입력 변수 설정
  const [email, setEmail] = useState();
  const [EPW, setEPW] = useState();
  const [nickName, setNickName] = useState();
  const [tel, setTel] = useState();
  const [cnum, setCnum] = useState();

  const isEmailModal = () => {
    setOpenEmailModal(true);
  };

  const closeEmailModal = () => {
    setOpenEmailModal(false);
  };

  const handleAllAgree = (e) => {
    setAllAgree(e.target.checked);
    setTermsAgree(e.target.checked);
    setPrivacyAgree(e.target.checked);
  };

  // 이메일 인증
  const checkEmail = (e) => {
    const emailRegex = /^[a-zA-Z0-9]+@.+\.com$/;
    const email = e.target.value;
    console.log(email);
    if (emailRegex.test(email)) {
      setOpenEmailModal(true);
      console.log("isOpen", openEmailModal);
      setIsClose(false);
      setEmail(email);
      console.log("isClose", isClose);
      // 인증함수 실행
      authEmail();
      // 모달 오픈
      isEmailModal();
    } else alert("이메일을 확인하세요");
    setIsClose(true);
  };
  // 인증 함수
  const authEmail = async () => {
    try {
      const res = await CommonAxios.getAxios(
        "auth",
        "mailConfirm",
        "email",
        email
      );
      if (res.data === true) {
        // 입력 모달 등장
        alert("이메일 인증번호를 전송합니다.");
      } else {
        alert("이미 존재하는 이메일 혹은 존재하지 않는 이메일입니다.");
      }
    } catch (error) {
      alert("서버의 연결이 불안정 합니다.");
      console.log("이메일 입력:", error);
    }
  };

  // 인증번호 입력
  const onChangeEpw = (e) => {
    setEPW(e.target.value);
  };

  // 입력받은 인증번호 체크
  const checkEPW = async () => {
    try {
      const res = await CommonAxios.getAxios("auth", "ePw", "EPW", EPW);
      if (res.data === true) {
        alert("인증 성공");
      } else {
        alert("인증 실패");
      }
    } catch (error) {
      alert("연결 실패");
    }
  };

  const onChangeNickName = (e) => {
    setNickName(e.target.value);
  };

  // 닉네임 중복 체크
  const onClickCheckNickName = async () => {
    try {
      if (nickName !== "") {
        const checkNickName = await CommonAxios.getAxios(
          "member",
          "nickName",
          "nickName",
          nickName
        );
        // 중복이 없어야 true 설정. false를 받아야 중복이 없는것.
        console.log(checkNickName.data);
        if (checkNickName.data === true) {
          alert("이미 존재하는 닉네임입니다.");
        } else {
          alert("유효한 닉네임입니다.");
        }
      } else {
        alert("닉네임을 입력하세요");
      }
    } catch (error) {
      alert("닉네임 입력 정보를 확인하십시오.", error);
    }
  };

  // 휴대전화 번호

  const onChangeTel = (e) => {
    setTel(e.target.value);
    // console.log("tel:", tel);
  };

  // 인증 번호
  const onChangeCnum = (event) => {
    setCnum(event.target.value);
  };

  // Sms 모달 오픈
  const onBlurSms = () => {
    console.log("tel", tel);
    setSms(true);
  };

  const CloseSms = () => {
    setSms(false);
  };

  // SMS를 보내는 함수
  const handleSendMessage = async () => {
    try {
      const res = await CommonAxios.get("sms", "send-mms", "tel", tel);
      console.log("휴대전화 번호", tel);
      console.log(res.data);
      if (res.data.statusCode === "2000") {
        alert("문자가 발송되었습니다.");
      } else {
        alert("전화 번호를 확인하십시오!!");
      }
    } catch (error) {
      // 오류 발생 시 처리
      alert("연결이 불안정합니다.");
      console.error("SMS 전송 실패:", error);
    }
  };

  // 인증 번호를 보내는 함수
  const handleSendCnum = async () => {
    try {
      const res = await CommonAxios.getAxios("sms", "check", "cnum", cnum);
      if (res.data === true) {
        alert("인증 성공");
      } else {
        alert("인증 실패");
      }
    } catch (error) {
      console.log("인증 연결 실패", error);
    }
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
            closeModalHandler={closeEmailModal}
            isOpen={openEmailModal}
            customButton={false}
            closeText="확인"
            content={
              <>
                <p>인증 번호를 입력하시오.</p>
                <InputBox
                  backgroundColor="white"
                  color="black"
                  placeholder="인증번호"
                  onChange={onChangeEpw}
                ></InputBox>
                <button onClick={checkEPW}>확인</button>
              </>
            }
          />
          <InputBox placeholder="Password"></InputBox>
          <InputBox placeholder="Confirm Password"></InputBox>
          <InputBox
            placeholder="Phone"
            onChange={onChangeTel}
            onBlur={onBlurSms}
          ></InputBox>
          <NoneBtnModalComponent
            isOpen={sms}
            customButton={false}
            closeModalHandler={CloseSms}
            closeText="확인"
            content={
              <>
                <SmsApi
                  send={handleSendMessage}
                  tel={tel}
                  cn={handleSendCnum}
                  cnum={cnum}
                  onChangeCnum={onChangeCnum}
                />
              </>
            }
          />
          <InputBox
            placeholder="Nickname"
            onChange={onChangeNickName}
            onBlur={onClickCheckNickName}
          ></InputBox>
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
