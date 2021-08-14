#!/usr/bin/env node

const log = console.log,
      pinyin = require('pinyin')

/*[ [ 'wang'  ], [ 'ding'  ]  ]*/
var rs = pinyin('wang,ding黎明', { style: pinyin.STYLE_NORMAL })

rs = rs.map((w) => w[0]).join('-')

log(rs)
