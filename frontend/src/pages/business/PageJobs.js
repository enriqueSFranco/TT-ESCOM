// import React, { useEffect, useState } from 'react';
// import { getAllJobs } from '../../services/jobs/getAllJobs';
// import CardJobList from '../../components/Card/CardJobList';

// const PageJobs = () => {
//   const [jobs, setJobs] = useState()
//   useEffect(() => {
//     getAllJobs()
//       .then((response) => {
//         setJobs(response);
//         // setDataList(response);
//         // setTotalJobs(response.length);
//         // setLoading(false); // desactivamos el modo "cargando"
//       })
//       .catch((error) => console.error(error));
    
//       return () => null;
//   }, []);

//   if (!jobs) return null;

//   return (
//     <CardJobList jobs={jobs} />
//   )
// }

// export default PageJobs;