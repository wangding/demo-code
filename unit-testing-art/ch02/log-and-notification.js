/**
 * 检查文件名后缀，判断是否为合法的日志文件
 *
 * @param fileName 文件名字符串
 * @returns {bool} 文件名是否合法，true 合法，false 非法
 */
function isValidLogFile(fileName) {
  if(fileName === null || fileName === '') throw new Error('file name empty!');

  return /.*\.slf$/.test(fileName);
}

module.exports = isValidLogFile;
