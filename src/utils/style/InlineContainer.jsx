import styled from "styled-components";

const Category = styled.div`
   position: relative;
   top: 9rem;
   width: 120rem;
   height: 5rem;
   display: flex;
   padding: 0 7rem;
   justify-content: flex-start;
   color: rgba(255, 255, 255, 0.7);
   gap: 5rem;
   font-size: 3rem;
   font-weight: 200;
   cursor: pointer;
`;

const InlineCon = styled.div`
   width: 120rem;
   height: 150vh;
   min-height: 108rem;
   max-height: 150rem;
   background: ${props => props.color === 'orange' ? 'var(--gradientorange)' : 'var(--gradientpurple)'};
   border-radius: 5rem;
   margin-top: 10rem;


`;

const InlineContainer = ({color, contents, category}) => {

   return (
      <>
         <Category>
            {category}
         </Category>
         <InlineCon color={color}>
            {contents}
         </InlineCon>
      </>
   )
};

export default InlineContainer;