import styled from "styled-components";

export const StockListContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 5rem;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
`;
export const Example = styled.div`
  width: 100px;
  height: 100px;
  background-color: blue;
  &.b {
    background-color: red;
  }
  &.c {
    background-color: green;
  }
`;

export const StockInfoPageContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const StockHeadTitle = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;

  align-items: center;

  gap: 1.5rem;
  width: 50%;
  height: 7rem;
  left: 36rem;
  top: 14rem;
`;

export const StockHeadTitle01 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 16.6rem;
  height: 6.3rem;
  font-size: 3.5rem;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.7);

  &:hover {
    cursor: pointer;
  }
`;

export const StockHeadTitle02 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 16.6rem;
  height: 6.3rem;
  font-size: 3.5rem;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.7);

  &:hover {
    cursor: pointer;
  }
`;

export const StockHeadTitle03 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 16.6rem;
  height: 6.3rem;
  font-size: 3.5rem;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.7);

  &:hover {
    cursor: pointer;
  }
`;

export const StockCategory = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  width: 100%;
  height: 5rem;

  align-items: center;

  right: 2rem;
`;

export const Category01 = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 8.5rem;
  height: 4.8rem;
  font-size: 2.5rem;
  font-weight: black;
  color: #ffffff;
`;

export const Category02 = styled.div`
  display: flex;
  position: relative;
  justify-content: center;

  width: 12rem;
  height: 1.4rem;
  font-size: 2rem;
  font-weight: lighter;
  color: #ffffff;
`;

export const Category03 = styled.div`
  display: flex;
  position: relative;
  justify-content: center;

  width: 7rem;
  height: 1.4rem;
  font-size: 2rem;
  font-weight: lighter;
  color: #ffffff;
`;

export const Category04 = styled.div`
  display: flex;
  position: relative;
  justify-content: center;

  width: 12rem;
  height: 1.4rem;
  font-size: 2rem;
  font-weight: lighter;
  color: #ffffff;
`;

export const StockInfoBackboard = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  height: 100rem;
  width: 113.4rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
`;

export const StockDivLeft = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 28.3rem;
  height: 100%;

  align-items: center;
  padding-top: 5rem;
  gap: 2rem;
`;

export const CurrentPrice = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  width: 24rem;
  height: 6rem;

  color: white;
  font-size: 2rem;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const CurrentPriceNum = styled.div`
  display: flex;
  position: relative;
  width: 15.7rem;
  height: 5.8rem;

  font-size: 4rem;
  font-weight: bold;
  align-items: center;
  justify-content: center;
`;

export const UpDownCheck = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  width: 24rem;
  height: 6rem;

  color: var(--upred);
  font-size: 2rem;
  font-weight: bold;
  align-items: center;
  gap: 2rem;
`;

export const Point = styled.div`
  display: flex;
  position: relative;
  width: 10.7rem;
  height: 2.7rem;
  align-items: center;
  justify-content: center;
`;

export const Percent = styled.div`
  display: flex;
  position: relative;
  width: 10.7rem;
  height: 2.7rem;
  align-items: center;
  justify-content: center;
`;

export const LeftInfo = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  width: 24rem;
  height: 4rem;
  color: white;

  align-items: center;
  justify-content: center;
`;

export const LeftInfoTitle = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;

  width: 9.7rem;
  height: 4rem;
  color: white;
  align-items: center;
  font-size: 2rem;
  font-weight: lighter;
`;

export const LeftInfoNum = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;

  width: 14.8rem;
  height: 4rem;
  color: white;
  align-items: center;
  justify-content: right;
  font-size: 2rem;
  font-weight: bold;
`;

export const StockDivRight = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 84.9rem;
  height: 100%;

  align-items: center;
  padding-top: 7rem;

  gap: 6rem;
`;

export const StockGraphZone = styled.img`
  display: flex;
  position: relative;
  width: 81.7rem;
  height: 36.6rem;
`;

export const PurchaseBox = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 40rem;
  flex-direction: row;
  gap: 2rem;
  margin-top: 2rem;
  justify-content: center;
  align-items: center;
`;

export const StockPurchaseBox = styled.div`
  position: relative;
  display: flex;
  width: 44rem;
  height: 44rem;

  background: rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 5rem 3rem;
`;

export const StockSellBox = styled.div`
  display: flex;
  position: relative;
  width: 33.7rem;
  height: 44rem;

  background: rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 5rem 3rem;
`;

export const PurchaseTop = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 5.2rem;
  flex-direction: row;
`;

export const PurchaseTitle = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 5.2rem;
  color: white;
  font-size: 3rem;
  font-weight: bold;
`;

export const PurchaseButton = styled.button`
  display: flex;
  position: relative;
  width: 14rem;
  height: 5.2rem;
  color: white;
  background: var(--mainorange);
  font-size: 2.5rem;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.2); // 가장자리를 깎는 효과 추가
  border-radius: 0.5rem;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2), 0px 10px 10px rgba(0, 0, 0, 0.15); // 그림자 효과 조정
`;

export const SellTitle = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 5.2rem;
  color: white;
  font-size: 3rem;
  font-weight: bold;
`;

export const SellTop = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 5.2rem;
  flex-direction: row;
`;

export const SellButton = styled.button`
  display: flex;
  position: relative;
  width: 14rem;
  height: 5.2rem;
  color: white;
  background: var(--mainpurple);
  font-size: 2.5rem;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.2); // 가장자리를 깎는 효과 추가
  border-radius: 0.5rem;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2), 0px 10px 10px rgba(0, 0, 0, 0.15); // 그림자 효과 조정
`;
