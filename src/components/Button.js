import React from 'react';
import styled from 'styled-components';

export default ({ onClick, children }) => {
  return <Button onClick={onClick}>{children}</Button>;
};
