import React from 'react';
import Footer from './Footer';

// Import icons as React components if needed
// import { ReactComponent as AppleStoreIcon } from './Assets/Apple Store.svg';
// import { ReactComponent as GoogleStoreIcon } from './Assets/Google Store.svg';
// import { ReactComponent as DribbbleIcon } from './Assets/Dribbble.svg';
// import { ReactComponent as InstagramIcon } from './Assets/Instagram.svg';
// import { ReactComponent as LinkedInIcon } from './Assets/LinkedIn.svg';
// import { ReactComponent as GitHubIcon } from './Assets/GitHub.svg';
// import { ReactComponent as YouTubeIcon } from './Assets/YouTube.svg';
// import { ReactComponent as XIcon } from './Assets/X.svg';
// import { ReactComponent as PaulMbinguIcon } from './Assets/Paul Mbingu Logo.svg';
// import { ReactComponent as ExciteIcon } from './Assets/Excite Logo.svg';

export default {
  title: 'Components/Footer',
  component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Define default args if needed
};
