import GlobalStyle from "../utils/style/GlobalStyle";
import Header from "../utils/style/Header";
import Footer from "../utils/style/Footer";
import InlineContainer from "../utils/style/InlineContainer";
import pointwallet from "../images/wallet.png";
import styled from "styled-components";
import { useState } from "react";
import {
  MyPageContainer,
  Pagename,
  MyPagetop,
  MyPagetopleft,
  MyPagetopright,
  MyPointBox,
  PointName,
  PointWallet,
  PointZone,
  PointAdd,
  MyTradingINfo,
  InerRectangle,
  InfoTitle,
  InfoBox,
  TotalBuy,
  TotalRevenue,
  RevenuePercent,
  BuyCount,
  RevenueCount,
  PercentCount,
  MyAssetBox,
  AssetTitle,
  AssetPoint,
  UpdownBox,
  GraphBox,
  MyPageBottom,
  BottomInnerBox,
  BottomTitle,
  TitleLine,
  StockInfoBox,
  StockInfoTitle,
  StockInfoTitleText,
  MyStockNumber,
  StockInfoText01,
  StockInfoText02,
  StockInfoText03,
  StockInfoText04,
  StockInfoText05,
  StockInfoText06,
  StockInfoText07,
  StockInfoText08,
} from "./MyStyle";
import MyChart from "./mycomponent/MyChart";

const MyPage = () => {
  // InlineContainer의 color = "orange" 를 입력하면 오렌지색 배경이 나오고, 공백("")인 경우는 보라색 배경이 나온다.

  //내 주식 데이터 10개 반복, 추후에 데이터 불러오면, 무한스크롤? or 페이지네이션 적용.
  const stockData = Array(10)
    .fill()
    .map((_, index) => ({
      name: `주식`,
      code: `종목 코드`,
      price: `가격`,
      quantity: `매입 수량`,
      totalpurchase: `총매입가`,
      current: `현재가`,
      changerate: `수익률%`,
      totalrevenue: `총 수익액`,
    }));

  return (
    <>
      <Header />
      <InlineContainer
        color=""
        contents={
          <MyPageContainer>
            <Pagename>Portfolio</Pagename>
            <MyPagetop>
              <MyPagetopleft>
                <MyPointBox>
                  <PointName>
                    My Point
                    <PointWallet alt="포인트지갑" src={pointwallet} />
                  </PointName>
                  <PointZone>8,000,000 P</PointZone>
                  <PointAdd>충전하러 가기</PointAdd>
                </MyPointBox>

                <MyTradingINfo>
                  <InerRectangle>
                    <InfoTitle>거래내역[매매내역]</InfoTitle>
                    <InfoBox>
                      <TotalBuy>
                        총 매입가
                        <BuyCount>5,145,454.55</BuyCount>
                      </TotalBuy>

                      <TotalRevenue>
                        총 수익
                        <RevenueCount>514,545.45</RevenueCount>
                      </TotalRevenue>

                      <RevenuePercent>
                        수익률
                        <PercentCount>10 %</PercentCount>
                      </RevenuePercent>
                    </InfoBox>
                  </InerRectangle>
                </MyTradingINfo>
              </MyPagetopleft>

              <MyPagetopright>
                <MyAssetBox>
                  <AssetTitle>My Asset</AssetTitle>
                  <AssetPoint>5,660,000 P</AssetPoint>
                  <UpdownBox>10% up</UpdownBox>
                </MyAssetBox>

                <GraphBox>
                  <MyChart />
                </GraphBox>
              </MyPagetopright>
            </MyPagetop>

            <MyPageBottom>
              <BottomInnerBox>
                <BottomTitle>현재 보유 주식</BottomTitle>
                <TitleLine />

                <StockInfoBox>
                  <StockInfoTitle>
                    <StockInfoTitleText>종목명</StockInfoTitleText>
                    <StockInfoTitleText>종목 코드</StockInfoTitleText>
                    <StockInfoTitleText>매입가</StockInfoTitleText>
                    <StockInfoTitleText>매입 수량</StockInfoTitleText>
                    <StockInfoTitleText>총 매입가</StockInfoTitleText>
                    <StockInfoTitleText>현재가</StockInfoTitleText>
                    <StockInfoTitleText>수익률</StockInfoTitleText>
                    <StockInfoTitleText>총 수익액</StockInfoTitleText>
                  </StockInfoTitle>

                  {stockData.map((stock, index) => (
                    <MyStockNumber key={index}>
                      <StockInfoText01>{stock.name}</StockInfoText01>
                      <StockInfoText02>{stock.code}</StockInfoText02>
                      <StockInfoText03>{stock.price}</StockInfoText03>
                      <StockInfoText04>{stock.quantity}</StockInfoText04>
                      <StockInfoText05>{stock.totalpurchase}</StockInfoText05>
                      <StockInfoText06>{stock.current}</StockInfoText06>
                      <StockInfoText07>{stock.changerate}</StockInfoText07>
                      <StockInfoText08>{stock.totalrevenue}</StockInfoText08>
                    </MyStockNumber>
                  ))}
                </StockInfoBox>
              </BottomInnerBox>
            </MyPageBottom>
          </MyPageContainer>
        }
      ></InlineContainer>
      <Footer />
    </>
  );
};

export default MyPage;
