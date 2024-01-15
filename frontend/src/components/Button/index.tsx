import { Button } from "antd";
import CustomButtonProps from "./types";

function CustomButton({ Text, Type, Loading = false } : CustomButtonProps)
{
    return(
        <Button loading={Loading} type={Type}>{Text}</Button>
    );
}

export default CustomButton;