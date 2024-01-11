import { Typography } from "antd";
import style from "./styles.module.css";
import { IndividualMessage } from "../IndividualChat/types";
import { format } from "date-fns";

const { Text, Paragraph } = Typography;

const chat: IndividualMessage[] = [
  {
    MessageId: 1,
    Message: "Hello! How are you!",
    IsReceived: true,
    SendAt: new Date(),
  },
  {
    MessageId: 2,
    Message: "Yeah I am fine. What about you?",
    IsReceived: false,
    SendAt: new Date(),
  },
];

export default function GroupChat() {
  return (
    <>
      {chat.map((currentItem) => {
        return (
          <div
            key={`${currentItem.MessageId}`}
            className={`${style["messageDiv"]}
              ${
                currentItem.IsReceived
                  ? style["leftAlignedDiv"]
                  : style["rightAlignedDiv"]
              }`}
          >
            <Text
              className={`${style["messageTimeText"]} ${
                currentItem.IsReceived ? style["sentMessage"] : ""
              }`}
            >
              Abcc
            </Text>
            <div className={style["inidividualMessage"]}>
              <Paragraph
                className={`${
                  currentItem.IsReceived ? style["sentMessage"] : ""
                }`}
              >
                {currentItem.Message}
              </Paragraph>
              <Text
                className={`${style["messageTimeText"]} ${
                  currentItem.IsReceived ? style["sentMessage"] : ""
                }`}
              >
                {format(currentItem.SendAt, "HH:mm")}
              </Text>
            </div>
          </div>
        );
      })}
    </>
  );
}
