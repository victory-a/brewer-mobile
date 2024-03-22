export function generateUUID() {
  const hexChars = '0123456789abcdef';
  let uuid = '';

  for (let i = 0; i < 36; i++) {
    if (i === 8 || i === 13 || i === 18 || i === 23) {
      uuid += '-';
    } else if (i === 14) {
      uuid += '4';
    } else if (i === 19) {
      uuid += hexChars[(Math.random() * 4) | (0 + 8)];
    } else {
      uuid += hexChars[(Math.random() * 16) | 0];
    }
  }

  return uuid;
}
