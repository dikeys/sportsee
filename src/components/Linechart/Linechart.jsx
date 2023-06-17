import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartesianGrid, Label, Legend, Line, LineChart, Text, Tooltip, XAxis, YAxis } from 'recharts';
import callUserApi from '../../data/API/CallApi';


const Linechart = () => {
    const [user, setUser] = useState({})
    const params = useParams()
    const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
    const [selectedSessionLength, setSelectedSessionLength] = useState(null);
    useEffect(() => {
        const userData = async () => {
            const userInfor = await callUserApi(`http://localhost:3000/user/${params.id}/average-sessions`)
            setUser(userInfor)
        }
        userData()
    }, [params.id])
    const dataUser = user
    // console.log(dataUser.sessions)


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
            <LineChart width={388} height={363} data={dataUser.sessions}
                margin={{ top: 5, right: 20, left: 20, bottom: 5 }} dot={{ r: 4, strokeWidth: 2, stroke: '#8884d8', fill: '#fff' }}>

                <Text>frresfgggerg</Text>
                <CartesianGrid strokeDasharray="3 3" fill="red" vertical={false} horizontal={false} />
                <Line xAxisId="sessionLength" type="natural" isAnimationActive={false} dataKey="sessionLength" stroke="#fff" strokeWidth={2} dot={false} />
                <XAxis
                    dataKey={(day) => days[day.day - 1]}
                    axisLine={false}
                    fontSize={13}
                    fontWeight={100}
                    width={150}
                    xAxisId="sessionLength"
                    interval={0}
                    tick={{ fill: '#000', opacity: '0.5' }}
                    tickLine={false}
                className='test'
                />
                <YAxis domain={['dataMin - 50', 'dataMax + 80']}  hide={true}/>
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