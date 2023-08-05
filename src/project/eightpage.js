import react from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './eightpagec.css';
import img1 from './images/nineicon1.png';
import img2 from './images/nineicon2.png';
import img3 from './images/nineicon3.png';
import img4 from './images/nineicon4.png';

export function EightPage()
{
    return(
        <>
          <div className='container-fluid mt-5 p-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-5 mt-3 p-3'>
                        <p>Our customers</p>
                        <h1>Who’s using Moodle?</h1>

                    </div>
                    <div className='col-lg-2'>&nbsp;

                    </div>
                    <div className='col-lg-5 mt-3 p-3'>
                        <p>Moodle is the LMS of choice for thousands of schools, universities, colleges, vocational trainers, and workplaces in every part of the world.</p>

                    </div>
                    <div className='col-lg-3 mt-5 p-3 text-center'>
                        <img src={img3} className="col-lg-5 " />
                        <h1>316,000,000+</h1>
                        <p>Users world wide</p>

                    </div>
                    <div className='col-lg-3 mt-5 p-3 text-center'>
                        <img src={img2} className="col-lg-5 " />
                        <h1>1.8 Billion+</h1>
                        <p>Course enrolments</p>

                    </div>
                    <div className='col-lg-3 mt-5 p-3 text-center'>
                        <img src={img1} className="col-lg-5 " />
                        <h1>41,000,000+</h1>
                        <p>Courses in 42 languages</p>

                    </div>
                    <div className='col-lg-3 mt-5 p-3 text-center'>
                        <img src={img4} className="col-lg-5 " />
                        <h1>179,000+</h1>
                        <p>Moodle sites</p>

                    </div>


                </div>
            </div> 

          </div>
        </>
    );
}