/**
 * Created by shin on 2017/1/11.
 */
$(document.body).ready(function(){
    if(window['PH_main'])
    {
        window['PH_main'].init();
    };
    PH_TagManager.init();
});