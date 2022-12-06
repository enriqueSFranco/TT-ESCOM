import { Link, Outlet, useParams } from "react-router-dom";
import { useFetch } from "hooks";
import LayoutDashboard from "Layout/LayoutDashboard";
import LayoutHome from "Layout/LayoutHome";
import LayoutWidgetRecruiter from "Layout/LayoutWidgetRecruiter";
// import FormUpdateJob from "components/Form/postJob/FormUpdateJob";
import ListJobsRecruiter from "components/Card/JobList/JobListRecruiter";
import Chip from "components/Chip/Chip";
import FormSearchJob from "components/Menu/FormSearchJobRecruiter";
// import CardJobPreviewRecruiter from "components/Card/CardJobPreviewRecruiter";
import { FaUsers } from "react-icons/fa";
import { GoReport, GoThumbsdown } from "react-icons/go";
import {
  Aside,
  Container,
  Grid,
  WrapperWidgets,
  ContentWidget,
  ContentWidgetCommon,
  TextNumber,
} from "../styled-components/DashboardRecruiterStyled";

const PageHistory = () => {
  let { t200_id_vacant } = useParams();
  const {
    data: dataVacantInfo,
    // error: errorVacantInfo,
    // loading: loadingVacantInfo,
  } = useFetch(
    `${process.env.REACT_APP_URL_VACANT_VACANT_INFO}${t200_id_vacant || 1}/`
  );

  // const [isDeletedJob, setIsDeletedJob] = useState({});

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

  if (!dataVacantInfo) return null;

  console.log(dataVacantInfo)

  return (
    <LayoutHome>
      <LayoutDashboard top="4rem">
        <Aside>
          <FormSearchJob />
          {/* LISTA DE VACANTES */}
          <ListJobsRecruiter />
        </Aside>
        <Container>
          <WrapperWidgets>
            <LayoutWidgetRecruiter>
              <ContentWidget>
                <TextNumber>
                  {dataVacantInfo[0]?.TotalReceived === null
                    ? <span style={{fontSize: '1rem'}}>Sin postulaciones</span>
                    : (
                      <div style={{display: 'flex', flexDirection: 'column', gap: '.4rem', justifyContent: 'center', alignItems: 'center'}}>
                        <span style={{fontSize: '1.5rem'}}>{dataVacantInfo[0]?.TotalReceived} postulaciones</span>
                        <Link style={{fontSize: '1rem'}} to={`/postulaciones/${t200_id_vacant}/`}>Ver Postulados</Link>
                      </div>
                    )}
                </TextNumber>
              </ContentWidget>
            </LayoutWidgetRecruiter>
            <LayoutWidgetRecruiter>
              <ContentWidgetCommon>
                <TextNumber>{`${
                  dataVacantInfo[0]?.TotalHired === null
                    ? 0
                    : dataVacantInfo[0]?.TotalHired
                }/${dataVacantInfo[0]?.t200_vacancy}`}</TextNumber>
                <Chip
                  label="contratados"
                  bg="#31C27C"
                  color="#fff"
                  icon={<FaUsers style={{ fontSize: "1.1rem" }} />}
                />
              </ContentWidgetCommon>
            </LayoutWidgetRecruiter>
            <LayoutWidgetRecruiter>
              <ContentWidgetCommon>
                <TextNumber>
                  {dataVacantInfo[0]?.TotalOnTrack === null
                    ? 0
                    : dataVacantInfo[0]?.TotalOnTrack}
                </TextNumber>
                <Chip label="en seguimiento" bg="#1949D1" color="#fff" />
              </ContentWidgetCommon>
            </LayoutWidgetRecruiter>
            <LayoutWidgetRecruiter>
              <ContentWidgetCommon>
                <TextNumber>
                  {dataVacantInfo[0]?.TotalDiscarted === null
                    ? 0
                    : dataVacantInfo[0]?.TotalDiscarted}
                </TextNumber>
                <Chip
                  label="descartadas"
                  bg="#FF0000"
                  color="#fff"
                  icon={<GoThumbsdown />}
                />
              </ContentWidgetCommon>
            </LayoutWidgetRecruiter>
            <LayoutWidgetRecruiter>
              <ContentWidgetCommon>
                <TextNumber>
                  {dataVacantInfo[0]?.TotalUnseen === null
                    ? 0
                    : dataVacantInfo[0]?.TotalUnseen}
                </TextNumber>
                <Chip label="sin consultar" bg="#8473FC" color="#fff" />
              </ContentWidgetCommon>
            </LayoutWidgetRecruiter>
            <LayoutWidgetRecruiter>
              <ContentWidgetCommon>
                <TextNumber>
                  {dataVacantInfo[0]?.TotalReports === null
                    ? 0
                    : dataVacantInfo[0]?.TotalReports}
                </TextNumber>
                <Chip
                  label="reportes recibidos"
                  bg="#FD8619"
                  color="#fff"
                  icon={<GoReport />}
                />
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

export default PageHistory;
