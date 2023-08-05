import react from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './firstpagec.css';
import 'bootstrap/dist/js/bootstrap.bundle';


export function Firstpage()
{
    return(
        <>


<nav className="navbar navbar-expand-lg navbar-light bg-nav">
  <a className="navbar-brand text-light" href="#"><h1>Moodle</h1></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto ">
                     <li className="nav-item active text-light">
                        <a className="nav-link text-light" href="#">Solutions <span class="sr-only">(current)</span></a>
                     </li>
                     <li className="nav-item ">
                        <a className="nav-link text-light" href="#">customers</a>
                     </li>
                     <li className="nav-item dropdown text-light">
                         <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                             about us
        </a>
        <div className="dropdown-menu text-light">
          <a className="dropdown-item text-light" href="#">community</a>
          <a className="dropdown-item text-light" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item text-light" href="#">Something else here</a>
        </div>
      </li>
      <li className="nav-item text-light">
        <a className="nav-link disabled text-light">contacct us</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
           <div className='container-fluid p-5'>
                <div className='container mt-5'>
                    <div className='row'>
                        <div className='col-lg-5 text-center p-3'>
                            <h1 className=''>Online learning, delivered your way</h1>

                        </div>
                        <div className='col-lg-2'>&nbsp;

                        </div>
                        <div className='col-lg-5 p-3'>
                            <p>Join hundreds of thousands of educators and trainers on Moodle, the world’s most customisable and trusted learning management system.</p>
                            <button className='bg-light p-2 mt-3  text-center frontbut'>get moodle →</button>
                        </div>
                        
                    </div>
                </div>          

           </div>
        
        </>
    );
}