import React from 'react';
import Button from '../Button';
import { render, fireEvent, cleanup } from '@testing-library/react';

afterEach(cleanup);

// defaultProps are the values that the button contains (i.e. click event and text)
const defaultProps = { 
  // onClick with a mock function value
  onClick: jest.fn(),
  // text that matches the button string
  text: "Submit" ,
};

test('button renders with correct text', () => {
  // identify button renders current text
  const { queryByText, rerender } = render(<Button {...defaultProps} />);
  expect(queryByText("Submit")).toBeTruthy(); 
  // upon rerender, change button text prop
  rerender(<Button {...defaultProps} text="Go" />);
  // verify change text is as expected
  expect(queryByText("Go")).toBeTruthy(); 
});

test('calls correct function on click', () => {
  // set onClick to mock function value from default props
  const onClick = defaultProps.onClick;
  // render the button component and all of its properties
  const { getByText } = render(<Button {...defaultProps} />)
  // simulate a click event on button text as provided in the defaultProps
  fireEvent.click(getByText(defaultProps.text));
  // assert that the onClick event occurred
  expect(onClick).toHaveBeenCalled();
});