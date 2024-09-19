import { getByAltText, render } from '@testing-library/react';
import { Fact } from '../src/Fact';
import { animalFacts } from '../src/data';
import { expect } from 'vitest';

describe('Fact', () => {
  test('renders', () => {
    const { getByText, getByRole } = render(<Fact fact={animalFacts[0]} />);

    expect(getByText('Elephant')).toBeInTheDocument();
    expect(getByText('Baby Elephants suck their trunks for comfort.')).toBeInTheDocument();
    expect(getByAltText('Baby Elephant')).toBeInTheDocument();
    expect(getByRole('button', { name: 'faveBtn' })).toBeInTheDocument();
  });

  test('handles favorite button click', () => {
    const { getByRole } = render(<Fact fact={animalFacts[0]} />);
    const faveBtn = getByRole('button', { name: 'faveBtn' });

    fireEvent.click(faveBtn);
    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(handleClick).toHaveBeenCalledWith('Elephant');
  });
});
