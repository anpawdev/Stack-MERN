import React from 'react'
import { Formik } from 'formik';
import * as Yup from "yup";
import Input from '../../features/ContactForm/Input';
import Field from '../../features/ContactForm/Field';
import Button from '../../common/Button/Button';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import ContactImage from '../../../images/contact_image.jpg';


const initialValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const schema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().required("Email is required").email("Invalid e-mail"),
  subject: Yup.string()
      .required("Subject is required")
      .min(6, "Subject must have at least 6 characters"),
  message: Yup.string()
      .required("Message is required")
      .min(20, "Message must have at least 20 characters"),
});

const handleSubmit = (values) => {
  console.log(values);
};

const ContactForm = () => (
  <div className="flex flex-wrap justify-between my-8">
    <div className="w-full lg:w-1/2 p-4">
      <SectionTitle>Lets talk!</SectionTitle>
      <p className="text-sm text-justify mb-6">Thank you, dear reader, for your interest in our design blog. If you have any questions, just fill in the contact form and we will answer you shortly.</p>
      <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      {(props) => (
        <form onSubmit={props.handleSubmit} >
          <Input name="name" label="Name" />
          <Input name="email" label="Email" />
          <Input name="subject" label="Subject" />
          <Field name="message" label="message" />
          <Button type="submit">
            Send
          </Button>
        </form>
      )}
    </Formik>
    </div>
    <div className="w-full lg:w-1/2 text-center p-20">
      <img src={ContactImage} alt="contact-image" />
    </div>
  </div>
);

export default ContactForm;
