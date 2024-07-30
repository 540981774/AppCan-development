(function($) {
    appcan.button("#nav-left", "btn-act",
    function() {});
    appcan.button("#nav-right", "btn-act",
    function() {});

//给天气通的元素块添加单击事件
    appcan.button("#tianqi","btn-act",function(){
        appcan.window.open({
            name:'weather',
            data:'weather.html'
        });
    });
    
    appcan.button("#renqi","btn-act",function(){
        appcan.window.open({
            name:'renqi',
            data:'renqi.html'
        });
    });
    
    appcan.button("#xiaoliang","btn-act",function(){
        appcan.window.open({
            name:'xiaoliang',
            data:'xiaoliang.html'
        });
    });

(function($) {
    appcan.ready(function() {
        // Add click event handlers for each block
        $('#macaron-package').click(function() {
            appcan.window.open({
                name: 'macaron_package',
                data: 'macaron_package.html'
            });
        });

        $('#black-forest-cake').click(function() {
            appcan.window.open({
                name: 'black_forest_cake',
                data: 'black_forest_cake.html'
            });
        });

        $('#cheesecake').click(function() {
            appcan.window.open({
                name: 'cheesecake',
                data: 'cheesecake.html'
            });
        });
    });
})($);

    

    //点外卖的元素块添加单击事件
    appcan.button("#waimai","btn-act",function(){
         var islog = 0; //islog用于保存登陆状态，1：已登录，0：未登录
         islog  = appcan.locStorage.val('islog'); //获取登录状态
         appcan.locStorage.setVal('yemian','index');
         if (islog == '1'){ //如果登录成功，就直接打开详情页
             appcan.window.open({
                 name:'detail',
                 data:'detail.html'
             });
            }else{
                appcan.window.openToast('您还未登录，请先登录！','2000','5','0');
                window.sleep(1000);
                    //直接跳转到登录页
                appcan.window.open({
                    name:'login',
                    data:'login.html'
                });
            }
    });
    
    //给定位的向下的箭头绑定单击事件
    appcan.button("#location","btn-act",function(){
        //调用获取位置函数
        showPosition();
    });
    
    //通过经度和纬度定位
    function showPosition() {
         var latlon = 24.46491101720606+','+118.0363653972745;//纬度和经度
         //baidu的 定位接口
         var url = "https://api.map.baidu.com/geocoder/v2/?ak=C93b5178d7a8ebdb830b9b557abce78b&location="+latlon+"&output=json&pois=0";
      
      //发送get请求
      $.ajax({
          type:"GET",
          dataType:"jsonp",
          url:url,
          beforeSend:function(){
              $("#city").text('正在定位...');
          },
          success:function (data){
              if(data.status==0){
                  console.log(data);
                  $("#city").text(data.result.addressComponent.city);
              }
          },
          error:function (XMLHttpRequest,textStatus,errorThrown){
              $("#city").text('位置获取失败');
          }
      });
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
        }).reload();
    })

})($);