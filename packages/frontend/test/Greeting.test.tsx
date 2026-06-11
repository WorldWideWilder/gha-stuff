import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Greeting from '../src/Greeting';

test('loads and displays greeting', async () => {
  // ARRANGE
  render(<Greeting title="Hello there!" />);

  // ACT
  await screen.findAllByRole('heading');
  const headings = await screen.getAllByRole('heading')

  // ASSERT
  expect(headings[0]).toHaveTextContent('Hello there!');
});

test('loads and displays sub-greeting', async () => {
  // ARRANGE
  render(<Greeting title="Hello there!" subtitle="It does work, amazing!" />);

  // ACT
  await screen.findAllByRole('heading');
  const headings = await screen.getAllByRole('heading')

  // ASSERT
  expect(headings[0]).toHaveTextContent('Hello there!');
  expect(headings[1]).toHaveTextContent('It does work, amazing!');
});