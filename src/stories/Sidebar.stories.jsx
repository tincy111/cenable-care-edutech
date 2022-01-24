import React from 'react';

import Sidebar from '../layout/MainLayout/Sidebar';

export default {
  title: 'Example/Sidebar',
  component: Sidebar,
};

const Template = (args) => <Sidebar {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
