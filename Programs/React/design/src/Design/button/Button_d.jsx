import React from 'react';
import { Button, Flex } from 'antd';
const Button_d = () => (
  <Flex gap="small" wrap style={{margin: '30px'}}>
    <Button type="primary" trigger>Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <Button type="link">Link Button</Button>
  </Flex>
);
export default Button_d;