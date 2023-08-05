import react from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './secondpagec.css';
import img from './images/meditate.jpg';

export function Secondpage()
{
    return(
        <>
            <div className='container-fluid p-5'>
                <div className='container mt-5'>
                    <div className='row'>
                        <div className='col-lg-5'>
                            <img src={img} className='col-lg-12 imgsecond'/>
                            <p>Watch the video and get to know Moodle LMS.</p>

                        </div>
                        <div className='col-lg-1'>&nbsp;

                        </div>
                        <div className='col-lg-5'><br/><br/>
                            <p className='mt-5'>Why choose Moodle?</p>
                            <h1>Empowering you to provide quality eLearning experiences</h1>
                            <p className='mt-3'>At Moodle, we are on a mission to empower educators to improve our world with open source LMS software.</p>
                            <p>With hundreds of millions of users around the globe and translated into over 100 languages, Moodle gives you the freedom to create online teaching and training solutions that best meet your learners’ needs.</p>

                        </div>
                        <div className='col-lg-1'>&nbsp;

                        </div>

                    </div>

                </div>

            </div>
        </>
    );
}