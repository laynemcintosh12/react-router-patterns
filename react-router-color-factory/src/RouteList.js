import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import NewColorForm from "./NewColorForm";
import ColorFilter from "./ColorFilter";


function RouteList() {
    const [colors, setColors] = useState(["red", "green", "blue"]);

    const addColor = color => {
        setColors(colors => [...colors, color]);
    };

    return (
        <Routes>
            <Route path="/colors" element={<Home colors={colors} />} />

            <Route path="/colors/new" element={<NewColorForm addColor={addColor} />} />

            <Route path="/colors/:color" element={<ColorFilter colors={colors} />} />

            <Route path="/*" element={<Navigate to="/colors" />} />
        </Routes>
    );
}


export default RouteList;