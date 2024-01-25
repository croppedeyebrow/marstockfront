import styled from "styled-components"
import headlogo from "../../images/LogoSymbolHorizonWhite.svg"
import { Link as RouterLink } from "react-router-dom";

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
   
`;

const Header = () => {

   return (
      <>
      <Container>
         <MidBox>
         <Link to="/"><img src={headlogo} alt="logo" /></Link>
            <div className="link">
               <Link to="/stockinfo"><div id="stock">주식</div></Link>
               <Link to="/news"><div id="news">뉴스</div></Link>
               <Link to="/signin"><div id="log">로그인</div></Link>
               <Link to="/signup"><div id="sign">회원가입</div></Link>
            </div>
         </MidBox>
      </Container>
   </>
   )
};

export default Header;