const supertest = require('supertest');
const server = require('../app');

const request = supertest(server);

describe('Weather API', () => {
  it('should return weather data for a valid city', async () => {
    const city = 'London'; // Choose a valid city for testing

    const response = await request.get('/api/weather').query({ city });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('temperature');
    expect(response.body).toHaveProperty('humidity');
    expect(response.body).toHaveProperty('windSpeed');
    expect(response.body).toHaveProperty('weatherDescription');
    expect(response.body).toHaveProperty('name');
    expect(response.body).toHaveProperty('country');
    expect(response.body).toHaveProperty('feelsLike');
    expect(response.body).toHaveProperty('visibility');
    expect(response.body).toHaveProperty('img_desc');
  });

  it('should return 404 for an invalid city', async () => {
    const city = 'InvalidCityName'; // Choose an invalid city name

    const response = await request.get('/api/weather').query({ city });

    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty('message', 'city not found');
  });
});
