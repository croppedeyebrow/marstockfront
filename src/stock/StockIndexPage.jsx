import Footer from "../utils/style/Footer";
import InlineContainer from "../utils/style/InlineContainer";
import React, { useState } from "react";

import {
  StockIndexPageContainer,
  StockListContainer,
  IndexPageTop,
  IndexTopLeft,
  LeftPointZone,
  Point01,
  Point02,
  Point03,
  Kospi,
  PointInfo,
  Num,
  Value,
  Percent,
  Kosdaq,
  Kospi200,
  LeftIndexZone,
  IndexTitleZone,
  IndexTitle,
  IndexDetail,
  DetailName01,
  LeftIndexTopZone,
  LeftIndexTopTitle,
  LeftIndexMainInnerTitle,
  LeftIndexMainInnerText,
  LeftIndexMainText,
  LeftIndexMainZone,
  LeftIndexMainTitle,
  IndexTopRight,
  IndexTopContainer,
  IndexTopTitle,
  IndexTopRow,
  IndexTopNum,
  IndexTopName,
  IndexTopPrice,
  IndexTopRate,
  AnimatedText,
  MiddleContainer,
  IndexPageBottom,
  BottomTitleBox,
  BoTitle,
  KategorieTitle,
  Kategorie01,
  Kategorie02,
  Kategorie03,
  Kategorie04,
  Kategorie05,
  Kategorie06,
  Kategorie07,
  Kategorie08,
  Kategorie09,
  KategorieInfo,
  KInfo01,
  KInfo02,
  KInfo03,
  KInfo04,
  KInfo05,
  KInfo06,
  KInfo07,
  KInfo08,
  KInfo09,
} from "./StockIndexStyle";

