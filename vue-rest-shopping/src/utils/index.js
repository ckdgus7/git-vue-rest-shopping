const formatPrice = (price) => new Intl.NumberFormat().format(price);
const replaceAll = (str, searchStr, replaceStr) => str.split(searchStr).join(replaceStr);
const addCommas = (nStr) =>
{
	const oStr = nStr.toString();
	const x = oStr.split('.');
	const x2 = x.length > 1 ? '.' + x[1] : '';
	const rgx = /(\d+)(\d{3})/;
	let x1 = x[0];
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
}

const validateEmail = (email) => {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export {
	formatPrice,
	replaceAll,
	addCommas,
	validateEmail
}