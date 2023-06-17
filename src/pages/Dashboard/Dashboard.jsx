import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import data from '../../data/data';
import Barchart from '../../components/Barchart/Barchart';
import callUserApi from '../../data/API/CallApi';
import { useParams } from 'react-router-dom';
import Linechart from '../../components/Linechart/Linechart';
import Nutrient from '../../components/Nutrient/Nutrient';
import calorieImg from "../../assets/img/nutrient/calories.svg";


const Dashboard = () => {
    const [user, setUser] = useState()
    const params = useParams()
    useEffect(() => {
        const userData = async () => {
            const userInfor = await callUserApi(`http://localhost:3000/user/${params.id}`)
            setUser(userInfor)
        }
        userData()
    }, [params.id])

// console.log(user)
    return (

        <section>
            <Header />
            <section className='dashboard__wrapper'>
                <Sidebar />
                <main className='dashboard__content'>
                    <h1 className='dashboard__name'>Bonjour <span className='dashboard__name--color'>{user && user.userInfos.firstName}</span></h1>
                    <p className='dashboard__objectif'>Félicitation ! Vous avez explosé vos objectifs hier 👏 </p>
                    <section className='dashboard__graph-content'>
                        <section>
                            <section className="dashboard__graph-heading">
                                <p className='dashboard__heading-activity'>Activité quotidient</p>
                                <p className='dashboard__caloriesburned'><span className='dashboard__weight-dot'></span>poids (kg)</p>
                                <p className='dashboard__caloriesburned
                                '><span className='dashboard__calories-dot'></span>Calories brûlées (kCal)</p>
                            </section>
                            <section className='dashboard__activity'>
                                <Barchart data={data} />
                            </section>
                            <section >
                                <Linechart />
                            </section>
                        </section>
                        <section >
                            
                            <section>
                            <Nutrient img={calorieImg} value="2.500kCal" nutrient="Calorie"/>
                            </section>
                        </section>
                    </section>
                </main>

            </section>
        </section>
    );
};

export default Dashboard;