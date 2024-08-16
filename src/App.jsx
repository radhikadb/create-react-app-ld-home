import React, { useState, useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import Header from './components/header';
import Stepone from './components/stepone';
import StepTwo from './components/StepTwo';
import Stepthree from './components/stepthree';
import Stepfour from './components/stepfour';
import Stepfive from './components/stepfive';
import Stepsix from './components/stepsix';
import Price from './components/price';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

function App() {
  const methods = useForm({ mode: 'onChange' });
  const { trigger, handleSubmit, formState: { isValid } } = methods;
  const [current, setCurrent] = useState(0);
  const [result, setResult] = useState(null); // State to hold the result data
  const [mapUrl, setMapUrl] = useState("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2585.6411207624933!2d6.102927500000001!3d49.6045168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479549311f78eabb%3A0x71002f23f684e30c!2s1311%20Luxembourg!5e0!3m2!1sen!2sin!4v1721122043832!5m2!1sen!2sin");
  const [submitted, setSubmitted] = useState(false); // State to track submission status
  const [showError, setShowError] = useState('');

  const steps = [
    <Stepone key="step1" />,
    <StepTwo key="step2" />,
    <Stepthree key="step3" />,
    <Stepfour key="step4" />,
    <Stepfive key="step5" />,
    <Stepsix key="step6" />
  ].filter(Boolean); // Filter out null values

  const limit = steps.length - 1;

  const setProgress = (currstep) => {
    const percent = ((currstep / limit) * 100).toFixed();
    const progressBar = document.querySelector('.progress-bar');
    if (progressBar) {
      progressBar.style.width = `${percent}%`;
      progressBar.innerHTML = `${percent}%`;
    }
  };

  const hideButtons = (current) => {
    const nextButton = document.querySelector('.next');
    const backButton = document.querySelector('.back');
    const submitButton = document.querySelector('.submit');

    if (nextButton) nextButton.style.display = current < limit ? 'inline-block' : 'none';
    if (backButton) backButton.style.display = current > 0 ? 'inline-block' : 'none';
    if (submitButton) submitButton.style.display = current === limit && !submitted ? 'inline-block' : 'none'; // Show submit button only on last step
  };

  useEffect(() => {
    setProgress(current);
    hideButtons(current);
  }, [current]);

  const handleNext = async () => {
    const valid = await trigger();
    if (valid && current < limit && !submitted) {
      if (current === 0) {
        const address = methods.getValues("streetNumber"); // or other address field
        console.log('address: ', address);
        // updateMapUrl(address);
      }
      setCurrent(current + 1);
    }
  };

  const handleBack = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const onSubmit = async (data) => {
    const formData = {
      postal_code: data.postalCode,
      street_number: data.streetNumber,
      accomandation: data.accommodationSelect.toLowerCase(),
      year_of_construction: data.yearOfConstruction,
      living_area: data.livingArea,
      apartment_floor: data.apartmentFloor,
      floor: data.totalNumberOfFloor,
      rooms: data.numberOfRooms,
      bathrooms: data.numberOfBathrooms,
      indoor: data.numberOfGarages,
      outdoor: data.numberOfOutdoorPitches,
      outside: data.outsideOptions.join(','),
      celler: data.cellar,
      brightness: data.brightness,
      view: data.view,
      current_standing: data.propertyCondition,
      general_condition: data.commonPartsCondition,
      neighborhood: data.neighborhood,
      near_transport: data.transportAndShops,
      energy_class: data.energyClass,
      thermal_insulation: data.thermalInsulation,
      owner: data.ownerStatus,
      selling_property: data.sellingPlans,
      elevator: data.elevator,
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      phone: data.phoneNumber,
    };

    try {
      const response = await fetch('https://pragya.dbtechserver.online/home-price-calculation/api/form-submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log('Success:', result.status);
      if (result.status == true) {
        setResult(result.data); // Update the result state with the response data
        setSubmitted(true); // Set the submission status to true
        setCurrent(limit); // Navigate to the Price step
      } else {
        setShowError(result.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const updateMapUrl = (address) => {
    const apiKey = ''; // Replace with your Google Maps API key
    const encodedAddress = encodeURIComponent(address);
    const newUrl = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodedAddress}`;
    setMapUrl(newUrl);
  };
  

  return (
    <>
      <Header />
      <main>
        <div className="container-fluid px-1 mx-auto">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="progress">
                <div
                  className="progress-bar active"
                  role="progressbar"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-7 form-value_box">
              {!submitted && (
                <>
                  <div className="row">
                    <div className="col-md-12 col-lg-12">
                      <div className="step-one step">
                        <h1>How Much is Your Home worth? Instant House Valuation</h1>
                      </div>
                    </div>
                  </div>
                  <FormProvider {...methods}>
                    <form onSubmit={handleSubmit(onSubmit)} className="step-form">
                      {steps[current]}
                      {showError && (
                        <p id="show_error">{showError}</p>
                      )}
                      <div className="form-btn">
                        <button
                          type="button"
                          className="back-btn action back"
                          onClick={handleBack}
                        >
                          <FontAwesomeIcon icon={faChevronLeft} /> Back
                        </button>
                        <button
                          type="button"
                          className="action next"
                          onClick={handleNext}
                        >
                          Next
                        </button>
                        <button
                          type="submit"
                          className="action submit btn btn-success"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </FormProvider>
                </>
              )}
              {submitted && (
                <div id="show_results">
                  <Price result={result} />
                </div>
              )}
            </div>
            <div className="col-md-6 col-lg-5 form-right">
              <iframe
                src={mapUrl}
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
