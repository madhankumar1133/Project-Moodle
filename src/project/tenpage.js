import react from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './enpagec.css';


export function Tenpage()
{
    return(
        <>
           <div className='container-fluid p-5'>
                <div className='container mt-5'>
                    <div className='row'>
                        <div className='col-lg-5  p-5 bgten1 text-light'>
                            <h1 >Ready to go?</h1>
                            <p className='mt-3'>Get Moodle up and running via our Moodle Certified Partners and Service Providers, MoodleCloud, or direct download.</p>
                            <button className='bgbut p-2 mt-3  text-center text-light'>get started →</button>
                        </div>
                        <div className='col-lg-2'>&nbsp;

                        </div>
                        <div className='col-lg-5 p-5 bgten2 text-light'>
                            <h1 className='texthead'>Need advice?</h1>
                            <p className='mt-3 text-dark'>Not sure which Moodle setup is right for you? Answer a few quick questions to find out which method is best suited to your needs.</p>
                            <button className='bgbut p-2 mt-3  text-center text-dark'>see my options →</button>
                        </div>
                        
                    </div>
                </div>          

           </div>
        
        </>
    );
}