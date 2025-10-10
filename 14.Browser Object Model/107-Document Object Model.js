console.log("%c===> [BOM] #107 <===", "color:red");
/*
===> BOM [Browser Object Model]
--- Open(URL [Opt], window name or target Attr [Opt], win features [Opt], History replace)
--- close()
- Window Fearures 
--- width [Num]
--- height [Num]
--- left [Num]
--- top [Num]

==> Search :
- window.open window features
*/

setTimeout(function () {
    window.open("", "", "width=400,height=400,left=200,top=100");
}, 1000);