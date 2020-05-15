import React from "react";
import {
  ErrorMessage,
  Input,
  Label,
  GridCol,
  Grid,
  ToolTipContent
} from "./styles";
import PropTypes from "prop-types";
import { HelpCircle } from "react-feather";
import ToolTip from "./Tooltip";

const FormField = ({
  label,
  name,
  type,
  fieldError,
  touched,
  inputWidth,
  labelColor,
  helperText,
  children
}) => (
  <>
    <GridCol gridarea={`${name}Label`} justifyself="flex-end">
      <Label color={labelColor}>{label}</Label>
    </GridCol>
    <GridCol gridarea={`${name}Field`}>
      {children ? (
        children
      ) : helperText ? (
        <Grid col={2}>
          <div>
            <Input
              type={type}
              name={name}
              gridarea={`${name}Field`}
              width={inputWidth}
            />
          </div>
          <div>
            <ToolTip
              tooltip={<ToolTipContent>{helperText}</ToolTipContent>}
              placement="top"
              trigger={["click", "hover"]}
            >
              <HelpCircle color="#1549b0" size={16} />
            </ToolTip>
          </div>
        </Grid>
      ) : (
        <Input
          type={type}
          width={inputWidth}
          name={name}
          gridarea={`${name}Field`}
        />
      )}
      <ErrorMessage>
        {fieldError && touched ? <div>{fieldError}</div> : null}
      </ErrorMessage>
    </GridCol>
  </>
);

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  fieldError: PropTypes.string,
  touched: PropTypes.bool,
  inputWidth: PropTypes.string,
  labelColor: PropTypes.string
};

FormField.defaultProps = {
  inputWidth: null,
  labelColor: null,
  fieldError: null,
  touched: false,
  type: null
};

export default React.memo(FormField);
