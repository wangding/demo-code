var parseAndSum = require('./simple-parser'),
    log         = console.log;

log('\'\' should return 0:', 0 === parseAndSum(''));
log('\'0\' should return 0:', 0 === parseAndSum('0'));
log('\'77\' should return 77:', 77 === parseAndSum('77'));
log('\'abc\' should return 0:', 0 === parseAndSum('abc'));
log('\'a, 8\' should return 8:', 8 === parseAndSum('a,8'));
log('\'abc,2,c,d,15\' should return 17:', 17 === parseAndSum('abc,2,c,d,15'));
