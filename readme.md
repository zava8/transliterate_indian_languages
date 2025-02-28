# transliterate_indian_languages repository is for npmjs kvz-transliteration package.

kvz-transliteration is a package to transliterate indian,nepal,bangladesh,srilankan languages.
1. assami
1. bengαli/banglα
2. oriyα/odiα
3. тelugu
4. тamil
5. malayαlam
6. kannadα
7. marαthi
8. guzrαтi
9. ɦinԃi
10. punzαbi/gurmukhi
11. sanskriт
12. sinɦalα

this module(kvz-transliteration) is used in the webextension:
1. [firefox addon ztr](https://addons.mozilla.org/en-US/firefox/addon/ztr/).

### source code execution flo

1. kvz-transliteration package.json -> main is called/run : ("main": "kwztr.js" , kwztr.js)
2. in kwztr.js class kwztr is defined and exported. class kwztr members αre :
   1. transliterate(input_str,ztr_direction_const=u_to_i)
   2. transliterate_dom_node(node_arg, ztr_direction_const=u_to_i)
   3. untransliterate_dom_node()

ztr_direction_const values can be :
1. u_to_i for unicode indian/sinhalα scripts to ińglish31 : 26a-z + 5ADHTN/αԃɦтń

ascii510 : american standard code for information interchange
decimal digits : 0 1 2 3 4 5 6 7 8 9
5+5=10

hscii810 : heksadesiml standard kode for informesn interchenz
heksadesiml dizits : 0 1 2 3 4 5 6 7 8 9 Y J Q W P F
8+8=10=vnti=4*4

### steps to clone , build , test & publish

1. git clone ... # this repozitri
2. change source(do not change version in package.json, npm version command in next step vill change version no) if needed
3. git commit & publish

  > git pull ; git add . ; git commit -am "some comments" ; git push

4. npm version patch
5. npm publish

### steps to use library

1. define **[ascii or hscii or code mapping][code_map_sheet]** as in example zabc.js in this repository.
1. it is to define a dictionary with keys as :

```js
1. import library as in your js file:

```js
import kwztr from 'kvz-transliteration';
const unicode_str = 'हिन्दी ज्ञ संस्कृत दुर्लभ श्रृंगार ज्ञानवापी विकिपीडिया' ;
let t = new kwztr();
let ing31str = t.transliterate(unicode_str,"u_to_i");

[this repository](https://github.com/zava8/transliterate_indian_languages.git) has a test folder.
to test this package run from test directory :
1. node script.js

[code_map_sheet]: https://docs.google.com/spreadsheets/d/e/2PACX-1vRYY_On0oQlYqCH8KrAuNy9nxnUKRx9dG6UvjoZjbP1ZVeXX6VcHl-sU2yg9jbAFszCcNZ5STK47_rz/pubhtml
