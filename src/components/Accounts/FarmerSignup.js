/* eslint-disable sort-imports */
import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { SectionCustomer } from './Login';
import {
  SectionOne, SectionThree, SectionTwo
} from './SectionOne';

const FarmerSignup = () => {
  const isAuthenticated = useSelector(
    (state) => state.auth.isAuthenticated
  );
  if (isAuthenticated) return <Redirect to="/home" />;
  return (
        <div className="main-bg ">
          <div className="sub-main">
            {/* <!-- vertical tabs --> */}
            <div className="vertical-tab">
              <SectionOne />
              <SectionTwo />
              <SectionCustomer />
              <SectionThree />
            </div>

            <div className="clear"></div>
          </div>
        </div>
  );
};

export default FarmerSignup;
