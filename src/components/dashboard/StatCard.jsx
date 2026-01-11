import { TrendingUp, TrendingDown } from 'lucide-react';
import Card from '../ui/Card';

export default function StatCard({ title, value, change, trend, icon: Icon, format = 'number' }) {
    const isPositive = trend === 'up';

    const formatValue = (val) => {
        if (format === 'currency') {
            return new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 2,
            }).format(val);
        }
        if (format === 'percentage') {
            return `${val}%`;
        }
        return val.toLocaleString();
    };

    return (
        <Card>
            <div className="flex items-start justify-between">
                <div className="flex-1">
                    <p className="text-sm font-medium text-gray-600">{title}</p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">
                        {formatValue(value)}
                    </p>

                    <div className="flex items-center gap-1 mt-3">
                        {isPositive ? (
                            <TrendingUp size={16} className="text-green-600" />
                        ) : (
                            <TrendingDown size={16} className="text-red-600" />
                        )}
                        <span className={`text-sm font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                            {change > 0 ? '+' : ''}{change}%
                        </span>
                        <span className="text-sm text-gray-500 ml-1">vs last week</span>
                    </div>
                </div>

                {Icon && (
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                        <Icon size={24} className="text-blue-600" />
                    </div>
                )}
            </div>
        </Card>
    );
}