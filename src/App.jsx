import Layout from './components/layout/Layout';
import Card from './components/ui/Card';
import Button from './components/ui/Button';
import Badge from './components/ui/Badge';

export default function App() {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back! Here's what's happening with your store today.</p>
        </div>

        {/* Test UI Components */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <Card.Header>
              <Card.Title>Component Test</Card.Title>
              <Card.Description>Testing our reusable UI components</Card.Description>
            </Card.Header>
            <Card.Content>
              <div className="space-y-3">
                <div className="flex gap-2">
                  <Button variant="primary" size="sm">Primary</Button>
                  <Button variant="secondary" size="sm">Secondary</Button>
                  <Button variant="outline" size="sm">Outline</Button>
                </div>
                <div className="flex gap-2">
                  <Badge variant="success">Success</Badge>
                  <Badge variant="warning">Warning</Badge>
                  <Badge variant="error">Error</Badge>
                  <Badge variant="info">Info</Badge>
                </div>
              </div>
            </Card.Content>
          </Card>

          <Card>
            <Card.Header>
              <Card.Title>Ready for Real Data</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-gray-600">Next step: Stats and charts</p>
            </Card.Content>
          </Card>
        </div>
      </div>
    </Layout>
  );
}