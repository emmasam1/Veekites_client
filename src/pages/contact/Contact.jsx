import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";
import Map from "../../components/map/Map";
import emailjs from "emailjs-com";

const { TextArea } = Input;

const Contact = () => {
  const [form] = Form.useForm();
  const [sending, setSending] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = (values) => {
    setSending(true);

    const templateParams = {
      name: values.name,
      email: values.email,
      message: values.message,
    };

    emailjs
      .send(
        "service_gozwykh", // from EmailJS dashboard
        "template_g69q20z",
        templateParams,
        "EsTzN-dWRv49434Ne"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          messageApi.open({
            type: "success",
            content: "Message sent successfully!",
          });
          form.resetFields(); // ✅ Clear form after success
        },
        (err) => {
          console.error("FAILED...", err);
          message.error("Failed to send message. Try again later.");
        }
      )
      .finally(() => setSending(false)); // ✅ Stop loading
  };

  return (
    <>
      <div className="relative -top-21 h-[300px] bg-[url(/src/assets/blog_hero.jpg)] bg-no-repeat bg-cover bg-center">
        {/* Overlay */}
        {contextHolder}
        <div className="absolute inset-0 bg-black/70 h-[300px] flex justify-center flex-col px-4">
          <div className="max-w-6xl w-full mx-auto">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-white">
              Let’s Build Something Great Together
            </h2>
            <p className="mt-4 text-lg md:text-lg text-gray-200">
              We provide tailored and sustainable solutions in construction, oil & gas and marine operations.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Info + Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-11/12 mx-auto mb-8">
        {/* Contact Info */}
        <div className="space-y-6">
          <h1 className="font-bold text-2xl mb-4 uppercase">
            Contact Information
          </h1>

          <div className="flex items-start gap-4">
            <div className="bg-[#A02B2D] text-white h-12 w-12 flex justify-center items-center p-3 rounded-full">
              <EnvironmentOutlined className="text-xl" />
            </div>
            <p className="text-gray-700">
              House 49, O.A.U. Quarters, Close D Kashim Ibrahim Wy, <br />
              Maitama, AMAC 904101, Federal Capital Territory
            </p>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-[#A02B2D] text-white h-12 w-12 flex justify-center items-center p-3 rounded-full">
              <PhoneOutlined className="text-xl" />
            </div>
            <div>
              <p>09168051180</p>
              <p>080000400400</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-[#A02B2D] text-white h-12 w-12 flex justify-center items-center p-3 rounded-full">
              <MailOutlined className="text-xl" />
            </div>
            <div>
              <p>info@veekites.com</p>
              <p>veekites@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold mb-6 uppercase">
            Send Us a Message
          </h2>
          <Form layout="vertical" form={form} onFinish={onFinish}>
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
              className="!bg-[#A02B2D] !rounded-none py-2"
              loading={sending} // ✅ Shows spinner
            >
              {sending ? "Sending..." : "Send Message"}
            </Button>
          </Form>
        </div>
      </div>

      {/* Map Section */}
      <div>
        <Map />
      </div>
    </>
  );
};

export default Contact;
