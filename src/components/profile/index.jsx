import { useCallback, useEffect, useState } from "react";
import { apiGet } from "../../axios";
import { ProfileSection } from "./Section";
import { ProfileTabs } from "./ProfileTabs";
import { EditProfile } from "./Edit";
import { Overview } from "./Overview";
import { Settings } from "./Settings";
import { UpdatePassword } from "./UpdatePassword";
import { Spinner } from "../common/Spinner";
import { Alert } from '../common/Alert'

export const ProfileComponent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [profile, setProfile] = useState({});
  const [show, setShow] = useState(false)
  const [alert, setAlert] = useState({
    type: '',
    message: ''
  })

  const getUserProfile = useCallback(async () => {
    setIsLoading(true)
    const response = await apiGet('/users')

    if (response.status == 200) {
      setProfile(response.data)
      const tabs = new window.bootstrap.Tab(document.getElementById('myTab'));

      tabs.show('#profile-overview');
    }

    setIsLoading(false)
  }, [])

  useEffect(() => {
    if (show) setTimeout(() => setShow(false), 1000)
  }, [show])

  useEffect(() => {
    getUserProfile()
  }, [])

  return (
    <main id="main" className="main">
      <div className="pagetitle">
        <h1>Profile</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item">Users</li>
            <li className="breadcrumb-item active">Profile</li>
          </ol>
        </nav>
      </div>

      <section className="section profile">
        <div className="row">
          <ProfileSection profile={profile || {}} loading={isLoading} />

          <div className="col-xl-8">
            <div className="card">
              <div className="card-body pt-3">
                <ProfileTabs />

                {show && <Alert type={alert.type} message={alert.message} />}

                {isLoading ?
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
                    <Spinner />
                  </div>
                  : <div className="tab-content pt-2">
                    <Overview profile={profile} />
                    <EditProfile
                      setAlert={setAlert}
                      show={show}
                      setShow={setShow}
                      profile={profile}
                      refetch={() => getUserProfile()}
                    />
                    <Settings />
                    <UpdatePassword />
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
