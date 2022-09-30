import React from 'react';
import {render, screen } from '@testing-library/react';
import App from 'App';

describe("FIRST_RENDER", () => {
  test('renders lazy', async () => {
    render(<App />);
    const lazyElement = await screen.findByText(/React Hook/i);
    expect(lazyElement).toBeInTheDocument()
  });

  test('default lang context', async () => {
    render(<App />)
    const defaultLang = await screen.findByText(/^Language :/);
    expect(defaultLang).toHaveTextContent('Language : id')
  })
})