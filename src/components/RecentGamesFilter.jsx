import { useNavigate } from 'react-router-dom';
import { format, startOfWeek, startOfMonth, startOfYear } from 'date-fns';

const RecentGamesFilter = () => {
    const navigate = useNavigate();

    const handleFilterChange = (event) => {
        const filterOption = event.target.value;
        if (filterOption === 'all') {
            navigate('/');  // Reset to default view
        } else {
            let startDate;
            const today = format(new Date(), 'yyyy-MM-dd'); // Ensure the current date is formatted correctly
            switch (filterOption) {
                case 'week':
                    startDate = format(startOfWeek(new Date(), { weekStartsOn: 1 }), 'yyyy-MM-dd'); // Consider localization for start of week
                    break;
                case 'month':
                    startDate = format(startOfMonth(new Date()), 'yyyy-MM-dd');
                    break;
                case 'year':
                    startDate = format(startOfYear(new Date()), 'yyyy-MM-dd');
                    break;
                default:
                    return; // Do nothing if somehow an invalid filter is selected
            }

            // Update the URL with the selected date range
            navigate(`/?dates=${startDate},${today}`);
        }
    };

    return (
        <select className="filter-button" onChange={handleFilterChange} defaultValue="">
            <option value="" disabled>Filter by release period</option>
            <option value="all">All</option>
            <option value="week">Games released this week</option>
            <option value="month">Games released this month</option>
            <option value="year">Games released this year</option>
        </select>
    );
};

export default RecentGamesFilter;
