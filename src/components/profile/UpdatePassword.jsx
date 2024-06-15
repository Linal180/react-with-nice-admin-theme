import { useEffect, useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { passwordValidationSchema } from '../../validations';
import FormInput from '../common/FormInput';
import { apiPut } from '../../axios';
import { INCORRECT_OLD_PASSWORD, PASSWORD_CHANGED, PASSWORD_MUST_MATCH } from '../../constants'
import { Alert } from '../common/Alert';

export const UpdatePassword = () => {
  const [show, setShow] = useState(false)
  const [alert, setAlert] = useState({
    type: '',
    message: ''
  })

  const methods = useForm({
    resolver: yupResolver(passwordValidationSchema),
  });

  const { handleSubmit, register, reset, clearErrors, watch, setError } = methods
  const { password, password2 } = watch()

  const onSubmit = async (data) => {
    const response = await apiPut('/users/change-password/', data)

    if (response.status === 200) {
      setAlert({ message: PASSWORD_CHANGED, type: 'success' })
    } else {
      setAlert({ message: INCORRECT_OLD_PASSWORD, type: 'danger' })
    }
    reset()
    setShow(true)
  };

  useEffect(() => {
    if (show) setTimeout(() => setShow(false), 1000)
  }, [show])

  useEffect(() => {
    password === password2 || !!!password2 ?
      clearErrors("password2")
      : setError("password2", { message: PASSWORD_MUST_MATCH })
  }, [clearErrors, password, password2, setError, watch])

  return (
    <div className="tab-pane fade pt-3" id="profile-change-password">
      {show && <Alert type={alert.type} message={alert.message} />}
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            name="old_password"
            label="Current Password"
            type="password"
            register={register}
          />

          <FormInput
            name="password"
            label="New Password"
            type="password"
            register={register}
          />

          <FormInput
            name="password2"
            label="Re-enter New Password"
            type="password"
            register={register}
          />

          <div className="text-center">
            <button type="submit" className="btn btn-primary">Change Password</button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
