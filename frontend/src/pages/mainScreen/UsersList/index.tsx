import { Avatar, Input, List } from "antd";
import { UserInformation } from "./types";
import style from "./styles.module.css";

const data: UserInformation[] = [
  {
    UserName: "You",
    LastMessage: "Last message."
  },
  {
    UserName: "First User",
    LastMessage: "First user last message.",
  },
  {
    UserName: "Second User",
    LastMessage: "Second user last message. Second user last message. Second user last message. Second user last message.",
  },
  {
    UserName: "Third User",
    LastMessage: "Third user last message.",
  },
  {
    UserName: "Fourth User",
    LastMessage: "Fourth user last message.",
  },
  {
    UserName: "Fifth User",
    LastMessage: "Fifth user last message.",
  },
  {
    UserName: "Sixth User",
    LastMessage: "Sixth user last message.",
  },
  {
    UserName: "Seventh User",
    LastMessage: "Seventh user last message.",
  },
  {
    UserName: "Seventh User",
    LastMessage: "Seventh user last message.",
  },
  {
    UserName: "Eight User",
    LastMessage: "Eight user last message.",
  },
  {
    UserName: "Ninth User",
    LastMessage: "Ninth user last message.",
  },
  {
    UserName: "Tenth User",
    LastMessage: "Tenth user last message.",
  },
  {
    UserName: "Eleventh User",
    LastMessage: "Eleventh user last message.",
  },
  {
    UserName: "Twelvth User",
    LastMessage: "Twelvth user last message.",
  }
];

const { Search } = Input;
const placeHolderForSearchInput = "Enter username";

function UsersList() {

  return (
    <div className={style["mainDiv"]}>
      <Search className={style["searchInput"]} placeholder={placeHolderForSearchInput} enterButton />
      <List
        size="small"
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item, index) => {
          return (
            <List.Item>
              <List.Item.Meta
                title={item.UserName}
                description={<div className={style["descriptionDiv"]}>{item.LastMessage}</div>}
                avatar={
                  <Avatar
                    src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                  />
                }
              />
            </List.Item>
          );
        }}
      />
    </div>
  );
}

export default UsersList;