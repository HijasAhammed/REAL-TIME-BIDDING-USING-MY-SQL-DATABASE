const request = require('supertest');
const jwt = require('jsonwebtoken');
const token = jwt.sign({ userId: 1, role: 'user' }, process.env.JWT_SECRET, { expiresIn: '1h' });
describe('Notifications', () => {
  describe('GET /notifications', () => {
    it('should return notifications for the logged-in user', (done) => {
      request(server)
        .get('/notifications')
        .set('Authorization', `Bearer ${token}`)
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.body).to.be.an('array');
          done();
        });
    });
  });
})
  describe('POST /notifications/mark-read', () => {
    it('should mark notifications as read', (done) => {
      const notificationIds = [1, 2, 3];
      request(server)
        .post('/notifications/mark-read')
        .set('Authorization', `Bearer ${token}`)
        .send({ notification_ids: notificationIds })
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.body).to.have.property('markedAsRead', notificationIds);
          done();
        });
    });
  })