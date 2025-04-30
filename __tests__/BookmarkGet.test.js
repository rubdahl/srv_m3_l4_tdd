const app = require('../app');
const request = require('supertest');

it('Get spesific bookmark using Id for logged in user', async () => {
    const userInformation = await request(app).post('/users/login').send({
        username: 'teacher007',
        password: 'asecret'
    });
    let token = JSON.parse(userInformation.text).data.token;

    const response = await request(app).get('/bookmarks/1').set('Authorization', `Bearer ${token}`);
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('message', 'Success')
})