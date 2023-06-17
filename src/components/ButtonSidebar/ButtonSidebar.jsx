import React from 'react';

const ButtonSidebar = ({url, link}) => {
    return (
        <a href={link} className='button-sidebar' >
            <img src={url} alt="button link" />
        </a>
    );
};

export default ButtonSidebar;