import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from '../../components/Input/Input';

test('renders Input component with cancel icon when focused and value is present', () => {
  const onValueChangeMock = jest.fn();
  const { getByPlaceholderText, getByTestId } = render(
    <Input
      placeholder="Enter text"
      onValueChange={onValueChangeMock}
    />
  );

  const inputElement = getByPlaceholderText('Enter text');
  fireEvent.change(inputElement, { target: { value: 'Test value' } });
  fireEvent.focus(inputElement);

  const cancelIcon = getByTestId('cancel-icon');
  expect(cancelIcon).toBeInTheDocument();
});
