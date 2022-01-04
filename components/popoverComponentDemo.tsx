import React from 'react';
import { Form, Input, Button, Space } from 'antd';
import PopoverComponent from './popoverComponent';
import { Value as popoverComponentValue } from './popoverComponent/typings';

export default () => {
  return (
    <Form<{
      input: string;
      popoverComponent: popoverComponentValue;
    }>
      name="test"
      onFinish={async value => {
        console.log(value);
      }}
      initialValues={{
        input: '测试数据',
        popoverComponent: [
          {
            key: '1',
            value: '测试1',
          },
          {
            key: '2',
            value: '测试2',
          },
          {
            key: '3',
            value: '测试3',
          },
        ],
      }}
    >
      <Form.Item name="input" label="输入框">
        <Input allowClear></Input>
      </Form.Item>
      <Form.Item name="popoverComponent" label="弹窗组件">
        <PopoverComponent></PopoverComponent>
      </Form.Item>
      <Form.Item>
        <Space direction="horizontal">
          <Button type="primary" htmlType="submit">
            提交
          </Button>
          <Button htmlType="reset">还原</Button>
        </Space>
      </Form.Item>
    </Form>
  );
};
