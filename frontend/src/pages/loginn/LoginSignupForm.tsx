import React from "react";
import { Checkbox, Form } from "antd";
import styles from "./LoginSignupForm.module.css";
import loginBg from "../../assets/login-page-image.jpg";
import CustomInput from "../../components/input/Input";
import CustomButton from "../../components/btn/CustomButton";

interface LoginSignupFormProps {
  formState: string;
}
const LoginSignupForm: React.FC<LoginSignupFormProps> = ({ formState }) => {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className={styles["background"]}>
      <div className={styles["main-div"]}>
        <div className={styles.left}>
          <img src={loginBg} alt="" />
        </div>
        <div className={styles.right}>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <div className={styles.form}>
              <h2 className={styles["login-text"]}>
                {formState === "login" ? "LOG IN" : "SIGN UP"}
              </h2>

              <CustomInput
                name="email"
                width="small"
                placeholder="Enter Email"
                type="text"
                id="email"
                maxLength={50}
                rules={[
                  { required: true, message: "Please input your Username!" },
                ]}
              />
              <CustomInput
                width="small"
                name="password"
                placeholder="Enter Password"
                type="password"
                rules={[
                  { required: true, message: "Please input your Username!" },
                ]}
                id="password"
                maxLength={50}
              />

              {formState === "signup" && (
                <CustomInput
                  width="small"
                  rules={[
                    { required: true, message: "Please input your Username!" },
                  ]}
                  name="confirm-password"
                  placeholder="Confirm Password"
                  type="password"
                  id="confirm-password"
                  maxLength={50}
                />
              )}
              <div className={styles["forgot-password"]}>
                {formState === "login" && (
                  <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                      <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <a
                      style={{
                        color: "#FFD369",
                        textDecoration: "underline",
                      }}
                      className="login-form-forgot"
                      href=""
                    >
                      Forgot password
                    </a>
                  </Form.Item>
                )}
              </div>

              <CustomButton text={formState} block width="small">
                <div className={styles.register}>
                  {formState === "login"
                    ? "New to app"
                    : "Already have an account"}

                  <a href="" className={styles["register-button"]}>
                    {formState === "login" ? "register now!" : "login now!"}
                  </a>
                </div>
              </CustomButton>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginSignupForm;
