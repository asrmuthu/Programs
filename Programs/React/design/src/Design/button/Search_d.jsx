import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Flex, Tooltip } from 'antd';
const Search_d = () => (
  <Flex gap="small" style={{margin: '30px'}}>
    {/* Tooltip -> above the search icon it will show search text */}
      <Tooltip title="search">
        <Button type="primary" shape="circle" icon={<SearchOutlined />} />
      </Tooltip>
      <Button type="primary" icon={<SearchOutlined />}>Search</Button>
      <Button icon={<SearchOutlined />} href="https://www.google.com" target="_blank" />
  </Flex>
);
export default Search_d;