const Hashmap = require('./hashmap');

const hm = new Hashmap();

hm.put('Washington', 7.4);
hm.put('Hawaii', 1.4);
hm.put('Azriona', 1);

console.log(hm.buckets);

console.log('Washington: ', hm.get('Washington'));
console.log('Hawaii: ', hm.get('Hawaii'));
console.log('Azriona: ', hm.get('Azriona'));
console.log('Alaska: ', hm.get('Alaska'));
console.log('Computer: ', hm.get('Computer'));

hm.put('Alaska', 0.739);
hm.put('Computer', 12.8);

console.log(hm.buckets);
