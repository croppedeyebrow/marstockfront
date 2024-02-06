import GlobalStyle from "../utils/style/GlobalStyle";
import Header from "../utils/style/Header";
import Footer from "../utils/style/Footer";
import { Circle, 
         Container,
         InCircle,
         Shadow,
         Space,
         WelcomeBanner,
         InfoContainer,
         Ball,
         RotatingElement,
         CardContainer,
         GuideContainer } from "./MainStyle";
import circle from "../images/MainCircle.png";
import { useEffect, useState } from "react";
import aurora from "../images/BackAurora.svg";
import NoneBtnModalComponent from "../utils/component/NoneBtnModalComponent";
import Recommendation from "../images/Recommendation.png"
import Backstar from  "../images/BackStar.png"
import BackstarReverse from  "../images/BackStarReverse.png"


const MainPage = () => {
   const [ openBanner, setOpenBanner ] = useState(false);
   const [ openInfo, setOpenInfo ] = useState(false);
   const [ isModalOpen, setIsModalOpen ] = useState(false);

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
         <button onClick={() => setIsModalOpen(true)}>모달창 열기</button>
         <NoneBtnModalComponent 
            isOpen={isModalOpen} // useState로 선언한 변수를 isOpen에 넣습니다.
            setIsOpen={setIsModalOpen} // useState로 선언한 변수를 setIsOpen에 넣습니다.
            content="모달테스트." // 모달창에 표시할 내용을 content에 넣습니다.
            closeText="닫기"  // 모달창을 닫을 때 실행할 함수와 버튼에 표시할 텍스트를 close에 넣습니다. func 또는 text 하나씩 단독사용도 가능합니다.
            closeModalHandler={() => setIsModalOpen(false)}
            // customButton="확인" // 모달창에 표시할 버튼 텍스트를 customButton에 넣습니다. 안 써도 됩니다.
            closeButtonStyle={{ b: "blue", textColor: "" }} // 모달창을 닫을 때 버튼의 배경색과 글자색을 설정합니다. 따로 사용하지 않으면 기본 스타일이 적용됩니다. 배경과 글자색만 쓸 수 있습니다.
         />
         <Space>
         <Container>
            <img id="star" src={Backstar} alt="backstar"/>
            <img id="starreverse" src={BackstarReverse} alt="backstarreverse"/>
            <img id="aurora" src={aurora} alt="aurora"/>
            {/* <img id="aurora"  alt="aurora"/> */}
            <img id="circle" src={circle} alt="circle"/>
            <WelcomeBanner open={openBanner}>
               <div id="text">
                  <div style={{fontSize:"5rem", textShadow:"-4px -4px 6px  var(--mainpurple), 3px 3px 6px  var(--mainorange)"}}>주식의 흐름을 그리다, <br/>MARSTOCK</div>
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
                     <div id="infolist">
                        <div id="name">비트코인 1달만에 30000% 상승</div>
                        <div id="media">빅뉴스</div>
                     </div>
                     <div id="infolist">
                        <div id="name">비트코인 1달만에 30000% 상승</div>
                        <div id="media">빅뉴스</div>
                     </div>
                     <div id="infolist">
                        <div id="name">비트코인 1달만에 30000% 상승</div>
                        <div id="media">빅뉴스</div>
                     </div>
                     <div id="infolist">
                        <div id="name">비트코인 1달만에 30000% 상승</div>
                        <div id="media">빅뉴스</div>
                     </div>
                     <div id="infolist">
                        <div id="name">비트코인 1달만에 30000% 상승</div>
                        <div id="media">빅뉴스</div>
                     </div>
                  </div>
               </div>
               <div className="infobox" id="twoinfo">
                  <div id="infoline">
                     <div id="title">TOP 종목</div>
                     <div id="infolist">
                        <div id="rank">1</div>
                        <div id="name">삼성전자</div>
                        <div id="price">123,456</div>
                     </div>
                     <div id="infolist">
                        <div id="rank">1</div>
                        <div id="name">삼성전자</div>
                        <div id="price">123,456</div>
                     </div>
                     <div id="infolist">
                        <div id="rank">1</div>
                        <div id="name">삼성전자</div>
                        <div id="price">123,456</div>
                     </div>
                     <div id="infolist">
                        <div id="rank">1</div>
                        <div id="name">삼성전자</div>
                        <div id="price">123,456</div>
                     </div>
                  </div>
               </div>
               <div className="infobox" id="threeinfo">
                  <div  div id="infoline">
                     <div id="title">시장지표</div>
                     <div id="info1">
                        <div id="infotitle">국내지수</div>
                     </div>

                  </div>
               </div>
            </InfoContainer>
            <CardContainer open={openInfo}>
               <div className="card" id="card1">종목토론</div>
               <div className="card" id="card2">주식 예측</div>
               <div className="card" id="card3">MARSTOCK <br/> 모의투자 시작</div>
               <div className="card" id="card4">실시간 차트</div>
            </CardContainer>
            <GuideContainer open={openInfo}>
               <div className="guide" id="guide01">
                  어떻게 <br/>사용하나요?
               </div>
               <div className="guide" id="guide02">
                  가상계좌의 포인트를 통해 <br/> 모의투자를 시작하세요
               </div>
            </GuideContainer>
         </Container>
         </Space>
         <Footer />
      </>
   )
}
export default MainPage;