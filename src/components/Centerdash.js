/* eslint-disable max-lines-per-function */
/* eslint-disable no-negated-condition */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line sort-imports
import { getDailySales, getSalesReport } from '../actions/order';
import ItemOrdered from './sales/DailySales';
import Loader from './layout/Loader';

const Centerdash = () => {
  const sales = useSelector((state) => state.order.sales);
  const loading = useSelector((state) => state.order.loading);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const [state] = useState({
    month: 30,
    week: 7,
    year: 365
  });
  const handleClick = (days) => {
    dispatch(getSalesReport(days));
  };
  useEffect(() => {
    dispatch(getDailySales());
  }, []);
  return (
    <div className="col-md-10">
      <div className="user-dashboard">
        <h2 className="text-center">Hello, {user.business_name} </h2>
        <div className="col-sm-4 text-center m-auto">
          <div className="">
            <div className="dropdown">
          <button
            className="btn btn-success dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false">
          Today
          </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <button type="button" className="dropdown-item" onClick={() => handleClick(state.week)}>
                Last 7 Days
              </button>
              <button type="button" className="dropdown-item" onClick={() => handleClick(state.month)}>
                Last 30 Days
              </button>
              <button type="button" className="dropdown-item" onClick={() => handleClick(state.year)}>
                Last year
              </button>
            </div>
          </div>
          </div>
          <header className="m-auto">
          <h5>Your Sale is ₦{ sales }</h5>
          </header>
        </div>
        {loading && <Loader />}
        <ItemOrdered />
      </div>
    </div>
  );
};

export default Centerdash;
