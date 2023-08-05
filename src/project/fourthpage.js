import react from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './fourthpagec.css';
import imgfourth1 from './images/imgfourth1.jpg';
import imgfourth2 from './images/imgfourth2.jpg';

export function Fourthpage()
{
    return(
        <>
        <div className='container-fluid p-5'>
            <div className='container'>
                    <p className='mt-5'>Our products</p>
                    <h1>Choose your LMS platform</h1>
                    <p className='mt-3'>Explore our online teaching and workplace training solutions.</p>
                <div className='row'>
                    <div className='col-lg-5 bgfourthone'>
                        <div className="card bg-light border-light text-white">
                               <img src={imgfourth1} className="card-img imgcard1 col-lg-12" alt="..."/>
                             <div className="card-img-overlay">
                                <div className='row'> 
                                    
                                    <div className='col-lg-3'>
                                         <button className='bg-light p-1 border-light mt-3  text-center fourthbut'>Accessible</button>

                                    </div>
                                    <div className='col-lg-4'>
                                         <button className='bg-light p-1 border-light mt-3  text-center fourthbut'>open source</button>

                                    </div>
                                    <div className='col-lg-5'>
                                         <button className='bg-light p-1 border-light mt-3  text-center fourthbut'>secure & scalable</button>

                                    </div>
                                

                                </div>
                                <h3 className="card-title mt-2 fourthtext">Moodle LMS</h3>
                                <h6 className="card-text fourthtext">encage your learners with flexible,secure and Accessible online learning spaces</h6>
                                
                        </div>
                    </div>

                    </div>
                    <div className='col-lg-1'>&nbsp;

                    </div>
                    <div className='col-lg-5'>
                        <div className="card bg-light border-light text-white">
                               <img src={imgfourth2} className="card-img imgcard2 col-lg-12" alt="..."/>
                             <div className="card-img-overlay">
                                <div className='row'> 
                                   
                                    <div className='col-lg-3'>
                                         <button className='bg-light p-1 border-light mt-3  text-center fourthbut'>Accessible</button>

                                    </div>
                                    <div className='col-lg-4'>
                                         <button className='bg-light p-1 border-light mt-3  text-center fourthbut'>open source</button>

                                    </div>
                                    <div className='col-lg-5'>
                                         <button className='bg-light p-1 border-light mt-3  text-center fourthbut'>secure & scalable</button>

                                    </div>
                                

                                </div>
                                <h3 className="card-title mt-2 fourthtext">Moodle LMS</h3>
                                <h6 className="card-text fourthtext">encage your learners with flexible,secure and Accessible online learning spaces</h6>
                                
                             </div>

                        </div>
                    </div>
                    <div className='col-lg-1'>&nbsp;

                    </div>

                </div>

            </div>

        </div>
        </>
    );
}