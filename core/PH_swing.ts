/**
 * Created by shin on 2017/1/6.
 */
    ///<reference path='../declare/jquery.d.ts' />
    ///<reference path='PH_Track.ts'/>
class PH_swing {

    protected galip:Array<any>;
    //ga  数据字典

    protected gapvlip:Array<any>;
    //ga pv 数据字典
    protected fllip:Array<any>;
    //flootlight 数据字典

    protected flUVLip:Array<any>;

    protected dom:JQuery;

    constructor(idname) {
        if(!$) {throw('该框架基于JQUERY 构建；请引入JQUERY 框架');return;}
        this.dom=$(idname);
        // this.init();
    };
    public ga(option:any){
        if(!this.galip)
        {
            this.galip=new Array<any>();
        }
        this.galip.push(option);
        return this;
    };
    public gaPageView(option:any)
    {
        if(!this.gapvlip)
        {
            this.gapvlip=new Array<any>();
        }
        this.gapvlip.push(option);
        return this;
    };
    public gaPV(option:any)
    {
        this.gaPageView(option);
        return this;
    };
    public fl(option:any)
    {
        if(!this.fllip)
        {
            this.fllip=new Array<any>();
        }
        this.fllip.push(option);
        return this;
    };
    protected handleGaEvent(){

        if(!this.galip) return;
        for(var i:number=0;i<this.galip.length;i++)
        {
            if(this.galip[i]['if'])
            {
                var conditionstring=this.galip[i]['if'];
                conditionstring=conditionstring.replace("=","==");
                eval("if ("+conditionstring+"){PH_Track.trackGaEvent("+JSON.stringify(this.galip[i])+")}");
            }
            else
            {
                PH_Track.trackGaEvent(this.galip[i]);
            }
        }
    };
    protected handleGaPV()
    {
        if(!this.gapvlip) return;
        for(var i:number=0;i<this.gapvlip.length;i++)
        {
            if(this.gapvlip[i]['if'])
            {
                var conditionstring=this.gapvlip[i]['if'];
                conditionstring=conditionstring.replace("=","==");
                eval("if ("+conditionstring+"){PH_Track.trackGaPV("+JSON.stringify(this.gapvlip[i])+")}");
            }
            else
            {
                PH_Track.trackGaPV(this.gapvlip[i]);
            }
        }
    };
    protected handleFL()
    {
        if(!this.gapvlip) return;
        for(var i:number=0;i<this.gapvlip.length;i++)
        {
            if(this.gapvlip[i]['if'])
            {
                var conditionstring=this.gapvlip[i]['if'];
                conditionstring=conditionstring.replace("=","==");
                eval("if ("+conditionstring+"){PH_Track.trackFL("+JSON.stringify(this.gapvlip[i])+")}");
            }
            else
            {
                PH_Track.trackFL(this.gapvlip[i]);
            }
        }
    }
}