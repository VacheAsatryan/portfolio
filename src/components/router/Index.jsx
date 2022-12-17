import { Routes, Route } from "react-router-dom";
import Body from "../Body/Body";
import Skills from "../Pages/skills/Skills";

function MyPages() {
    return (

        <Routes>
            <Route  path='/' element={<Body/>} />
            <Route  path='/skills' element={<Skills/>} />
           
        </Routes>
    )
}

export default MyPages;