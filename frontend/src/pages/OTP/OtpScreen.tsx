// OTPScreen.tsx
import React from "react";
import { Form, message } from "antd";
import styles from "./OtpScreen.module.css";
import CustomInput from "../../components/input/Input";
import CustomButton from "../../components/btn/CustomButton";

const OTPScreen: React.FC = () => {
  const onFinish = (values: any) => {
    // Here you can validate the entered OTP and perform necessary actions
    const enteredOTP = values.otp;
    console.log(enteredOTP);
    const correctOTP = "1234"; // Replace with the actual OTP you're expecting

    if (enteredOTP === correctOTP) {
      message.success("OTP verification successful!");
      // Perform actions like navigating to the next screen
    } else {
      message.error("Invalid OTP. Please try again.");
    }
  };


  return (
    <div className={styles["main-div"]}>
      <div className={styles["otp-form"]}>
        <h2 className={styles["verification-text"]}>VERIFICATION</h2>
        <p className={styles["info-text"]}>
          We have sent a four digit OTP <br /> to abc@gmail.com
        </p>
        <Form
          name="otp_form"
          onFinish={onFinish}
          initialValues={{ otp: "" }}
          layout="vertical"
        >
          <CustomInput
            type="otp"
            id="otp"
            name="otp"
            maxLength={4}
            width="l"
            placeholder="Enter Otp"
            rules={[
              { required: true, message: "Please enter the 4-digit OTP" },
              { len: 4, message: "Please enter a 4-digit OTP" },
            ]}
          />
          <div className={styles["button-container"]}>
            <Form.Item>
              <CustomButton text="verify" block width="large"/>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default OTPScreen;
