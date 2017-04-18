/**
 * Created by shin on 2017/1/10.
 */
    ///<reference path='PH_swing.ts' />
class PH_Page extends PH_swing{
    private initfunction:Function;
    private tagname:string;
    private isShowFromScript:Boolean=false;//用于在改变页面hash参数的时候，判断是不是需要执行当前PH_Page的初始化函数。
    private handleBackFunction:Function;
    private pageVisibleState:string='hide';//描述当前页面的显示状态，该状态名为"显示"状态，实际上与具体显示与否无绝对关联。是一种抽象的显示与隐藏
                                            //在页面做出退回操作时改变起状态。进入初始化操作时改变状态为show
    constructor(idname:string) {
        super(idname);
    };
    public static newPage(idname:string):PH_Page
    {
        var page:PH_Page=new PH_Page(idname);
        return page;
    };
    public init(initfunction:Function):PH_Page
    {
        //console.log(this,'123');
        if(this.initfunction)
        {
            if(this.isShowFromScript==true)
            {
                this.isShowFromScript=false;
                return this;
            }
            this.initfunction(this);
            this.pageVisibleState='show';
            this.isShowFromScript=true;
            this.handleGaPV();
        }
        else
        {
            this.initfunction=initfunction;
        }
        this.intoTag();
        return this;
    };
    public back(handleBackFunction:Function)
    {
        if(this.handleBackFunction)
        {
            this.handleBackFunction(this);
            this.pageVisibleState='hide';
            this.isShowFromScript=false;
        }
        else
        {
            this.handleBackFunction=handleBackFunction;
        }
        return this;
    }
    public tag(tagstr:string)
    {
        this.tagname=tagstr;
        PH_TagManager.reg(tagstr,this);
        return this;
    };
    public handleTag()
    {
        //this.initfunction(this);
        if(this.initfunction)
        {
            this.initfunction(this);
            this.handleGaPV();
        }
        return this;
    };
    public intoTag()
    {
        if(this.tagname)
        {
            window.location.href="#"+this.tagname;
        }

    }

}