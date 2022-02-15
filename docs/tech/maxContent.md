---
title: max content
order: 3
---

## max-content 演示

```tsx
import React, { useState } from 'react';
import { Radio, Switch, Form } from 'antd';

const widthMap = ['10px', '50px', '80%', '100%', '150%', 'max-content', 'auto'];

export default () => {
  const [width, setWidth] = useState<string>(widthMap[3]); // 子元素的宽度
  const [ellipsis, setEllipsis] = useState<boolean>(false); // 子元素是否开启ellipsis

  const onChange = e => {
    setWidth(e.target.value);
  };

  const onCheck = checked => {
    setEllipsis(checked);
  };

  return (
    <Form layout="vertical">
      <Form.Item label="width">
        <Radio.Group onChange={onChange} value={width}>
          {widthMap.map(value => (
            <Radio value={value} key={value}>
              {value}
            </Radio>
          ))}
        </Radio.Group>
      </Form.Item>
      <Form.Item label="开启ellipsis">
        <Switch checked={ellipsis} onChange={onCheck} />
      </Form.Item>
      <div
        style={{
          maxWidth: '300px',
          height: '60px',
          backgroundColor: '#ed9494',
        }}
      >
        <div
          style={{
            width: width,
            backgroundColor: 'gray',
            ...(ellipsis
              ? {
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                  overflow: 'hidden',
                }
              : {}),
          }}
        >
          比较长长长长长长长长长长长长长长长长长长长长长长长长的一句话
        </div>
      </div>
    </Form>
  );
};
```
