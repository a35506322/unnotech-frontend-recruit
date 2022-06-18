/**
 * 比較兩物件差異屬性
 * @param {*} oldObj 舊物件
 * @param {*} newObj 新物件
 * @returns 差異物件
 */
export function compareObjectDifferentialProperties(oldObj, newObj) {
  // eslint-disable-next-line prefer-const
  let result = {};
  Object.keys(oldObj).forEach((key) => {
    if (Object.prototype.hasOwnProperty.call(newObj, key)) {
      if (oldObj[key] !== newObj[key]) {
        result[key] = newObj[key];
      }
    }
  });
  return result;
}
