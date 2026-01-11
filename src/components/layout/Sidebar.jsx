import { LayoutDashboard, ShoppingCart, Users, Package, Settings, TrendingUp } from 'lucide-react';

export default function Sidebar() {
    const menuItems = [
        { icon: LayoutDashboard, label: 'Dashboard', active: true },
        { icon: ShoppingCart, label: 'Orders', active: false },
        { icon: Package, label: 'Products', active: false },
        { icon: Users, label: 'Customers', active: false },
        { icon: TrendingUp, label: 'Analytics', active: false },
        { icon: Settings, label: 'Settings', active: false },
    ];

    return (
        <div className="w-64 bg-white border-r border-gray-200 min-h-screen fixed left-0 top-0">
            {/* Logo */}
            <div className="p-6 border-b border-gray-200">
                <h1 className="text-2xl font-bold text-gray-900">StoreMetrics</h1>
                <p className="text-sm text-gray-500 mt-1">Analytics Dashboard</p>
            </div>

            {/* Navigation */}
            <nav className="p-4">
                <ul className="space-y-1">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <li key={item.label}>
                                <button
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${item.active
                                            ? 'bg-blue-50 text-blue-600 font-medium'
                                            : 'text-gray-700 hover:bg-gray-50'
                                        }`}
                                >
                                    <Icon size={20} />
                                    <span>{item.label}</span>
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
}