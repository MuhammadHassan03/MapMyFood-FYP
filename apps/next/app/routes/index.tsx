import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "Shared/screens/landingPage"
import { Layout } from "../Layout"

const NextRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<LandingPage/>}/>
                </Route>
            </Routes>
        </Router>
    )
}

export { NextRoutes }