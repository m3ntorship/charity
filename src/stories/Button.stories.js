import React from 'react';
import Button from '../components/ButtonComponent';

export default {
  title: 'Button Component',
  component: Button
};

export const grayBtn = () => {
  return (
    <div className="max-w-sm">
      <Button
        bgColor="gray"
        btnText="Donate Now"
        btnTextColor="gray"
        btnSize="medium"
      />
    </div>
  );
};
export const yellowBtn = () => {
  return (
    <div className="max-w-sm">
      <Button
        bgColor="yellow"
        btnText="Donate Now"
        btnTextColor="dark"
        btnSize="large"
        fontSize="base"
      />
    </div>
  );
};
