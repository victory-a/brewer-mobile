/* eslint-disable indent */
export const formatCurrency = (
  amount: number,
  currency = 'USD',
  locales: Intl.LocalesArgument = 'en-us'
) => {
  const amountNotUndefined = Number(amount) || 0;
  return amountNotUndefined
    ? amountNotUndefined.toLocaleString(locales, {
        style: 'currency',
        currency,
        minimumFractionDigits: 2
      })
    : amountNotUndefined.toFixed(2);
};
