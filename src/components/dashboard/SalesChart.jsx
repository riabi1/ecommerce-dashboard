import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import Card from '../ui/Card';
import { salesByCategory } from '../../data/mockData';

// ✅ Static data - defined outside component
const COLORS = ['#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981'];

export default function SalesChart() {
    // Custom tooltip
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-white px-4 py-3 rounded-lg shadow-lg border border-gray-200">
                    <p className="text-sm font-medium text-gray-900">
                        {payload[0].payload.category}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                        Sales: <span className="font-semibold">
                            ${payload[0].value.toLocaleString()}
                        </span>
                    </p>
                    <p className="text-sm text-gray-600">
                        Share: <span className="font-semibold">
                            {payload[0].payload.percentage}%
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
                <Card.Title>Sales by Category</Card.Title>
                <Card.Description>Revenue distribution across product categories</Card.Description>
            </Card.Header>

            <Card.Content>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={salesByCategory} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                        <XAxis
                            dataKey="category"
                            stroke="#9ca3af"
                            style={{ fontSize: '12px' }}
                            angle={-45}
                            textAnchor="end"
                            height={80}
                        />
                        <YAxis
                            stroke="#9ca3af"
                            style={{ fontSize: '12px' }}
                            tickFormatter={(value) => `$${value / 1000}k`}
                        />
                        <Tooltip content={<CustomTooltip />} />
                        <Bar dataKey="sales" radius={[8, 8, 0, 0]}>
                            {salesByCategory.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>

                {/* Legend */}
                <div className="mt-6 grid grid-cols-2 gap-3">
                    {salesByCategory.map((item, index) => (
                        <div key={item.category} className="flex items-center gap-2">
                            <div
                                className="w-3 h-3 rounded-full"
                                style={{ backgroundColor: COLORS[index % COLORS.length] }}
                            />
                            <span className="text-sm text-gray-600">{item.category}</span>
                            <span className="text-sm font-medium text-gray-900 ml-auto">
                                {item.percentage}%
                            </span>
                        </div>
                    ))}
                </div>
            </Card.Content>
        </Card>
    );
}