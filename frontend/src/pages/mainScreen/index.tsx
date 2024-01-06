import { Layout } from "antd";
import style from "./styles.module.css";
import UsersList from "./UsersList";
import UserInfoHeader from "./userInfoHeader";
import MainChat from "./MainChat";

const { Header, Sider, Content } = Layout;

const userInfoHeaderProps: UserInfoHeaderProps = {
  UserName: "You",
  ProfilePicture: "https://api.dicebear.com/7.x/miniavs/svg?seed=$0",
  Status: new Date(),
};

function MainScreen() {
  return (
    <div className={style["mainDiv"]}>
      <Layout className={style["mainLayout"]}>
        <Sider width="25%" className={style["sider"]}>
          <UsersList />
        </Sider>
        <Layout className={style["mainContentLayout"]}>
          <Header className={style["header"]}>
            <UserInfoHeader
              UserName={userInfoHeaderProps.UserName}
              ProfilePicture={userInfoHeaderProps.ProfilePicture}
              Status={userInfoHeaderProps.Status}
            />
          </Header>
          <Content className={style["content"]}>
            <MainChat />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default MainScreen;
