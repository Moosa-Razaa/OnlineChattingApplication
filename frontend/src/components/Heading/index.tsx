import { Typography } from "antd";
import HeadingProps from "./types";

const { Title } = Typography;

function Heading({ TitleText, IsUnderline = false, Color }: HeadingProps) {
  return(
    <Title underline={IsUnderline} style={{ color: Color }} >{TitleText}</Title>
  );
}

export default Heading;
