import React from "react";
import { Form, Input, Button } from "antd";
import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";

const { TextArea } = Input;

const Contact = () => {
  const onFinish = (values) => {
    console.log("Form Values:", values);
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative -top-21 h-[300px] bg-[url(/src/assets/blog_hero.jpg)] bg-no-repeat bg-cover bg-center flex items-center justify-center text-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Let’s Build Something Great Together
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-200">
            Have a project in mind or need expert guidance? Reach out to
            Veekites today—we’re here to provide tailored solutions in
            construction, energy, ICT, and beyond.
          </p>
        </div>
      </div>

      {/* Contact Info + Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-11/12 mx-auto mb-8">
        {/* Contact Info */}
        <div className="space-y-6">
          <h1 className="font-bold text-2xl mb-4">Contact Information</h1>

          <div className="flex items-start gap-4">
            <div className="bg-[#FB2C36] text-white h-12 w-12 flex justify-center items-center p-3 rounded-full">
              <EnvironmentOutlined className="text-xl" />
            </div>
            <p className="text-gray-700">
              House 49, O.A.U. Quarters, Close D Kashim Ibrahim Wy, <br/>Maitama,
              AMAC 904101, Federal Capital Territory
            </p>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-[#FB2C36] text-white h-12 w-12 flex justify-center items-center p-3 rounded-full">
              <PhoneOutlined className="text-xl" />
            </div>
            <div>
              <p>09168051180</p>
              <p>080000400400</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-[#FB2C36] text-white h-12 w-12 flex justify-center items-center p-3 rounded-full">
              <MailOutlined className="text-xl" />
            </div>
            <div>
              <p>info@veekites.com</p>
              <p>veekites@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="">
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item
              label="Full Name"
              name="name"
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <Input placeholder="Your name" className="!rounded-none" />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please enter your email" }]}
            >
              <Input placeholder="Your email" className="!rounded-none" />
            </Form.Item>

            <Form.Item
              label="Message"
              name="message"
              rules={[{ required: true, message: "Please enter your message" }]}
            >
              <TextArea
                rows={4}
                placeholder="Your message"
                className="resize-none !rounded-none"
              />
            </Form.Item>

            <Button
              type="primary"
              htmlType="submit"
              className="!bg-[#FB2C36] !rounded-none  py-2"
            >
              Send Message
            </Button>
          </Form>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-[400px]">
        <iframe
          title="Veekites Location"
          src="https://www.google.com/maps?q=House+49,+O.A.U.+Quarters,+Close+D+Kashim+Ibrahim+Wy,+Maitama,+AMAC+904101,+Federal+Capital+Territory&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
