import { Meta, StoryObj } from '@storybook/react';

import { OrderBook } from '..';

const meta: Meta<typeof OrderBook> = {
  title: 'Orderbook',
  component: OrderBook,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof OrderBook>;

export const OrderBookStory: Story = {
  args: {
    columns: ['price', 'volume', 'depth'],
  },
};
