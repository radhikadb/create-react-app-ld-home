import React from 'react';
import { useFormContext } from 'react-hook-form';

export default function StepFive() {
  const { register, formState: { errors } } = useFormContext();

  return (
    <>
      <div className="step well">
        <div className="row">
          <div className="col-md-6">
            <div className="form-field">
              <label htmlFor="energyClass">Energy class:</label>
              <select
                className={`form-select form-control ${errors.energyClass ? 'is-invalid' : ''}`}
                aria-label="Energy class select"
                {...register('energyClass', { required: 'Please select an energy class' })}
              >
                <option value="" selected>Select</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
                <option value="F">F</option>
                <option value="G">G</option>
                <option value="H">H</option>
                <option value="I">I</option>
                <option value="I don\'t know">I don\'t know</option>
              </select>
              {errors.energyClass && <div className="invalid-feedback">{errors.energyClass.message}</div>}
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-field">
              <label htmlFor="thermalInsulation">Thermal Insulation:</label>
              <select
                className={`form-select form-control ${errors.thermalInsulation ? 'is-invalid' : ''}`}
                aria-label="Thermal insulation select"
                {...register('thermalInsulation', { required: 'Please select the thermal insulation level' })}
              >
                <option value="" selected>Select</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
                <option value="F">F</option>
                <option value="G">G</option>
                <option value="H">H</option>
                <option value="I">I</option>
                <option value="I don\'t know">I don\'t know</option>
              </select>
              {errors.thermalInsulation && <div className="invalid-feedback">{errors.thermalInsulation.message}</div>}
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-field">
              <label htmlFor="ownerStatus">Are You The Owner of This Property?:</label>
              <select
                className={`form-select form-control ${errors.ownerStatus ? 'is-invalid' : ''}`}
                aria-label="Owner status select"
                {...register('ownerStatus', { required: 'Please select your ownership status' })}
              >
                <option value="" selected>Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              {errors.ownerStatus && <div className="invalid-feedback">{errors.ownerStatus.message}</div>}
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-field">
              <label htmlFor="sellingPlans">Are You Considering Selling Your Property?:</label>
              <select
                className={`form-select form-control ${errors.sellingPlans ? 'is-invalid' : ''}`}
                aria-label="Selling plans select"
                {...register('sellingPlans', { required: 'Please select your selling plans' })}
              >
                <option value="" selected>Select</option>
                <option value="market">Yes, the property is already on the market</option>
                <option value="months">Yes, in less than 6 months</option>
                <option value="more">Yes, in more than 6 months</option>
                <option value="no">No</option>
              </select>
              {errors.sellingPlans && <div className="invalid-feedback">{errors.sellingPlans.message}</div>}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
