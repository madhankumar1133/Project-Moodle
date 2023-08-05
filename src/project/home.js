import react from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Firstpage } from './firstpage';
import { Secondpage } from './secondpage';
import { Thirdpage } from './thirdpage';
import { Fourthpage } from './fourthpage';
import { Sixthpage } from './sixthpage';
import { Seventhpage } from './seventhpage';
import { EightPage } from './eightpage';
import { Ninepage } from './ninepage';
import { Tenpage } from './tenpage';
import { Elevenpage } from './elevenpage';

export function Home()
{
    return(
        <>
           <Firstpage/>
           <Secondpage/>
           <Thirdpage/>
           {/* <Fourthpage/> */}
           <Sixthpage/>
           <Seventhpage/>
           <EightPage/>
           <Ninepage/>
           <Tenpage/>
           <Elevenpage/>
        </>
    );
}