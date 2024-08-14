import React from 'react';
import { useFormContext } from 'react-hook-form';

export default function Stepone() {
  const { register, formState: { errors } } = useFormContext();

  return (
    <>
      <div className="step well">
        <h5 className="step-one_para">Where is your property located?</h5>
        <div className="row">
          <div className="col-md-6">
            <div className="form-field">
              <label htmlFor="postalCode">Postal Code:</label>
              <input
                type="number"
                id="postalCode"
                className={`form-control form-control-lg ${errors.postalCode ? 'is-invalid' : ''}`}
                placeholder="Postal Code"
                {...register('postalCode', { required: 'Postal code is required.' })}
              />
              {errors.postalCode && <div className="invalid-feedback">{errors.postalCode.message}</div>}
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-field">
              <label htmlFor="streetNumber">Street Number:</label>
              <input
                type="text"
                id="streetNumber"
                className={`form-control form-control-lg ${errors.streetNumber ? 'is-invalid' : ''}`}
                placeholder="Street Number"
                {...register('streetNumber', { required: 'Street number is required.' })}
              />
              {errors.streetNumber && <div className="invalid-feedback">{errors.streetNumber.message}</div>}
              <div id="result" className="list-group"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
