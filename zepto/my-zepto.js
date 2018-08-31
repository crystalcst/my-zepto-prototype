(function(window) { // 防止污染全局变量
    var zepto = {};

    function Z (dom, selector) { // 构造函数
        var i, len = dom? dom.length : 0;
        for (i = 0; i < len; i++) { // 初始化时候挂载到每个实例上
            this[i] = dom[i];
        }
        this.length = len;
        this.selector = selector || '';
    }

    zepto.Z = function(dom, selector) { // 返回Z构造函数的实例
        return new Z(dom, selector);
    }

    zepto.init = function(selector) {
        var slice = Array.prototype.slice;
        var dom = slice.call(document.querySelectorAll(selector)); // dom数组
        return zepto.Z(dom, selector); // 返回zepto.Z方法
    }

    var $ = function(selector) { // 方法返回zepto.init(选择器)
        return zepto.init(selector);
    }

    $.fn = { // 原型上的方法css, html等
        constructor: Z,
        css: function() {
            alert('css')
        },
        html: function() {
            alert('html')
        }
    }
    window.$ = $; // 把$暴露到全局

    Z.prototype = $.fn;

})(window)
