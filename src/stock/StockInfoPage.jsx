import GlobalStyle from "../utils/style/GlobalStyle";
import Header from "../utils/style/Header";
import Footer from "../utils/style/Footer";
import InlineContainer from "../utils/style/InlineContainer";
import styled from "styled-components";
import React, { useState } from "react";
import stockgraph from "../images/stockgraph.png";

import {
  StockInfoPageContainer,
  StockListContainer,
  StockHeadTitle,
  StockHeadTitle01,
  StockHeadTitle02,
  StockHeadTitle03,
  StockCategory,
  Category01,
  Category02,
  Category03,
  Category04,
  StockInfoBackboard,
  StockDivLeft,
  StockDivRight,
  StockGraphZone,
  CurrentPrice,
  CurrentPriceNum,
  UpDownCheck,
  Point,
  Percent,
  LeftInfo,
  LeftInfoTitle,
  LeftInfoNum,
  PurchaseBox,
  StockPurchaseBox,
  StockSellBox,
  PurchaseTitle,
  SellTitle,
  PurchaseTop,
  PurchaseButton,
  SellTop,
  SellButton,
} from "./StockInfoStyle";

const StockInfoPage = () => {
  // InlineContainer의 color = "orange" 를 입력하면 오렌지색 배경이 나오고, 공백("")인 경우는 보라색 배경이 나온다.
  const [selectedHeadTitle, setSelectedHeadTitle] = useState(null);

  const handleHeadTitleClick = (event) => {
    if (selectedHeadTitle) {
      selectedHeadTitle.style.color = "rgba(255, 255, 255, 0.7)";
    }
    event.target.style.color = "#ab81ff";
    setSelectedHeadTitle(event.target);
  };

  return (
    <>
      <Header />
      <StockInfoPageContainer>
        <StockHeadTitle>
          <StockHeadTitle01 onClick={handleHeadTitleClick}>
            주식
          </StockHeadTitle01>
          <StockHeadTitle02 onClick={handleHeadTitleClick}>
            종목토론
          </StockHeadTitle02>
          <StockHeadTitle03 onClick={handleHeadTitleClick}>
            시장지표
          </StockHeadTitle03>
        </StockHeadTitle>

        <InlineContainer
          color=""
          contents={
            <StockListContainer>
              <StockCategory>
                <Category01>종목명</Category01>
                <Category02>종목코드</Category02>
                <Category03>KOSPI</Category03>
                <Category04>날짜</Category04>
              </StockCategory>

              <StockInfoBackboard>
                <StockDivLeft>
                  <CurrentPrice>
                    현재가
                    <CurrentPriceNum>11,000</CurrentPriceNum>
                  </CurrentPrice>

                  <UpDownCheck>
                    <Point>▲1,000</Point>
                    <Percent>+10.00%</Percent>
                  </UpDownCheck>

                  <LeftInfo>
                    <LeftInfoTitle>전일가</LeftInfoTitle>
                    <LeftInfoNum>10,000</LeftInfoNum>
                  </LeftInfo>

                  <LeftInfo>
                    <LeftInfoTitle>고가</LeftInfoTitle>
                    <LeftInfoNum>13,800</LeftInfoNum>
                  </LeftInfo>

                  <LeftInfo>
                    <LeftInfoTitle>저가</LeftInfoTitle>
                    <LeftInfoNum>9,280</LeftInfoNum>
                  </LeftInfo>

                  <LeftInfo>
                    <LeftInfoTitle>시가</LeftInfoTitle>
                    <LeftInfoNum>9,980</LeftInfoNum>
                  </LeftInfo>

                  <LeftInfo>
                    <LeftInfoTitle>거래량</LeftInfoTitle>
                    <LeftInfoNum>17,482,300</LeftInfoNum>
                  </LeftInfo>

                  <LeftInfo>
                    <LeftInfoTitle>거래대금</LeftInfoTitle>
                    <LeftInfoNum>174,823 백만</LeftInfoNum>
                  </LeftInfo>

                  <LeftInfo>
                    <LeftInfoTitle>시가총액</LeftInfoTitle>
                    <LeftInfoNum>8,241 억원</LeftInfoNum>
                  </LeftInfo>

                  <LeftInfo>
                    <LeftInfoTitle>시총순위</LeftInfoTitle>
                    <LeftInfoNum>코스피 298위</LeftInfoNum>
                  </LeftInfo>

                  <LeftInfo>
                    <LeftInfoTitle>상장주수</LeftInfoTitle>
                    <LeftInfoNum>74,918,182</LeftInfoNum>
                  </LeftInfo>

                  <LeftInfo>
                    <LeftInfoTitle>액면가</LeftInfoTitle>
                    <LeftInfoNum>4,500</LeftInfoNum>
                  </LeftInfo>

                  <LeftInfo>
                    <LeftInfoTitle>52주 최고</LeftInfoTitle>
                    <LeftInfoNum>11,000</LeftInfoNum>
                  </LeftInfo>

                  <LeftInfo>
                    <LeftInfoTitle>52주 최저</LeftInfoTitle>
                    <LeftInfoNum>3,387</LeftInfoNum>
                  </LeftInfo>
                </StockDivLeft>

                <StockDivRight>
                  <StockGraphZone alt="주식그래프" src={stockgraph} />

                  <PurchaseBox>
                    <StockPurchaseBox>
                      <PurchaseTop>
                        <PurchaseTitle>매도</PurchaseTitle>
                        <PurchaseButton>매도</PurchaseButton>
                      </PurchaseTop>
                    </StockPurchaseBox>

                    <StockSellBox>
                      <SellTop>
                        <SellTitle>매수</SellTitle>
                        <SellButton>매수</SellButton>
                      </SellTop>
                    </StockSellBox>
                  </PurchaseBox>
                </StockDivRight>
              </StockInfoBackboard>
            </StockListContainer>
          }
        ></InlineContainer>
      </StockInfoPageContainer>
      <Footer />
    </>
  );
};

export default StockInfoPage;
