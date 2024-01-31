import styled from "styled-components";

export const StockCommunityContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 5rem;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  padding-top: 10rem;
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

export const CommunityTitleZone = styled.div`
  width: 110rem;
  height: 4rem;
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.3);
  margin-top: 10rem;
  border-radius: 1.5rem;
`;

export const ComTitle01 = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 53rem;
  height: 4.4rem;
  font-size: 1.6rem;
  color: #ffffff;
`;

export const ComTitle02 = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 19.9rem;
  height: 4.4rem;
  font-size: 1.6rem;
  color: #ffffff;
`;

export const ComTitle03 = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 13.2rem;
  height: 4.4rem;
  font-size: 1.6rem;
  color: #ffffff;
`;

export const ComTitle04 = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 7.8rem;
  height: 4.4rem;
  font-size: 1.6rem;

  color: #ffffff;
`;

export const CommentBox = styled.div`
  width: 110rem;
  height: 96rem;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const ComContentZone = styled.div`
  width: 110rem;
  height: 4rem;
  display: flex;
  flex-direction: row;

  position: relative;
  align-items: center;

  border-radius: 1.5rem;
`;

export const ComCon01 = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 53rem;
  height: 4.4rem;
  font-size: 1.6rem;
  color: #ffffff;
`;

export const ComCon02 = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 19.9rem;
  height: 4.4rem;
  font-size: 1.6rem;
  color: #ffffff;
`;

export const ComCon03 = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 13.2rem;
  height: 4.4rem;
  font-size: 1.6rem;
  color: #ffffff;
`;

export const ComCon04 = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 7.8rem;
  height: 4.4rem;
  font-size: 1.6rem;
  color: #ffffff;
`;

export const BottomCheckZone = styled.div`
  width: 110rem;
  height: 4rem;
  display: flex;
  flex-direction: row;
  position: relative;

  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const RadioButton = styled.input.attrs({ type: "radio" })`
  display: relative;
  position: relative;

  &:checked + label {
    color: white;
    background: #6633cc;
  }
`;

export const RadioButtonContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.4rem;
  color: #ffffff;

  width: 7rem;
  height: 2.2rem;
`;
