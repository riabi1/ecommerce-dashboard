import Layout from './components/layout/Layout';
import StatCard from './components/dashboard/StatCard';
import RevenueChart from './components/dashboard/RevenueChart';
import SalesChart from './components/dashboard/SalesChart';
import TopProducts from './components/dashboard/TopProducts';
import RecentOrders from './components/dashboard/RecentOrders';
import { DollarSign, ShoppingCart, Users, TrendingUp } from 'lucide-react';
import { stats } from './data/mockData';

export default function App() {
  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back! Here's what's happening with your store today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Revenue"
            value={stats.revenue.value}
            change={stats.revenue.change}
            trend={stats.revenue.trend}
            icon={DollarSign}
            format="currency"
          />

          <StatCard
            title="Total Orders"
            value={stats.orders.value}
            change={stats.orders.change}
            trend={stats.orders.trend}
            icon={ShoppingCart}
            format="number"
          />

          <StatCard
            title="Total Customers"
            value={stats.customers.value}
            change={stats.customers.change}
            trend={stats.customers.trend}
            icon={Users}
            format="number"
          />

          <StatCard
            title="Conversion Rate"
            value={stats.conversionRate.value}
            change={stats.conversionRate.change}
            trend={stats.conversionRate.trend}
            icon={TrendingUp}
            format="percentage"
          />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RevenueChart />
          <SalesChart />
        </div>

        {/* Tables */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TopProducts />
          <RecentOrders />
        </div>
      </div>
    </Layout>
  );
}