import { Form,Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { FC } from "react";
import styles from "./Input.module.css";

interface CustomInputProps {
  type: "text" | "password";
  placeholder: string;
  name: string;
  id:string
}
const CustomInput: FC<CustomInputProps> = ({ id,name,type, placeholder }) => {
  const icon =
    type === "password" ? (
      <LockOutlined className="site-form-icon-item" />
    ) : (
      <UserOutlined className="site-form-icon-item" />
    );

  return (
    <Form.Item
    id={id}
    name={name}
    rules={[
      { required: true, message: "Please input your Username!" },
    ]}
  >

    <Input
      prefix={icon}
      placeholder={placeholder}
      type={type}
      className={styles.input}
      />
      </Form.Item>
  );
};

export default CustomInput;
