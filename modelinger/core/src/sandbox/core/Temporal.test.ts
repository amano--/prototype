import { Temporal } from 'proposal-temporal';

// ECMAScript proposalsのTemporalを使って日時の操作をしてみるMEMO
//https://tc39.es/proposal-temporal/docs/

describe('ast', () => {
    // Create program
  
    it('template literal', () => {
        // 現在時刻を取得
const now = Temporal.now.instant()
console.log("now", now.toString())

// 任意の日時でオブジェクトを生成
const temporalObj = new Temporal.PlainDateTime(2000,1,1)
console.log('temporalObj', temporalObj.toString())
const temporalObjFrom = Temporal.PlainDateTime.from('2020-01-01T12:30')
console.log('temporalObjFrom', temporalObjFrom.toString())

    })
})  