import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { format, startOfWeek, startOfMonth, startOfYear } from 'date-fns';

const RecentGamesFilter = () => {
    const navigate = useNavigate();
    const location = useLocation(); // To retain other query parameters

    const handleFilterChange = (event) => {
        const today = format(new Date(), 'yyyy-MM-dd');
        let startDate;
        const queryParams = new URLSearchParams(location.search);

        switch (event.target.value) {
            case 'week':
                startDate = format(startOfWeek(new Date(), { weekStartsOn: 1 }), 'yyyy-MM-dd');
                break;
            case 'month':
                startDate = format(startOfMonth(new Date()), 'yyyy-MM-dd');
                break;
            case 'year':
                startDate = format(startOfYear(new Date()), 'yyyy-MM-dd');
                break;
            default:
                return;  // Do nothing if an invalid option is selected
        }

        // Set or replace the 'dates' parameter without affecting others
        queryParams.set('dates', `${startDate},${today}`);

        // Update the URL with combined query parameters
        navigate(`/?${queryParams.toString()}`);
    };

    return (
        <select className="filter-button" onChange={handleFilterChange} defaultValue="">
            <option value="" disabled>Select release period</option>
            <option value="week">Games released this week</option>
            <option value="month">Games released this month</option>
            <option value="year">Games released this year</option>
        </select>
    );
};

export default RecentGamesFilter;
