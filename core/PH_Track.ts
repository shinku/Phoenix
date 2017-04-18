/**
 * Created by shin on 2017/1/6.
 */
//引入ga代码
eval("(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');");
class PH_Track {
    protected static ganames:Array<string>=[];
    protected static FL_SRC:string="";
    protected static FL_TYPE:string='';
    constructor() {
    }
    public static ga(id:string)
    {
        var name="GA_"+PH_Track.ganames.length;
        PH_Track.ganames.push(name);
        var sendname=name+'.send';
        ga('create', id, 'auto',{'name':name});
        ga(sendname,'pageview');
        return PH_Track;
    };
    public static flSrc(flsrc:string)
    {
        PH_Track.FL_SRC=flsrc;
        return   PH_Track;
    };
    public static flType(fltype:string)
    {
        PH_Track.FL_TYPE=fltype;
        return   PH_Track;
    }
    public static trackGaEvent(obj:any)
    {
        for(var i:number=0;i< PH_Track.ganames.length;i++)
        {
            var name=PH_Track.ganames[i];
            var sendname=name+'.send';
            ga(sendname,'event',obj.category,obj.action,obj.label);
        }
    };
    public static trackGaPV(obj:any)
    {
        for(var i:number=0;i< PH_Track.ganames.length;i++)
        {
            var name=PH_Track.ganames[i];
            var sendname=name+'.send';
            ga(sendname,'pageview',obj.label);
        }
    };
    public static trackFlPv(obj:any)
    {
        if(PH_Track.FL_SRC && PH_Track.FL_TYPE)
        {
            var img=new Image();
            img.src='http://'+PH_Track.FL_SRC+'.fls.doubleclick.net/activityi;src='+PH_Track.FL_SRC+';type='+PH_Track.FL_TYPE+';cat='+obj.PV+';ord=' + Math.random()*10 + '?"';
        }
    };
    public static trackFlUv(obj:any) {
        if (PH_Track.FL_SRC && PH_Track.FL_TYPE) {
            var img = new Image();
            img.src = 'http://' + PH_Track.FL_SRC + '.fls.doubleclick.net/activityi;src=' + PH_Track.FL_SRC + ';type=' + PH_Track.FL_TYPE + ';cat=' + obj.UV + ';ord=1;num=' + Math.random() * 10 + '?"';
        }
    };
    public static trackFL(obj:any)
    {
        PH_Track.trackFlPv(obj);
        PH_Track.trackFlUv(obj);
    };
};
/*
* function trackingFlootPV(cat)
 {
 var img=new Image();
 img.src='http://5317903.fls.doubleclick.net/activityi;src=5317903;type=powde0;cat='+cat+';ord=' + Math.random()*10 + '?"';
 }
 function trackingFlootUV(cat)
 {
 var img=new Image();
 img.src="http://5317903.fls.doubleclick.net/activityi;src=5317903;type=powde0;cat="+cat+";ord=1;num='"+Math.random()*10+"'?";
 }
* */
declare var ga:any;