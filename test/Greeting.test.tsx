import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Greeting from '../src/Greeting';

test('loads and displays greeting', async () => {
  // ARRANGE
  render(<Greeting title="Hello there!" />);

  // ACT
  await screen.findByRole('heading');

  // ASSERT
  expect(screen.getByRole('heading')).toHaveTextContent('Hello there!');
});
