import { memo, useState } from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "context/AuthContext";
import { useRecruiterJobs, useModal, useFetch  } from "hooks";
import LayoutDashboard from "Layout/LayoutDashboard";
import LayoutHome from "Layout/LayoutHome";
import LayoutWidgetRecruiter from "Layout/LayoutWidgetRecruiter";
// import { useForm } from "hooks/useForm";
// import { postJob } from "services/jobs/index";
// import { POST_NEW_JOB } from "types/newJob";
// import { numberFormat } from "utils/numberFormat";
// import Input from "components/Input/Input";
// import Chip from "@mui/material/Chip";
// import { GoTrashcan } from "react-icons/go";
// import { MdEdit } from "react-icons/md";
// import {
//   getJob,
//   getApplicationsJobs,
//   getVacantInfo,
// } from "services/jobs/index";
// import {
//   getJobsForRecruiter,
//   getRecruiterInfo,
// } from "services/recruiter/index";
// import ApplicationJob from "components/Card/ApplicationJob/ApplicationJob";
import ModalForm from "components/Modal/ModalVacants";
import FormPostJob from "components/Form/postJob/FormPostJob";
import FormUpdateJob from "components/Form/postJob/FormUpdateJob";
import ConfirmDelete from "components/Alert/Confirm/ConfirmDelete";
// import { BiSearch } from "react-icons/bi";
// import { GrAdd } from "react-icons/gr";

// import Candidate from "images/candidate.png";
// import Application from "images/application.png";
// import Review from "images/review.png";
// import Steps from "images/steps.png";
// import Reject from "images/reject.png";
import { deleteJob } from "services";
// import applicationsIcon from "images/applications.png";
// import styles from "./PageHistory.module.css";
// import burrito from "images/emoji_angustiado.jpg";
// import * as GiIcon from "react-icons/gi";
// import * as BsIcon from "react-icons/bs";
// import * as MdIcon from "react-icons/md";
import { FaUsers } from 'react-icons/fa'
import FormSearchJob from "components/Menu/FormSearchJobRecruiter";
import CardJobPreviewRecruiter from "components/Card/CardJobPreviewRecruiter";
import {
  Aside,
  Container,
  Grid,
  WrapperListCardJobPreviewRecruiter,
  WrapperWidgets,
  ContentWidget,
  ContentWidgetCommon,
  TextNumber
} from "../styled-components/DashboardRecruiterStyled";
// import TextEditor from "components/TextEditor/TextEditor";

// const vacantApplicationsData = {
//   applications: 0,
//   hired: 0,
//   inProcess: 0,
//   rejected: 0,
//   unseen: 0,
// };

