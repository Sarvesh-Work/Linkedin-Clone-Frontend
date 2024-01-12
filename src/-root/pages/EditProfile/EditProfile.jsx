import React from 'react'
import EditLeft from '../../../Components/EiditProfileLeftSide/EditTopLeft'
import RightsideBottom from './../../../Components/RightsideBottom/RightsideBottom';
import RightTop from '../../../Components/EditProfileRightSide/RightTop';
import RightBottom from '../../../Components/EditProfileRightSide/RightBottom';
import PeopleAlsoViwed from '../../../Components/EditProfileRightSide/PeopleAlsoViwed';
import EditTopLeft from '../../../Components/EiditProfileLeftSide/EditTopLeft';
import Education from '../../../Components/Education/Education';
import Experience from '../../../Components/Experience/Experience';


const EditProfile = () => {


  return (
    <div className='container-fluid px-md-4 pb-3'>
        <div className='row px-0 d-flex justify-content-center gap-2 mt-3'>
           <div className='col-lg-8'>
              <EditTopLeft/>
              <Experience/>
              <Education/>
                
           </div>
           <div className='col-lg-3'>
              <RightTop/>
              <RightBottom/>
              <PeopleAlsoViwed/>
           </div>
        </div>
    </div>
  )
}

export default EditProfile