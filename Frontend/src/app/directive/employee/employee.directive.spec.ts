import { EmployeeDirective } from './employee.directive';

describe('EmployeeDirective', () => {
  it('should create an instance', () => {
    // @ts-ignore
    const directive = new EmployeeDirective();
    expect(directive).toBeTruthy();
  });
});
