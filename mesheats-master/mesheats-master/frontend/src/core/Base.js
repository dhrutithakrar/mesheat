import React from "react";
import { Container } from "react-bootstrap";
import Menu from "./Menu";

const Base = ({
    title = "My Title",
    description = "My Description",
    className = "bg-dark text-white p-5",
    children
}) => {
    return (
        <div>
            <Menu />
            <div>
                <div className={className}>
                    {children}
                </div>
            </div>
                        
         </div>

    )
}

export default Base;