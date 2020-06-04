const extract1stL = (string) => {
  if (!string) {
    return '';
  }

  return string[0];
};

const initials = (string) => {
  const ab = string.split(' ');
  const firstInitial = extract1stL(ab[0]);
  const secondInitial = extract1stL(ab[1]);
  return `${firstInitial}${secondInitial}`;
};

export default initials;
