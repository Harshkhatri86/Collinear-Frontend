import {screen , render} from '@testing-library/react'; 
import Header from '../../components/Header/Header';
import { Provider } from 'react-redux';
import store from '../../store/store';

describe( "Should render Header comp", () =>{
    test( "should test the header by test-id", () =>{
        render(<Provider store={store}>
            <Header/>
        </Provider>)

        const HeaderId = screen.getByTestId("Header-Id")
        expect(HeaderId).toBeInTheDocument() ; 
    })
})