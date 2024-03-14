export type Columns = 'price' | 'volume' | 'depth';

export interface OrderBookProps {
  columns: ReadonlyArray<Columns>;
}
