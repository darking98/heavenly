import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useForm } from "@formspree/react";
import * as Yup from "yup";

const SixthScreen = () => {
  const [state, handleSubmit] = useForm("mpzbqewp");

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const formSchema = Yup.object().shape({
    Name: Yup.string()
      .min(5, `Mínimo 5 caracteres`)
      .max(250, `Máximo 250 caracteres`)
      .required("Campo Requerido"),
    Email: Yup.string()
      .required("Campo Requerido")
      .email("Correo Electronico Invalido")
      .max(255, `Máximo 255 caracteres`),
    Phone: Yup.string()
      .required("Campo Requerido")
      .matches(phoneRegExp, "Debe ser un número válido")
      .max(255, "Máximo 255 caracteres"),
    Message: Yup.string()
      .min(5, `Mínimo 5 caracteres`)
      .max(250, `Máximo 250 caracteres`)
      .required("Campo Requerido"),
  });

  return (
    <>
      <div className="sixth-screen-container">
        <div className="sixth-screen-info">
          <span>Contact us</span>
          <h3>Let's Talk</h3>
        </div>
        <Formik
          initialValues={{
            Name: "",
            Email: "",
            Phone: "",
            Message: "",
          }}
          formSchema={formSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <label htmlFor="Name" className="mb-1">
              Your Name
            </label>
            <Field name="Name" id="Name" type="text" />
            <ErrorMessage
              name="Name"
              component="div"
              className="field-error text-danger"
            />
            <label htmlFor="Email" className="mb-1">
              Your Email
            </label>
            <Field name="Email" id="Email" type="text" />
            <ErrorMessage
              name="Email"
              component="div"
              className="field-error text-danger"
            />
            <label htmlFor="Phone" className="mb-1">
              Your Phone
            </label>
            <Field name="Phone" id="Phone" type="text" />
            <ErrorMessage
              name="Phone"
              component="div"
              className="field-error text-danger"
            />
            <label htmlFor="Message" className="mb-1">
              Your Message
            </label>
            <Field name="Message" id="Message" type="text" />
            <ErrorMessage
              name="Message"
              component="div"
              className="field-error text-danger"
            />
            <button type="submit">
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default SixthScreen;
