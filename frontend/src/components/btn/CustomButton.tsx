import { Button, Form } from "antd";
import styles from "./CustomButton.module.css";
import { FC, ReactNode } from "react";

interface CustomButtonProps {
  text: string;
  children: ReactNode;
  block: boolean;
}

const CustomButton: FC<CustomButtonProps> = ({ text, children, block }) => {
  let textContent;

  if (text === "login") {
    textContent = "login";
  }
  if (text === "signup") {
    textContent = "login";
  }
  if (text === "verify") {
    textContent = "verify otp";
  }
  return (
    <Form.Item>
      <Button block={block} htmlType="submit" className={styles.btn}>
        {textContent}
      </Button>
      {children}
    </Form.Item>
  );
};

export default CustomButton;
