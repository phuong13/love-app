import { Button, Card, Typography, Space, Row, Col } from 'antd';
import { HeartOutlined, RocketOutlined, StarOutlined } from '@ant-design/icons';

const { Title } = Typography;

const Home = () => {
  return (
    <div className="bg-slate-100 min-h-screen w-full p-8 md:p-12">
      <Space direction="vertical" size="large" className="w-full max-w-full">
        <div className="text-center pt-8">
          <Title level={1}>
            <HeartOutlined style={{ color: '#22c55e' }} /> Welcome to Love App
          </Title>
          <p className="text-lg text-slate-600">
            Built with React, TypeScript, Vite, Tailwind CSS, and Ant Design 5
          </p>
        </div>

        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={8}>
            <Card
              hoverable
              className="text-center"
              cover={
                <div className="p-10 text-5xl bg-blue-50">
                  <RocketOutlined className="text-blue-500" />
                </div>
              }
            >
              <Card.Meta
                title="Fast Development"
                description="Vite provides lightning-fast HMR and build times for optimal development experience."
              />
            </Card>
          </Col>

          <Col xs={24} sm={12} md={8}>
            <Card
              hoverable
              className="text-center"
              cover={
                <div className="p-10 text-5xl bg-yellow-50">
                  <StarOutlined className="text-yellow-500" />
                </div>
              }
            >
              <Card.Meta
                title="Beautiful UI"
                description="Ant Design 5 provides enterprise-class UI components with modern design."
              />
            </Card>
          </Col>

          <Col xs={24} sm={12} md={8}>
            <Card
              hoverable
              className="text-center"
              cover={
                <div className="p-10 text-5xl bg-green-50">
                  <HeartOutlined className="text-green-500" />
                </div>
              }
            >
              <Card.Meta
                title="Type Safe"
                description="TypeScript ensures type safety and better developer experience."
              />
            </Card>
          </Col>
        </Row>

        <div className="text-center mt-8">
          <Space>
            <Button type="primary" size="large" icon={<RocketOutlined />}>
              Get Started
            </Button>
            <Button size="large">Learn More</Button>
          </Space>
        </div>
      </Space>
    </div>
  );
};

export default Home;
