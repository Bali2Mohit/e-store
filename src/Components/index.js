import {Route, Routes} from "react-router-dom";
import MainComponent from "./MainComponent";

const LandingPage = ()=> {
    return(
        
            <Routes>
                <Route path='/' Component={MainComponent} />
            </Routes>
    
    )
}

export default LandingPage;