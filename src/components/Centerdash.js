/* eslint-disable max-lines-per-function */
/* eslint-disable no-negated-condition */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line sort-imports
import { getDailySales, getSalesReport } from '../actions/order';
import ItemOrdered from './sales/DailySales';
import Loader from './layout/Loader';

const Select = (props) => (
  <div className="form-group">
    <select onChange={props.handleChange} value={props.value} className="form-control">
      <option value={0}>Today</option>
      <option value={7} >Last 7 Days</option>
      <option value={30}>Last 30 Days</option>
      <option value={365}>This Year</option>
    </select>
  </div>
);
const Centerdash = () => {
  const sales = useSelector((state) => state.order.sales);
  const loading = useSelector((state) => state.order.loading);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const [days, setDays] = useState(0);
  const handleChange = (event) => {
    setDays(event.target.value);
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
            <Select handleChange={handleChange} />
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
