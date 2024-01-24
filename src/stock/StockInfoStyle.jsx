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

export const StockHeadTitle = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  gap: 1.5rem;
  width: 100%;
  height: 7rem;

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
  flex-direction: column;
  height: 113.4rem;
  width: 113.4rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
`;

export const StockDiv = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  width: 100%;
  height: 5rem;

  align-items: center;
`;
