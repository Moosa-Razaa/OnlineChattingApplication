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
                maxLength={50}
                id="username"
                name="username"
                type="text"
                placeholder="Enter Username"
              />
              <CustomInput
                maxLength={50}
                id="password"
                name="password"
                type="password"
                placeholder="Enter Password"
              />

              {formState === "signup" && (
                <CustomInput
                  maxLength={50}
                  id="confirm-password"
                  name="confirm-password"
                  type="password"
                  placeholder="Confirm Password"
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

              <CustomButton text={formState} block={true}>
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
