import React from "react";
import Input from "components/Input/Input";
import { GrAdd } from "react-icons/gr";

const MenuAsideRecruiterListVacantsStyled = () => {
  return (
    <aside>
      <div>
        <form>
          <div>
            <Input
              type="text"
              label='Buscar vacante'
              name="search"
              id="search"
              // value={search}
              // onChange={handleSearchVacant}
              // onFocus={handleFocus}
              // onBlur={handleBlur}
            />
          </div>
          <button>
            <GrAdd />
            <span>Agregar una nueva vacante.</span>
          </button>
        </form>
        <ul>
          {/* {filterData?.map((item) => (
                <li key={item?.t200_id_vacant}>
                  {item?.t200_job}
                </li>
              ))} */}
        </ul>
      </div>
      {/* {listJobs?.length > 0 ? (
            <article className={styles.wrapperListJobs}>
              {listJobs &&
                listJobs?.map((listJobs) => (
                  <Link
                    to={`${listJobs?.t200_id_vacant}`}
                    key={uuid()}
                    style={{ color: "#000" }}
                    onClick={handleInitialContent}
                  >
                    <ApplicationJob
                      nameJob={listJobs?.t200_job}
                      salary={listJobs?.t200_max_salary}
                      madality={listJobs?.t200_home_ofice}
                      nameBusisness={listJobs?.t300_id_company?.t300_name}
                      typeBusiness={
                        listJobs?.t300_id_company?.t300_bussiness_name
                      }
                      workingHours={`Lunes a Viernes de ${listJobs?.t200_check_time} a ${listJobs?.t200_closing_hour}`}
                      vacantState={
                        listJobs?.c204_id_vacant_status?.c204_description
                      }
                    />
                  </Link>
                ))}
            </article>
          ) : (
            <article className={`container ${styles.notJobs}`}>
              <div className={styles.bodyNotJobs}>
                <h2>No tienes vacantes publicadas recientemente</h2>
                <img src={burrito} alt="burrito_ipn" />
              </div>
            </article>
          )} */}
    </aside>
  );
};

export default MenuAsideRecruiterListVacantsStyled;
