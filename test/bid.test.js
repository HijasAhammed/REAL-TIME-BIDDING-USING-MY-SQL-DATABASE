const request = require('supertest');
const jwt = require('jsonwebtoken');
const token = jwt.sign({ userId: 1, role: 'user' }, process.env.JWT_SECRET, { expiresIn: '1h' });
describe('Bids', () => {
  describe('GET /items/:itemId/bids', () => {
    it('should return a list of bids for an item', (done) => {
      const itemId = 1;
      request(server)
        .get(`/items/${itemId}/bids`)
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.body).to.be.an('array');
          done();
        });
    });
  });
  describe('POST /items/:itemId/bids', () => {
    it('should place a new bid on an item', (done) => {
      const itemId = 1; 
      const newBid = {
        bid_amount: 20.99,
      };
      request(server)
        .post(`/items/${itemId}/bids`)
        .set('Authorization', `Bearer ${token}`)
        .send(newBid)
        .expect(201)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.body).to.have.property('bid');
          expect(res.body.bid).to.have.property('bid_amount', newBid.bid_amount);
          done();
        });
    });
  });
});