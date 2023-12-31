import { Meta, StoryObj } from '@storybook/react';

import Kaakao from '../../../../assets/logos/kaakao.webp';
import { VisuallyHidden } from '../VisuallyHidden';

const meta: Meta<typeof VisuallyHidden> = {
  title: 'Kaakao/Visually Hidden',
  component: VisuallyHidden,
  argTypes: {
    as: {
      control: {
        type: 'select',
        options: ['span', 'div'],
      },
      defaultValue: 'span',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `A Visually Hidden component is used to hide content from view while maintaining
accessibility for screen readers and assistive technologies. This ensures
inclusivity without impacting the visual design.`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof VisuallyHidden>;

export const Default: Story = {
  render: () => {
    return (
      <div style={{ display: 'grid', placeContent: 'center' }}>
        <a href="/">
          <img
            alt="Kaakao mug logo"
            src={Kaakao}
            style={{ verticalAlign: 'middle' }}
            width="150"
          />
          <VisuallyHidden>Go to home</VisuallyHidden>
        </a>
      </div>
    );
  },
};
