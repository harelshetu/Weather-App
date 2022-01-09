import {render,screen,fireEvent} from '@testing-library/react'
import Search from '../components/Search'

  test('it should display search button', () => {
    render(<Search />)
    expect(screen.getByText('Search')).toBeInTheDocument()
  });

  test('it should display input value', () => {
    render(< Search />);
    const input = screen.getByTestId('input');
    expect(input.value).toBe('') 
    fireEvent.change(input, {target: {value: 'test'}})
    expect(input.value).toBe('test') 
  });

  

  