const chai = require('chai')
const expect = chai.expect

const add = (a=0,b=0)=>{
    return a+b;
}

describe('Arithmetic',()=>{
    it('Adds two number correctly',()=>{
        expect(add(10,20)).to.be.equal(30)
    })
    
    it('Return 0 if no args passed',()=>{
        expect(add()).to.be.equal(0)
    })
})

