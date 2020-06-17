import React from 'react';
// eslint-disable-next-line sort-imports
import { SectionOne, SectionThree, SectionTwo } from '../containers/SignupSections/SectionOne';


const Signup = () => (
    <div>
        <div className="main-bg ">
          <div className="sub-main">
            {/* <!-- vertical tabs --> */}
            <div className="vertical-tab">
              <SectionOne />
              <SectionTwo />
              <SectionThree />
            </div>

            <div className="clear"></div>
          </div>
        </div>
      </div>
);

export default Signup;
