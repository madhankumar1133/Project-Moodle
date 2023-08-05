import react from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ninepagec.css';
import  nineimg1 from './images/nine1.webp';


export function Ninepage()
{
    return(
        <>
           <div className='container-fluid p-5 bgnine'>
                <div className='container mt-5'>
                    <div className='row'>
                        <div className='col-lg-5 text-center p-3'>
                            <img src={nineimg1} className="col-lg-12"/>

                        </div>
                        <div className='col-lg-2'>&nbsp;

                        </div>
                        <div className='col-lg-5 p-3'>
                            <h1 className='textnine'>Industry leader and trusted learning partner</h1>
                            <p className='textnine mt-3'>Our global awards and rankings recognise Moodle’s culture of excellence and the hard work and dedication of our team and the Moodle community to continually evolve and improve our LMS systems.</p>
                            <button className=' p-2 mt-3  text-center frontbutnine'>see our rewards →</button>
                        </div>
                        
                    </div>
                </div>          

           </div>
        
        </>
    );
}