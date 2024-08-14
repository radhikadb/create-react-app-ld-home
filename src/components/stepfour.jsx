import React from "react";
import { useFormContext } from 'react-hook-form';

export default function StepFour() {
  const { register, formState: { errors } } = useFormContext();

  return (
    <>
      <div className="step well">
        <div className="row">
          <div className="col-md-6">
            <div className="form-field">
              <label htmlFor="brightness">Brightness:</label>
              <select
                className={`form-select form-control ${errors.brightness ? 'is-invalid' : ''}`}
                aria-label="Brightness select"
                {...register('brightness', { required: 'Please select brightness' })}
              >
                <option value="" selected>Select</option>
                <option value="Dark">Dark</option>
                <option value="Unclear">Unclear</option>
                <option value="Standard">Standard</option>
                <option value="Clear">Clear</option>
                <option value="Veryclear">Very clear</option>
              </select>
              {errors.brightness && <div className="invalid-feedback">{errors.brightness.message}</div>}
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-field">
              <label htmlFor="view">View:</label>
              <select
                className={`form-select form-control ${errors.view ? 'is-invalid' : ''}`}
                aria-label="View select"
                {...register('view', { required: 'Please select a view' })}
              >
                <option value="" selected>Select</option>
                <option value="Vis à vis">Vis à vis</option>
                <option value="Clear">Clear</option>
                <option value="Exceptional">Exceptional</option>
              </select>
              {errors.view && <div className="invalid-feedback">{errors.view.message}</div>}
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-field">
              <label htmlFor="propertyCondition">Current Standing of The Property:</label>
              <select
                className={`form-select form-control ${errors.propertyCondition ? 'is-invalid' : ''}`}
                aria-label="Property condition select"
                {...register('propertyCondition', { required: 'Please select the current standing of the property' })}
              >
                <option value="" selected>Select</option>
                <option value="Renovations to predict">Renovations to predict</option>
                <option value="Minor works to be planned">Minor works to be planned</option>
                <option value="Refreshment/decoration work to be planned">Refreshment/decoration work to be planned</option>
                <option value="Ready to move in">Ready to move in</option>
                <option value="Exceptional">Exceptional</option>
              </select>
              {errors.propertyCondition && <div className="invalid-feedback">{errors.propertyCondition.message}</div>}
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-field">
              <label htmlFor="commonPartsCondition">General Condition of The Common Parts of The Building:</label>
              <select
                className={`form-select form-control ${errors.commonPartsCondition ? 'is-invalid' : ''}`}
                aria-label="Common parts condition select"
                {...register('commonPartsCondition', { required: 'Please select the general condition of the common parts' })}
              >
                <option value="" selected>Select</option>
                <option value="Bad">Bad</option>
                <option value="Acceptable">Acceptable</option>
                <option value="Standard">Standard</option>
                <option value="Pupil">Pupil</option>
                <option value="Excellent">Excellent</option>
              </select>
              {errors.commonPartsCondition && <div className="invalid-feedback">{errors.commonPartsCondition.message}</div>}
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-field">
              <label htmlFor="neighborhood">Neighborhood Environment:</label>
              <select
                className={`form-select form-control ${errors.neighborhood ? 'is-invalid' : ''}`}
                aria-label="Neighborhood select"
                {...register('neighborhood', { required: 'Please select the neighborhood environment' })}
              >
                <option value="" selected>Select</option>
                <option value="Calm">Calm</option>
                <option value="Standard">Standard</option>
                <option value="Noisy">Noisy</option>
              </select>
              {errors.neighborhood && <div className="invalid-feedback">{errors.neighborhood.message}</div>}
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-field">
              <label htmlFor="transportAndShops">Near Transport & Shops:</label>
              <select
                className={`form-select form-control ${errors.transportAndShops ? 'is-invalid' : ''}`}
                aria-label="Transport and shops select"
                {...register('transportAndShops', { required: 'Please select proximity to transport and shops' })}
              >
                <option value="" selected>Select</option>
                <option value="Transportation">Transportation</option>
                <option value="Shops">Shops</option>
                <option value="Schools">Schools</option>
              </select>
              {errors.transportAndShops && <div className="invalid-feedback">{errors.transportAndShops.message}</div>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
