import {render,screen} from '@testing-library/react'
import ErrorMessage from '../components/ErrorMessage'

  test('it should display error message', () => {
    render(<ErrorMessage key={0} message={'error message'} />);
    expect(screen.getByText('error message')).toBeInTheDocument();
  });

  