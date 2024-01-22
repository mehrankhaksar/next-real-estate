const e2p = (number) =>
  number.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);

const p2e = (number) =>
  number.toString().replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d));

const sp = (number) => {
  const separatedNumber = number
    .toString()
    .match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g);

  const joinedNumber = separatedNumber.join(",");

  return e2p(joinedNumber);
};

const findName = (list, value) => {
  return list.find((item) => item.value === value).name;
};

export { e2p, p2e, sp, findName };
