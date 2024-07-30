(function($) {
    appcan.button("#return", "btn-act",
    function() {
        appcan.window.close(-1);
        appcan.window.open({
            name:'index',
            data:'index.html'
        });
        
    });
    appcan.button("#nav-right", "btn-act",
    function() {});
    
    //给头像区域的元素添加单击事件，让它跳转到登录页，同时设置yemian的值
    appcan.button("#login", "ani-act", function() {
            appcan.window.open({
                name : 'login',
                data : 'login.html',
                aniId : '10'
            });   //aniId是新打开页面的过渡方式，我选择了动态的10，从上到下过渡显示出来
          //设置yemian的状态值是personal       
          appcan.locStorage.setVal('yemian', 'personal');
    });

    
    appcan.ready(function() {
        //if(appcan.locStorage.val('yemian')=='login'){
            if(appcan.locStorage.val('islog')=='1')
            {
                name=appcan.locStorage.val('uname');
                $('#userName').text('欢迎你,'+name);
            }
        //}
        
        $.scrollbox($("body")).on("releaseToReload",
        function() { //After Release or call reload function,we reset the bounce
            $("#ScrollContent").trigger("reload", this);
        }).on("onReloading",
        function(a) { //if onreloading status, drag will trigger this event
        }).on("dragToReload",
        function() { //drag over 30% of bounce height,will trigger this event
        }).on("draging",
        function(status) { //on draging, this event will be triggered.
        }).on("release",
        function() { //on draging, this event will be triggered.
        }).on("scrollbottom",
        function() { //on scroll bottom,this event will be triggered.you should get data from server
            $("#ScrollContent").trigger("more", this);
        }).hide();
    })

     appcan.ready(function() {
        
         
    });
        /*
        var lv1 = appcan.listview({
            selector : "#listview1",
            //修改粗线为细线
            type : "thinLine",    
            hasIcon : true,
            hasAngle : true,
            hasSubTitle : false,
            multiLine : 1
        });
        lv1.set([{
            icon : 'personal/css/myImg/wdzp.png',
            title : '编辑信息',
            subTitle : '备注文字'
        }, {
            icon : 'personal/css/myImg/wdjl.png',
            title : '我的收藏',
            subTitle : ''
        }, {icon : 'personal/css/myImg/wddp.png',
            title : '我的相册',
            subTitle : '备注文字'
        } 
        ]);
       
        
        var lv2 = appcan.listview({
            selector : "#listview2",
            type : "thinLine",
            hasIcon : true,
            hasAngle : true,
            hasSubTitle : true,
            multiLine : 1
        });
        lv2.set([{
            icon : 'personal/css/myImg/myImg1.png',
            title : '我的相册',
            subTitle : '备注文字'
        }, {
            icon : 'personal/css/myImg/myImg2.png',
            title : '我的收藏',
            subTitle : ''
        }, {
            icon : 'personal/css/myImg/myImg3.png',
            title : '我的银行卡',
            subTitle : ''
        }]);
        
        /*
        var lv3 = appcan.listview({
            selector : "#listview3",
            type : "thinLine",
            hasIcon : true,
            hasAngle : true,
            multiLine : 1
        });
        lv3.set([{
            icon : 'personal/css/myImg/myImg4.png',
            title : '<div class="ub">表情包<div class=" uwh-FP2 uc-a-FP1 sc-bg-alert bc-text-head ulev-4 ufm1 ub ub-ac ub-pc">NEW</div></div>'
        }]);
        var lv4 = appcan.listview({
            selector : "#listview4",
            type : "thinLine",
            hasIcon : true,
            hasAngle : true,
            multiLine : 1
        });
        lv4.set([{
            icon : 'personal/css/myImg/myImg5.png',
            title : '设置'
        }]);
        */
       
})($);