import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { App } from './App';


test('App component Renders', () => {
    const { getByText } = render(<App />)
    expect(getByText('Nashville Programming Hour')).toBeVisible();
})

test('Input adds todo', () => {
    // setup
    const { getByText, getByPlaceholderText } = render(<App />);

    //first test
    fireEvent.change(getByPlaceholderText('Enter Todo'), {
        target: {
            value: 'New Todod',
        }
    });
    fireEvent.click(getByText('Add Todo'));

    expect(getByText('New Todod')).toBeVisible();

    // second test
    fireEvent.change(getByPlaceholderText('Enter Todo'), {
        target: {
            value: 'Next Todod',
        }
    });
    fireEvent.click(getByText('Add Todo'));

    expect(getByText('New Todod')).toBeVisible();
    expect(getByText('Next Todod')).toBeVisible();
})


// do all todos render

// test local storage
