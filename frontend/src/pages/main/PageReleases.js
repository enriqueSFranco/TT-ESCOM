import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { getAllReleases } from "services/release/getAllReleases";
import Release from "components/Card/Release/Release";
import LayoutHome from "Layout/LayoutHome";
import styles from "./PageReleases.module.css";

const PageReleases = () => {
  const [releases, setReleases] = useState([]);

  useEffect(() => {
    getAllReleases()
      .then((response) => {
        setReleases(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (!releases) return null;

  return (
    <LayoutHome>
      <section className={styles.wrapperReleases}>
        <div className={styles.heroReleases}>
          <h1 className={styles.title}>Comunicados</h1>
        </div>
        <div className={`container ${styles.gridReleases}`}>
          {releases.length > 0 ? (
            releases.map((release) => (
              <Link
                to={`${release?.t202_id_announcement}`}
                key={release?.t202_id_announcement}
                className={styles.realeaseLink}
              >
                <Release
                  src={release?.t202_announcement}
                  alt={release?.t300_id_company?.t300_name}
                  nameBusiness={release?.t300_id_company?.t300_name}
                />
              </Link>
            ))
          ) : (
            <h1>No hay comunicados</h1>
          )}
        </div>
        <Outlet />
      </section>
    </LayoutHome>
  );
};

export default PageReleases;
