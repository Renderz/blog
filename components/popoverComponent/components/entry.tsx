import React from 'react';
import { Button, Form, Input, Select } from 'antd';
import Hooks from '../hook';

const Entry: React.FC = () => {
  const { open, value } = Hooks.useContainer();

  return (
    <React.Fragment>
      <Input.Group compact>
        <Select
          placeholder="流水列表"
          style={{ width: 'calc(100% - 140px)' }}
          value={value?.map(col => col.key) || []}
          mode="multiple"
          maxTagCount={1}
        >
          {value?.map(col => (
            <Select.Option value={col.key} key={col.key}>
              {col.value}
            </Select.Option>
          ))}
        </Select>
        <Button type="primary" style={{ width: '140px' }} onClick={open}>
          勾选流水
        </Button>
      </Input.Group>
    </React.Fragment>
  );
};

export default Entry;
