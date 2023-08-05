import react from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './seventhpagec.css';
import seventhimg1 from './images/seventhimg1.jpg'

export function Seventhpage()
{
    return(
        <>
            <div className='container-fluid bgseventh p-5 '>
                <div className='container mt-5'>
                    <div className='row'>
                        <div className='col-lg-5'>
                            <p className='text-light'>Testimonials</p>
                            <h1 className='text-light'>What our customers say</h1>

                        </div>
                        <div className='col-lg-2'>&nbsp;

                        </div>
                        <div className='col-lg-5'>
                            <p className='text-light'>Hear from teachers, trainers, and leaders in the learning space about how Moodle empowers them to provide quality online learning experiences.</p>

                        </div>

                    </div>

                </div>

                <div className='container '>
                    <div className='row bg-light mt-5'>
                        <div className='col-lg-7'>
                            <img src={seventhimg1} className="col-lg-12 "/>

                        </div>
                        <div className='col-lg-5 bg-light'>
                            <h1>"we equally liked the moodle platform and our patnership with US,who provided a dedicated team to " hold our hands " through the site building and setup process."</h1>
                             <h6>chirs josh</h6>
                             <p>senior director of programs at LRCE</p>
                        </div>
                        

                    </div>

                </div>

            </div>
        </>
    );
}