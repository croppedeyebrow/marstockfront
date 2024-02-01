import styled from "styled-components";
import headlogo from "../../images/LogoSymbolHorizonWhite.svg";
import { Link as RouterLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Common } from "../common/Common";
import MenuIcon from "../../images/HAMBURGER.png";

const Link = styled(RouterLink)`
  text-decoration: none;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 5rem;
  margin-top: 3rem;
`;

const MidBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5rem;
  width: 120rem;
  height: 100%;
  img {
    height: 3rem;
  }
  .link {
    display: flex;
    width: 40%;
    justify-content: space-between;
    font-size: 1.8rem;
    font-weight: 400;
    div {
      display: inline-block;
      color: white;
      line-height: 1;
    }
  }

  @media (max-width: 768px) {
    width: 44rem;
    padding: 0 3rem;
  }
`;

const MenuContainer = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  right: 0;
  width: 200px;
  height: 100%;
  background: white;
  transform: ${(props) =>
    props.isOpen ? "translateX(0)" : "translateX(100%)"};
  transition: ${(props) =>
    props.isOpen ? "transform 0.3s ease-in-out" : "none"};

  @media (min-width: 769px) {
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    position: static;
    background: none;
    transform: none;
    transition: none;
  }
`;

const Menubutton = styled.img`
  display: none;

  @media (max-width: 769px) {
    display: block;
    cursor: pointer;
  }
`;

const Header = () => {
  const { updateLoginStatus, isLogin, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log("isLogin", isLogin);
  useEffect(() => {
    const accessToken = Common.getAccessToken();
    console.log("accessToken", accessToken);
    updateLoginStatus(accessToken);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Container>
        {isLogin ? (
          <MidBox>
            <Link to="/">
              <img src={headlogo} alt="logo" />
            </Link>
            <Menubutton src={MenuIcon} onClick={toggleMenu} />
            <MenuContainer isOpen={isMenuOpen} className="link">
              <Link to="/stockpage">
                <div id="stock">주식</div>
              </Link>
              <Link to="/news">
                <div id="news">뉴스</div>
              </Link>
              <Link to="/signup">
                <div id="sign">마이페이지</div>
              </Link>
              <Link to="/" onClick={logout()}>
                <div id="logout">로그아웃</div>
              </Link>
            </MenuContainer>
          </MidBox>
        ) : (
          <MidBox>
            <Link to="/">
              <img src={headlogo} alt="logo" />
            </Link>
            <Menubutton src={MenuIcon} onClick={toggleMenu} />
            <MenuContainer isOpen={isMenuOpen} className="link">
              <Link to="/stockpage">
                <div id="stock">주식</div>
              </Link>
              <Link to="/news">
                <div id="news">뉴스</div>
              </Link>
              <Link to="/signin">
                <div id="log">로그인</div>
              </Link>
              <Link to="/signup">
                <div id="sign">회원가입</div>
              </Link>
            </MenuContainer>
          </MidBox>
        )}
      </Container>
    </>
  );
};

export default Header;
