/**
 * 拼接数组
 * @param arr 需要拼接的数组数据
 * @param {string} str 以传入 str 进行拼接，默认为 '-'
 * @returns {string} 拼接完成后的字符串
 */
const joinArr = <T>(arr: T[] = [], str: string = '-'): string => arr.join(str);

/**
 * 数组去重
 * @param arr 需要去重的数组数据
 * @returns 去重完成后的数组
 */
const clearSame = <T>(arr: T[] = []): T[] => [...new Set(arr)];

export { joinArr, clearSame };
