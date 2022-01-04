import { useState } from 'react';
import { createContainer } from 'unstated-next';
import useMergedState from 'rc-util/lib/hooks/useMergedState';
import { Props, Value } from './typings';

export default createContainer((initialValue?: Props) => {
  const [visible, setVisible] = useState<boolean>(false);

  const [value, setValue] = useMergedState<Value | undefined>(
    () => initialValue?.defaultValue,
    {
      value: initialValue?.value,
      onChange: initialValue?.onChange,
    },
  );

  const open = () => {
    setVisible(true);
  };

  const submit = (value?: Value) => {
    setValue(value);
    setVisible(false);
  };

  const cancel = () => {
    setVisible(false);
  };

  return {
    initialValue,
    visible,
    value,
    open,
    submit,
    cancel,
  };
});
