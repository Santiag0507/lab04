import { StrictMode } from "react";
import { Outlet } from "react-router-dom";


const Basic1 = () => {
    return (
        <>
            <StrictMode>
                <div className="basic-container">
                <div className="row">
                        <Outlet />
                    </div>
                </div>
            </StrictMode>
        </>
    );
}

export default Basic1;