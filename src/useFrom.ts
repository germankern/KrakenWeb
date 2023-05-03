import React from 'react';

export type FormDataType = { [key: string]: string };
export type FormSubmitType = (data: FormDataType) => void;

function useForm<T>(
  onSubmit: (data: T) => void,
  initialState: T = {} as T
): {
  formData: T;
  handleChangeFor: (key: string) => (text: string) => void;
  handleSubmit: () => void;
} {
  const [formData, setFormData] = React.useState<T>(initialState);

  const handleChangeFor = (key: string) => (text: string) => {
    setFormData({ ...formData, [key]: text });
  };

  const handleSubmit = () => {
    onSubmit?.(formData);
  };

  return { formData, handleChangeFor, handleSubmit };
}

export default useForm;
