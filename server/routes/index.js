const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('html/index.html')
})

module.exports = router
