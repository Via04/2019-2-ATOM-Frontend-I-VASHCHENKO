/*
 * В этом задании надо разработать функцию
 * `convertBytesToHuman`. Эта функция  должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */

export default function convertBytesToHuman(bytes) {
  var prefix = ["B", "KB", "MB", "GB", "TB", "PB"];
  var out;
  if(bytes === parseInt(bytes, 10)) {
    if((bytes >= 0) && (bytes % 1 === 0)) {
      if(bytes < 1024) {
        return bytes.toString() + ' ' + prefix[0]
      }
      var i = 1;
      while (Math.ceil(bytes / 2**(i*10)) > 1023) {
        i++;
        if(i > 5) {
          alert("Too large. I dont't believe you");
          return -1;
        }
      }
      out = (bytes / 2**(i*10));
      if(out % 1 <= 0.01) {
        out = Math.trunc(out);
        return out.toString() + " " + prefix[i];
      }
      else {
        out = out.toFixed(2);
        return out.toString() + " " + prefix[i];
      }
    }
    else {
      return -1;
    }
  }
  else {
    return -1;
  }
}
