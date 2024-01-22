import { Form, Upload, message } from "antd";
import React, { useState } from "react";
import { CameraFilled, UserOutlined } from "@ant-design/icons";
import styles from "./Profile.module.css";
import CustomButton from "../../components/btn/CustomButton";
import CustomInput from "../../components/input/Input";

const Profile: React.FC = () => {
  const [imagePreview, setImagePreview] = useState<string | undefined>(
    undefined
  );

  const beforeUpload = (file: File) => {
    console.log(file);
    const isImage = file.type.startsWith("image/");

    if (isImage) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      message.error("you cant select multiple images");
    }

    return false
  };

  const image = {
    width: "6rem",
    height: "6rem",
    borderRadius: "50%",
    background: `url(${imagePreview}) center/cover no-repeat`,
    padding: "1rem",
    marginLeft: "4.4rem",
  };
  return (
    <div className={styles["main-div"]}>
      <div className={styles["profile-form"]}>
        <h2 className={styles["profile-info-text"]}>Profile Info</h2>
        <Form layout="vertical">
          <Form.Item name="profilePic" getValueFromEvent={(e) => e && [e.file]}>
            <div>
              {imagePreview ? (
                <div className={styles.hover} style={image}></div>
              ) : (
                <div
                  style={{
                    marginLeft: "4.4rem",
                    width: "6rem",
                    height: "6rem",
                    borderRadius: "50%",
                    backgroundColor: "#393E46",
                    display: "flex",
                    justifyContent: "center",
                    padding: "1rem",
                    flexDirection: "column",
                    alignItems: "center",
                    color: "white",
                  }}
                >
                  <UserOutlined
                    style={{ fontSize: "4rem", fontWeight: "bold" }}
                  />
                </div>
              )}
              <Upload
                style={{ position: "relative" }}
                name="image"
                beforeUpload={beforeUpload}
                showUploadList={false}
              >
                <div
                  style={{
                    width: "2.5rem",
                    backgroundColor: "#222831",
                    height: "2.5rem",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    bottom: "2rem",
                    right: "5.2rem",
                  }}
                  className={styles.hover}
                >
                  <CameraFilled style={{ color: "white" }} />
                </div>
              </Upload>
            </div>
          </Form.Item>

          <label style={{ color: "#222831", fontSize: "1rem" }}>
            What's your username
          </label>

          <CustomInput
            type="user"
            id="user"
            name="user"
            maxLength={15}
            width="l"
            placeholder="Enter Username"
            rules=""
          />

          <label style={{ color: "#222831", fontSize: "1rem" }}>
            What's your about
          </label>
          <CustomInput
            type="about"
            id="about"
            name="about"
            maxLength={15}
            width="l"
            placeholder="Enter About"
            rules=""
          />

          <Form.Item>
            <CustomButton text="save" block width="large" />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Profile;
