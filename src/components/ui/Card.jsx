export default function Card({ children, className = '', padding = true }) {
    return (
        <div
            className={`bg-white rounded-lg border border-gray-200 shadow-sm ${padding ? 'p-6' : ''
                } ${className}`}
        >
            {children}
        </div>
    );
}

// Subcomponents for better composition
Card.Header = function CardHeader({ children, className = '' }) {
    return (
        <div className={`mb-4 ${className}`}>
            {children}
        </div>
    );
};

Card.Title = function CardTitle({ children, className = '' }) {
    return (
        <h3 className={`text-lg font-semibold text-gray-900 ${className}`}>
            {children}
        </h3>
    );
};

Card.Description = function CardDescription({ children, className = '' }) {
    return (
        <p className={`text-sm text-gray-600 mt-1 ${className}`}>
            {children}
        </p>
    );
};

Card.Content = function CardContent({ children, className = '' }) {
    return (
        <div className={className}>
            {children}
        </div>
    );
};