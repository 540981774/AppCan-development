(function($) {
    appcan.button("#nav-left", "btn-act",
    function() {});
    appcan.button("#nav-right", "btn-act",
    function() {});
    
    appcan.button("#return", "btn-act",
    function() {
        appcan.window.close(-1);
        appcan.window.open({
            name:'index',
            data:'index.html'
        });
        
    });


    appcan.ready(function() {
        //单机打电话图标，触发拨打电话的插件
        appcan.button("#tel","btn-act",function(){
            //获取id=number的一串电话号码
            var telnumber = $("#number").text(); 
            //alert(telnumber); //输出测试
            call(telnumber);            
        });
        
        function call(telnumber){
            uexCall.dial(telnumber);
        }
        
         //1. 发表评论 按钮的单击事件函数
        appcan.button("#pinglun", "btn-act",
          function(){
          //alert(1);  //这是调试代码的技巧，用于检测代码是否执行到这一行了，并正确运行了
        //获取评论输入的内容
          var content = $("#plneirong").val();
          //利用本地存储技术，获取用户名
          var name = appcan.locStorage.val('uname');
          if(content==''){
            appcan.window.openToast('请输入评论内容！','2000','5',0);
          }else{
            pinglun(name,content);
          }
        }); 
        
        //2. 判断用户是否登录
        function pinglun(userName,cont){
        var islog = appcan.locStorage.val('islog');
        //alert(islog);
        //var name = appcan.locStorage.val('uname');
        if(islog==null){
            appcan.window.alert({
                title:'提示',
                content:'请先登录',
                buttons:['确定','取消'],
                callback: function(err,islog){
                   appcan.window.open({
                            name:'login',
                            data:'login.html'
                   })
                   appcan.locStorage.setVal('yemian','detail');
                }
            })
        }else{
            var cont = $("#plneirong").val();
            getCommentList(userName,cont);
            //alert('评论成功！');
            } 
       }
       
       function getCommentList(userName,cont){
           var str='',//一条评论保存在str变量
           //将静态html代码与动态js内容做拼接
           str='<div class="ubb umar-t umar-1 ub-f1 font-6">'
           +userName+'</br>'
           +cont+'</br>'
           +'</div>';
           
           //最后一行代码意思是一个接口函数
           $('#message').append(str);
       }
       
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

    
})($);