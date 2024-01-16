import GlobalStyle from "../utils/style/GlobalStyle";
import Header from "../utils/style/Header";
import Footer from "../utils/style/Footer";
import InlineContainer from "../utils/style/InlineContainer";
import styled from "styled-components";

const Container =styled.div`
   width: 100%;
   height: 100%;
   padding: 5rem;
`
const TEST = styled.div`
   width: 100px;
   height: 100px;
   background-color: blue;
`;

const FormPage = () => {
   
   // InlineContainer의 color = "orange" 를 입력하면 오렌지색 배경이 나오고, 공백("")인 경우는 보라색 배경이 나온다.
   return (
      <>
         <Header />
         <InlineContainer color="orange"
         contents ={
            <Container>
            <TEST/>
            </Container>
         }> 
         </InlineContainer>
         <Footer />
      </>
   )
}

export default FormPage;