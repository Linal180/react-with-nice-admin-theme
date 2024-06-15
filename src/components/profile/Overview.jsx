
export const Overview = ({ profile }) => (
  <div
    className="tab-pane fade show active profile-overview"
    id="profile-overview"
  >
    <h5 className="card-title">About</h5>
    <p className="small fst-italic">{profile.about}</p>

    <h5 className="card-title">Profile Details</h5>

    <div className="row">
      <div className="col-lg-3 col-md-4 label">Full Name</div>
      <div className="col-lg-9 col-md-8">
        {profile.full_name}
      </div>
    </div>

    <div className="row">
      <div className="col-lg-3 col-md-4 label">Company</div>
      <div className="col-lg-9 col-md-8">
        {profile.company}
      </div>
    </div>

    <div className="row">
      <div className="col-lg-3 col-md-4 label">Job</div>
      <div className="col-lg-9 col-md-8">{profile.job}</div>
    </div>

    <div className="row">
      <div className="col-lg-3 col-md-4 label">Country</div>
      <div className="col-lg-9 col-md-8">
        {profile.country}
      </div>
    </div>

    <div className="row">
      <div className="col-lg-3 col-md-4 label">Address</div>
      <div className="col-lg-9 col-md-8">
        {profile.address}
      </div>
    </div>

    <div className="row">
      <div className="col-lg-3 col-md-4 label">Phone</div>
      <div className="col-lg-9 col-md-8">{profile.phone}</div>
    </div>

    <div className="row">
      <div className="col-lg-3 col-md-4 label">Email</div>
      <div className="col-lg-9 col-md-8">{profile.email}</div>
    </div>
  </div>
)