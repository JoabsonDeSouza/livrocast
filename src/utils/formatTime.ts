export function calculateTotalValue(length: number) {
  const minutes = Math.floor(length / 60);
  const seconds_int = length - minutes * 60;
  const seconds_str = seconds_int.toString();
  const seconds = seconds_str.substr(0, 2);
  const time = minutes + ':' + seconds;
  const result =
    (minutes < 10 ? '0' + minutes : minutes) +
    ':' +
    (Number(seconds) < 10 ? '0' + seconds : seconds);

  return result;
}

export function calculateCurrentValue(currentTime: number) {
  var current_hour = parseInt(currentTime / 3600) % 24,
    current_minute = parseInt(currentTime / 60) % 60,
    current_seconds_long = currentTime % 60,
    current_seconds = current_seconds_long.toFixed(),
    current_time =
      (current_minute < 10 ? '0' + current_minute : current_minute) +
      ':' +
      (Number(current_seconds) < 10 ? '0' + current_seconds : current_seconds);

  return current_time;
}
