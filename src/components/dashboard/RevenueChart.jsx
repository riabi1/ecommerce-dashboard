import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Card from '../ui/Card';
import { revenueData } from '../../data/mockData';

export default function RevenueChart() {
    // Custom tooltip
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-white px-4 py-3 rounded-lg shadow-lg border border-gray-200">
                    <p className="text-sm font-medium text-gray-900">
                        {payload[0].payload.date}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                        Revenue: <span className="font-semibold text-blue-600">
                            ${payload[0].value.toLocaleString()}
                        </span>
                    </p>
                    <p className="text-sm text-gray-600">
                        Orders: <span className="font-semibold">
                            {payload[0].payload.orders}
                        </span>
                    </p>
                </div>
            );
        }
        return null;
    };

    return (
        <Card>
            <Card.Header>
                <div className="flex items-center justify-between">
                    <div>
                        <Card.Title>Revenue Overview</Card.Title>
                        <Card.Description>Daily revenue for the last 7 days</Card.Description>
                    </div>
                    <div className="text-right">
                        <p className="text-2xl font-bold text-gray-900">
                            ${revenueData.reduce((sum, day) => sum + day.revenue, 0).toLocaleString()}
                        </p>
                        <p className="text-sm text-gray-500">Total this week</p>
                    </div>
                </div>
            </Card.Header>

            <Card.Content>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={revenueData} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                        <XAxis
                            dataKey="date"
                            stroke="#9ca3af"
                            style={{ fontSize: '12px' }}
                        />
                        <YAxis
                            stroke="#9ca3af"
                            style={{ fontSize: '12px' }}
                            tickFormatter={(value) => `$${value / 1000}k`}
                        />
                        <Tooltip content={<CustomTooltip />} />
                        <Line
                            type="monotone"
                            dataKey="revenue"
                            stroke="#3b82f6"
                            strokeWidth={2}
                            dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                            activeDot={{ r: 6 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </Card.Content>
        </Card>
    );
}