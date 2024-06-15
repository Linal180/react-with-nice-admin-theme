// FormInput.js
import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';

const FormInput = ({ name, label, type = "text", placeholder, className }) => {
  const { control, formState: { errors } } = useFormContext();

  return (
    <div className="row mb-3">
      <label htmlFor={name} className="col-md-4 col-lg-3 col-form-label">
        {label}
      </label>
      <div className="col-md-8 col-lg-9">
        <Controller
          name={name}
          control={control}
          render={({ field }) => {
            if (type === 'file') {
              return (
                <>
                  <input
                    {...field}
                    type={type}
                    className={`form-control ${className} ${errors[name] ? 'is-invalid' : ''}`}
                    id={name}
                    onChange={(e) => field.onChange(e.target.files[0])} // Use onChange to set file
                  />
                  {errors[name] && <div className="invalid-feedback">{errors[name]?.message}</div>}
                </>
              );
            }
            return (
              <>
                <input
                  {...field}
                  type={type}
                  className={`form-control ${className} ${errors[name] ? 'is-invalid' : ''}`}
                  id={name}
                  placeholder={placeholder}
                />
                {errors[name] && <div className="invalid-feedback">{errors[name]?.message}</div>}
              </>
            );
          }}
        />
      </div>
    </div>
  );
};

export default FormInput;
