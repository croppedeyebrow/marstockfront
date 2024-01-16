import styled from "styled-components";

const Container = styled.div`
   margin-top: 15rem;
   display: flex;
   justify-content: center;
`;

const InlineCon = styled.div`
   width: 120rem;
   height: 150vh;
   min-height: 108rem;
   max-height: 150rem;
   background: ${props => props.color === 'orange' ? 'var(--gradientorange)' : 'var(--gradientpurple)'};
   border-radius: 5rem;


`;

const InlineContainer = ({color}) => {

   return (
      <>
       <Container>
         <InlineCon color={color}/>
       </Container>
      </>
   )
};

export default InlineContainer;