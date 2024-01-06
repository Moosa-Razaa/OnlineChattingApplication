import { Button, Input } from "antd";
import emoji from "../../../assets/Emoji.svg";
import upload from "../../../assets/Upload.svg";
import audioRecord from "../../../assets/AudioRecord.svg";
import style from "./styles.module.css";

export default function MainChat() {
  return (
    <div className={style["mainDiv"]}>
      <div className={style["chatDiv"]}></div>
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
