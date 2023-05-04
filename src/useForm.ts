import React from 'react';

export type FormDataType = { [key: string]: string };
export type FormSubmitType = (data: FormDataType) => void;

function useForm<T>(
  onSubmit: (data: T) => void,
  initialState: T = {} as T
): {
  formData: T;
  handleChangeFor: (key: string) => (text: string) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
} {
  const [formData, setFormData] = React.useState<T>(initialState);

  const handleChangeFor = (key: string) => (text: string) => {
    setFormData({ ...formData, [key]: text.toString() });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit?.(formData);
    setFormData(initialState);
  };

  return { formData, handleChangeFor, handleSubmit };
}

export default useForm;
