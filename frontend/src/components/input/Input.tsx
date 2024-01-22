import { Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { FC } from "react";
import styles from "./Input.module.css";

interface CustomInputProps {
  type: "text" | "password" | "otp" | "user" | "about";
  placeholder: string;
  name: string;
  id: string;
  width: string;
  maxLength: number;
  rules: any;
}
const CustomInput: FC<CustomInputProps> = ({
  id,
  rules,
  width,
  name,
  type,
  placeholder,
  maxLength,
}) => {
  const icon =
    type === "password" ? (
      <LockOutlined className="site-form-icon-item" />
    ) : (
      type === "text" && <UserOutlined className="site-form-icon-item" />
    );

  const classs = width === "small" ? styles.input : styles.largeInput;

  return (
    <Form.Item id={id} name={name} rules={rules}>
      <Input
        maxLength={maxLength ? maxLength : 50}
        prefix={icon}
        placeholder={placeholder}
        type={type}
        className={classs}
      />
    </Form.Item>
  );
};

export default CustomInput;
