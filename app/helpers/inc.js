import { helper } from '@ember/component/helper';

export default helper(function inc(params/*, hash*/) {
  let increment = 1;
  if (params.length === 2) {
    increment = params[1];
  }
  return parseInt(params[0]) + increment;
});
