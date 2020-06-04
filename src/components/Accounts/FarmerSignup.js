import React from 'react';
// eslint-disable-next-line sort-imports
import {
  SectionOne, SectionThree, SectionTwo
} from '../../containers/SignupSections/SectionOne';
// eslint-disable-next-line import/named
import { SectionCustomer } from '../Login';

const FarmerSignup = () => (
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

export default FarmerSignup;
