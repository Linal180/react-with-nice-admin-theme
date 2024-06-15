import { Spinner } from "../common/Spinner";

export const ProfileSection = ({ profile: { full_name, image }, loading }) =>
  <div className="col-xl-4">
    <div className="card">
      <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">
        {loading ? <Spinner /> : (<>
          <img
            src={image || "assets/img/profile-img.jpg"}
            alt="Profile"
            className="rounded-circle"
          />
          <h2>{full_name || 'John Doe1'}</h2>
          <h3>Web Designer</h3>
          <div className="social-links mt-2">
            <a href="#" className="twitter">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="#" className="facebook">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" className="instagram">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#" className="linkedin">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </>
        )}
      </div>
    </div>
  </div>