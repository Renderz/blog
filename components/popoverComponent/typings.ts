export type Col = {
  key: string;
  value: string;
};

export type Value = Col[];

export type Props = {
  value?: Value;
  defaultValue?: Value;
  onChange?: (value?: Value) => void;
};
