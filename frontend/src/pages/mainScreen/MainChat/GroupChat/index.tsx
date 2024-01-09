import { Button, Input, Typography } from "antd";
import style from "./styles.module.css";
import { IndividualMessage } from "../IndividualChat/types";
import { format } from "date-fns";
import emoji from "../../../../assets/Emoji.svg";
import upload from "../../../../assets/Upload.svg";
import audioRecord from "../../../../assets/AudioRecord.svg";

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
    <div className={style["mainDiv"]}>
      <div className={style["chatDiv"]}>
        {chat.map((currentItem) => {
          return (
            <div
              id={`${currentItem.MessageId}`}
              className={`${style["messageDiv"]}
              ${
                currentItem.IsReceived
                  ? style["leftAlignedDiv"]
                  : style["rightAlignedDiv"]
              }`}
            >
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
      </div>

      <div className={style["textingDiv"]}>
        <Button type="link" className={style["insertEmojiButton"]}>
          <img className={style["insertEmojiImage"]} src={emoji} />
        </Button>
        <Input
          className={style["messageInput"]}
          count={{
            show: true,
            max: 500,
          }}
          placeholder="Your message..."
        />
        <Button type="link" className={style["insertEmojiButton"]}>
          <img className={style["insertEmojiImage"]} src={upload} />
        </Button>
        <Button type="link" className={style["insertEmojiButton"]}>
          <img className={style["insertEmojiImage"]} src={audioRecord} />
        </Button>
      </div>
    </div>
  );
}
