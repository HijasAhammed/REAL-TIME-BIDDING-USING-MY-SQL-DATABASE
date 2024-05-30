const request = require('supertest');
const jwt = require('jsonwebtoken'); 
const token = jwt.sign({ userId: 1, role: 'user' }, process.env.JWT_SECRET, { expiresIn: '1h' });
describe('Items', () => {
  describe('GET /items', () => {
    it('should return a list of auction items', (done) => {
      request(server)
        .get('/items')
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.body).to.be.an('array');
          done();
        });
    });
  });
  describe('POST /items', () => {
    it('should create a new auction item', (done) => {
      const newItem = {
        name: 'Test Item',
        description: 'This is a test item',
        starting_price: 10.99,
        end_time: '2024-06-01T12:00:00Z',
      };
      request(server)
        .post('/items')
        .set('Authorization', `Bearer ${token}`)
        .send(newItem)
        .expect(201)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.body).to.have.property('item');
          expect(res.body.item).to.have.property('name', newItem.name);
          done();
        });
    });
  });
});