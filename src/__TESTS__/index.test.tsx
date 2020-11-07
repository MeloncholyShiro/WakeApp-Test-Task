import React from 'react';
import { render } from 'react-dom';
import { Application } from '../Application';

jest.mock('react-dom', () => ({ render: jest.fn() }));

it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<Application />, div);
    global.document.getElementById = id => (id === 'root' ? div : null);
    expect(render).toHaveBeenCalledWith(<Application />, div);
});
