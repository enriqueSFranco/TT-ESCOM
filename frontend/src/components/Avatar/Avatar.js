import Avatar from "@mui/material/Avatar";
import { stringToColor } from "utils/generateColors";

const CustomAvatar = ({student = [], width, height, fontSize}) => {
  
  if (student.length < 0) return null;

  return (
    <Avatar sx={{ width: width, height: height, bgcolor: stringToColor(`${student && student[0]?.t100_name}`), fontSize: fontSize }}>
    {student[0]?.t100_name && student[0]?.t100_name.slice(0,1)}{student[0]?.t100_last_name && student[0]?.t100_last_name.slice(0,1)}
  </Avatar>
  )
}

export default CustomAvatar;