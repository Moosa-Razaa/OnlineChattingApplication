import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import styles from "./LoginSignupForm.module.css";
import loginBg from "../assets/login-page-image.jpg";

interface LoginSignupFormProps {
  state: string;
}
const LoginSignupForm: React.FC<LoginSignupFormProps> = ({ state }) => {
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
                {state === "login" ? "LOG IN" : "SIGN UP"}
              </h2>
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Please input your Username!" },
                ]}
              >
                <Input
                  className={styles["ant-input"]}
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Username"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your Password!" },
                ]}
              >
                <Input.Password
                  className={styles["ant-input"]}
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              {state === "signup" && (
                <Form.Item
                  name="confirm-password"
                  rules={[
                    { required: true, message: "Please input your Password!" },
                  ]}
                >
                  <Input
                    className={styles["ant-input"]}
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Confirm password"
                  />
                </Form.Item>
              )}
              <div className={styles["forgot-password"]}>
                {state === "login" && (
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

              <Form.Item>
                <Button className={styles["ant-btn"]} block htmlType="submit">
                  {state === "login" ? "log in" : "sign up"}
                </Button>
                <div className={styles.register}>
                  {state === "login" ? "New to app" : "Already have an account"}

                  <a href="" className={styles["register-button"]}>
                    {state === "login" ? "register now!" : "login now!"}
                  </a>
                </div>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginSignupForm;
