import React from 'react';
import { render } from '@testing-library/react';
import Avatar from './avatar';
import { Name } from '@/types';

describe('Avatar', () => {
  it('renders correctly with name and no image', () => {
    const name: Name = {
      first: 'John',
      last: 'Doe',
    };
    const { container } = render(<Avatar name={name} />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild?.textContent).toBe('JD');
  });

  it('renders correctly with first name only without image', () => {
    const name: Name = {
      first: 'John',
    };
    const { container } = render(<Avatar name={name} />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild?.textContent).toBe('JO');
  });

  it('renders correctly with name and image', () => {
    const name: Name = {
      first: 'John',
      last: 'Doe',
    };
    const image = 'https://example.com/avatar.jpg';
    const { container } = render(<Avatar image={image} name={name} />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.querySelector('img')).toBeInTheDocument();
  });
});
