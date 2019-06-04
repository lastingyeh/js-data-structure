const LinkedHashhmap = require('./linkedHashmap');

const lhm = new LinkedHashhmap();

lhm.put('Washington', 7.4);
lhm.put('Hawaii', 1.4);
lhm.put('Azriona', 1);

console.log(lhm.buckets);

lhm.put('Alaska', 0.739);
lhm.put('Computer', 12.8);

console.log(lhm.buckets);

console.log('Washington population: ', lhm.get('Washington'));
