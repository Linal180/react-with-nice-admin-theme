import { useCallback, useEffect, useState } from "react";
import { apiGet } from "../axios";

export const Profile = () => {
  const [profile, setProfile] = useState({
    fullName: "Kevin Anderson",
    about:
      "Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus. Tempora libero non est unde veniam est qui dolor. Ut sunt iure rerum quae quisquam autem eveniet perspiciatis odit. Fuga sequi sed ea saepe at unde.",
    company: "Lueilwitz, Wisoky and Leuschke",
    job: "Web Designer",
    country: "USA",
    address: "A108 Adam Street, New York, NY 535022",
    phone: "(436) 486-3538 x29071",
    email: "k.anderson@example.com",
    twitter: "https://twitter.com/#",
    facebook: "https://facebook.com/#",
    instagram: "https://instagram.com/#",
    linkedin: "https://linkedin.com/#",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here

  };

  const getUserProfile = useCallback(async () => {
    const response = await apiGet('/users')
    
    if(response.status == 200){
      const {full_name, email, phone, country, address, get_image_url } = response.data || {}
      
      setProfile(prev => ({
        ...prev,
        fullName: full_name || '',
        email: email || '',
        phone: phone || '--',
        country: country || '--',
        address: address || '--',
        image: get_image_url || ''
        }))
    }
  }, [])

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
          <div className="col-xl-4">
            <div className="card">
              <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">
                <img
                  src={profile.image || "assets/img/profile-img.jpg"}
                  alt="Profile"
                  className="rounded-circle"
                />
                <h2>{profile.fullName || 'John Doe1'}</h2>
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
              </div>
            </div>
          </div>

          <div className="col-xl-8">
            <div className="card">
              <div className="card-body pt-3">
                <ul className="nav nav-tabs nav-tabs-bordered">
                  <li className="nav-item">
                    <button
                      className="nav-link active"
                      data-bs-toggle="tab"
                      data-bs-target="#profile-overview"
                    >
                      Overview
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#profile-edit"
                    >
                      Edit Profile
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#profile-settings"
                    >
                      Settings
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#profile-change-password"
                    >
                      Change Password
                    </button>
                  </li>
                </ul>
                <div className="tab-content pt-2">
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
                        {profile.fullName}
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

                  <div
                    className="tab-pane fade profile-edit pt-3"
                    id="profile-edit"
                  >
                    <form onSubmit={handleSubmit}>
                      <div className="row mb-3">
                        <label
                          htmlFor="profileImage"
                          className="col-md-4 col-lg-3 col-form-label"
                        >
                          Profile Image
                        </label>
                        <div className="col-md-8 col-lg-9">
                          <img src="assets/img/profile-img.jpg" alt="Profile" />
                          <div className="pt-2">
                            <a
                              href="#"
                              className="btn btn-primary btn-sm"
                              title="Upload new profile image"
                            >
                              <i className="bi bi-upload"></i>
                            </a>
                            <a
                              href="#"
                              className="btn btn-danger btn-sm"
                              title="Remove my profile image"
                            >
                              <i className="bi bi-trash"></i>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label
                          htmlFor="fullName"
                          className="col-md-4 col-lg-3 col-form-label"
                        >
                          Full Name
                        </label>
                        <div className="col-md-8 col-lg-9">
                          <input
                            name="fullName"
                            type="text"
                            className="form-control"
                            id="fullName"
                            value={profile.fullName}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label
                          htmlFor="about"
                          className="col-md-4 col-lg-3 col-form-label"
                        >
                          About
                        </label>
                        <div className="col-md-8 col-lg-9">
                          <textarea
                            name="about"
                            className="form-control"
                            id="about"
                            style={{ height: "100px" }}
                            value={profile.about}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label
                          htmlFor="company"
                          className="col-md-4 col-lg-3 col-form-label"
                        >
                          Company
                        </label>
                        <div className="col-md-8 col-lg-9">
                          <input
                            name="company"
                            type="text"
                            className="form-control"
                            id="company"
                            value={profile.company}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label
                          htmlFor="job"
                          className="col-md-4 col-lg-3 col-form-label"
                        >
                          Job
                        </label>
                        <div className="col-md-8 col-lg-9">
                          <input
                            name="job"
                            type="text"
                            className="form-control"
                            id="job"
                            value={profile.job}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label
                          htmlFor="country"
                          className="col-md-4 col-lg-3 col-form-label"
                        >
                          Country
                        </label>
                        <div className="col-md-8 col-lg-9">
                          <input
                            name="country"
                            type="text"
                            className="form-control"
                            id="country"
                            value={profile.country}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label
                          htmlFor="address"
                          className="col-md-4 col-lg-3 col-form-label"
                        >
                          Address
                        </label>
                        <div className="col-md-8 col-lg-9">
                          <input
                            name="address"
                            type="text"
                            className="form-control"
                            id="address"
                            value={profile.address}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label
                          htmlFor="phone"
                          className="col-md-4 col-lg-3 col-form-label"
                        >
                          Phone
                        </label>
                        <div className="col-md-8 col-lg-9">
                          <input
                            name="phone"
                            type="text"
                            className="form-control"
                            id="phone"
                            value={profile.phone}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label
                          htmlFor="email"
                          className="col-md-4 col-lg-3 col-form-label"
                        >
                          Email
                        </label>
                        <div className="col-md-8 col-lg-9">
                          <input
                            name="email"
                            type="email"
                            className="form-control"
                            id="email"
                            value={profile.email}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label
                          htmlFor="twitter"
                          className="col-md-4 col-lg-3 col-form-label"
                        >
                          Twitter Profile
                        </label>
                        <div className="col-md-8 col-lg-9">
                          <input
                            name="twitter"
                            type="text"
                            className="form-control"
                            id="twitter"
                            value={profile.twitter}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label
                          htmlFor="facebook"
                          className="col-md-4 col-lg-3 col-form-label"
                        >
                          Facebook Profile
                        </label>
                        <div className="col-md-8 col-lg-9">
                          <input
                            name="facebook"
                            type="text"
                            className="form-control"
                            id="facebook"
                            value={profile.facebook}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label
                          htmlFor="instagram"
                          className="col-md-4 col-lg-3 col-form-label"
                        >
                          Instagram Profile
                        </label>
                        <div className="col-md-8 col-lg-9">
                          <input
                            name="instagram"
                            type="text"
                            className="form-control"
                            id="instagram"
                            value={profile.instagram}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label
                          htmlFor="linkedin"
                          className="col-md-4 col-lg-3 col-form-label"
                        >
                          Linkedin Profile
                        </label>
                        <div className="col-md-8 col-lg-9">
                          <input
                            name="linkedin"
                            type="text"
                            className="form-control"
                            id="linkedin"
                            value={profile.linkedin}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="text-center">
                        <button type="submit" className="btn btn-primary">
                          Save Changes
                        </button>
                      </div>
                    </form>
                  </div>

                  <div className="tab-pane fade pt-3" id="profile-settings">
                    <form>
                      <div className="row mb-3">
                        <label
                          htmlFor="emailNotifications"
                          className="col-md-4 col-lg-3 col-form-label"
                        >
                          Email Notifications
                        </label>
                        <div className="col-md-8 col-lg-9">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="changesMade"
                              checked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="changesMade"
                            >
                              Changes made to your account
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="newProducts"
                              checked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="newProducts"
                            >
                              Information on new products and services
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="proOffers"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="proOffers"
                            >
                              Marketing and promo offers
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="securityNotify"
                              checked
                              disabled
                            />
                            <label
                              className="form-check-label"
                              htmlFor="securityNotify"
                            >
                              Security alerts
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="text-center">
                        <button type="submit" className="btn btn-primary">
                          Save Changes
                        </button>
                      </div>
                    </form>
                  </div>

                  <div
                    className="tab-pane fade pt-3"
                    id="profile-change-password"
                  >
                    <form>
                      <div className="row mb-3">
                        <label
                          htmlFor="currentPassword"
                          className="col-md-4 col-lg-3 col-form-label"
                        >
                          Current Password
                        </label>
                        <div className="col-md-8 col-lg-9">
                          <input
                            name="password"
                            type="password"
                            className="form-control"
                            id="currentPassword"
                          />
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label
                          htmlFor="newPassword"
                          className="col-md-4 col-lg-3 col-form-label"
                        >
                          New Password
                        </label>
                        <div className="col-md-8 col-lg-9">
                          <input
                            name="newpassword"
                            type="password"
                            className="form-control"
                            id="newPassword"
                          />
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label
                          htmlFor="renewPassword"
                          className="col-md-4 col-lg-3 col-form-label"
                        >
                          Re-enter New Password
                        </label>
                        <div className="col-md-8 col-lg-9">
                          <input
                            name="renewpassword"
                            type="password"
                            className="form-control"
                            id="renewPassword"
                          />
                        </div>
                      </div>

                      <div className="text-center">
                        <button type="submit" className="btn btn-primary">
                          Change Password
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
