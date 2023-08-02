function convertMstoString(ms) {
  const msPerSecond = 1000;
  const msPerMinute = msPerSecond * 60;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const result = [];
  const days = Math.floor(ms / msPerDay);
  ms %= msPerDay;
  const hours = Math.floor(ms / msPerHour);
  ms %= msPerHour;
  const minutes = Math.floor(ms / msPerMinute);
  ms %= msPerMinute;
  const seconds = Math.floor(ms / msPerSecond);
  ms %= msPerSecond;

  if (days > 0) {
    result.push(`${days} ngày`);
  }
  if (hours > 0) {
    result.push(`${hours} giờ`);
  }
  if (minutes > 0) {
    result.push(`${minutes} phút`);
  }
  if (seconds > 0) {
    result.push(`${seconds} giây`);
  }
  if (ms > 0) {
    result.push(`${ms} miliseconds`);
  }
  return result.join(",");
}
console.log(convertMstoString(34325055574));
console.log(convertMstoString(1001));
