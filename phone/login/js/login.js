(function($) {
    appcan.button("#nav-left", "btn-act",
        function() {
        appcan.window.close(-1);
        appcan.window.open({
            name:'index',
            data:'index.html'
        });
    });
    appcan.button("#nav-right", "btn-act",
    function() {});
        appcan.button("#zhuce", "btn-act",
    function() {
        appcan.window.close(-1);//关闭当前页面
        appcan.window.open({//打开首页
            name:'zhuce',
            data:'zhuce.html'
      });

    });
     //单击登录按钮，单击login函数
     appcan.button("#login","ani-act",function(){
         login();
     });
     //判断用户名和密码是否为空，如果不为空，就继续执行下一行，并保存登陆状态和用户名，最后将这些信息传递给detail页面
     function login(){
         var name = $("#uname").val();//通过id获取输入的用户名
         var pwd = $("#upwd").val();//通过id获取输入的密码
         //alert(pwd);  //测试语句
         if(!isDefine(name)){
             appcan.window.openToast("请输入用户名！",'2000','5',0);
             return;
         }
         
         if(!isDefine(name)){
             appcan.window.open("请输入密码！",'2000','5',0);
             return;
         }

         if(name && pwd){
             appcan.window.openToast('登陆成功!','2000',5,0);
             appcan.locStorage.setVal('islog',1);//本地存储的存值
             
           //如果从个人页过来的，需要记录用户名，才能得到评论人的用户名构成欢迎语，再返回到personal页面
                if(appcan.locStorage.val('yemian')=='personal'){
                    appcan.locStorage.setVal('uname',name);//设置保存用户名
                    appcan.window.close(-1);
                    appcan.window.open({  
                           name:'personal',
                           data:'personal.html'     
                    });
                   
                }
                
                if(appcan.locStorage.val('yemian')=='index'){ //从首页过来的，要再回到首页
                    appcan.locStorage.setVal('uname',name);
                    appcan.window.close(-1);
                    appcan.window.open({  
                           name:'index',
                           data:'index.html'     
                    });  
                }
             //如果从详情页过来的，需要记录用户名，才能得到评论人的用户名，并返回到详情页
             if(appcan.locStorage.val('yemian')=='detail'){
                appcan.locStorage.setVal('uname',name);
                 appcan.window.close(-1);
                 appcan.window.open({
                     name:'detail',
                     data:'detail.html'
                 });
     }
              
         }
         else{
             appcan.window.openToast('登陆失败！','2000',5,0);
             appcan.locStorage.setVal('islog',0);
         }
         //alert(pwd);  //测试语句，输出密码，测试成功后，把这条测试语句注释掉
      }
      //检查用户输入的用户名和密码是否符合要求
       function isDefine(para){
           //类型是否为未定义，字符串为空，值为null，值未定义
           if(typeof para == 'undefined' || para == "" || para == null || para == undefined)
           return false;
           else
           return true;
       }
       
    appcan.ready(function() {
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

            appcan.button("#submit", "ani-act", function() {
            $("form").submit();
        })

        $("form").on('submit', function() {
            appcan.request.postForm($("form"), function() {
                appcan.window.alert({
                    title : "提醒",
                    content : "您已经提交了表单:)",
                    buttons : '确定',
                    callback : function(err, data, dataType, optId) {
                        console.log(err, data, dataType, optId);
                    }
                });
            }, function(err) {

            });
            return false;
        });
})($);