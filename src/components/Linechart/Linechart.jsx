import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartesianGrid,  Legend, Line, LineChart, Text, Tooltip, XAxis, YAxis } from 'recharts';
import callUserApi from '../../data/API/CallApi';


const Linechart = () => {
    const [user, setUser] = useState({})
    const params = useParams()
    const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
    useEffect(() => {
        const userData = async () => {
            const userInfor = await callUserApi(`http://localhost:3000/user/${params.id}/average-sessions`)
            setUser(userInfor)
        }
        userData()
    }, [params.id])
    const dataUser = user
   


    const TooltipText = payload => {
        if (typeof payload[0].unit !== 'undefined') {
            return (
                <p>
                    {payload[0].value} {payload[0].unit}
                </p>
            )
        }
        if (payload && payload.length) {
            return payload.map((prop, id) => {
                return prop.dataKey === 'calories' ? (
                    <li className='nutrient__tooltip' key={id}>{prop.value}kCal</li>
                ) : (
                    <li className='nutrient__tooltip' key={id}>{prop.value}Kg</li>
                )
            })
        }

        return ''
    }
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return <ul>{TooltipText(payload)}</ul>
        }
    }

    const renderLegend = () => {
        return (
            <p className='linechart__heading'>
                Durée moyenne des sessions
            </p>
        );
    }

    return (
        <React.Fragment>
            <LineChart width={388} style={{ background: 'red', borderRadius: '10px' }} height={363} data={dataUser.sessions}
                 >
                {/* <CartesianGrid strokeDasharray="3 3" fill="red" vertical={false} horizontal={false} /> */}
                <Line xAxisId="sessionLength" type="natural" isAnimationActive={false} dataKey="sessionLength" stroke="#fff" strokeWidth={2} dot={false} />
                <XAxis
                    dataKey={(day) => days[day.day - 1]}
                    axisLine={false}
                    fontSize={16}
                    fontWeight={400}
                    interval={0}
                    width={10}
                    xAxisId="sessionLength"
                    tick={{ width:10 ,fill: '#fff', opacity: '0.5' }}
                    tickLine={false}
                    dy={-45}
                 
                />
                
                <YAxis domain={['dataMin - 50', 'dataMax + 80']} hide={true} />
                <Legend content={renderLegend} verticalAlign="top" />

                <Tooltip
                    content={CustomTooltip}
                    itemStyle={{ color: 'white', fontSize: '15px', lineHeight: '40px' }}
                    contentStyle={{ backgroundColor: "#fffff", padding: '12px', textAlign: 'center', border: 'none' }}
                />
            </LineChart>
        </React.Fragment>
    );
};

export default Linechart;