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

export const StockIndexPageContainer = styled.div`
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

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: var(--mainorange);
    transition: all 0.3s;
  }

  &:hover {
    cursor: pointer;

    &::before {
      left: 0;
      width: 100%;
    }
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

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: var(--mainorange);
    transition: all 0.3s;
  }

  &:hover {
    cursor: pointer;

    &::before {
      left: 0;
      width: 100%;
    }
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

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: var(--mainorange);
    transition: all 0.3s;
  }

  &:hover {
    cursor: pointer;

    &::before {
      left: 0;
      width: 100%;
    }
  }
`;

export const IndexPageTop = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 113rem;
  height: 54rem;
  border: 1px solid white;
`;

export const IndexTopLeft = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.4rem;
  width: 84rem;
  height: 54rem;
  border: 1px solid white;
`;

export const LeftPointZone = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1.4rem;
  border: 1px solid red;
  width: 98%;
  height: 12rem;
`;

export const Point01 = styled.div`
  display: flex;
  position: relative;
  width: 26rem;
  height: 11.4rem;

  background: rgba(0, 0, 0, 0.4);
  border-radius: 15px;
`;

export const Point02 = styled.div`
  display: flex;
  position: relative;
  width: 26rem;
  height: 11.4rem;

  background: rgba(0, 0, 0, 0.4);
  border-radius: 15px;
`;

export const Point03 = styled.div`
  display: flex;
  position: relative;
  width: 26rem;
  height: 11.4rem;

  background: rgba(0, 0, 0, 0.4);
  border-radius: 15px;
`;

export const LeftIndexZone = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 98%;
  height: 38rem;
  border: 1px solid red;

  background: rgba(0, 0, 0, 0.4);
  border-radius: 15px;
`;

export const IndexTopRight = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  width: 27rem;
  height: 54rem;
`;

export const MiddleContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  color: #ffffff;
  width: 113rem;
  height: 4rem;
  border: 1px solid white;
  font-size: 2rem;
  font-weight: bold;
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding-left: 1rem;
`;

export const IndexPageBottom = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;

  width: 113rem;
  height: 38rem;
  border: 1px solid white;
`;

export const BottomTitleBox = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 4.8rem;
  border-bottom: 1px solid #d9d9d9;
`;

export const BoTitle = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 13rem;
  height: 100%;
  font-size: 1.6rem;
  font-weight: lighter;
  color: rgba(255, 255, 255, 0.4);

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: var(--mainorange);
    transition: all 0.3s;
  }

  &:hover {
    cursor: pointer;
    color: rgba(255, 255, 255, 0.7);

    &::before {
      left: 0;
      width: 100%;
    }
  }
`;

export const KategorieTitle = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 1.4rem;
  font-weight: bold;
  width: 100%;
  height: 2.4rem;
  gap: 1.2rem;
  padding: 0 0.5rem;
  margin-top: 1rem;
`;

export const Kategorie01 = styled.div`
  display: flex;
  position: relative;
  width: 3.5rem;
  height: 100%;

  align-items: center;
  justify-content: center;
`;

export const Kategorie02 = styled.div`
  display: flex;
  position: relative;
  width: 16.6rem;
  height: 100%;

  align-items: center;
  justify-content: center;
`;

export const Kategorie03 = styled.div`
  display: flex;
  position: relative;
  width: 11.4rem;
  height: 100%;

  align-items: center;
  justify-content: center;
`;

export const Kategorie04 = styled.div`
  display: flex;
  position: relative;
  width: 9.5rem;
  height: 100%;

  align-items: center;
  justify-content: center;
`;

export const Kategorie05 = styled.div`
  display: flex;
  position: relative;
  width: 9rem;
  height: 100%;

  align-items: center;
  justify-content: center;
`;

export const Kategorie06 = styled.div`
  display: flex;
  position: relative;
  width: 18.5rem;
  height: 100%;

  align-items: center;
  justify-content: center;
`;

export const Kategorie07 = styled.div`
  display: flex;
  position: relative;
  width: 12rem;
  height: 100%;

  align-items: center;
  justify-content: center;
`;

export const Kategorie08 = styled.div`
  display: flex;
  position: relative;
  width: 12rem;
  height: 100%;

  align-items: center;
  justify-content: center;
`;

export const Kategorie09 = styled.div`
  display: flex;
  position: relative;
  width: 12rem;
  height: 100%;

  align-items: center;
  justify-content: center;
`;

export const KategorieInfo = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: bold;
  width: 100%;
  height: 2.4rem;
  gap: 1.2rem;
  padding: 0 0.5rem;
  margin-top: 1rem;
`;

export const KInfo01 = styled.div`
  display: flex;
  position: relative;
  width: 3.5rem;
  height: 100%;
  color: #ab81ff;
  align-items: center;
  justify-content: center;
`;

export const KInfo0101 = styled.div`
  display: flex;
  position: relative;
  width: 3.5rem;
  height: 100%;

  align-items: center;
  justify-content: center;
`;

export const KInfo02 = styled.div`
  display: flex;
  position: relative;
  width: 16.6rem;
  height: 100%;

  align-items: center;
  justify-content: center;
`;

export const KInfo03 = styled.div`
  display: flex;
  position: relative;
  width: 11.4rem;
  height: 100%;

  align-items: center;
  justify-content: center;
`;

export const KInfo04 = styled.div`
  display: flex;
  position: relative;
  width: 9.5rem;
  height: 100%;

  align-items: center;
  justify-content: center;
`;

export const KInfo05 = styled.div`
  display: flex;
  position: relative;
  width: 9rem;
  height: 100%;

  align-items: center;
  justify-content: center;
`;

export const KInfo06 = styled.div`
  display: flex;
  position: relative;
  width: 18.5rem;
  height: 100%;

  align-items: center;
  justify-content: center;
`;

export const KInfo07 = styled.div`
  display: flex;
  position: relative;
  width: 12rem;
  height: 100%;

  align-items: center;
  justify-content: center;
`;

export const KInfo08 = styled.div`
  display: flex;
  position: relative;
  width: 12rem;
  height: 100%;

  align-items: center;
  justify-content: center;
`;

export const KInfo09 = styled.div`
  display: flex;
  position: relative;
  width: 12rem;
  height: 100%;

  align-items: center;
  justify-content: center;
`;
