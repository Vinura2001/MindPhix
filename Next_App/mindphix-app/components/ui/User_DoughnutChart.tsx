import { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { database } from '@/app/firebase/config';
import { ref, onValue, off, DataSnapshot } from 'firebase/database';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

export default function User_DoughnutChat() {
    const [userData, setUserData] = useState({ active: 0, new: 0, inactive: 0 });

    useEffect(() => {
        const usersRef = ref(database, `users`);

        const handleData = (snapshot: DataSnapshot) => {
          let active = 0;
          let newUsers = 0;
          let inactive = 0;
            
            snapshot.forEach((childSnapshot: DataSnapshot) => {
                const status = childSnapshot.val().Status;
                console.log(status);
                if (status === 'Active') {
                    active++;
                } else if (status === 'New') {
                    newUsers++;
                } else if (status === 'Inactive') {
                    inactive++;
                }
            });
            setUserData({ active, new: newUsers, inactive });
        };

        const unsubscribe = onValue(usersRef, handleData);

        return () => {
            off(usersRef, 'value', handleData);
        };
    }, []);

    const data = {
        labels: ['Active', 'New', 'Inactive'],
        datasets: [{
            label: 'Poll',
            data: [userData.active, userData.new, userData.inactive],
            backgroundColor: ['#B09FFF', '#FFD572', '#EFEFEF'],
            borderColor: ['#B09FFF', '#FFD572', '#EFEFEF'],
        }]
    };

    const options = {
        aspectRatio: 2.5
    };

    return (
        <div className="UserChart" style={{ width: '100%', height: '130%' }}>
            <Doughnut
                data={data}
                options={options}
            />
        </div>
    );
}
