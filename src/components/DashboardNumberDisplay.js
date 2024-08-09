import React, { useState, useEffect } from 'react';
import { getDashboardNumber } from '../api';

const DashboardNumberDisplay = () => {
  const [dashboardNumber, setDashboardNumber] = useState('');

  useEffect(() => {
    const fetchDashboardNumber = async () => {
      try {
        const response = await getDashboardNumber();
        setDashboardNumber(response.data.dashboardNumber);
      } catch (error) {
        console.error('Error fetching dashboard number:', error);
      }
    };

    fetchDashboardNumber();
  }, []);

  return (
    <h1 className="text-3xl font-bold mb-6 mx-8">{dashboardNumber}</h1>
  );
};

export default DashboardNumberDisplay;
