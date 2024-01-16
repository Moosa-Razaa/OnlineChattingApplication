import { Button, Form } from "antd";
import styles from "./CustomButton.module.css";
import { FC, ReactNode } from "react";

interface CustomButtonProps {
  text: string;
  type: string;
  children: ReactNode;
  block: boolean;
}

const CustomButton: FC<CustomButtonProps> = ({
  text,
  type,
  children,
  block,
}) => {
  const textContent = text === "login" ? "login" : "signup";
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
