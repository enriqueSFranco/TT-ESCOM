// import { useState } from "react";
import Avatar from "@mui/material/Avatar";
// import axios from "axios";
// import styles from "./Avatar.module.css";

const CustomAvatar = ({student = [], width, height, fontSize}) => {
  console.log(student);

  if (student.length < 0) return null;

  return (
    <Avatar sx={{ width: width, height: height, fontSize: fontSize }}>
      {student[0]?.t100_name && student[0]?.t100_name.slice(0,1)}{student[0]?.t100_last_name && student[0]?.t100_last_name.slice(0,1)}
    </Avatar>
  )
}

// const Avatar = ({ student = [], width, height }) => {
//   const [profilePicture, setProfilePicture] = useState(null);

//   const onChange = (e) => setProfilePicture(e.target.files[0]);

//   const upload = async (e) => {
//     e.preventDefault();
//     try {
//       const formData = new FormData();
//       const id = student[0]?.t100_boleta;
      
//       formData.append("profile_picture", profilePicture, profilePicture.name);
//       const { data } = await axios.put(`/images/StudentPic/${id}/`, formData);
  
//       // console.log(data);
//     } catch (error) {
//       // console.log(error);
//     }
//   };

//   if (student.length > 0) {
//     const name = student[0]?.t100_name;
//     const lastName = student[0]?.t100_last_name;

//     return (
//       <div className={styles.wrapperAvatar} style={{width: width, height: height}}>
//         <form onSubmit={upload} className={styles.form}>
//           <input
//             accept="image/*"
//             type="file"
//             id="avatar"
//             name="avatar"
//             onChange={onChange}
//             className={styles.uploadImage}
//           />
//         </form>
//           {!profilePicture ? (
//             <div className={styles.noImage}>
//               {name.slice(0, 1)}{lastName && lastName.slice(0, 1)}
//             </div>
//           ) : (
//             <div className={styles.image}>
//               {/* <img src={} alt={}> */}
//             </div>
//           )}
//       </div>
//     );
//   }
//   return null;
// };

export default CustomAvatar;
