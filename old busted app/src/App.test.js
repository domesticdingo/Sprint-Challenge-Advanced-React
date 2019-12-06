import mockAxios from 'jest-mock-axios';
import Players from '../src/components/Players';

afterEach(() => {
  mockAxios.reset();
});

it('should pull from axios')