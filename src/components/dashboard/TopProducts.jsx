import { TrendingUp, TrendingDown, Package } from 'lucide-react';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import { topProducts } from '../../data/mockData';

export default function TopProducts() {
    return (
        <Card padding={false}>
            <div className="p-6 border-b border-gray-200">
                <Card.Title>Top Products</Card.Title>
                <Card.Description>Best selling products this month</Card.Description>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Product
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Category
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Sales
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Revenue
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Stock
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Trend
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {topProducts.map((product) => (
                            <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                                            <Package size={20} className="text-gray-600" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-gray-900">
                                                {product.name}
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <Badge variant="default">{product.category}</Badge>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <p className="text-sm font-medium text-gray-900">
                                        {product.sales.toLocaleString()}
                                    </p>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <p className="text-sm font-medium text-gray-900">
                                        ${product.revenue.toLocaleString()}
                                    </p>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <p className={`text-sm font-medium ${product.stock < 100 ? 'text-red-600' : 'text-gray-900'
                                        }`}>
                                        {product.stock}
                                    </p>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {product.trend === 'up' ? (
                                        <div className="flex items-center gap-1 text-green-600">
                                            <TrendingUp size={16} />
                                            <span className="text-sm font-medium">Up</span>
                                        </div>
                                    ) : (
                                        <div className="flex items-center gap-1 text-red-600">
                                            <TrendingDown size={16} />
                                            <span className="text-sm font-medium">Down</span>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Card>
    );
}