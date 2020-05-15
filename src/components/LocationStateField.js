import React from "react";
import { HelpCircle } from "react-feather";
import ToolTip from "./Tooltip";
import { Select, Grid, ToolTipContent } from "./styles";
import FormField from "./FormField";

const customStyles = {
  control: provided => ({
    ...provided,
    minHeight: "2.5em"
  }),
  indicatorsContainer: provided => ({
    ...provided,
    height: "2.5em"
  }),
  menu: provided => {
    return {
      ...provided,
      marginTop: 0
    };
  }
};

const LocationStateField = ({
  error,
  touched,
  options,
  value,
  onChange,
  onBlur
}) => {
  const handleChange = value => onChange("state", value);

  const handleBlur = () => onBlur("state", true);
  return (
    <FormField
      label="Location State"
      name="state"
      fieldError={error}
      touched={touched}
      labelColor="#1549b0"
    >
      <Grid col={2}>
        <Select
          styles={customStyles}
          name="state"
          options={options}
          onChange={handleChange}
          onBlur={handleBlur}
          value={value}
        />
        <div>
          <ToolTip
            tooltip={
              <ToolTipContent>
                Location State must be no more than 2 characters. Select the
                state from the Location State link.
              </ToolTipContent>
            }
            placement="top"
            trigger={["click", "hover"]}
          >
            <HelpCircle color="#1549b0" size={16} />
          </ToolTip>
        </div>
      </Grid>
    </FormField>
  );
};

export default React.memo(LocationStateField);
