// KPI Stats
export const stats = {
    revenue: {
        value: 45231.89,
        change: 20.1,
        trend: 'up'
    },
    orders: {
        value: 1234,
        change: 15.3,
        trend: 'up'
    },
    customers: {
        value: 8945,
        change: -5.2,
        trend: 'down'
    },
    conversionRate: {
        value: 3.24,
        change: 2.5,
        trend: 'up'
    }
};

// Revenue chart data (last 7 days)
export const revenueData = [
    { date: 'Mon', revenue: 4200, orders: 145 },
    { date: 'Tue', revenue: 3800, orders: 132 },
    { date: 'Wed', revenue: 5100, orders: 178 },
    { date: 'Thu', revenue: 4600, orders: 162 },
    { date: 'Fri', revenue: 6200, orders: 198 },
    { date: 'Sat', revenue: 7800, orders: 245 },
    { date: 'Sun', revenue: 5300, orders: 174 },
];

// Sales by category
export const salesByCategory = [
    { category: 'Electronics', sales: 12450, percentage: 35 },
    { category: 'Clothing', sales: 8920, percentage: 25 },
    { category: 'Home & Garden', sales: 7134, percentage: 20 },
    { category: 'Sports', sales: 5340, percentage: 15 },
    { category: 'Books', sales: 1780, percentage: 5 },
];

// Top products
export const topProducts = [
    {
        id: 1,
        name: 'Wireless Headphones Pro',
        category: 'Electronics',
        sales: 1243,
        revenue: 74580,
        stock: 145,
        trend: 'up'
    },
    {
        id: 2,
        name: 'Smart Watch Series 5',
        category: 'Electronics',
        sales: 987,
        revenue: 98700,
        stock: 67,
        trend: 'up'
    },
    {
        id: 3,
        name: 'Running Shoes Elite',
        category: 'Sports',
        sales: 856,
        revenue: 68480,
        stock: 234,
        trend: 'down'
    },
    {
        id: 4,
        name: 'Yoga Mat Premium',
        category: 'Sports',
        sales: 745,
        revenue: 22350,
        stock: 412,
        trend: 'up'
    },
    {
        id: 5,
        name: 'Coffee Maker Deluxe',
        category: 'Home & Garden',
        sales: 634,
        revenue: 50720,
        stock: 89,
        trend: 'up'
    },
];

// Recent orders
export const recentOrders = [
    {
        id: 'ORD-001',
        customer: 'John Smith',
        product: 'Wireless Headphones Pro',
        amount: 59.99,
        status: 'completed',
        date: '2 min ago'
    },
    {
        id: 'ORD-002',
        customer: 'Sarah Johnson',
        product: 'Smart Watch Series 5',
        amount: 299.99,
        status: 'processing',
        date: '5 min ago'
    },
    {
        id: 'ORD-003',
        customer: 'Mike Wilson',
        product: 'Running Shoes Elite',
        amount: 89.99,
        status: 'completed',
        date: '12 min ago'
    },
    {
        id: 'ORD-004',
        customer: 'Emily Brown',
        product: 'Yoga Mat Premium',
        amount: 29.99,
        status: 'pending',
        date: '18 min ago'
    },
    {
        id: 'ORD-005',
        customer: 'David Lee',
        product: 'Coffee Maker Deluxe',
        amount: 79.99,
        status: 'completed',
        date: '25 min ago'
    },
];