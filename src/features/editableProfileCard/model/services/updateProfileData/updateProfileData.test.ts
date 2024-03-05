import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAyncThunk';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { updateProfileData } from './updateProfileData';
import { validateProfileErrors } from '../../consts/consts';

const data = {
  username: 'admin',
  age: 24,
  country: Country.Russia,
  lastname: 'sam',
  first: 'kir',
  city: 'moscow',
  currency: Currency.RUB,
  id: '1',
};

describe('updateProfileData.test', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ data }));
    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });
  test('error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([
      validateProfileErrors.SERVER_ERROR,
    ]);
  });
  test('validate error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: { ...data, lastname: '' },
      },
    });
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([
      validateProfileErrors.INCORRECT_USER_DATA,
    ]);
  });
});
