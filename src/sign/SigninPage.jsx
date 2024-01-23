import { Background, InputContainer, Logo, InputBox, Link } from "./SignStyle";
import headlogo from "../images/LogoSymbolHorizonWhite.svg";

const SigninPage = () => {
  return (
    <>
      <Background>
        <Link to="/">
          <Logo src={headlogo} alt="logo" />
        </Link>
        <InputContainer>
          <div id="title">Login</div>
          <InputBox id="inputid" placeholder="E-Mail"></InputBox>
          <InputBox id="inputpw" placeholder="Password"></InputBox>
          <div id="linktext">
            <Link to="/findid">
              <span id="forgetid">이메일이 기억나지 않아요</span>
            </Link>
            <Link to="/findpw">
              <span id="forgetpw">비밀번호가 기억나지 않아요</span>
            </Link>
          </div>
          <div id="signbutton">Sign in</div>
          <Link to="/signup">
            <div id="linktext" style={{ textAlign: "center" }}>
              아직 계정이 없으신가요?
            </div>
          </Link>
        </InputContainer>
      </Background>
    </>
  );
};

export default SigninPage;
