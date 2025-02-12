import React from 'react';

const ForceCalculator = () => {
    return (
        <div>
            <h1>Force Calculator</h1>
            <form>
                <div>
                    <label htmlFor="mass">Mass (kg): </label>
                    <input type="number" id="mass" name="mass" />
                </div>
                <div>
                    <label htmlFor="acceleration">Acceleration (m/s²): </label>
                    <input type="number" id="acceleration" name="acceleration" />
                </div>
                <button type="button" >Calculate Force</button>
            </form>
            <div id="result"></div>
        </div>
    );
};

export default ForceCalculator;