$(function(){
   $(".spans span").click(function(){
        $(this).addClass("select").siblings().removeClass("select");
   });
   $(".btn1").click(function(){
        $(".all").children(".doctors-all").removeClass("hide").siblings(".fenxi-all").addClass("hide");
   });
   $(".btn2").click(function(){
        $(".all").children(".fenxi-all").removeClass("hide").siblings(".doctors-all").addClass("hide");
   });
   // $.ajax({
   //      url:"/clinic/v4/%s/assist/detail/",
   //      type:"get",
   //      dataTypa:"json",
   //      success: function(res){
   //          console.log(res);
   //          
           

   //      },
   //      error: function(res){
   //          console.loh(res);
   //      }
   // })
   var res ={

   }
   //相似案例
    var pro="";
    for(var i=0;i<res.similar_problems.length;i++){
        pro+='<div class="doctor-middle"><p class="pone">问题：&nbsp;<span>月经不调，经常拖后 (女，32岁)</span></p><p class="ptwo"> 答题亮点：&nbsp;<span class="director">用药指导</span>&nbsp;<span class="director">饮食起居</span>&nbsp;<span class="director">心里疏导</span></p><p class="pthree">2017年11月12日</p></div>';
    };
    $(".doctor").html(pro);
    //分析
    var str="";
    for(var j=0;j<res.targs.length;j++){
        
    }
});