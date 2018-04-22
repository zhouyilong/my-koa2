const router=require("koa-router")();

router.prefix('/my')

router.get('/',async (ctx,next)=>{
    await ctx.render('html/my.html')
});

// var p1=new Promise(function(resolve,reject){
//     setTimeout(resolve,1500,"p1");
// });

// var p2=new Promise(function(resolve,reject){
//     setTimeout(resolve,1000,"p2");
// });

// Promise.race([p1,p2]).then(function(result){
//     console.log(result);
// });

module.exports=router;