import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdaptor from 'enzyme-adapter-react-16';
import App from './App';
import { isExpressionWrapper } from '@babel/types';

Enzyme.configure({ adapter: new EnzymeAdaptor() });

test('renders without error', () => {
    
});