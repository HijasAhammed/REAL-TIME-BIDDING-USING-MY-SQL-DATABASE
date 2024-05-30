const request = require('supertest');
describe('Users', () => {
  describe('POST /users/register', () => {
    it('should register a new user', (done) => {
      const newUser = {
        username: 'testuser',
        password: 'password123',
        email: 'test@example.com',
      };
      request(server)
        .post('/users/register')
        .send(newUser)
        .expect(201)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.body).to.have.property('user');
          expect(res.body.user).to.have.property('username', newUser.username);
          done();
        });
    });
  });
});