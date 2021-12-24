import styled from "@emotion/styled";

export const Button = styled.button`
display: block;
   padding: 0 20px;
   margin-bottom: ${(props) => props.theme.spacing(props.mb)};
   margin-left: ${(props) => props.theme.spacing(props.ml)};
   background-color: ${(props) => props.theme.colors.inputColor};
   line-height: 3;
   border-width: 0;
   border-radius: 20px;
   font-family: 'Roboto', sans-serif;
   cursor:pointer;
   

   :hover,
   :focus-visible{
        background-color: ${(props) => props.theme.colors.lightSkyBlue};
`;

export const Input = styled.input`
display: block;
   width: 200px;
   padding: 0 20px;
   margin-bottom: 10px;
   background: ${(props) => props.theme.colors.inputColor};
   line-height: 40px;
   border-width: 0;
   border-radius: 20px;
   font-family: 'Roboto', sans-serif;
   cursor:pointer;
   

   :hover,
   :focus-visible{
        background-color: ${(props) => props.theme.colors.lightSkyBlue};
`;

export const Label = styled.label`
  display: inline-flex;
  flex-direction: column;
  cursor: pointer;
  margin-bottom: ${(props) => props.theme.spacing(2)};
`;
export const Span = styled.span`
  margin-left: ${(props) => props.theme.spacing(2)};
`;

export const ButtonWrapper = styled.div`
  display: inline-flex;
`;
