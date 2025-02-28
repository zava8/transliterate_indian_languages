const kwztr = require('kvz-transliteration')

const unicode_str = 'हिन्दी ज्ञ संस्कृत दुर्लभ श्रृंगार ज्ञानवापी विकिपीडिया' ;
let t = new kwztr();
let ing31str = t.transliterate(unicode_str,"u_to_i");
console.log(ing31str)

// HinDi vikipidiyA
