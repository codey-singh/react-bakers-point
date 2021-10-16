import React from "react";
import { AccordionWidget, AccordionWidgetProps } from "../../components/shared/AccordionWidget";

const faqs: AccordionWidgetProps[] = [
  {
    heading: 'Where are you located?',
    content: '564,Mainland Imaginary Road, Hometown, Canada.'
  },
  {
    heading: 'What are your working hours?',
    content: 'We are open all seven days 10am to 9pm.'
  },
  {
    heading: 'What are your payment methods?',
    content: 'We accept cash and cards.'
  },
  {
    heading: 'What kinds of products do you sell?',
    content: 'Yes, we do wedding cakes but only on preordering.'
  },
  {
    heading: 'What is the minimum order for custom cupcakes?',
    content: 'Custom cupcakes can be done with a minimum order of 2 dozens.'
  },
  {
    heading: 'Can I put something on hold?',
    content: 'Yes, with advance payment of 50%.'
  },
  {
    heading: 'How early do we have to order for large parties?',
    content: 'About one to two weeks is recommended.'
  },
  {
    heading: 'Do you deliver?',
    content: 'Yes, within 5-10km around the store.'
  },
  {
    heading: 'Do you have cakes ready for purchase in the store?',
    content: 'Yes, we have fresh items daily in the store.'
  },
];

export const Faqs = () => {
  return (
    <main id="wrapper">
      {faqs.map((faq, i) => (
        <AccordionWidget key={i} heading={faq.heading} content={faq.content}></AccordionWidget>
      ))
      }
    </main>
  );
};
