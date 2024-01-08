export function stripNGCountryCode(mobile: string | undefined) {
  if (mobile && mobile.startsWith('+234')) {
    return mobile.replace('+234', '');
  }

  return mobile;
}

export function addNGCountryCode(mobile: string | undefined) {
  if (mobile && !mobile.startsWith('+234')) {
    return `+234${mobile}`;
  }
  return mobile;
}
