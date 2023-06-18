import React, { useEffect, useState } from 'react';
import { Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart } from 'recharts';
import callUserApi from '../../data/API/CallApi';
import { useParams } from 'react-router-dom';

const Radarchart = () => {
    const params = useParams()
    const [userData, setUserData] = useState({})
    useEffect(() => {
        const data = async () => {
            const data = await callUserApi(`http://localhost:3000/user/${params.id}/performance`)
            setUserData(data)
        }
        data()
    }, [params.id])

    const pefomanceArray = ['Intensité', 'Vitesse', 'Force', 'Endurance', 'Energie', 'Cardio']
    console.log(userData)
    return (
        <div>
            <RadarChart outerRadius={90} width={330} height={250} style={{ background: '#282d30', borderRadius: '10px' }} data={userData.data}>
                <PolarGrid radialLines={false} />
                <PolarAngleAxis
                    axisLine={false}
                    dataKey={(kind)=> pefomanceArray[kind.kind - 1 ]}
                    tickLine={false}
                    tick={{
                        dy: 4,
                        fill: '#fff',
                        fontSize: 12,
                    }}
                />
                <Radar dataKey="value" fill="red" fillOpacity={0.6} />
          
            </RadarChart>
        </div>
    );
};

export default Radarchart;