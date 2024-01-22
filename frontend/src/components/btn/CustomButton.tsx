import { Button, Form } from "antd";
import styles from "./CustomButton.module.css";
import { FC, ReactNode } from "react";

interface CustomButtonProps {
  text: string;
  width: string;
  children?: ReactNode;
  block: boolean;
}

const CustomButton: FC<CustomButtonProps> = ({
  text,
  children,
  block,
  width,
}) => {
  let textContent;

  if (text === "login") {
    textContent = "login";
  }
  if (text === "signup") {
    textContent = "signup";
  }
  if (text === "verify") {
    textContent = "verify otp";
  }
  if (text === "save") {
    textContent = "save";
  }

  const classs = width === "small" ? styles.btn : styles.largeBtn;

  return (
    <Form.Item>
      <Button block={block} className={classs} htmlType="submit">
        {textContent}
      </Button>
      {children}
    </Form.Item>
  );
};

export default CustomButton;
