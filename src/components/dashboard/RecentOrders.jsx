import { Clock } from 'lucide-react';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { recentOrders } from '../../data/mockData';

const STATUS_CONFIG = {
    completed: { variant: 'success', label: 'Completed' },
    processing: { variant: 'info', label: 'Processing' },
    pending: { variant: 'warning', label: 'Pending' },
};

export default function RecentOrders() {
    return (
        <Card padding={false}>
            <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                    <div>
                        <Card.Title>Recent Orders</Card.Title>
                        <Card.Description>Latest transactions from your store</Card.Description>
                    </div>
                    <Button variant="outline" size="sm">
                        View All
                    </Button>
                </div>
            </div>

            <div className="divide-y divide-gray-200">
                {recentOrders.map((order) => (
                    <div key={order.id} className="p-6 hover:bg-gray-50 transition-colors">
                        <div className="flex items-start justify-between">
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <p className="text-sm font-semibold text-gray-900">
                                        {order.id}
                                    </p>
                                    <Badge variant={STATUS_CONFIG[order.status].variant}>
                                        {STATUS_CONFIG[order.status].label}
                                    </Badge>
                                </div>

                                <p className="text-sm text-gray-900 mb-1">
                                    {order.customer}
                                </p>

                                <p className="text-sm text-gray-600">
                                    {order.product}
                                </p>

                                <div className="flex items-center gap-1 mt-2 text-gray-500">
                                    <Clock size={14} />
                                    <span className="text-xs">{order.date}</span>
                                </div>
                            </div>

                            <div className="text-right">
                                <p className="text-lg font-bold text-gray-900">
                                    ${order.amount.toFixed(2)}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="p-4 bg-gray-50 border-t border-gray-200 text-center">
                <Button variant="ghost" size="sm">
                    Load More Orders
                </Button>
            </div>
        </Card>
    );
}