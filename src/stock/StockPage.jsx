import Header from "../utils/style/Header";
import Footer from "../utils/style/Footer";
import React, { useState, useEffect } from "react";
import CommonAxios from "../utils/common/CommonAxios";
import {
  StockContainer,
  StockHeadTitle,
  StockHeadTitle01,
  StockHeadTitle02,
  StockHeadTitle03,
} from "./StockStyle";
import StockIndexPage from "./StockIndexPage";
import StockListPage from "./StockListPage";

const StockPage = () => {
  // async 관리 switch
  const [switchTitle, setSwitchTitle] = useState("주식");
  const [stockList, setStockList] = useState("고가");
  const [stock, setStock] = useState([]);
  // 데이터 프롭스
  // 인덱스
  const [all, setAll] = useState({
    crawlExchangeDtoList: [],
    crawlMarketDtoList: [],
    crawlOilDtoList: [],
    crawlGoldDtoList: [],
    crawlMetalDtoList: [],
    crawlEnergyDtoList: [],
    crawlArgDtoList: [],
    crawlStockDtoList: [],
  });
  // 고가, eps, per, div

  // 데이터 가져오는 switch 케이스
  const getIndex = async () => {
    switch (switchTitle) {
      case "시장지표":
        if (all.crawlMarketDtoList.length === 0) {
          try {
            const res = await CommonAxios.getAxios("common", "index", "", "");
            console.log("인덱스", res.data);
            if (res.status === 200) {
              setAll(res.data);
              console.log("시장지표 실행");
            } else {
              console.log("인덱스 : False");
            }
          } catch (e) {
            console.log(e);
          }
        } else {
          console.log("시장지표 존재");
        }
        break;
      case "주식":
        console.log("주식 페이지 : ", stockList);
        switch (stockList) {
          case "고가":
            getStock();
            break;
          case "PER":
            getStock();
            break;
          case "EPS":
            getStock();
            break;
          case "DIV":
            getStock();
            break;
          default:
            console.log("주식 switch 케이스 오류");
            break;
        }
        break;
      default:
        console.log("switch 케이스 오류");
        break;
    }
  };

  const getStock = async () => {
    try {
      const res = await CommonAxios.getAxios(
        "common",
        "list",
        "type",
        stockList
      );
      if (res.status === 200) {
        setStock(res.data);
      } else {
        console.log("주식 리스트 데이터 조회 실패");
      }
    } catch (e) {
      console.log(e);
    }
  };

  // InlineContainer의 color = "orange" 를 입력하면 오렌지색 배경이 나오고, 공백("")인 경우는 보라색 배경이 나온다.
  const [selectedHeadTitle, setSelectedHeadTitle] = useState(null);
  const [showStockListPage, setShowStockListPage] = useState(true);
  const [showStockIndexPage, setShowStockIndexPage] = useState(false);
  //   const [showStockDiscussionPage, setShowStockDiscussionPage] = useState(false);

  const handleHeadTitleClick01 = (event) => {
    if (selectedHeadTitle) {
      selectedHeadTitle.style.color = "rgba(255, 255, 255, 0.7)";
    }
    event.target.style.color = "#ab81ff";
    setSelectedHeadTitle(event.target);
    setShowStockListPage(true);
    setShowStockIndexPage(false);
    setSwitchTitle("주식");
  };

  const handleHeadTitleClick02 = (event) => {
    if (selectedHeadTitle) {
      selectedHeadTitle.style.color = "rgba(255, 255, 255, 0.7)";
    }
    event.target.style.color = "#ab81ff";
    setSelectedHeadTitle(event.target);
    setSwitchTitle("종목토론");
  };

  const handleHeadTitleClick03 = (event) => {
    if (selectedHeadTitle) {
      selectedHeadTitle.style.color = "rgba(255, 255, 255, 0.7)";
    }
    event.target.style.color = "#ab81ff";
    setSelectedHeadTitle(event.target);
    setShowStockListPage(false);
    setShowStockIndexPage(true);
    setSwitchTitle("시장지표");
  };

  // 데이터 컨트롤 useEffect
  useEffect(() => {
    getIndex();
  }, [switchTitle, stockList]);

  return (
    <>
      <Header />
      <StockContainer>
        <StockHeadTitle>
          <StockHeadTitle01 onClick={handleHeadTitleClick01}>
            주식
          </StockHeadTitle01>
          <StockHeadTitle02 onClick={handleHeadTitleClick02}>
            종목토론
          </StockHeadTitle02>
          <StockHeadTitle03 onClick={handleHeadTitleClick03}>
            시장지표
          </StockHeadTitle03>
        </StockHeadTitle>
        {showStockListPage && (
          <StockListPage stock={stock} setStockList={setStockList} />
        )}
        {showStockIndexPage && <StockIndexPage all={all} />}
      </StockContainer>

      {/* <InlineContainer color=""></InlineContainer> */}

      <Footer />
    </>
  );
};

export default StockPage;
