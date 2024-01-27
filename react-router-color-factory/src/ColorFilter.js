import React from 'react';
import { useParams } from 'react-router-dom';
import Color from "./Colors";


function ColorFilter({ colors }) {
    const {color} = useParams();

    if (color) {
        const currentColor = colors.find(
            c => c === color
        );
        return <Color color={currentColor} />
    }

    return null;
}


export default ColorFilter;