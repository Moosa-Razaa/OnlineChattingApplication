// OTPScreen.tsx
import React from "react";
import { Form, Input, Button, message } from "antd";
import styles from "./OtpScreen.module.css";

const OTPScreen: React.FC = () => {
  const onFinish = (values: any) => {
    // Here you can validate the entered OTP and perform necessary actions
    const enteredOTP = values.otp;
    const correctOTP = "1234"; // Replace with the actual OTP you're expecting

    if (enteredOTP === correctOTP) {
      message.success("OTP verification successful!");
      // Perform actions like navigating to the next screen
    } else {
      message.error("Invalid OTP. Please try again.");
    }
  };

  const inputStyles = {
    width: "8",
    fontSize: "1.5em",
    border: "1px solid #ffd369",
  };

  return (
    <div className={styles["main-div"]}>
      <div className={styles["otp-form"]}>
        <h2 className={styles["verification-text"]}>VERIFICATION</h2>
        <p
          style={{
            textAlign: "center",
            fontSize: "1rem",
            margin: "0 0 4rem 0",
          }}
        >
          We have sent a four digit OTP <br /> to abc@gmail.com
        </p>
        <Form
          name="otp_form"
          onFinish={onFinish}
          initialValues={{ otp: "" }}
          layout="vertical" 
        >
          <Form.Item
            name="otp"
            rules={[
              { required: true, message: "Please enter the 4-digit OTP" },
              { len: 4, message: "Please enter a 4-digit OTP" },
            ]}
          >
            <Input maxLength={4} style={inputStyles} placeholder="Enter OTP" />
          </Form.Item>

          <div className={styles["button-container"]}>
            <Form.Item>
              <Button block htmlType="submit" className={styles["ant-btn"]}>
                Verify OTP
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default OTPScreen;
