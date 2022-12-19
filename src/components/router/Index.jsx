import { Routes, Route } from "react-router-dom";
import Body from "../Body/Body";
import About from "../Pages/abouth/About";

import Skills from "../Pages/skills/Skills";

function MyPages() {
    return (

        <Routes>
            <Route  path='/' element={<Body/>} />
            <Route  path='/skills' element={<Skills/>} />
            <Route  path='/about' element={<About/>} />

           
        </Routes>
    )
}

export default MyPages;