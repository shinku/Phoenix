/**
 * Created by shin on 2017/2/22.
 */
class PH_TagManager {
    public static tags:any={};
    public static hashname:string;
    constructor() {

    }
    public static init()
    {
        //window.addEventListener('hash')
        window.onhashchange=(e)=>{
            PH_TagManager.handleHash();
        };
        PH_TagManager.handleHash();
    }
    static handleHash()
    {
        var _h=window.location.hash.replace(/#/,"");
        PH_TagManager.hashname=_h;
        for(var tag in PH_TagManager.tags)
        {
            if(tag==_h)
            {
                var page:PH_Page=PH_TagManager.tags[_h];
                page.handleTag();
            }
            else
            {
                page=PH_TagManager.tags[tag];
                page.back();
            }
        }

    }
    public static reg(tagname:string,callTarget:PH_Page)
    {
        PH_TagManager.tags[tagname]=callTarget;
    }
}