const PageHistory = () => {
  const { token } = useAuth();
  let { t200_id_vacant } = useParams()
  const { data: dataVacantInfo, error: errorVacantInfo, loading: loadingVacantInfo } = useFetch(`${process.env.REACT_APP_URL_VACANT_VACANT_INFO}${t200_id_vacant || 1}/`)
  const navigate = useNavigate();
  // const { t200_id_vacant } = useParams();
  // const { form, handleChange } = useForm(POST_NEW_JOB);
  // const [body, setBody] = useState("");
  const { data, loading } = useRecruiterJobs({ idRcruiter: token?.user?.id });
  // const [totalApplications, setTotalApplications] = useState([]);
  // const [initialContent, setInitialContent] = useState(true);
  // const [listJobs, setListJobs] = useState(null);
  // const [filterData, setFilterData] = useState(null);
  // const [search, setSearch] = useState("");
  // const [modalType, setModalType] = useState(null);
  const [isDeletedJob, setIsDeletedJob] = useState({});
  const [job, setJob] = useState(null);
  // const [recruiter, setRecruiter] = useState([]);
  // const [isOpenModalForm, openModalForm, closeModalForm] = useModal();
  // let newObject = { ...form, t200_description: body };


  // const handleInitialContent = () => setInitialContent(false);

  // const handleBlur = (e) => {
  //   e.target.classList.remove(styles.inputSearchFocus);
  //   e.target.classList.add(styles.inputSearch);
  //   setTimeout(() => {
  //     setFilterData(null);
  //   }, 200);
  // };

  // const handleSearchVacant = (e) => {
  //   const { value } = e.target;
  //   setSearch(value);
  //   if (value !== "") {
  //     // si hay algo en la caja de texto
  //     const newData = listJobs?.filter((job) => {
  //       const regex = new RegExp(`^${value}`, "gi");
  //       return job?.t200_job.match(regex);
  //     });
  //     setFilterData(newData);
  //   }
  // };

  // const handleDeleteJob = async () => {
  //   const response = await deleteJob(job[0]?.t200_id_vacant);

  //   if (response.status === 200)
  //     setIsDeletedJob({ succes: response.status, message: response.message });
  //   else
  //     setIsDeletedJob({ success: response.status, message: response.message });
  // };

  // const onSubmitPostJob = (e) => {
  //   e.preventDefault();
  //   postJob(newObject)
  //     .then((response) => {
  //       console.log(response);
  //       navigate("/mis-vacantes");
  //     })
  //     .catch((error) => console.error(error));
  // };
  
  if (!data || !dataVacantInfo) return null;

  return (
    <LayoutHome>
      <LayoutDashboard top='4rem'>
        <Aside>
          <FormSearchJob />
          <WrapperListCardJobPreviewRecruiter>
            {data?.map((el) => (
              <CardJobPreviewRecruiter key={crypto.randomUUID()} info={el} url='dashboard' />
            ))}
          </WrapperListCardJobPreviewRecruiter>
        </Aside>
        <Container>
          <WrapperWidgets>
            <LayoutWidgetRecruiter>
              <ContentWidget>
                <TextNumber>{dataVacantInfo[0]?.TotalReceived === null ? 0 : dataVacantInfo[0]?.TotalReceived}</TextNumber>
                <span>recibidas</span>
                <FaUsers />
              </ContentWidget>
              <Link to='/postulaciones'>Ver Postulados</Link>
            </LayoutWidgetRecruiter>
            <LayoutWidgetRecruiter>
              <ContentWidgetCommon>
                <TextNumber>{`${dataVacantInfo[0]?.TotalHired === null ? 0 : dataVacantInfo[0]?.TotalHired}/10`}</TextNumber>
                <span>contratados</span>
              </ContentWidgetCommon>
            </LayoutWidgetRecruiter>
            <LayoutWidgetRecruiter>
              <ContentWidgetCommon>
                <TextNumber>{dataVacantInfo[0]?.TotalOnTrack === null ? 0 : dataVacantInfo[0]?.TotalOnTrack}</TextNumber>
                <span>en seguimiento</span>
              </ContentWidgetCommon>
            </LayoutWidgetRecruiter>
            <LayoutWidgetRecruiter>
              <ContentWidgetCommon>
                <TextNumber>{dataVacantInfo[0]?.TotalDiscarted === null ? 0 : dataVacantInfo[0]?.TotalDiscarted}</TextNumber>
                <span>descartadas</span>
              </ContentWidgetCommon>
            </LayoutWidgetRecruiter>
            <LayoutWidgetRecruiter>
              <ContentWidgetCommon>
                <TextNumber>{dataVacantInfo[0]?.TotalUnseen === null ? 0 : dataVacantInfo[0]?.TotalUnseen}</TextNumber>
                <span>sin consultar</span>
              </ContentWidgetCommon>
            </LayoutWidgetRecruiter>
            <LayoutWidgetRecruiter>
              <ContentWidgetCommon>
                <TextNumber>{dataVacantInfo[0]?.TotalReports === null ? 0 : dataVacantInfo[0]?.TotalReports}</TextNumber>
                <span>reportes recibidos</span>
              </ContentWidgetCommon>
            </LayoutWidgetRecruiter>
          </WrapperWidgets>
          <Grid>
            <Outlet />
          </Grid>
        </Container>
      </LayoutDashboard>
    </LayoutHome>
  );
};

export default memo(PageHistory);
