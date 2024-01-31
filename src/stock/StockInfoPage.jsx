import GlobalStyle from "../utils/style/GlobalStyle";
import Header from "../utils/style/Header";
import Footer from "../utils/style/Footer";
import InlineContainer from "../utils/style/InlineContainer";
import styled from "styled-components";
import React, { useState } from "react";
import stockgraph from "../images/stockgraph.png";
import StockPage from "./StockPage";
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
  StockSellingBox,
  StockPurchaseBox,
  SellingTitle,
  PurchaseTitle,
  SellingTop,
  SellingButton,
  SellingBottom,
  SellingItem,
  SellingeTag,
  SellingNum,
  TageNumber,
  ProfitNumber,
  PurchaseTop,
  PurchaseButton,
  PurchaseBottom,
  PurchaseItem,
  PurchaseTag,
  PurchaseNumber,
  PurchaseNum,
} from "./StockInfoStyle";

const StockInfoPage = () => {
  // InlineContainer의 color = "orange" 를 입력하면 오렌지색 배경이 나오고, 공백("")인 경우는 보라색 배경이 나온다.

  const [purchaseNum, setPurchaseNum] = useState(0);
  const [sellingNum, setSellingNum] = useState(0);
  const [message, setMessage] = useState("");

  return (
    <>
      <Header />
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
                  <StockSellingBox>
                    <SellingTop>
                      <SellingTitle>매도</SellingTitle>
                      <SellingButton
                        onClick={() => {
                          if (
                            window.confirm(
                              `매도하려는 수량은 ${sellingNum}개 입니다. 진행하시겠습니까?`
                            )
                          ) {
                            setMessage("매도 성공");
                            setTimeout(() => setMessage(""), 3000); // 3초 후에 메시지 숨기기
                          }
                        }}
                      >
                        매도
                      </SellingButton>{" "}
                      {message && (
                        <div
                          style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            right: 0,
                            width: "30rem",
                            height: "4rem",
                            fontSize: "2rem",
                            color: "white",
                            fontWeight: "bold",
                            margin: "auto",
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                            borderRadius: "0.5rem",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          {message}
                        </div>
                      )}{" "}
                    </SellingTop>

                    <SellingBottom>
                      <SellingItem>
                        <SellingeTag>매입가</SellingeTag>
                        <TageNumber>5,500</TageNumber>
                      </SellingItem>

                      <SellingItem>
                        <SellingeTag>보유수량</SellingeTag>
                        <TageNumber>30</TageNumber>
                      </SellingItem>

                      <SellingItem>
                        <SellingeTag>현재가</SellingeTag>
                        <TageNumber>11,000</TageNumber>
                      </SellingItem>

                      <SellingItem>
                        <SellingeTag>매도수량</SellingeTag>
                        <SellingNum
                          onChange={(e) => setSellingNum(e.target.value)}
                        ></SellingNum>
                      </SellingItem>

                      <SellingItem>
                        <SellingeTag>매입금</SellingeTag>
                        <TageNumber>165,500</TageNumber>
                      </SellingItem>

                      <SellingItem>
                        <SellingeTag>매도가격</SellingeTag>
                        <TageNumber>0</TageNumber>
                      </SellingItem>

                      <SellingItem>
                        <SellingeTag>평가금</SellingeTag>
                        <TageNumber>330,000</TageNumber>
                      </SellingItem>

                      <SellingItem>
                        <SellingeTag>수익률</SellingeTag>
                        <ProfitNumber>+100%</ProfitNumber>
                      </SellingItem>
                    </SellingBottom>
                  </StockSellingBox>

                  <StockPurchaseBox>
                    <PurchaseTop>
                      <PurchaseTitle>매수</PurchaseTitle>
                      <PurchaseButton
                        onClick={() => {
                          if (
                            window.confirm(
                              `매수하려는 수량은 ${purchaseNum}개 입니다. 진행하시겠습니까?`
                            )
                          ) {
                            setMessage("매수 성공");
                            setTimeout(() => setMessage(""), 3000); // 3초 후에 메시지 숨기기
                          }
                        }}
                      >
                        매수
                      </PurchaseButton>{" "}
                      {message && (
                        <div
                          style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            right: 0,
                            width: "30rem",
                            height: "4rem",
                            fontSize: "2rem",
                            color: "white",
                            fontWeight: "bold",
                            margin: "auto",
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                            borderRadius: "0.5rem",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          {message}
                        </div>
                      )}{" "}
                    </PurchaseTop>

                    <PurchaseBottom>
                      <PurchaseItem>
                        <PurchaseTag>현재보유잔고</PurchaseTag>
                        <PurchaseNumber>664,280,010</PurchaseNumber>
                      </PurchaseItem>

                      <PurchaseItem>
                        <PurchaseTag>매수수량</PurchaseTag>
                        <PurchaseNum
                          onChange={(e) => setPurchaseNum(e.target.value)}
                        ></PurchaseNum>
                      </PurchaseItem>

                      <PurchaseItem>
                        <PurchaseTag>매수가격</PurchaseTag>
                        <PurchaseNumber>0</PurchaseNumber>
                      </PurchaseItem>
                    </PurchaseBottom>
                  </StockPurchaseBox>
                </PurchaseBox>
              </StockDivRight>
            </StockInfoBackboard>
          </StockListContainer>
        }
      ></InlineContainer>
    </>
  );
};

export default StockInfoPage;
