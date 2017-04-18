/**
 * Created by shin on 2017/1/11.
 */
    ///<reference path='PH_swing.ts' />
class PH_DOM extends PH_swing{
    private clickfnction:Function;

    constructor(idname:string) {
        super(idname);
        this.dom.bind('click',(e)=>{this.handleclick()})
    };
    public static newDom(idname:string):PH_DOM
    {
        return new PH_DOM(idname);
    };
    public click(clickfunction:Function)
    {
        this.clickfnction=clickfunction;
        return this;
    };
    private handleclick()
    {

        if(this.clickfnction)
        {
            this.clickfnction(this);
        };
        this.handleGaEvent();
        this.handleFL();
        return this;
    }
}