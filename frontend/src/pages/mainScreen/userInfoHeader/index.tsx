import { Avatar, Button, Typography } from "antd";
import style from "./styles.module.css";
import { format } from "date-fns";
import { UserOutlined } from "@ant-design/icons";
import settingsImage from "../../../assets/Settings.svg";

const { Text, Title } = Typography;

function UserInfoHeader(props: UserInfoHeaderProps) {
  function GetStatus(): string {
    if (props.Status === typeof String) return props.Status;
    const formatStatus = format(props.Status, "hh:mm a");
    return `Last online at ${formatStatus}`;
  }

  return (
    <div className={style["mainDiv"]}>
      <div className={style['userInformationDiv']}>
        <Avatar
          style={{ backgroundColor: "#87d068" }}
          size={"large"}
          icon={<UserOutlined />}
        />
        <div className={style["userNameLastSeenDiv"]}>
          <Title className={style["userName"]} level={5}>
            {props.UserName}
          </Title>
          <Text className={style["userStatus"]} italic>{GetStatus()}</Text>
        </div>
      </div>
      <Button type="text" className={style["settingsImageButton"]}>
        <img src={settingsImage} className={style["settingsImage"]} />
      </Button>
    </div>
  );
}

export default UserInfoHeader;
