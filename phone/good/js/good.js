(function($) {
    // 按钮功能定义
    appcan.button("#nav-left", "btn-act", function() {});
    appcan.button("#nav-right", "btn-act", function() {});
    appcan.button("#return", "btn-act", function() {
        appcan.window.close(-1);
        appcan.window.open({
            name: 'index',
            data: 'index.html'
        });
    });

    appcan.ready(function() {
        $.scrollbox($("body")).on("releaseToReload", function() {
            $("#ScrollContent").trigger("reload", this);
        }).on("onReloading", function(a) {}).on("dragToReload", function() {}).on("draging", function(status) {}).on("release", function() {}).on("scrollbottom", function() {
            $("#ScrollContent").trigger("more", this);
        }).hide();
    });

    $(document).ready(function() {
        $("#myCarousel").carousel();
        $(".carousel-control.left").click(function() {
            $("#myCarousel").carousel("prev");
        });
        $(".carousel-control.right").click(function() {
            $("#myCarousel").carousel("next");
        });
        showGoods(); // 调用显示商品列表的函数
    });

    function showGoods() {
        var arrData = [
            {
                "id": "1",
                "goods": "imgs/1.jpg",
                "synopsis": "太荒吞天诀",
                "price": "￥48",    
            },
            {
                "id": "2",
                "goods": "imgs/2.jpg",
                "synopsis": "我的阿勒泰",
                "price": "￥79",
            },
            {
                "id": "3",
                "goods": "imgs/3.jpg",
                "synopsis": "小楼一夜听春雨",
                "price": "￥109",
            },
            {
                "id": "4",
                "goods": "imgs/4.jpg",
                "synopsis": "长嫂当家",
                "price": "￥44",
            },
            {
                "id": "5",
                "goods": "imgs/5.jpg",
                "synopsis": "齐天大圣传",
                "price": "￥59",
            },
            {
                "id": "6",
                "goods": "imgs/6.jpg",
                "synopsis": "世纪三部曲",
                "price": "￥69",
            },
            // 更多商品...
        ];

        var listData = [];
        arrData.forEach(function(item) {
            var list = {
                title: item.synopsis,
                icon: item.goods,
                describe: '<div class="sc-text-warn">' + item.price + '</div>',
                onClick: function() {
                    appcan.window.open({
                        name: 'detail',
                        data: 'detail.html'
                    });
                }
            };
            listData.push(list);
        });

        var lv1 = appcan.listview({
            selector: "#goodsList",
            type: "thickLine",
            hasIcon: true,
            hasAngle: true,
            hasSubTitle: false,
            multiLine: 1,
            hasCheckbox: false,
            align: 'left'
        });
        lv1.set(listData);
    }
})(jQuery);
