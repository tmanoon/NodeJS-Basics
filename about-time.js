import ms from 'ms'

console.log(ms(60000, { long: true }), ms(2 * 60000, { long: true }), ms(-3 * 60000, { long: true }), ms(ms('10 hours'), { long: true }))
