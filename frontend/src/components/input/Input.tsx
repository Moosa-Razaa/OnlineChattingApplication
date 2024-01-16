import { Form,Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { FC } from "react";
import styles from "./Input.module.css";

interface CustomInputProps {
  type: "text" | "password" | "otp";
  placeholder: string;
  name: string;
  id:string;
  maxLength:number;
}
const CustomInput: FC<CustomInputProps> = ({ id,name,type, placeholder ,maxLength}) => {
  const icon =
    type === "password" ? (
      <LockOutlined className="site-form-icon-item" />
    ) :type==="text" && (
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
      maxLength={maxLength ? maxLength : 50}
      prefix={icon}
      placeholder={placeholder}
      type={type}
      className={styles.input}
      />
      </Form.Item>
  );
};

export default CustomInput;
