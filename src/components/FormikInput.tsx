import React, { ChangeEvent } from 'react';

interface FormikInputProps {
  handleChange: {
    (e: ChangeEvent<any>): void;
    <T = string | ChangeEvent<any>>(field: T): T extends ChangeEvent<any>
      ? void
      : (e: string | ChangeEvent<any>) => void;
  };
  handleBlur: {
    (e: React.FocusEvent<any, Element>): void;
    <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
  };
  error: string | undefined;
  value: string;
  placeholder?: string;
}

export const FormikInput = ({
  handleChange,
  handleBlur,
  error,
  value,
  placeholder,
}: FormikInputProps) => {
  return (
    <>
      <input
        className="form-control m-2"
        name="email"
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
        placeholder={placeholder}
      />
      {error ? <div className="invalid-feedback d-block m-2">{error}</div> : ''}
    </>
  );
};
