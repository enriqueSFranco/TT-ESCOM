import Avatar from "@mui/material/Avatar";
import { stringToColor } from "utils/generateColors";

const CustomAvatar = ({student = 'BTC', width, height, fontSize}) => {
  
  if (student === '') {
    <Avatar sx={{ width: width, height: height, bgcolor: stringToColor(`${student}`), fontSize: fontSize }}>
      {student}
    </Avatar>
  }
  console.log(student)

  return (
    <Avatar sx={{ width: width, height: height, bgcolor: stringToColor(`${student}`), fontSize: fontSize }}>
    {student.slice(0,1)}
  </Avatar>
  )
}

export default CustomAvatar;