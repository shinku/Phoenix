eval("(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');");
var PH_Track = (function () {
    function PH_Track() {
    }
    PH_Track.ga = function (id) {
        var name = "GA_" + PH_Track.ganames.length;
        PH_Track.ganames.push(name);
        var sendname = name + '.send';
        ga('create', id, 'auto', { 'name': name });
        ga(sendname, 'pageview');
        return PH_Track;
    };
    ;
    PH_Track.flSrc = function (flsrc) {
        PH_Track.FL_SRC = flsrc;
        return PH_Track;
    };
    ;
    PH_Track.flType = function (fltype) {
        PH_Track.FL_TYPE = fltype;
        return PH_Track;
    };
    PH_Track.trackGaEvent = function (obj) {
        for (var i = 0; i < PH_Track.ganames.length; i++) {
            var name = PH_Track.ganames[i];
            var sendname = name + '.send';
            ga(sendname, 'event', obj.category, obj.action, obj.label);
        }
    };
    ;
    PH_Track.trackGaPV = function (obj) {
        for (var i = 0; i < PH_Track.ganames.length; i++) {
            var name = PH_Track.ganames[i];
            var sendname = name + '.send';
            ga(sendname, 'pageview', obj.label);
        }
    };
    ;
    PH_Track.trackFlPv = function (obj) {
        if (PH_Track.FL_SRC && PH_Track.FL_TYPE) {
            var img = new Image();
            img.src = 'http://' + PH_Track.FL_SRC + '.fls.doubleclick.net/activityi;src=' + PH_Track.FL_SRC + ';type=' + PH_Track.FL_TYPE + ';cat=' + obj.PV + ';ord=' + Math.random() * 10 + '?"';
        }
    };
    ;
    PH_Track.trackFlUv = function (obj) {
        if (PH_Track.FL_SRC && PH_Track.FL_TYPE) {
            var img = new Image();
            img.src = 'http://' + PH_Track.FL_SRC + '.fls.doubleclick.net/activityi;src=' + PH_Track.FL_SRC + ';type=' + PH_Track.FL_TYPE + ';cat=' + obj.UV + ';ord=1;num=' + Math.random() * 10 + '?"';
        }
    };
    ;
    PH_Track.trackFL = function (obj) {
        PH_Track.trackFlPv(obj);
        PH_Track.trackFlUv(obj);
    };
    ;
    PH_Track.ganames = [];
    PH_Track.FL_SRC = "";
    PH_Track.FL_TYPE = '';
    return PH_Track;
})();
;
var PH_swing = (function () {
    function PH_swing(idname) {
        if (!$) {
            throw ('该框架基于JQUERY 构建；请引入JQUERY 框架');
            return;
        }
        this.dom = $(idname);
    }
    ;
    PH_swing.prototype.ga = function (option) {
        if (!this.galip) {
            this.galip = new Array();
        }
        this.galip.push(option);
        return this;
    };
    ;
    PH_swing.prototype.gaPageView = function (option) {
        if (!this.gapvlip) {
            this.gapvlip = new Array();
        }
        this.gapvlip.push(option);
        return this;
    };
    ;
    PH_swing.prototype.gaPV = function (option) {
        this.gaPageView(option);
        return this;
    };
    ;
    PH_swing.prototype.fl = function (option) {
        if (!this.fllip) {
            this.fllip = new Array();
        }
        this.fllip.push(option);
        return this;
    };
    ;
    PH_swing.prototype.handleGaEvent = function () {
        if (!this.galip)
            return;
        for (var i = 0; i < this.galip.length; i++) {
            if (this.galip[i]['if']) {
                var conditionstring = this.galip[i]['if'];
                conditionstring = conditionstring.replace("=", "==");
                eval("if (" + conditionstring + "){PH_Track.trackGaEvent(" + JSON.stringify(this.galip[i]) + ")}");
            }
            else {
                PH_Track.trackGaEvent(this.galip[i]);
            }
        }
    };
    ;
    PH_swing.prototype.handleGaPV = function () {
        if (!this.gapvlip)
            return;
        for (var i = 0; i < this.gapvlip.length; i++) {
            if (this.gapvlip[i]['if']) {
                var conditionstring = this.gapvlip[i]['if'];
                conditionstring = conditionstring.replace("=", "==");
                eval("if (" + conditionstring + "){PH_Track.trackGaPV(" + JSON.stringify(this.gapvlip[i]) + ")}");
            }
            else {
                PH_Track.trackGaPV(this.gapvlip[i]);
            }
        }
    };
    ;
    PH_swing.prototype.handleFL = function () {
        if (!this.gapvlip)
            return;
        for (var i = 0; i < this.gapvlip.length; i++) {
            if (this.gapvlip[i]['if']) {
                var conditionstring = this.gapvlip[i]['if'];
                conditionstring = conditionstring.replace("=", "==");
                eval("if (" + conditionstring + "){PH_Track.trackFL(" + JSON.stringify(this.gapvlip[i]) + ")}");
            }
            else {
                PH_Track.trackFL(this.gapvlip[i]);
            }
        }
    };
    return PH_swing;
})();
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var PH_DOM = (function (_super) {
    __extends(PH_DOM, _super);
    function PH_DOM(idname) {
        var _this = this;
        _super.call(this, idname);
        this.dom.bind('click', function (e) { _this.handleclick(); });
    }
    ;
    PH_DOM.newDom = function (idname) {
        return new PH_DOM(idname);
    };
    ;
    PH_DOM.prototype.click = function (clickfunction) {
        this.clickfnction = clickfunction;
        return this;
    };
    ;
    PH_DOM.prototype.handleclick = function () {
        if (this.clickfnction) {
            this.clickfnction(this);
        }
        ;
        this.handleGaEvent();
        this.handleFL();
        return this;
    };
    return PH_DOM;
})(PH_swing);
var PH_Page = (function (_super) {
    __extends(PH_Page, _super);
    function PH_Page(idname) {
        _super.call(this, idname);
        this.isShowFromScript = false;
        this.pageVisibleState = 'hide';
    }
    ;
    PH_Page.newPage = function (idname) {
        var page = new PH_Page(idname);
        return page;
    };
    ;
    PH_Page.prototype.init = function (initfunction) {
        if (this.initfunction) {
            if (this.isShowFromScript == true) {
                this.isShowFromScript = false;
                return this;
            }
            this.initfunction(this);
            this.pageVisibleState = 'show';
            this.isShowFromScript = true;
            this.handleGaPV();
        }
        else {
            this.initfunction = initfunction;
        }
        this.intoTag();
        return this;
    };
    ;
    PH_Page.prototype.back = function (handleBackFunction) {
        if (this.handleBackFunction) {
            this.handleBackFunction(this);
            this.pageVisibleState = 'hide';
            this.isShowFromScript = false;
        }
        else {
            this.handleBackFunction = handleBackFunction;
        }
        return this;
    };
    PH_Page.prototype.tag = function (tagstr) {
        this.tagname = tagstr;
        PH_TagManager.reg(tagstr, this);
        return this;
    };
    ;
    PH_Page.prototype.handleTag = function () {
        if (this.initfunction) {
            this.initfunction(this);
            this.handleGaPV();
        }
        return this;
    };
    ;
    PH_Page.prototype.intoTag = function () {
        if (this.tagname) {
            window.location.href = "#" + this.tagname;
        }
    };
    return PH_Page;
})(PH_swing);
var PH_TagManager = (function () {
    function PH_TagManager() {
    }
    PH_TagManager.init = function () {
        window.onhashchange = function (e) {
            PH_TagManager.handleHash();
        };
        PH_TagManager.handleHash();
    };
    PH_TagManager.handleHash = function () {
        var _h = window.location.hash.replace(/#/, "");
        PH_TagManager.hashname = _h;
        for (var tag in PH_TagManager.tags) {
            if (tag == _h) {
                var page = PH_TagManager.tags[_h];
                page.handleTag();
            }
            else {
                page = PH_TagManager.tags[tag];
                page.back();
            }
        }
    };
    PH_TagManager.reg = function (tagname, callTarget) {
        PH_TagManager.tags[tagname] = callTarget;
    };
    PH_TagManager.tags = {};
    return PH_TagManager;
})();
$(document.body).ready(function () {
    if (window['PH_main']) {
        window['PH_main'].init();
    }
    ;
    PH_TagManager.init();
});
//# sourceMappingURL=phoenix.js.map