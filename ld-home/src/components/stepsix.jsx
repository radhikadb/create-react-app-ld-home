import React from "react";
import { useFormContext } from "react-hook-form";

export default function StepSix() {
  const { register, formState: { errors } } = useFormContext();

  return (
    <>
      <div className="step well">
        <div className="row">
          <div className="col-md-6">
            <div className="form-field">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                className={`form-control form-control-lg ${errors.firstName ? 'is-invalid' : ''}`}
                placeholder="First Name"
                {...register('firstName', { required: 'First name is required' })}
              />
              {errors.firstName && <div className="invalid-feedback">{errors.firstName.message}</div>}
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-field">
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                className={`form-control form-control-lg ${errors.lastName ? 'is-invalid' : ''}`}
                placeholder="Last Name"
                {...register('lastName', { required: 'Last name is required' })}
              />
              {errors.lastName && <div className="invalid-feedback">{errors.lastName.message}</div>}
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-field">
              <label htmlFor="email">Email Address:</label>
              <input
                type="email"
                className={`form-control form-control-lg ${errors.email ? 'is-invalid' : ''}`}
                placeholder="Email Address"
                {...register('email', {
                  required: 'Email address is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Enter a valid email address'
                  }
                })}
              />
              {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-field">
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input
                type="number"
                className={`form-control form-control-lg ${errors.phoneNumber ? 'is-invalid' : ''}`}
                placeholder="Phone Number"
                {...register('phoneNumber', { required: 'Phone number is required' })}
              />
              {errors.phoneNumber && <div className="invalid-feedback">{errors.phoneNumber.message}</div>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
