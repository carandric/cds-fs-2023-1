import { Usergateway } from '../gateway/usergateway';
import { Userusecase } from './userusecase';

describe('Userusecase', () => {
  let userusecase: Userusecase;
  let _usergateway: Usergateway;
  it('should create an instance', () => {
    // expect(new Userusecase()).toBeTruthy();
    userusecase = new Userusecase(_usergateway);
    expect(userusecase).toBeTruthy();
  });
});
