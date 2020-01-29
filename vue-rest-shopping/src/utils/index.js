export const formatPrice = (price) => new Intl.NumberFormat().format(price);

export const replaceAll = (str, searchStr, replaceStr) => str.split(searchStr).join(replaceStr);