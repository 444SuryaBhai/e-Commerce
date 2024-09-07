const request = require('supertest');
const app = require('./index'); // Import the app

describe('Test Product and User API Endpoints', () => {

    // Test for the base route
    it('should return a running status on the base route', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toBe('Express App is Running');
    });

    // Test user signup
    it('should sign up a new user', async () => {
        const res = await request(app).post('/signup').send({
            username: 'testuser',
            email: 'testuser@example.com',
            password: 'testpassword'
        });
        expect(res.statusCode).toEqual(200);
        expect(res.body.success).toBe(true);
        expect(res.body.token).toBeDefined(); // Token should be returned
    });

    // Test user login
    it('should login the user', async () => {
        const res = await request(app).post('/login').send({
            email: 'testuser@example.com',
            password: 'testpassword'
        });
        expect(res.statusCode).toEqual(200);
        expect(res.body.success).toBe(true);
        expect(res.body.token).toBeDefined(); // Token should be returned
    });

    // Test adding a product
    it('should add a product', async () => {
        const res = await request(app).post('/addproduct').send({
            name: 'Test Product',
            image: 'test_image.jpg',
            category: 'test category',
            new_price: 100,
            old_price: 120
        });
        expect(res.statusCode).toEqual(200);
        expect(res.body.success).toBe(true);
        expect(res.body.name).toBe('Test Product');
    });

    // Test fetching all products
    it('should fetch all products', async () => {
        const res = await request(app).get('/allproducts');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeInstanceOf(Array); // Should return an array of products
    });

    // Test adding a product to the cart
    it('should add a product to the cart', async () => {
        const loginRes = await request(app).post('/login').send({
            email: 'testuser@example.com',
            password: 'testpassword'
        });
        const token = loginRes.body.token;

        const res = await request(app).post('/addtocart')
            .set('auth-token', token)
            .send({ itemId: 1 });
        expect(res.statusCode).toEqual(200);
        expect(res.text).toBe('Added');
    });

    // Test fetching cart data
    it('should fetch cart data for the user', async () => {
        const loginRes = await request(app).post('/login').send({
            email: 'testuser@example.com',
            password: 'testpassword'
        });
        const token = loginRes.body.token;

        const res = await request(app).post('/getcart')
            .set('auth-token', token);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeInstanceOf(Object); // Should return an object (cart data)
    });

});