const StockIndexPage = ({ all }) => {
  const [index, setIndex] = useState("환전고시");

  const [selectedKategorie, setSelectedKategorie] = useState(null);
  const [selectedIndexTitile, setSelectedIndexTitile] = useState(null);

  const handleKategorieClick = (event) => {
    if (selectedKategorie) {
      selectedKategorie.style.color = "rgba(255, 255, 255, 0.7)";
    }
    event.target.style.color = "#ab81ff";
    setSelectedKategorie(event.target);
  };

  const handleIndexTitleClick = (event) => {
    if (selectedIndexTitile) {
      selectedIndexTitile.style.color = "rgba(255, 255, 255, 0.4)";
    }
    event.target.style.color = "#ffffff";
    setSelectedIndexTitile(event.target);
  };

  // 인덱스 선택
  const onClickIndex = (e) => {
    setIndex("");
    const index = e.currentTarget.getAttribute("value");
    setIndex(index);
  };

  return (
    <>
      <InlineContainer
        color=""
        contents={
          <StockListContainer>
            <IndexPageTop>
              <IndexTopLeft>
                <LeftPointZone>
                  <Point01>
                    <Kospi>KOSPI</Kospi>
                    <PointInfo>
                      <Num value="+2,525.83">2,525.83</Num>
                      <Value value="▲ 1.73">▲ 1.73</Value>
                      <Percent value="+0.06%">+0.06%</Percent>
                    </PointInfo>
                  </Point01>
                  <Point02>
                    <Kosdaq>KOSDAQ</Kosdaq>
                    <PointInfo>
                      <Num value="-858.25">858.25</Num>
                      <Value value="-▼ 9.83">▼ 9.83</Value>
                      <Percent value="-1.14%">-1.14%</Percent>
                    </PointInfo>
                  </Point02>
                  <Point03>
                    <Kospi200>KOSPI 200</Kospi200>
                    <PointInfo>
                      <Num value="+338.75">338.75</Num>
                      <Value value="▲ 0.69">▲ 0.69</Value>
                      <Percent value="+0.20%">+0.20%</Percent>
                    </PointInfo>
                  </Point03>
                </LeftPointZone>

                {/* <IndexTitleZone>
                  <IndexTitle onClick={handleIndexTitleClick}>
                    환전고시 환율
                  </IndexTitle>
                  <IndexTitle onClick={handleIndexTitleClick}>
                    국제시장 환율
                  </IndexTitle>
                  <IndexTitle onClick={handleIndexTitleClick}>
                    유가/금시세
                  </IndexTitle>
                  <IndexTitle onClick={handleIndexTitleClick}>
                    원자재
                  </IndexTitle>
                </IndexTitleZone> */}

                <LeftIndexZone>
                  <LeftIndexTopZone>
                    <LeftIndexTopTitle value="환전고시" onClick={onClickIndex}>
                      환전고시
                    </LeftIndexTopTitle>
                    <LeftIndexTopTitle
                      value="국제시장환율"
                      onClick={onClickIndex}
                    >
                      국제시장환율
                    </LeftIndexTopTitle>
                    <LeftIndexTopTitle value="유가" onClick={onClickIndex}>
                      유가/에너지
                    </LeftIndexTopTitle>
                    <LeftIndexTopTitle value="금시세" onClick={onClickIndex}>
                      금시세
                    </LeftIndexTopTitle>
                    <LeftIndexTopTitle value="원자재" onClick={onClickIndex}>
                      원자재/농업
                    </LeftIndexTopTitle>
                  </LeftIndexTopZone>
                  {index === "환전고시" && (
                    <LeftIndexMainZone>
                      <LeftIndexMainInnerTitle>
                        <LeftIndexMainTitle>통화명</LeftIndexMainTitle>
                        <LeftIndexMainTitle>매매기준율</LeftIndexMainTitle>
                        <LeftIndexMainTitle>구매시</LeftIndexMainTitle>
                        <LeftIndexMainTitle>판매시</LeftIndexMainTitle>
                        <LeftIndexMainTitle>보낼때</LeftIndexMainTitle>
                        <LeftIndexMainTitle>받을때</LeftIndexMainTitle>
                        <LeftIndexMainTitle>미화환산율</LeftIndexMainTitle>
                      </LeftIndexMainInnerTitle>
                      {all?.crawlExchangeDtoList.map((data, index) => (
                        <LeftIndexMainInnerText key={index}>
                          <LeftIndexMainText>{data.name}</LeftIndexMainText>
                          <LeftIndexMainText>{data.tbRate}</LeftIndexMainText>
                          <LeftIndexMainText>{data.buy}</LeftIndexMainText>
                          <LeftIndexMainText>{data.sell}</LeftIndexMainText>
                          <LeftIndexMainText>{data.send}</LeftIndexMainText>
                          <LeftIndexMainText>{data.receive}</LeftIndexMainText>
                          <LeftIndexMainText>{data.exchange}</LeftIndexMainText>
                        </LeftIndexMainInnerText>
                      ))}
                    </LeftIndexMainZone>
                  )}
                  {index === "국제시장환율" && (
                    <LeftIndexMainZone>
                      <LeftIndexMainInnerTitle>
                        <LeftIndexMainTitle>통화명</LeftIndexMainTitle>
                        <LeftIndexMainTitle>통화심볼</LeftIndexMainTitle>
                        <LeftIndexMainTitle>현재가</LeftIndexMainTitle>
                        <LeftIndexMainTitle>등락율</LeftIndexMainTitle>
                        <LeftIndexMainTitle>전일대비</LeftIndexMainTitle>
                      </LeftIndexMainInnerTitle>
                      {all?.crawlMarketDtoList.map((data, index) => (
                        <LeftIndexMainInnerText key={index}>
                          <LeftIndexMainText>{data.name}</LeftIndexMainText>
                          <LeftIndexMainText>{data.symbol}</LeftIndexMainText>
                          <LeftIndexMainText>{data.current}</LeftIndexMainText>
                          <LeftIndexMainText>{data.rate}</LeftIndexMainText>
                          <LeftIndexMainText>{data.before}</LeftIndexMainText>
                        </LeftIndexMainInnerText>
                      ))}
                    </LeftIndexMainZone>
                  )}
                  {index === "유가" && (
                    <LeftIndexMainZone>
                      <LeftIndexMainInnerTitle>
                        <LeftIndexMainTitle>이름</LeftIndexMainTitle>
                        <LeftIndexMainTitle>가격</LeftIndexMainTitle>
                        <LeftIndexMainTitle>단위</LeftIndexMainTitle>
                        <LeftIndexMainTitle>등락율</LeftIndexMainTitle>
                        <LeftIndexMainTitle>전일대비</LeftIndexMainTitle>
                      </LeftIndexMainInnerTitle>
                      {all?.crawlOilDtoList.map((data, index) => (
                        <LeftIndexMainInnerText key={index}>
                          <LeftIndexMainText>{data.name}</LeftIndexMainText>
                          <LeftIndexMainText>{data.price}</LeftIndexMainText>
                          <LeftIndexMainText>{data.unit}</LeftIndexMainText>
                          <LeftIndexMainText>{data.rate}</LeftIndexMainText>
                          <LeftIndexMainText>
                            {data.yesterday}
                          </LeftIndexMainText>
                        </LeftIndexMainInnerText>
                      ))}
                      <br></br>
                      <br></br>

                      <LeftIndexMainInnerTitle>
                        <LeftIndexMainTitle>이름</LeftIndexMainTitle>
                        <LeftIndexMainTitle>가격</LeftIndexMainTitle>
                        <LeftIndexMainTitle>단위</LeftIndexMainTitle>
                        <LeftIndexMainTitle>등락율</LeftIndexMainTitle>
                        <LeftIndexMainTitle>환전</LeftIndexMainTitle>
                        <LeftIndexMainTitle>month</LeftIndexMainTitle>
                        <LeftIndexMainTitle>기준일</LeftIndexMainTitle>
                      </LeftIndexMainInnerTitle>
                      {all?.crawlEnergyDtoList.map((data, index) => (
                        <LeftIndexMainInnerText key={index}>
                          <LeftIndexMainText>{data.name}</LeftIndexMainText>
                          <LeftIndexMainText>{data.price}</LeftIndexMainText>
                          <LeftIndexMainText>{data.units}</LeftIndexMainText>
                          <LeftIndexMainText>{data.rate}</LeftIndexMainText>
                          <LeftIndexMainText>{data.exchange}</LeftIndexMainText>
                          <LeftIndexMainText>{data.month}</LeftIndexMainText>
                          <LeftIndexMainText>{data.date}</LeftIndexMainText>
                        </LeftIndexMainInnerText>
                      ))}
                    </LeftIndexMainZone>
                  )}
                  {index === "금시세" && (
                    <LeftIndexMainZone>
                      <LeftIndexMainInnerTitle>
                        <LeftIndexMainTitle>이름</LeftIndexMainTitle>
                        <LeftIndexMainTitle>가격</LeftIndexMainTitle>
                        <LeftIndexMainTitle>단위</LeftIndexMainTitle>
                        <LeftIndexMainTitle>등락율</LeftIndexMainTitle>
                        <LeftIndexMainTitle>전일대비</LeftIndexMainTitle>
                        <LeftIndexMainTitle>기준일</LeftIndexMainTitle>
                      </LeftIndexMainInnerTitle>
                      {all?.crawlGoldDtoList.map((data, index) => (
                        <LeftIndexMainInnerText key={index}>
                          <LeftIndexMainText>{data.name}</LeftIndexMainText>
                          <LeftIndexMainText>{data.price}</LeftIndexMainText>
                          <LeftIndexMainText>{data.unit}</LeftIndexMainText>
                          <LeftIndexMainText>{data.rate}</LeftIndexMainText>
                          <LeftIndexMainText>
                            {data.yesterday}
                          </LeftIndexMainText>
                          <LeftIndexMainText>{data.date}</LeftIndexMainText>
                        </LeftIndexMainInnerText>
                      ))}
                    </LeftIndexMainZone>
                  )}
                  {index === "원자재" && (
                    <LeftIndexMainZone>
                      <LeftIndexMainInnerTitle>
                        <LeftIndexMainTitle>이름</LeftIndexMainTitle>
                        <LeftIndexMainTitle>가격</LeftIndexMainTitle>
                        <LeftIndexMainTitle>단위</LeftIndexMainTitle>
                        <LeftIndexMainTitle>등락율</LeftIndexMainTitle>
                        <LeftIndexMainTitle>전일대비</LeftIndexMainTitle>
                        <LeftIndexMainTitle>기준일</LeftIndexMainTitle>
                      </LeftIndexMainInnerTitle>
                      {all?.crawlMetalDtoList.map((data, index) => (
                        <LeftIndexMainInnerText key={index}>
                          <LeftIndexMainText>{data.name}</LeftIndexMainText>
                          <LeftIndexMainText>{data.price}</LeftIndexMainText>
                          <LeftIndexMainText>{data.units}</LeftIndexMainText>
                          <LeftIndexMainText>{data.rate}</LeftIndexMainText>
                          <LeftIndexMainText>
                            {data.yesterday}
                          </LeftIndexMainText>
                          <LeftIndexMainText>{data.date}</LeftIndexMainText>
                        </LeftIndexMainInnerText>
                      ))}
                      <LeftIndexMainInnerTitle>
                        <LeftIndexMainTitle>이름</LeftIndexMainTitle>
                        <LeftIndexMainTitle>가격</LeftIndexMainTitle>
                        <LeftIndexMainTitle>단위</LeftIndexMainTitle>
                        <LeftIndexMainTitle>등락율</LeftIndexMainTitle>
                        <LeftIndexMainTitle>전일대비</LeftIndexMainTitle>
                        <LeftIndexMainTitle>기준일</LeftIndexMainTitle>
                      </LeftIndexMainInnerTitle>
                      <br></br>
                      {all?.crawlMetalDtoList.map((data, index) => (
                        <LeftIndexMainInnerText key={index}>
                          <LeftIndexMainText>{data.name}</LeftIndexMainText>
                          <LeftIndexMainText>{data.price}</LeftIndexMainText>
                          <LeftIndexMainText>{data.units}</LeftIndexMainText>
                          <LeftIndexMainText>{data.rate}</LeftIndexMainText>
                          <LeftIndexMainText>
                            {data.yesterday}
                          </LeftIndexMainText>
                          <LeftIndexMainText>{data.date}</LeftIndexMainText>
                        </LeftIndexMainInnerText>
                      ))}
                    </LeftIndexMainZone>
                  )}
                </LeftIndexZone>
              </IndexTopLeft>
              <IndexTopRight>
                <IndexTopContainer>
                  <IndexTopTitle>검색 상위</IndexTopTitle>
                  {all?.crawlStockDtoList.map((data, index) => (
                    <IndexTopRow key={index}>
                      <IndexTopNum>{index + 1}</IndexTopNum>
                      <IndexTopName>
                        <AnimatedText>{data.name}</AnimatedText>
                      </IndexTopName>
                      <IndexTopPrice>{data.price}</IndexTopPrice>
                      <IndexTopRate>{data.upDown}</IndexTopRate>
                    </IndexTopRow>
                  ))}
                </IndexTopContainer>
              </IndexTopRight>
            </IndexPageTop>
            <MiddleContainer>TOP 종목</MiddleContainer>
            <IndexPageBottom>
              <BottomTitleBox>
                <BoTitle onClick={handleKategorieClick}>거래상위</BoTitle>
                {/* <BoTitle onClick={handleKategorieClick}>하한가</BoTitle>
                  <BoTitle onClick={handleKategorieClick}>상승</BoTitle>
                  <BoTitle onClick={handleKategorieClick}>보합</BoTitle>
                  <BoTitle onClick={handleKategorieClick}>하락</BoTitle>
                  <BoTitle onClick={handleKategorieClick}>거래량상위</BoTitle>
                  <BoTitle onClick={handleKategorieClick}>고가대비급락</BoTitle>
                  <BoTitle onClick={handleKategorieClick}>시가총액상위</BoTitle> */}
              </BottomTitleBox>

              <KategorieTitle>
                {/* <Kategorie01>순위</Kategorie01>
                  <Kategorie02>종목명</Kategorie02>
                  <Kategorie03>현재가</Kategorie03>
                  <Kategorie04>상승/하강</Kategorie04>
                  <Kategorie05>등락률</Kategorie05>
                  <Kategorie06>거래량</Kategorie06>
                  <Kategorie07>시가</Kategorie07>
                  <Kategorie08>고가</Kategorie08>
                  <Kategorie09>저가</Kategorie09> */}
              </KategorieTitle>

              {/* {stock.map((item, index) => (
                  <KategorieInfo key={index}>
                    <KInfo01>{index + 1}</KInfo01>
                    <KInfo02>{item.name}</KInfo02>
                    <KInfo03>{item.price}</KInfo03>
                    <KInfo04>{item.upDown}</KInfo04>
                    <KInfo05>{item.rate}</KInfo05>
                    <KInfo06>{item.value4}</KInfo06>
                    <KInfo07>{item.value5}</KInfo07>
                    <KInfo08>{item.value6}</KInfo08>
                    <KInfo09>{item.value7}</KInfo09>
                  </KategorieInfo>
                ))} */}
            </IndexPageBottom>
          </StockListContainer>
        }
      ></InlineContainer>
      <Footer />
    </>
  );
};

export default StockIndexPage;
