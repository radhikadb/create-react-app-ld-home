import React from 'react';

export default function Price({ result }) {
  if (!result) {
    return <div>No result available</div>;
  }

  const {
    estimated_sale_value = 'N/A',
    estimated_monthly_value = 'N/A'
  } = result;


  const handleReload = (e) => {
    e.preventDefault();
    window.location.reload();
  };

  return (
    <>
      <div className="step well">
        <div className="row">
          <div className="col-md-12 col-lg-12 m-auto">
            <div className="end-form_box">
              <div className="sale-heading">
                <h4>Estimated Sale Value</h4>
              </div>
              <div className="sale-value">
                <div className="row">
                  <div className="col-md-12 col-sm-12 col-12">
                    <p className="mid-value">{estimated_sale_value}</p>
                  </div>
                </div>
              </div>
              <div className="month-heading">
                <h4>Estimated Monthly Value</h4>
              </div>
              <div className="sale-value">
                <div className="row">
                  <div className="col-md-12 col-sm-12 col-12">
                    <p className="mid-value">{estimated_monthly_value}</p>
                  </div>
                </div>
              </div>
              <a href="#" className='btn btn-primary mt-4' onClick={handleReload}>
                Go to Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
