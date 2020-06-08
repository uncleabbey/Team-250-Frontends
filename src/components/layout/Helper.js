const extract1stL = (string) => {
  if (!string) {
    return '';
  }

  return string[0] + string[1];
};

export const initials = (string) => {
  const ab = string.split(' ');
  const firstInitial = extract1stL(ab[0]);
  const secondInitial = extract1stL(ab[1]);
  return `${firstInitial}${secondInitial}`;
};

export const total = (arr) => {
  if (arr.length === 0) {
    return 0;
  }
  const sum = arr.reduce(
    (acc, { produceId, quantity }) => acc + produceId.price * quantity, 0
  );
  return sum;
};

export const orderedItems = (arr) => {
  const itemOrdered = [];
  arr.map((item) => itemOrdered.push({
    produceId: item.produceId.id,
    quantity: item.quantity
  }));
  return itemOrdered;
};
