import React from 'react';
import ButtonSidebar from '../ButtonSidebar/ButtonSidebar';
import cardio from '../../assets/img/button/icon-cardio.svg'
import swim from '../../assets/img/button/swiming.svg'
import bicycle from '../../assets/img/button/bicycle.svg'
import muscu from '../../assets/img/button/muscu.svg'
const Sidebar = () => {
    return (
        <section className='sidebar'>
            <nav className='sidebar__nav'>
                <ul>
                    <li><ButtonSidebar url={cardio}  link="/"/></li>
                    <li><ButtonSidebar url={swim}  link="/"/></li>
                    <li><ButtonSidebar url={bicycle}  link="/"/></li>
                    <li><ButtonSidebar url={muscu}  link="/"/></li>
                </ul>
            </nav>
            <p className='sidebar__copyright'>Copyright, SportSee 2022</p>
        </section>
    );
};

export default Sidebar;