/*
 Scope :
 - lexical scope

 Search
   -execution context
   -lexical environment  
 */
console.log('----- Scope 69 -------');

function parent() {
  let aaa = 100;

  function child() {
    console.log(aaa);

    function grand() {
      let bbb = 150;
      console.log(`from grand ${aaa}`);
      console.log(`from grand ${bbb}`);
    }
    grand();
  }
  child();
}
parent();
