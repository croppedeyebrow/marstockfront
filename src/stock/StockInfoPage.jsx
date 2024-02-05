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
  LeftContainer,
  RightContainer,
  RightLeftContainer,
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
import { useParams } from "react-router-dom";

const StockInfoPage = () => {
  // InlineContainer의 color = "orange" 를 입력하면 오렌지색 배경이 나오고, 공백("")인 경우는 보라색 배경이 나온다.

  const [purchaseNum, setPurchaseNum] = useState(0);
  const [sellingNum, setSellingNum] = useState(0);
  const [message, setMessage] = useState("");

  // 주식명으로 데이터 조회
  const { name } = useParams();

  return (
    <>
      <Header />
      <InlineContainer
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
                  종가
                  <CurrentPriceNum>4,770</CurrentPriceNum>
                </CurrentPrice>

                <UpDownCheck>
                  <Point>등락률</Point>
                  <Percent>-1.24%</Percent>
                </UpDownCheck>

                <RightLeftContainer>
                  <LeftContainer>
                    <LeftInfo>
                      <LeftInfoTitle>고가</LeftInfoTitle>
                      <LeftInfoNum>4,815</LeftInfoNum>
                    </LeftInfo>

                    <LeftInfo>
                      <LeftInfoTitle>저가</LeftInfoTitle>
                      <LeftInfoNum>4,705</LeftInfoNum>
                    </LeftInfo>

                    <LeftInfo>
                      <LeftInfoTitle>시가</LeftInfoTitle>
                      <LeftInfoNum>4,785</LeftInfoNum>
                    </LeftInfo>

                    <LeftInfo>
                      <LeftInfoTitle>거래량</LeftInfoTitle>
                      <LeftInfoNum>158,207</LeftInfoNum>
                    </LeftInfo>

                    <LeftInfo>
                      <LeftInfoTitle>거래대금</LeftInfoTitle>
                      <LeftInfoNum>751,639,235</LeftInfoNum>
                    </LeftInfo>
                  </LeftContainer>

                  <RightContainer>
                    <LeftInfo>
                      <LeftInfoTitle>BPS</LeftInfoTitle>
                      <LeftInfoNum>8,076.0</LeftInfoNum>
                    </LeftInfo>

                    <LeftInfo>
                      <LeftInfoTitle>PER</LeftInfoTitle>
                      <LeftInfoNum>23.73</LeftInfoNum>
                    </LeftInfo>

                    <LeftInfo>
                      <LeftInfoTitle>PBR</LeftInfoTitle>
                      <LeftInfoNum>0.59</LeftInfoNum>
                    </LeftInfo>

                    <LeftInfo>
                      <LeftInfoTitle>EPS</LeftInfoTitle>
                      <LeftInfoNum>201.0</LeftInfoNum>
                    </LeftInfo>

                    <LeftInfo>
                      <LeftInfoTitle>DIV</LeftInfoTitle>
                      <LeftInfoNum>5.66</LeftInfoNum>
                    </LeftInfo>

                    <LeftInfo>
                      <LeftInfoTitle>DPS</LeftInfoTitle>
                      <LeftInfoNum>270.0</LeftInfoNum>
                    </LeftInfo>
                  </RightContainer>
                </RightLeftContainer>
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
