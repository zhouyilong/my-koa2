const router=require("koa-router")();

router.prefix('/tl')

router.get('/',async (ctx,next)=>{
    await ctx.render('html/tl.html')
});

module.exports=router;