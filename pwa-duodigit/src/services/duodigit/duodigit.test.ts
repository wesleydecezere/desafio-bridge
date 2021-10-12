import { runPost, PostResponse, checkSmallestDuodigitMultiple } from './duodigit';
import { RowType } from '../../types';

jest.setTimeout(10000);

describe('POST', () => {
  test('/duodigit resolves with ok property as true and data property as result of operation when passes 999 as data', () => {
    const data = { number: 999 };
    const route = '/duodigit';

    return runPost(route, data).then((res) => res as PostResponse<RowType>).then((res) => {
      expect(res.ok).toBeTruthy();
      expect(res.data.number).toBe(999);
      expect(res.data.duodigit).toBe(9990);
      expect(res.data.time).not.toBe(0);
    });
  });
  test('/duodigit resolves with ok property as false when passes 8910 as data', () => {
    const data = { number: 8910 };
    const route = '/duodigit';

    return expect(runPost(route, data).then((res) => res.ok)).resolves.toBeFalsy();
  });
  test('/some-invalid-route throws an error when try to post to an invalid route', () => {
    const data = {};
    const route = '/some-invalid-route';

    return expect(runPost(route, data)).rejects.toThrowError();
  });
});
describe('Check smallest duodigit multiple service', () => {
  test('rejects with an error when passes number 8910', () => {
    const number = 8910;

    return expect(checkSmallestDuodigitMultiple(number)).rejects.toThrowError();
  });
  test('resolves with a RowType object when passes number 999', () => {
    const number = 999;

    return expect(checkSmallestDuodigitMultiple(number).then((res) => (res as RowType).duodigit))
      .resolves.toEqual(9990);
  });
});
