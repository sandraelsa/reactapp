import React from "react";
import { Formik } from "formik";
import {
  Button,
  Form,
  FormContainer,
  FormActionContainer,
  Label,
  RegistrationPage,
  InfoMessage,
  GridCol,
  FormFooter
} from "./styles";
import FormField from "./FormField";
import FormSchema from "../utils/formSchema";
import formData from "../json/formData.json";
import LocationStateField from "./LocationStateField";

const stateOptions = [
  { label: "Alabama", value: "AL" },
  { label: "Alaska", value: "AK" },
  { label: "Arizona", value: "AZ" },
  { label: "Arkansas", value: "AR" },
  { label: "California", value: "CA" },
  { label: "Colorado", value: "CO" },
  { label: "Connecticut", value: "CT" },
  { label: "Delaware", value: "DE" },
  { label: "Florida", value: "FL" },
  { label: "Georgia", value: "GA" }
];

const RegistrationForm = () => {
  return (
    <RegistrationPage>
      <FormActionContainer>
        <div>
          <Button>Submit</Button>
        </div>
        <div>
          <Button>Back</Button>
          <Button>Print</Button>
          <Button>Help</Button>
        </div>
      </FormActionContainer>
      <FormContainer>
        <div>
          <Label color="#c59a46">
            Fields marked with an asterisk (*) are required fields
          </Label>
          <Formik
            initialValues={{
              activityAddressCode: "",
              agency: "",
              firstName: "",
              middleIntial: "",
              lastName: "",
              phone: "",
              phoneExtension: "",
              email: "",
              confirmEmail: "",
              state: "",
              password: "",
              confirmPassword: "",
              securityQn1: "",
              answer1: "",
              securityQn2: "",
              answer2: "",
              securityQn3: "",
              answer3: ""
            }}
            validationSchema={FormSchema}
          >
            {({ errors, touched, setFieldValue, setFieldTouched, values }) => (
              <Form>
                {formData.map(rowData =>
                  rowData.dataType === "field" ? (
                    <FormField
                      key={rowData.name}
                      fieldError={errors[rowData.name]}
                      touched={touched[rowData.name]}
                      {...rowData}
                    />
                  ) : (
                    <GridCol gridarea={rowData.name} key={rowData.name}>
                      <InfoMessage>{rowData.message}</InfoMessage>
                    </GridCol>
                  )
                )}
                <LocationStateField
                  error={errors.state}
                  touched={touched.state}
                  options={stateOptions}
                  value={values.state}
                  onChange={setFieldValue}
                  onBlur={setFieldTouched}
                />
              </Form>
            )}
          </Formik>
        </div>
      </FormContainer>

      <FormFooter>
        <Button>Submit</Button>
      </FormFooter>
    </RegistrationPage>
  );
};

export default RegistrationForm;
