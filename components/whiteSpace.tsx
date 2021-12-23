import React, { useState } from 'react';
import { Card, Table, TableColumnType, TableProps, Switch } from 'antd';
import { Property } from 'csstype/index';

type Col = {};

const TableWithWhiteSpaceType: React.FC<{
  whiteSpaceType: Property.WhiteSpace;
} & TableProps<Col>> = props => {
  const { whiteSpaceType, ...rest } = props;

  const [maxContent, setMaxContent] = useState<boolean>(false);

  const columns: TableColumnType<Col>[] = [
    {
      title: whiteSpaceType,
      dataIndex: 'longWord',
      key: 'longWord',
      render: text => (
        <span style={{ whiteSpace: whiteSpaceType }}>{text}</span>
      ),
    },
  ];

  return (
    <Card
      title={whiteSpaceType}
      extra={
        <Switch
          checked={maxContent}
          onChange={checked => setMaxContent(checked)}
          checkedChildren="开启max-content"
          unCheckedChildren="关闭max-content"
        ></Switch>
      }
    >
      <Table
        columns={columns}
        pagination={false}
        {...rest}
        scroll={maxContent ? { x: 'max-content' } : undefined}
      />
    </Card>
  );
};

export default () => {
  const dataSource = [
    {
      longWord:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem quod, porro nostrum illum aperiam odio, nam quibusdam iure hic ut eum eveniet velit explicabo eius. Cumque blanditiis nesciunt corrupti enim.       Lorem ipsum dolor sit\n\n Lorem ipsum dolor sit       ',
    },
  ];

  return (
    <React.Fragment>
      <TableWithWhiteSpaceType
        whiteSpaceType="normal"
        dataSource={dataSource}
      ></TableWithWhiteSpaceType>
      <br />
      <TableWithWhiteSpaceType
        whiteSpaceType="nowrap"
        dataSource={dataSource}
      ></TableWithWhiteSpaceType>
      <br />
      <TableWithWhiteSpaceType
        whiteSpaceType="pre"
        dataSource={dataSource}
      ></TableWithWhiteSpaceType>
      <br />
      <TableWithWhiteSpaceType
        whiteSpaceType="pre-wrap"
        dataSource={dataSource}
      ></TableWithWhiteSpaceType>
      <br />
      <TableWithWhiteSpaceType
        whiteSpaceType="pre-line"
        dataSource={dataSource}
      ></TableWithWhiteSpaceType>
      <br />
      <TableWithWhiteSpaceType
        whiteSpaceType="break-spaces"
        dataSource={dataSource}
      ></TableWithWhiteSpaceType>
    </React.Fragment>
  );
};
