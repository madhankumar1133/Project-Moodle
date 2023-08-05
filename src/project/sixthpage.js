import react from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sixthpagec.css';
import siximg1 from './images/imgsix1.jpeg';
import siximg2 from './images/siximg2.jpeg';
import siximg3 from './images/siximg3.jpeg';
import siximg4 from './images/siximg4.jpeg';


export function Sixthpage()
{
    return(
        <>
            <div className='container-fluid p-5 '>
                <div className='container'>
                    <div className='row mt-5'>
                        <div className='col-lg-5'>
                            <p>Our community</p>
                            <h1>Learn from hundreds of millions of Moodle users</h1>
                            <p>Moodle is more than just an LMS platform – we are a global community of educators, trainers, developers, system administrators, and learners who are dedicated to building the world’s most effective platform for online learning.</p>
                            <p>From sharing educational resources and debating new ideas to fixing bugs and updating documentation, our community is here to support you throughout your online learning journey.</p>
                            <button className='bg-light p-2 mt-3  text-center thirdbut'>Meet the moodle community →</button>
                        </div>
                        <div className='col-lg-1'>&nbsp;

                        </div>
                        <div className='col-lg-6'>
                            <div className='row'>
                                <div className='col-lg-5 '>
                                    <div className="card" >
                                           <img src={siximg1} className="card-img-top" alt="..."/>
                                         <div className="card-body">
                                            <h5 className="card-title">Moodle Community</h5>
                                            <p className="card-text">Access Q&A forums and resources on how to set up and teach with Moodle.</p>
    
                                         </div>
                                    </div>
                                    

                                </div>
                                <div className='col-lg-2'>&nbsp;

                                </div>
                                <div className='col-lg-5 mt-5'>
                                <div className="card" >
                                           <img src={siximg2} className="card-img-top" alt="..."/>
                                         <div className="card-body">
                                            <h5 className="card-title">MoodleNet</h5>
                                            <p className="card-text">Our global network to share and curate open educational resources.</p>
    
                                         </div>
                                    </div>

                                </div>




                                <div className='col-lg-5 '>
                                    <div className="card" >
                                           <img src={siximg3} className="card-img-top" alt="..."/>
                                         <div className="card-body">
                                            <h5 className="card-title">Moodle Academy</h5>
                                            <p className="card-text">Join our learning hub for the global Moodle community.</p>
    
                                         </div>
                                    </div>
                                    

                                </div>
                                <div className='col-lg-2'>&nbsp;

                                </div>
                                <div className='col-lg-5 mt-5'>
                                <div className="card" >
                                           <img src={siximg4} className="card-img-top" alt="..."/>
                                         <div className="card-body">
                                            <h5 className="card-title">Moodle Plugins</h5>
                                            <p className="card-text">Find Moodle-endorsed open source plugins for Moodle LMS and Moodle Workplace..</p>
    
                                         </div>
                                    </div>

                                </div>


                            </div>

                        </div>
                    </div> 

                </div>

            </div>
        </>
    );
}