function formatDate(date) {
  console.log(
    date.replace(/^(\d{4})-(\d{2})-(\d{2})$/, '$3.$2.$1')
    );
}

formatDate('2016-06-17'); // -> '17.06.2016'
formatDate('2016/06/17'); // -> '2016/06/17' (no change)