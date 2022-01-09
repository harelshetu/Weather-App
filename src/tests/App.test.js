import { render, screen, fireEvent} from '@testing-library/react'
import App from '../components/App'


describe('input validation tests', ()=>{

    test('it should display error component when input contain numbers and remove weather component', async () => {

        render(<App />)
        const city = await screen.findByText('Barcelona');
        expect(city).toBeInTheDocument();
        const input = screen.getByTestId('input');
        fireEvent.change(input, { target: { value: 'barcelona123' } })
        fireEvent.submit(input);
        const error = await screen.findByText('only letters are allowed');
        expect(error).toBeInTheDocument();
        expect(city).not.toBeInTheDocument();
    });
    
    test('it should display error component when input too long and remove weather component', async () => {
        render(<App />)
        const city = await screen.findByText('Barcelona');
        expect(city).toBeInTheDocument();
        const input = screen.getByTestId('input');
        fireEvent.change(input, { target: { value: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaa' } })
        fireEvent.submit(input);
        const error = await screen.findByText('input is too long');
        expect(error).toBeInTheDocument();
        expect(city).not.toBeInTheDocument();
    });
    
    test('it should display 2 error component when input too long and contain numbers and remove weather component', async () => {
        render(<App />)
        const city = await screen.findByText('Barcelona');
        expect(city).toBeInTheDocument();
        const input = screen.getByTestId('input');
        fireEvent.change(input, { target: { value: 'aaaaaaaaaaaaaaaaaaaaaaaaaa123aaa' } })
        fireEvent.submit(input);
        const error = await screen.findByText('input is too long');
        const error2 = await screen.findByText('only letters are allowed');
        expect(error).toBeInTheDocument();
        expect(error2).toBeInTheDocument();
        expect(city).not.toBeInTheDocument();
    });
    
    test('it should display error component when input is empty and remove weather component', async () => {
        render(<App />)
        const city = await screen.findByText('Barcelona');
        expect(city).toBeInTheDocument();
        const input = screen.getByTestId('input');
        fireEvent.submit(input);
        const error = await screen.findByText('city is required');
        expect(error).toBeInTheDocument();
        expect(city).not.toBeInTheDocument();
    });
    
    test('it should display error component when city not exist', async () => {
    
        render(<App />)
        const city = await screen.findByText('Barcelona');
        expect(city).toBeInTheDocument();
        const input = screen.getByTestId('input');
        fireEvent.change(input, { target: { value: 'asd' } })
        fireEvent.submit(input);
        const error = await screen.findByText('This city isn\'t exist, please enter valid city');
        expect(error).toBeInTheDocument();
    });
});





