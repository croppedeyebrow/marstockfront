import styled from "styled-components";

export const NewsContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 5rem;
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

export const NewsTitle = styled.div`
  position: relative;
  display: flex;
  width: 10rem;
  justify-content: center;
  align-items: center;
  top: 12rem;
  left: 20rem;

  height: 6.3rem;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: bold;
  font-size: 3.6rem;
  color: #ffffff;
`;

export const NewsTopContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;
  height: 44.8rem;
  border: 1px solid black;
  gap: 2.6rem;
`;

export const Realtimezone = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 54.9rem;
  height: 44.8rem;
  gap: 2.4rem;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 15px;
`;

export const MostViewZone = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 54.9rem;
  height: 44.8rem;
  gap: 0.5rem;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 15px;
`;

export const TopTitile = styled.div`
  display: flex;
  position: relative;
  font-size: 2.2rem;
  color: white;
  font-weight: bold;
  height: 4rem;
  width: 100%;
  top: 1.5rem;
  left: 1.5rem;
`;

export const RealTimeBox = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50.7rem;
  height: 5rem;

  left: 1.5rem;
`;

export const TopBox = styled.div`
  position: relative;
  display: flex;
  width: 50.7rem;
  height: 2.9rem;
  gap: 0.5rem;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2.3rem;

  color: #ab81ff;
`;

export const RealNewsName = styled.div`
  position: relative;
  display: flex;

  width: 4.4rem;

  height: 2.9rem;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2.3rem;
  color: var(--mainlightorange);
`;

export const BottomBox = styled.div`
  position: relative;
  display: flex;
  width: 50.7rem;
  height: 4.4rem;

  justify-content: center;
  align-items: center;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 1.9rem;

  color: #ffffff;
`;

export const RealTime = styled.div`
  position: relative;
  display: flex;
  width: 14rem;
  height: 2.9rem;
  align-items: center;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 1.9rem;
  color: #ffffff;
`;

export const MostViewBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 51.7rem;
  height: 2.8rem;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 1.3rem;
  line-height: 2rem;
  left: 1.5rem;
  color: #ffffff;
`;

export const MostNewsName = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 7.2rem;
  height: 2.8rem;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 1.3rem;
  line-height: 2rem;
  color: var(--mainlightorange);
`;

export const NewsUploadTime = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12.2rem;
  height: 2.8rem;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 2rem;
  color: #ffffff;
`;

export const NewsBottomTitle = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 3.4rem;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 2.2rem;
  color: #ffffff;
  top: 3rem;
  left: 1.2rem;
  margin-bottom: 4rem;
`;

export const NewsBottomContainer = styled.div`
  display: grid;
  position: relative;
  border: 1px solid black;
  width: 100%;
  height: 100%;
  gap: 2rem;
  grid-template-columns: repeat(2, 54rem);
  grid-template-rows: repeat(3, 12.5rem);
`;

export const TvNewsBox = styled.div`
  position: relative;
  display: flex;
  width: 54rem;
  height: 12.5rem;
  gap: 1.8rem;
  align-items: center;
  justify-content: center;

  background: rgba(255, 184, 136, 0.12);
  border-radius: 15px;
`;

export const NewsImgBox = styled.img`
  display: flex;
  position: relative;
  width: 14.8rem;
  height: 8.3rem;
  border: 1px solid black;
`;

export const NewsInfoBox = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;

  gap: 0.5rem;
  width: 34rem;
  height: 8.3rem;
  border: 1px solid white;
`;

export const TvNewsTitle = styled.div`
  display: flex;
  position: relative;
  width: 34rem;
  height: 2.4rem;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 1.5rem;
  color: var(--mainlightorange);
`;

export const TvnewsInfo = styled.div`
  display: flex;
  position: relative;
  width: 34rem;
  height: 2.4rem;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: lighter;
  font-size: 1.1rem;
  color: #ffffff;
`;
