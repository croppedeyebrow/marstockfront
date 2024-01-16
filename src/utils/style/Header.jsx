import styled from "styled-components"
import headlogo from "../../images/LogoSymbolHorizonWhite.svg"

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
            <img src={headlogo} alt="logo" />
            <div className="link">
               <div id="stock">주식</div>
               <div id="news">뉴스</div>
               <div id="log">로그인</div>
               <div id="sign">회원가입</div>
            </div>
         </MidBox>
      </Container>
   </>
   )
};

export default Header;