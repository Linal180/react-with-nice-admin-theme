import axios from "axios";
import { useEffect, useState } from "react";
import { useForm, FormProvider, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormInput from "../common/FormInput";
import { profileValidation } from "../../validations";
import { getApiCallHeaders } from "../../utils";
import { API_URL, FAILED_TO_UPDATE_PROFILE, PROFILE_UPDATED } from "../../constants";
import { Alert } from '../common/Alert'

export const EditProfile = ({ profile }) => {
  const [show, setShow] = useState(false)
  const [alert, setAlert] = useState({
    type: '',
    message: ''
  })
  const methods = useForm({
    resolver: yupResolver(profileValidation),
    defaultValues: profile
  });

  const { handleSubmit, reset, control, formState: { errors } } = methods;

  const onSubmit = async (data) => {
    const formData = new FormData();

    Object.keys(data).forEach(key => {
      if (key !== 'image') {
        formData.append(key, data[key]);
      }
    });

    if (data.image instanceof File) {
      formData.append('image', data.image);
    }

    try {
      const response = await axios.put(`${API_URL}/users/`, formData, {
        headers: {
          ...getApiCallHeaders(),
          'Content-Type': 'multipart/form-data',
        }
      });
      setAlert({ message: PROFILE_UPDATED, type: 'success'})
      setTimeout(() => {
        window.location = '/profile'
      }, 1000)
    } catch (error) {
      setAlert({ message: FAILED_TO_UPDATE_PROFILE, type: 'danger'})
      console.error('Error updating profile:', error);
    }
  };

  useEffect(() => {
    if (show) setTimeout(() => setShow(false), 1000)
  }, [show])

  useEffect(() => {
    reset(profile);
  }, [profile, reset]);

  return (
    <div className="tab-pane fade profile-edit pt-3" id="profile-edit">
      {show && <Alert type={alert.type} message={alert.message} />}
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
          <div className="row mb-3">
            <label htmlFor="image" className="col-md-4 col-lg-3 col-form-label">
              Profile Image
            </label>
            <div className="col-md-8 col-lg-9">
              <div className="existing-profile-image">
                <img src="assets/img/profile-img.jpg" alt="Profile" />
              </div>

              <div className="new-profile-image pt-2">
                <Controller
                  name="image"
                  control={control}
                  render={({ field }) => (
                    <>
                      <div className="input-group">
                        <input
                          type="file"
                          className={`form-control ${errors.profileImage ? 'is-invalid' : ''}`}
                          id="image"
                          onChange={(e) => control.setValue('image', e.target.files[0])} // Capture the file
                          style={{ display: 'none' }} // Hide the default file input
                        />
                        <label className="btn btn-primary btn-sm" htmlFor="image" >
                          <i className="bi bi-upload"></i>
                        </label>
                      </div>
                      {errors.image && (
                        <div className="invalid-feedback">
                          {errors.image.message}
                        </div>
                      )}
                    </>
                  )}
                />
              </div>
            </div>
          </div>

          <FormInput name="first_name" label="First Name" placeholder="Enter your first name" />
          <FormInput name="last_name" label="Last Name" placeholder="Enter your last name" />
          <FormInput name="about" label="About" placeholder="Tell us about yourself" type="textarea" />
          <FormInput name="company" label="Company" placeholder="Enter your company name" />
          <FormInput name="job" label="Job" placeholder="Enter your job title" />
          <FormInput name="country" label="Country" placeholder="Enter your country" />
          <FormInput name="address" label="Address" placeholder="Enter your address" />
          <FormInput name="phone" label="Phone" placeholder="Enter your phone number" />
          <FormInput name="email" label="Email" placeholder="Enter your email" type="email" />
          <FormInput name="twitter" label="Twitter Profile" placeholder="Enter your Twitter URL" />
          <FormInput name="facebook" label="Facebook Profile" placeholder="Enter your Facebook URL" />
          <FormInput name="instagram" label="Instagram Profile" placeholder="Enter your Instagram URL" />
          <FormInput name="linkedin" label="LinkedIn Profile" placeholder="Enter your LinkedIn URL" />

          <div className="text-center">
            <button type="submit" className="btn btn-primary">Save Changes</button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
