import { Avatar, List } from "antd";
import { UserInformation } from "./types";

const data: UserInformation[] = [
    {
        UserName: "First User",
        LastMessage: "First user last message."
    }, 
    {
        UserName: "Second User",
        LastMessage: "Second user last message."
    },
    {
        UserName: "Third User",
        LastMessage: "Third user last message."
    }
];

function UsersList()
{
    return(
    <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item, index) => {
            return <List.Item>
                <List.Item.Meta
                    title={item.UserName}
                    description={item.LastMessage}
                    avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />} 
                />
            </List.Item>
        }}
    />);
}

export default UsersList;