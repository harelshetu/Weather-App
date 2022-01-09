
import get from './api';


const buildFetchErros = (message) => {
    return [{
        id: 0,
        message: message
    }];
}

const fetchData = async url => {

    try {
        const data = await get(url);
        const temp = data['main'].temp;
        const iconSrc = `https://openweathermap.org/img/w/${data['weather'][0].icon}.png`;
        const description = data['weather'][0].description;
        return {
            data: {
                temp,
                description,
                iconSrc
            },
            fetchErrors: []
        };
    } catch (error) {
        if (error.response.status < 500) {
            return ({
                data: {},
                fetchErrors: buildFetchErros('This city isn\'t exist, please enter valid city')
            });
        } else {
            return ({
                data: {},
                fetchErrors: buildFetchErros('there is internal error')
            });
        }
    }
};

export default fetchData;