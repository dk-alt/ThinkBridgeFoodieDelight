import { render } from '@testing-library/react';

import App from './App';
import { MemoryRouter } from 'react-router-dom';

describe('App',()=>{
    it('App snapshot',()=>{
        const {container} = render(<MemoryRouter><App /></MemoryRouter>)
        expect(container).toMatchSnapshot();
    })

    it('renders navbar and center area',()=>{
        const {queryByTestId} = render(<MemoryRouter><App /></MemoryRouter>)
        expect(queryByTestId('navbar')).toBeInTheDocument();
        expect(queryByTestId('center-area')).toBeInTheDocument();
    })
})