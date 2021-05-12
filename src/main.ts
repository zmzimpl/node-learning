import * as https from 'https';
const cheerio = require('cheerio');
// import * as cheerio from 'cheerio';
https.get('https://bscscan.com/address/0xc65981e512010cf001820a6b1bca60428fdb1018',(res) => {
    // 分段返回的 自己拼接
    let html = '';
    // 有数据产生的时候 拼接
    res.on('data',function(chunk){
        html += chunk;
    })
    // 拼接完成
    res.on('end',function(){
      // console.log(html);
      const $ = cheerio.load(html);
      console.log($('.col-md-8')[1].childNodes[0].data);
    })
})
