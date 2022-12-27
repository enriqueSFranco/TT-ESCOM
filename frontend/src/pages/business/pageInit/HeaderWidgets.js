import React from "react";
import { Link } from "react-router-dom";
import { useFetch } from "hooks";
import LayoutWidgetRecruiter from "Layout/LayoutWidgetRecruiter";
import Chip from "components/Chip/Chip";
import { FaUsers } from "react-icons/fa";
import { GoThumbsdown, GoReport } from "react-icons/go";
import {
  WrapperWidgets,
  ContentWidget,
  ContentWidgetCommon,
  TextNumber,
} from "./Styleds";
import { USERS } from "types";

const HeaderWidgets = ({ defaultId, vacantId, typeUser }) => {

  const {
    data,
    // error: errorVacantInfo,
    // loading: loadingVacantInfo,
  } = useFetch(
    `${process.env.REACT_APP_URL_VACANT_VACANT_INFO}${
      vacantId || defaultId
    }/`
  );

  if (!data) return null

  if (typeUser === USERS.manager) return null
  
  return (
    <WrapperWidgets>
      <LayoutWidgetRecruiter>
        <ContentWidget>
          <TextNumber>
            {data[0]?.TotalReceived === null ? (
              <span style={{ fontSize: "1rem" }}>Sin postulaciones</span>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: ".4rem",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span style={{ fontSize: "1.5rem" }}>
                  {data[0]?.TotalReceived} postulaciones
                </span>
                <Link
                  style={{ fontSize: "1rem" }}
                  to={`/postulaciones/${vacantId}/`}
                >
                  Ver Postulados
                </Link>
              </div>
            )}
          </TextNumber>
        </ContentWidget>
      </LayoutWidgetRecruiter>
      <LayoutWidgetRecruiter>
        <ContentWidgetCommon>
          <TextNumber>{`${
            data[0]?.TotalHired === null
              ? 0
              : data[0]?.TotalHired
          }/${data[0]?.t200_vacancy}`}</TextNumber>
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
            {data[0]?.TotalOnTrack === null
              ? 0
              : data[0]?.TotalOnTrack}
          </TextNumber>
          <Chip label="en seguimiento" bg="#1949D1" color="#fff" />
        </ContentWidgetCommon>
      </LayoutWidgetRecruiter>
      <LayoutWidgetRecruiter>
        <ContentWidgetCommon>
          <TextNumber>
            {data[0]?.TotalDiscarted === null
              ? 0
              : data[0]?.TotalDiscarted}
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
            {data[0]?.TotalUnseen === null
              ? 0
              : data[0]?.TotalUnseen}
          </TextNumber>
          <Chip label="sin consultar" bg="#8473FC" color="#fff" />
        </ContentWidgetCommon>
      </LayoutWidgetRecruiter>
      <LayoutWidgetRecruiter>
        <ContentWidgetCommon>
          <TextNumber>
            {data[0]?.TotalReports === null
              ? 0
              : data[0]?.TotalReports}
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
  );
};

export default HeaderWidgets;
