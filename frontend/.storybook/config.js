import {configure, addDecorator} from '@storybook/react';

import { chkDecorator } from "./chkDecorator";

// automatically import all files ending in *.stories.tsx
configure(require.context('../stories', true, /\.stories\.tsx$/), module);

addDecorator(chkDecorator);
