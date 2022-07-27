import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Login from "../pages/auth/Login"
import NotFound from "../pages/404"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route path="/" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App