const router = require('koa-router')()
const sharp = require('sharp');
let request = require('request');

router.prefix('/img')

router.get('/',async (ctx,next)=>{
//    await getimg(request,ctx.query).then( async (buffer)=>{
//     await sharp(buffer).resize(100, 100).toBuffer( )
//     .then( function(outputBuffer){
//         ctx.status = 200;
//         ctx.type="jpeg";
//         ctx.body=outputBuffer;
//     });
//    }).catch(function(err){
//     ctx.status = 200;
//     ctx.body=err;
//    });    
});

// function getimg(request,query) {
//     return new Promise((resolve, reject) => {
//         try {
//             if(query!=undefined && query.url){
//                 var options = { 
//                     url: query.url,
//                     encoding: null
//                 };
//                 request(options,function (error, response, buffer) {
//                     if (!error && response.statusCode == 200) {
//                         resolve(buffer);
//                     }
//                   });
//             }else{
//                 reject("url参数未提供！")
//             }

//         } catch (err) {
//             reject(err)
//         }
//     })
// }

module.exports = router;