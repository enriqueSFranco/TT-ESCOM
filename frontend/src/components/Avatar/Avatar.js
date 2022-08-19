import Avatar from "@mui/material/Avatar";
import { stringToColor } from "utils/generateColors";
import { useFetch } from "hooks/useFetch";

const CustomAvatar = ({username = 'BTC', width, height, fontSize}) => {
  
  const { data, loading } = useFetch(`https://robohash.org/${username}`) 

  if (!data) return null;

  console.log(data)

  if (username === '') {
    return (
      <img src={data} alt={username} />
    )
  }
  console.log(username)

  return (
    <Avatar sx={{ width: width, height: height, bgcolor: stringToColor(`${username}`), fontSize: fontSize }}>
    {username.slice(0,1)}
  </Avatar>
  )
}

export default CustomAvatar;