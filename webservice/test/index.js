const server = require('../server');
const Routes = require('../routes/cruises');

const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

chai.use(chaiHttp);

describe('/GET cruises/', () => {

    it('should get all cruises', (done) => {
        chai.request(server)
            .get('/cruises/')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('responses').eql('Success');
                res.body.should.have.property('message').eql('Resource found');
                res.body.data.should.be.a('array');
                done();
            });
    });

});
