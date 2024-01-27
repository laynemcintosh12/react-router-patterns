import React from "react";
import { Link, Navigate } from "react-router-dom";


function Colors({color}) {
    if (!color) return <Navigate to="/colors" />

    return (
        <main style={{backgroundColor: color}}>
            <h2>This is {color}</h2>
            <h3>Isn't it perfect?</h3>
            <div>
                <h3>
                    <Link to="/colors">Go Back</Link>
                </h3>
            </div>
        </main>
    );
}


export default Colors;