import React, { useState } from 'react';
import { Modal, Form, Card, DatePicker, Button, Table } from 'antd';
import Hooks from '../hook';
import { Col } from '../typings';

const testData: Col[] = [
  {
    key: '4',
    value: '测试4',
  },
  {
    key: '5',
    value: '测试5',
  },
  {
    key: '6',
    value: '测试6',
  },
];

const Content: React.FC = () => {
  const { visible, submit, cancel, initialValue } = Hooks.useContainer();

  const [dataSource, setDataSource] = useState<Col[] | undefined>(
    initialValue?.defaultValue,
  );

  return (
    <Modal
      visible={visible}
      onOk={() => submit(testData)}
      onCancel={cancel}
      title="流水列表"
      width="800px"
    >
      <Card size="small">
        <Form
          layout="inline"
          onFinish={() => {
            setDataSource(testData);
          }}
        >
          <Form.Item name="date" label="日期">
            <DatePicker></DatePicker>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              查询
            </Button>
          </Form.Item>
        </Form>
      </Card>
      <Card size="small">
        <Table
          size="small"
          dataSource={dataSource}
          columns={[
            {
              title: 'key',
              dataIndex: 'key',
              key: 'key',
            },
            {
              title: 'value',
              dataIndex: 'value',
              key: 'value',
            },
          ]}
        ></Table>
      </Card>
    </Modal>
  );
};

export default Content;
