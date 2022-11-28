import React from 'react';
import { DatePicker, Space } from 'antd';
import 'antd/dist/antd.css';
import { Col, Divider, Row } from 'antd';
const style = {
    background: '#0092ff',
    padding: '8px 0',
  };

function Portfolio() {
    return (
        <>
            <div>Portfolio Page</div>

            <Row gutter={16}>
                <Col className="gutter-row" span={6}>
                    <div style={style}>
                    <Space direction="vertical">
                        <DatePicker />
                        <DatePicker picker="week" />
                        <DatePicker picker="month" />
                        <DatePicker picker="quarter" />
                        <DatePicker picker="year" />
                    </Space>
                    </div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>col-6</div>
                </Col>
            </Row>
            
        </>
        
    )
}

export default Portfolio;