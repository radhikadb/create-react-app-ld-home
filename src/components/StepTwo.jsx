import React from "react";
import { useFormContext } from 'react-hook-form';

export default function StepTwo() {
  const { register, formState: { errors } } = useFormContext();

  return (
    <>
      <div className="step well">
        <div className="row">
          <div className="col-md-6">
            <div className="form-field">
              <label htmlFor="accommodationSelect">Type of Accommodation:</label>
              <select
                className={`form-control form-select ${errors.accommodationSelect ? 'is-invalid' : ''}`}
                aria-label="Default select example"
                {...register('accommodationSelect', { required: 'Please select an option' })}
              >
                <option value="" selected>Select</option>
                <option value="apartment">Apartment</option>
                <option value="house">Individual house</option>
                {/* <option value="Terraced">Terraced / semi-detached house</option>
                <option value="Parking Garage">Parking Garage</option>
                <option value="Ground">Ground</option> */}
              </select>
              {errors.accommodationSelect && <div className="invalid-feedback">{errors.accommodationSelect.message}</div>}
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-field">
              <label htmlFor="yearOfConstruction">Year of Construction:</label>
              <select
                className={`form-select form-control ${errors.yearOfConstruction ? 'is-invalid' : ''}`}
                aria-label="Default select example"
                {...register('yearOfConstruction', { required: 'Please select an option' })}
              >
                <option value="" selected>Select</option>
                <option value="Old (before 1945)">Old (before 1945)</option>
                <option value="1945-1970">Years 1945-1970</option>
                <option value="1971-1990">Years 1971-1990</option>
                <option value="1991-2000">Years 1991-2000</option>
                <option value="2001-2010">Years 2001-2010</option>
                <option value="2011-2020">Years 2011-2020</option>
                <option value="Recent (after 2020)">Recent (after 2020)</option>
              </select>
              {errors.yearOfConstruction && <div className="invalid-feedback">{errors.yearOfConstruction.message}</div>}
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-field">
              <label htmlFor="livingArea">
                Living area (excluding basement, attic, terrace...):
              </label>
              <input
                type="number"
                id="livingArea"
                className={`form-control living-area ${errors.livingArea ? 'is-invalid' : ''}`}
                {...register('livingArea', { required: 'Living area is required.' })}
              />
              <span className="meter-text">
                m<sup>2</sup>{" "}
              </span>
              {errors.livingArea && <div className="invalid-feedback">{errors.livingArea.message}</div>}
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-field">
              <label htmlFor="apartmentFloor">Apartment Floor:</label>
              <select
                className={`form-select form-control ${errors.apartmentFloor ? 'is-invalid' : ''}`}
                aria-label="Default select example"
                {...register('apartmentFloor', { required: 'Please select an option' })}
              >
                <option value="" selected>Select</option>
                <option value="Ground floor">Ground floor</option>
                <option value="Stage 1">Stage 1</option>
                <option value="Floor 2">Floor 2</option>
                <option value="Floor 3">Floor 3</option>
                <option value="Floor 4">Floor 4</option>
                <option value="Floor > 4">Floor &#62;4</option>
              </select>
              {errors.apartmentFloor && <div className="invalid-feedback">{errors.apartmentFloor.message}</div>}
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-field">
              <label htmlFor="totalNumberOfFloor">Total Number of Floors:</label>
              <select
                className={`form-select form-control ${errors.totalNumberOfFloor ? 'is-invalid' : ''}`}
                aria-label="Default select example"
                {...register('totalNumberOfFloor', { required: 'Please select an option' })}
              >
                <option value="" selected>Select</option>
                <option value="<4"> &#60;4 </option>
                <option value=">4"> &#62;4 </option>
              </select>
              {errors.totalNumberOfFloor && <div className="invalid-feedback">{errors.totalNumberOfFloor.message}</div>}
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-field">
              <label htmlFor="elevator">Elevator:</label>
              <select
                className={`form-select form-control ${errors.elevator ? 'is-invalid' : ''}`}
                aria-label="Default select example"
                {...register('elevator', { required: 'Please select an option' })}
              >
                <option value="" selected>Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              {errors.elevator && <div className="invalid-feedback">{errors.elevator.message}</div>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
