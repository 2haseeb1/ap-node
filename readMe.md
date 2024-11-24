# **Car Store API**

A **Car Store API** built with **Express.js**, **TypeScript**, and **MongoDB** using **Mongoose**. This API enables you to manage a car store with features like car inventory management, order placement, and revenue calculation. The project adheres to best practices, includes comprehensive error handling, and is designed for scalability and maintainability.

---

## **Features**

### **Car Management**
- Add new cars to the store.
- View all cars or filter by `brand`, `model`, or `category`.
- View details of a specific car by ID.
- Update car details, including inventory and pricing.
- Delete a car from the store.

### **Order Management**
- Place orders for cars and manage stock accordingly.
- Automatically reduce stock and update availability (`inStock`).
- Prevent orders if stock is insufficient.
- Calculate total revenue from all orders.

### **Error Handling**
- Centralized error handling middleware.
- Detailed error responses for validation failures, missing data, or resource not found.
- Secure error responses by hiding stack traces in production.

### **Technologies Used**
- **Node.js**: Backend runtime environment.
- **Express.js**: Web framework for routing and middleware.
- **TypeScript**: Type-safe programming.
- **MongoDB**: Database for storing cars and orders.
- **Mongoose**: ORM for schema definition and database interactions.

---

## **Setup Instructions**

### **1. Clone the Repository**
```bash
git clone https://github.com/yourusername/car-store-api.git
cd car-store-api
```

### **2. Install Dependencies**
```bash
npm install
```

### **3. Configure Environment Variables**
- Create a `.env` file in the root directory and configure the following variables:
  ```env
  PORT=3000
  MONGO_URI=mongodb://127.0.0.1:27017/car_store
  NODE_ENV=development
  ```
- Replace `MONGO_URI` with your MongoDB connection string.

### **4. Run the Application**

#### **Development Mode**
```bash
npm run dev
```

#### **Production Mode**
```bash
npm start
```

### **5. Test the Endpoints**
Use tools like **Postman**, **Thunder Client**, or **cURL** to test the API.

---

## **API Endpoints**

### **Car Endpoints**

1. **Create a Car**
   - **URL**: `/api/cars`
   - **Method**: `POST`
   - **Body**:
     ```json
     {
       "brand": "Toyota",
       "model": "Camry",
       "year": 2024,
       "price": 25000,
       "category": "Sedan",
       "description": "Reliable family sedan",
       "quantity": 50,
       "inStock": true
     }
     ```
   - **Response**: Created car details.



2. **Get All Cars**
   - **URL**: `/api/cars`
   - **Method**: `GET`
   - **Query Parameters**:
     - `searchTerm` (optional): Filter cars by `brand`, `model`, or `category`.
   - **Response**: List of cars.

3. **Get a Specific Car**
   - **URL**: `/api/cars/:carId`
   - **Method**: `GET`
   - **Response**: Details of the specified car.

4. **Update a Car**
   - **URL**: `/api/cars/:carId`
   - **Method**: `PUT`
   - **Body**:
     ```json
     {
       "price": 27000,
       "quantity": 30
     }
     ```
   - **Response**: Updated car details.

5. **Delete a Car**
   - **URL**: `/api/cars/:carId`
   - **Method**: `DELETE`
   - **Response**: Success message.

---

### **Order Endpoints**

1. **Place an Order**
   - **URL**: `/api/orders`
   - **Method**: `POST`
   - **Body**:
     ```json
     {
       "email": "customer@example.com",
       "car": "648a45e5f0123c45678d9012",
       "quantity": 1
     }
     ```
   - **Response**: Created order details.

2. **Calculate Revenue**
   - **URL**: `/api/orders/revenue`
   - **Method**: `GET`
   - **Response**:
     ```json
     {
       "message": "Revenue calculated successfully",
       "data": {
         "totalRevenue": 810000
       }
     }
     ```

---

## **Project Structure**

```
src/
├── cars/
│   ├── Car.ts              # Car model
│   ├── carController.ts    # Car-specific HTTP logic
│   ├── carService.ts       # Car-related business logic
│   ├── carRoutes.ts        # Car-related API routes
├── orders/
│   ├── Order.ts            # Order model
│   ├── orderController.ts  # Order-specific HTTP logic
│   ├── orderService.ts     # Order-related business logic
│   ├── orderRoutes.ts      # Order-related API routes
├── middlewares/
│   ├── errorHandler.ts     # Central error handling middleware
├── server.ts               # Entry point for the application
```

---

## **Development and Testing**

### **Development**
- Use `npm run dev` to run the application with **hot-reloading** (via `nodemon`).

### **Testing**
- Test the API using tools like **Thunder Client** or **Postman**.
- Ensure edge cases like invalid input or insufficient stock are handled properly.

---

## **Deployment**

### **Steps**
1. Push the project to a public GitHub repository.
2. Deploy the API to a platform like  **Vercel**.
3. Update the `MONGO_URI` to point to a cloud-hosted MongoDB database (e.g., MongoDB Atlas).



---

## **Key Features**
1. **Scalable and Modular Architecture**:
   - Cleanly separated concerns (`controllers`, `services`, `models`, `routes`).

2. **Type Safety**:
   - Built with **TypeScript** to ensure type safety and robust code.

3. **Comprehensive Error Handling**:
   - Centralized middleware for consistent error responses.

4. **Well-Documented Code**:
   - Each module and function is documented for clarity.

5. **MongoDB Aggregation**:
   - Used for revenue calculation.

---

## **License**
This project is licensed under the MIT License.



