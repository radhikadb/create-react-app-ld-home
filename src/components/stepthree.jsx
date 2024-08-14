import React from "react";
import { useFormContext } from 'react-hook-form';

export default function StepThree() {
  const { register, formState: { errors } } = useFormContext();

  return (
    <>
      <div className="step well">
        <div className="row">
          <div className="col-md-6">
            <div className="form-field">
              <label htmlFor="numberOfRooms">Number of Rooms:</label>
              <div>
                {["1", "2", "3", "4", "5"].map((value, index) => (
                  <div className="radio-btn" key={index}>
                    <input
                      type="radio"
                      id={`rooms${index + 1}`}
                      value={value}
                      {...register("numberOfRooms", { required: "Please select the number of rooms" })}
                    />
                    <label className="btn btn-default" htmlFor={`rooms${index + 1}`}>
                      {value}
                    </label>
                  </div>
                ))}
                {errors.numberOfRooms && (
                  <div className="invalid-feedback d-block">{errors.numberOfRooms.message}</div>
                )}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-field">
              <label htmlFor="numberOfBathrooms">Number of Bathrooms:</label>
              <div>
                {["1", "2", "3", "4", "5"].map((value, index) => (
                  <div className="radio-btn" key={index}>
                    <input
                      type="radio"
                      id={`bathrooms${index + 1}`}
                      value={value}
                      {...register("numberOfBathrooms", { required: "Please select the number of bathrooms" })}
                    />
                    <label className="btn btn-default" htmlFor={`bathrooms${index + 1}`}>
                      {value}
                    </label>
                  </div>
                ))}
                {errors.numberOfBathrooms && (
                  <div className="invalid-feedback d-block">{errors.numberOfBathrooms.message}</div>
                )}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-field">
              <label htmlFor="numberOfGarages">Number of Garage(s) or Indoor Location(s):</label>
              <div>
                {["0", "1", "2", "3", "4", "5"].map((value, index) => (
                  <div className="radio-btn" key={index}>
                    <input
                      type="radio"
                      id={`garage${index}`}
                      value={value}
                      {...register("numberOfGarages", { required: "Please select the number of garages" })}
                    />
                    <label className="btn btn-default" htmlFor={`garage${index}`}>
                      {value}
                    </label>
                  </div>
                ))}
                {errors.numberOfGarages && (
                  <div className="invalid-feedback d-block">{errors.numberOfGarages.message}</div>
                )}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-field">
              <label htmlFor="numberOfOutdoorPitches">Number of Outdoor Pitch(es):</label>
              <div>
                {["0", "1", "2", "3", "4", "5"].map((value, index) => (
                  <div className="radio-btn" key={index}>
                    <input
                      type="radio"
                      id={`pitch${index}`}
                      value={value}
                      {...register("numberOfOutdoorPitches", { required: "Please select the number of outdoor pitches" })}
                    />
                    <label className="btn btn-default" htmlFor={`pitch${index}`}>
                      {value}
                    </label>
                  </div>
                ))}
                {errors.numberOfOutdoorPitches && (
                  <div className="invalid-feedback d-block">{errors.numberOfOutdoorPitches.message}</div>
                )}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-field">
              <label htmlFor="outsideOptions">Outside:</label>
              <div className="check-outside">
                {["Terrace", "Balcony", "Garden"].map((option, index) => (
                  <div className="form-check" key={index}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={`outsideOption${index}`}
                      value={option}
                      {...register("outsideOptions")}
                    />
                    <label className="form-check-label" htmlFor={`outsideOption${index}`}>
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-field">
              <label htmlFor="cellar">Cellar:</label>
              <select
                className={`form-select form-control ${errors.cellar ? 'is-invalid' : ''}`}
                aria-label="Default select example"
                {...register('cellar', { required: 'Please select an option' })}
              >
                <option value="" selected>Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              {errors.cellar && (
                <div className="invalid-feedback">{errors.cellar.message}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
