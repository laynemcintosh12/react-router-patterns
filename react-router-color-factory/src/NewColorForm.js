import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function NewColorForm({addColor}) {
    const [formData, setFormData] = useState({
        colorName: "",
        colorValue: ""
    });
    const navigate = useNavigate();

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        addColor(formData.colorName);
        setFormData({
            colorName: "",
            colorValue: ""
        });
        navigate("/colors");
    };

    return (
        <div className="NewColorForm">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="colorName">Color Name: </label>
                    <input 
                        onChange={handleChange}
                        type="text"
                        name="colorName"
                        value={formData.colorName}
                        id="colorName"
                    />
                </div>
                <div>
                    <label htmlFor="colorValue">Color Value: </label>
                    <input 
                        onChange={handleChange}
                        type="color"
                        name="colorValue"
                        value={formData.colorValue}
                        id="colorValue"
                    />
                </div>
                <div>
                    <button id="newColorButton">Add Color!</button>
                </div>
            </form>
        </div>
    );
}


export default NewColorForm;