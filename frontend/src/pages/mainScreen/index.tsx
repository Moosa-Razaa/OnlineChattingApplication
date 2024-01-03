import { Layout } from "antd";
import style from "./styles.module.css";
import UsersList from "./UsersList";

const { Header, Sider, Content } = Layout;

function MainScreen() {
  return (
    <div className={style["mainDiv"]}>
        <Layout className={style["mainLayout"]}>
        <Sider width="25%" className={style["sider"]}>
          <UsersList />
        </Sider>
        <Layout className={style["mainContentLayout"]}>
          <Header className={style["header"]}>Header</Header>
          <Content className={style["content"]}>Content</Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default MainScreen;
