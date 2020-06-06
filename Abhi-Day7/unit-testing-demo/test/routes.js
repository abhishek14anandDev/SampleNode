const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = chai.expect
const app = require('../app')

chai.use(chaiHttp)
describe('Routes',()=>{
   it('has Tasks Route',()=>{
        chai.request(app)
        .get('/tasks')
        .end((err,res)=>{
            expect(err).to.be.equal(null)
            expect(res.status).to.be.equal(200)
        })
   })
   it('has Users Route',()=>{
    chai.request(app)
    .get('/user')
    .end((err,res)=>{
        expect(err).to.be.equal(null)
        expect(res.status).to.be.equal(200)
    })
})
})