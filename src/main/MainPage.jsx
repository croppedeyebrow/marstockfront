import GlobalStyle from "../utils/style/GlobalStyle";
import Header from "../utils/style/Header";
import Footer from "../utils/style/Footer";
import { Circle, Container, InCircle, Shadow, Space, WelcomeBanner, InfoContainer } from "./MainStyle";
import circle from "../images/MainCircle.png";
import { useEffect, useState } from "react";




const MainPage = () => {
   const [ openBanner, setOpenBanner ] = useState(false);
   const [ openInfo, setOpenInfo ] = useState(false);

   const closeBanner = () => {
      setOpenBanner(false);
      setOpenInfo(true);
      sessionStorage.setItem('openBanner', 'true');
   }

   useEffect(() => {
      const sessionOpen = sessionStorage.getItem('openBanner');
      if (sessionOpen === null) {
         setOpenBanner(true);
      } else {
         setOpenInfo(true);
      }
   }, [])
   
   

   return (
      <>
         <Header />
         <Space>
         <Container>
         <img id="circle" src={circle} alt="circle"/>
         <WelcomeBanner open={openBanner}>
            
            <div id="text">
               <div style={{fontSize:"5rem", textShadow:"-5px -5px 6px  var(--mainpurple), 5px 5px 6px  var(--mainorange)"}}>주식의 흐름을 그리다, <br/>MARSTOCK</div>
               <div style={{fontSize:"1.6rem", fontWeight:"400", marginTop:"3rem"}}>환영합니다! MARSTOCK 은 주식시장의 흐름을 분석하고 시각화하여 실시간으로 제공하는 플랫폼입니다. <br/>
                  우리는 투자 경험을 향상시키기 위해 현명한 결정을 내리는 데 도움이 되는 다양한 도구와 리소스를 제공합니다.<br/>
                  우리의 독특한 기능 중 하나는 사용자들에게 제공하는 모의투자 기회입니다.<br/>
                  <br/>
                  여러분은 가상 자본을 이용하여 실제 주식시장의 상황을 경험하고 다양한 전략을 시험해볼 수 있습니다.<br/>
                  이를 통해 실전과 유사한 환경에서 투자 스킬을 향상시키고 미래의 투자에 대한 자신감을 쌓을 수 있습니다.<br/>
                  <br/>
                  MARSTOCK 은 주식 투자에 대한 지식을 증진하고, 사용자들이 자신만의 투자 전략을 개발하며 성공을 이룰 수 있도록 지원합니다.<br/>
                  함께 성장하고 배우며, 더 나은 금융 미래를 향해 함께 나아가는 여정에 참여해보세요!</div>
               </div>
            <div id="startbutton" onClick={closeBanner}>시작하기</div>
         </WelcomeBanner>
         <InfoContainer open={openInfo}>
            <div className="infobox" id="oneinfo">
               <div id="infoline">
                  <div id="title">주요뉴스</div>
               </div>
            </div>
            <div className="infobox" id="twoinfo">
               <div id="infoline">
                <div id="title">TOP 종목</div>
              </div>
            </div>
            <div className="infobox" id="threeinfo">
               <div  div id="infoline">
                <div id="title">증시동향</div>
              </div>
            </div>
         </InfoContainer>
         </Container>
         </Space>
         <Footer />
      </>
   )
}
export default MainPage;