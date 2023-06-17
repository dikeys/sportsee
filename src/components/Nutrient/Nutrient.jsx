import React from 'react';

const Nutrient = ({img,value, nutrient }) => {
    return (
        <div className='nutrient'>
        <img src={img} alt="" />
        <div>
            <h3>{value}</h3>
            <p className='nutrient__type'>{nutrient}</p>
        </div>
    </div>
    );
};

export default Nutrient;