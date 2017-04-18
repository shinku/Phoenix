# Phoenix
frame

uese it like this;




    var PH_main={};
    var a=2;
    var page1,page2,page3,page4;
    PH_main.init=function(){

         PH_Track.ga("UA-6655544").ga('UA-123345').flSrc('5317903').flType('eyehs0');//注册GA and flootlight

         page1=PH_Page.newPage('.page1').init(start).gaPV('page1').tag('page1').back(back);

         page2=PH_Page.newPage('.page2').init(start).gaPV('page2').fl({UV:'123',PV:'456'}).tag('page2').back(back);

         page3=PH_Page.newPage('.page3').init(start).gaPV('page3').fl({UV:'456',PV:'666'}).tag('page3').back(back);

         page4=PH_Page.newPage('.page4').init(start).gaPV('page4').fl({UV:'111',PV:'333'}).tag('page4').back(back);

         var btn1=PH_DOM.newDom('.click1').click(clickFun).ga({if:'a=2',label:'click1',category:'mbl',action:'a'}).
                                                            ga({if:'a=3',label:'click3',category:'mbl',action:'a'});
        btn1.fl({UV:'345',PV:'678'});
            btn1.ga({if:'a=4',label:'click3',category:'mbl',action:'a'});
        var btn2=PH_DOM.newDom('.click2').click(clickFun).ga({label:'clickk2',category:'mbl2',action:'b'});
        btn2.fl({UV:'888',PV:'999'});

    };
    function start(target)
    {
        target.dom.fadeIn();
    };
    function back(target)
    {
        target.dom.fadeOut();
    }
    function clickFun(target)
    {
        console.log(target);
    };
