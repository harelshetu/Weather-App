import {render,screen} from '@testing-library/react'
import Weather from '../components/Weather'

test('it should display all Weather props', () => {
    render(<Weather city={"city"} weatherData={{ temp:9.25,
        description: 'cloudy',
        iconSrc: 'https://openweathermap.org/img/w/04d.png'}} />)
    expect(screen.getByText('City')).toBeTruthy();
    expect(screen.getByText('cloudy')).toBeTruthy();
    expect(screen.getByText('9°C')).toBeTruthy();
    expect(screen.getAllByAltText('weather pic')).toBeTruthy();
  });