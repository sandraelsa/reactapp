import styled, { createGlobalStyle } from "styled-components";
import { Field } from "formik";
import ReactSelect from "react-select";

export const GlobalStyle = createGlobalStyle`
  *, body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }
`;

export const RegistrationPage = styled.div`
  padding: 10px;
  max-width: 948px;
  margin: auto;
  font-family: Arial, Helvetica, sans-serif;
  background-color: #f5f5f5;
  width: 100%;
  min-height: 100vh;
`;

export const FormActionContainer = styled.div`
  display: grid;
  grid-row-gap: 10px;
  @media (min-width: 306px) {
    grid-template-columns: max-content auto;
  }
  @media (min-width: 632px) {
    grid-template-columns: repeat(3, 1fr);
  }

  & > div {
    button {
      margin-left: 5px;
    }

    &:first-child {
      @media (min-width: 632px) {
        grid-column-start: 2;
        justify-self: center;
      }

      @media (max-width: 306px) {
        justify-self: center;
        order: 2;
      }
    }
    &:last-child {
      justify-self: end;

      @media (max-width: 306px) {
        display: grid;
        grid-template-columns: 1fr;
        justify-self: center;
        grid-gap: 10px;
      }
    }
  }
`;

export const Button = styled.button`
  background: linear-gradient(to bottom, #850a0a 32%, #d20f0f 100%);
  border: 1px solid #850a0a;
  font-weight: bold;
  color: #fff;
  padding: 4px 15px;
  border-radius: 3px;
  font-weight: bold;
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
`;

export const Input = styled(Field)`
  border: 1px solid #ccc;
  padding: 4px;
  border-radius: 4px;
  width: ${props => (!props.width ? "100%" : props.width)};
  grid-area: ${props => props.gridarea};
  @media (max-width: 558px) {
    max-width: ${props => (!props.width ? "100%" : "80vw")};
  }
`;

export const Label = styled.span`
  font-size: 0.75em;
  font-weight: bold;
  color: ${props => (!props.color ? "#000" : props.color)};
`;

export const FormContainer = styled.div`
  border: 1px solid #e0e0e0;
  border-top: 4px solid #1549b0;
  padding: 10px 5px;
  margin-top: 10px;

  & > div {
    background-color: #f5f5f5;
    padding-top: 5px;
  }
`;

export const Form = styled.div`
  display: grid;
  grid-gap: 5px;
  padding: 0 0 5px 10px;

  @media (max-width: 824px) {
    grid-template-areas:
      "activityAddressCodeLabel"
      "activityAddressCodeField"
      "agencyLabel"
      "agencyField"
      "firstNameLabel"
      "firstNameField"
      "middleIntialLabel"
      "middleIntialField"
      "lastNameLabel"
      "lastNameField"
      "phoneLabel"
      "phoneField"
      "phoneExtensionLabel"
      "phoneExtensionField"
      "emailMessage"
      "emailLabel"
      "emailField"
      "confirmEmailLabel"
      "confirmEmailField"
      "stateLabel"
      "stateField"
      "passwordLabel"
      "passwordField"
      "passwordInfo"
      "confirmPasswordLabel"
      "confirmPasswordField"
      "securityQnInfo"
      "securityQn1Label"
      "securityQn1Field"
      "answer1Label"
      "answer1Field"
      "securityQn2Label"
      "securityQn2Field"
      "answer2Label"
      "answer2Field"
      "securityQn3Label"
      "securityQn3Field"
      "answer3Label"
      "answer3Field";
  }

  @media (min-width: 824px) {
    grid-template-columns: max-content repeat(5, auto);
    grid-template-areas:
      "activityAddressCodeLabel activityAddressCodeField agencyLabel agencyField . ."
      "firstNameLabel firstNameField middleIntialLabel middleIntialField lastNameLabel lastNameField"
      "phoneLabel phoneField phoneExtensionLabel phoneExtensionField . ."
      ". emailMessage emailMessage emailMessage emailMessage emailMessage"
      "emailLabel emailField emailField emailField . ."
      "confirmEmailLabel confirmEmailField confirmEmailField confirmEmailField . ."
      "stateLabel stateField . . . ."
      "passwordLabel passwordField . . . ."
      ". passwordInfo passwordInfo passwordInfo passwordInfo passwordInfo"
      "confirmPasswordLabel confirmPasswordField . . . ."
      ". securityQnInfo securityQnInfo securityQnInfo securityQnInfo securityQnInfo"
      "securityQn1Label securityQn1Field securityQn1Field securityQn1Field securityQn1Field ."
      "answer1Label answer1Field answer1Field answer1Field answer1Field ."
      "securityQn2Label securityQn2Field securityQn2Field securityQn2Field securityQn2Field ."
      "answer2Label answer2Field answer2Field answer2Field answer2Field ."
      "securityQn3Label securityQn3Field securityQn3Field securityQn3Field securityQn3Field ."
      "answer3Label answer3Field answer3Field answer3Field answer3Field .";
  }
`;

export const InfoMessage = styled.span`
  font-size: 0.7em;
  color: #a7a4a4;
`;

export const ErrorMessage = styled.div`
  margin-top: 2.5px;
  font-size: 0.7em;
  color: red;
`;

export const GridCol = styled.div`
  grid-area: ${props => props.gridarea};
  justify-self: ${props => (!props.justifyself ? "auto" : props.justifyself)};
  @media (max-width: 824px) {
    justify-self: auto;
  }
`;

export const Select = styled(ReactSelect)`
  font-size: 0.75em;
  width: 10em;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: ${props => `repeat(${props.col}, max-content)`};
  align-items: center;
  grid-column-gap: 8px;
`;

export const ToolTipContent = styled.div`
  max-width: 20em;
  font-size: 0.7em;
  font-family: Arial, Helvetica, sans-serif;
  color: #1549b0;
  text-align: justify;
`;

export const FormFooter = styled.div`
  display: grid;
  justify-content: center;
  margin-top: 10px;
`;
