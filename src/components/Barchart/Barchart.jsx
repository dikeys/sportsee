import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import callUserApi from '../../data/API/CallApi';





const Barchart = () => {
    const [user, setUser] = useState({})
    const params = useParams()
    useEffect(() => {
        const userData = async () => {
            const userInfor = await callUserApi(`http://localhost:3000/user/${params.id}/activity`)
            setUser(userInfor)
        }
        userData()
    }, [params.id])

    const data = user;

    return (
        <React.Fragment>
            <ResponsiveContainer width={'100%'} height={380}>
                <BarChart data={data.sessions} >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} height={420}/>
                    <XAxis dataKey={(payload)=> payload.day.substring(9, 10)} tickLine={false} tickMargin={15} tick={{ fontSize: '20px' }}  />
                    <YAxis
                        orientation="right"
                        axisLine={false}
                        allowDecimals={false}
                        dataKey="kilogram"
                        domain={['dataMin - 1', 'dataMax + 2']}
                        tickLine={false}
                       
                    />
                    <YAxis axisLine={false} yAxisId="calories" dataKey="calories" domain={['dataMin - 20', 'dataMax + 2']}  hide={true}/>
                    <Tooltip
                     cursor={{  fontSize:'2px' }}
                        itemStyle={{ color: 'white', fontSize: '15px', lineHeight: '40px' }}
                        contentStyle={{ backgroundColor: "#E60000", padding: '12px', textAlign: 'center', border: 'none'}}
                        formatter={(value, name) => [value, ""]}
                        separator=""
                        labelStyle={{display:"none"}}
                       
                    />
                    <Bar unit="kg" dataKey="kilogram" fill="#282D30" barSize={9} radius={[50, 50, 0, 0]} />
                    <Bar unit="kCal" yAxisId="calories"  dataKey="calories" fill="#E60000" barSize={9} radius={[50, 50, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </React.Fragment>
    );
};

export default Barchart;