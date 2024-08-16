import React from 'react';

export default function Price({ result }) {
  if (!result) {
    return <div>No result available</div>;
  }

  const {
    estimated_sale_value = 'N/A',
    estimated_monthly_value = 'N/A',
    sale_value_plus_7_percent = 'N/A',
    sale_value_minus_7_percent = 'N/A',
    monthly_value_plus_7_percent = 'N/A',
    monthly_value_minus_7_percent = 'N/A',
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
                  <div class="col-md-4 col-sm-4 col-4">
                    <p class="price-value">{sale_value_plus_7_percent}</p>
                  </div>
                  <div className="col-md-4 col-sm-4 col-4">
                    <p className="mid-value">{estimated_sale_value}</p>
                  </div>
                  <div class="col-md-4 col-sm-4 col-4">
                    <p class="price-value">{sale_value_minus_7_percent}</p>
                  </div>
                </div>
                <div class="sale-line">
                </div>
                <div class="row sale-btm_text">
                  <div class="col-md-4 col-sm-4 col-4">
                    <p>Low</p>
                  </div>
                  <div class="col-md-4 col-sm-4 col-4">
                    <p>Confident Level 4/5</p>
                  </div>
                  <div class="col-md-4 col-sm-4 col-4">
                    <p>High</p>
                  </div>
                </div>
              </div>
              <div className="month-heading">
                <h4>Estimated Monthly Value</h4>
              </div>
              <div className="sale-value">
                <div className="row">
                  <div class="col-md-4 col-sm-4 col-4">
                    <p class="price-value">{monthly_value_plus_7_percent}</p>
                  </div>
                  <div className="col-md-4 col-sm-4 col-4">
                    <p className="mid-value">{estimated_monthly_value}</p>
                  </div>
                  <div class="col-md-4 col-sm-4 col-4">
                    <p class="price-value">{monthly_value_minus_7_percent}</p>
                  </div>
                </div>
                <div class="month-line">
                </div>
                <div class="row sale-btm_text">
                  <div class="col-md-4 col-sm-4 col-4">
                    <p>Low</p>
                    
                  </div>
                  <div class="col-md-4 col-sm-4 col-4">
                    <p>Confident Level 4/5</p>
                  </div>
                  <div class="col-md-4 col-sm-4 col-4">
                    <p>High</p>
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
