import react from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './thirdpagec.css';

export function Thirdpage()
{
    return(
        <>
        <div className='container-fluid bgimgthird p-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-5'>
                        <h5 className='text-light'>Moodle 4 is here!</h5>
                        <h1 className='text-light'>Explore our latest releases</h1>
                        <p className='text-light'>With fresh and intuitive interfaces, find out how the latest release of our eLearning platforms make it easier for educators or trainers to create and edit courses, engage diverse teams of learners, and maximise employee training outcomes.</p>
                        <button className='bg-light p-2 mt-3  text-center thirdbut'>Learn about Moodle LMS 4 →</button>
                        <button className='bg-light p-2 mt-3  text-center thirdbut'>Learn about Moodle Workplace 4 →</button>
                    </div>

                </div>

            </div>

        </div>
        </>
        
    );
}