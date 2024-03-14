import { Div } from '@stylin.js/elements';
import React, { FC, useId } from 'react';
import useSWR from 'swr';

import useDeepbook from '../../hooks/use-deepbook';
import { OrderBookProps } from './order-book.types';

export const OrderBook: FC<OrderBookProps> = ({ columns }) => {
  const id = useId();
  const deepbook = useDeepbook();
  const uniqueColumns = new Set(columns);

  useSWR(`orderbook-${id}`, async () => {
    const data = await deepbook.getLevel2BookStatus(
      '0x4405b50d791fd3346754e8171aaab6bc2ed26c2c46efdd033c14b30ae507ac33',
      BigInt(0),
      BigInt(10 ** 2),
      'both'
    );

    console.log({ data });
    return data;
  });

  return (
    <Div>
      <Div>Order</Div>
      <Div
        display="grid"
        gridTemplateColumns={`repeat(${uniqueColumns.size}, 1fr)`}
      >
        <Div>Price</Div>
        <Div></Div>
      </Div>
    </Div>
  );
};

export * from './order-book.types';
