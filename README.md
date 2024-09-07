#Smart Shopper
Be smart shop at Smart Shopper


# Creating the content for README.md based on the component functionality
readme_content = """
# AddProduct Component

## Description
The `AddProduct.jsx` component is a React-based form used for adding new products to an e-commerce platform. It allows users to input product details such as name, category, new price, old price, and upload an image. The form data is sent to a backend server for processing.

## Features
- **State Management**: The component uses React's `useState` hook to manage form inputs and image data.
- **Image Upload**: Users can upload a product image, which is sent to the server along with other product details.
- **Form Handling**: Product details including name, category, new price, and old price are handled through form inputs.
- **API Interaction**: The component sends a `POST` request to a specified API endpoint to upload the product data.

## How to Use
1. Place the `AddProduct.jsx` component in your desired directory.
2. Import the necessary CSS and assets as per the component dependencies.
3. The component contains the following product fields:
   - **name**: The name of the product.
   - **category**: Default set to "women", can be modified to other categories.
   - **new_price**: The new price of the product.
   - **old_price**: The original price before discount.
   - **image**: A product image file upload field.

4. On form submission, the product data and the uploaded image are sent to the server using the `fetch` API.

## Example Code
```jsx
import React, { useState } from 'react';
import './Addproduct.css';
import upload_area from '../../assets/upload_area.svg';

const Addproduct = () => {
    const [image, setImage] = useState(false);
    const [productDetails, setProductDetails] = useState({
        name: "",
        image: "",
        category: "women",
        new_price: "",
        old_price: ""
    });

    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    };

    const changeHandler = (e) => {
        setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
    };

    const Add_Product = async () => {
        let formData = new FormData();
        formData.append('product', image);

        await fetch('https://smart-shopper-e79a.onrender.com/upload', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
            },
            body: formData
        });
    };

    return (
        <div>
            <!-- Your JSX and form elements go here -->
        </div>
    );
};

export default Addproduct;



# Creating the content for README.md based on the Listproduct component functionality
readme_content_listproduct = """
# ListProduct Component

## Description
The `ListProduct.jsx` component is a React-based product listing feature that fetches a list of products from a backend API and displays them in a structured format. Additionally, it allows users to remove products from the list.

## Features
- **Product Fetching**: The component fetches all available products from the API and stores them in the component's state.
- **Display Product List**: Displays the fetched products in a visually structured layout.
- **Remove Product**: Sends a `POST` request to remove a product based on its ID.
- **State Management**: Uses React's `useState` and `useEffect` to handle product data and API interactions.

## How to Use
1. **Fetch Products**: When the component mounts, it automatically calls the `fetchInfo` function to retrieve all products from the API.
   - API Endpoint: `https://smart-shopper-e79a.onrender.com/allproducts` (GET)

2. **Remove a Product**: The component includes a remove button, which sends a request to remove a product by its `id`.
   - API Endpoint: `https://smart-shopper-e79a.onrender.com/removeproduct` (POST)
   - The ID of the product is sent as the payload in the request body.

## Example Code
```jsx
import React, { useEffect, useState } from 'react';
import './Listproduct.css';
import cross_icon from '../../assets/cross_icon.png';

const Listproduct = () => {
    const [allproducts, setAllProducts] = useState([]);

    const fetchInfo = async () => {
        await fetch('https://smart-shopper-e79a.onrender.com/allproducts')
            .then((res) => res.json())
            .then((data) => { setAllProducts(data); });
    }

    useEffect(() => {
        fetchInfo();
    }, []);

    const remove_product = async (id) => {
        await fetch('https://smart-shopper-e79a.onrender.com/removeproduct', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: id }),
        });
        await fetchInfo();
    }

    return (
        <div className='list-product'>
            <h1>All Products List</h1>
            <div className="listproduct-format-main">
                {allproducts.map((product) => (
                    <div key={product._id} className="product-item">
                        <img src={product.image} alt={product.name} />
                        <h2>{product.name}</h2>
                        <button onClick={() => remove_product(product._id)}>
                            Remove <img src={cross_icon} alt="Remove" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Listproduct;


# Creating the content for README.md based on the Navbar component functionality
readme_content_navbar = """
# Navbar Component

## Description
The `Navbar.jsx` component is a simple React-based navigation bar that displays a logo and a profile icon.

## Features
- **Logo Display**: Displays a logo on the navigation bar using an SVG image.
- **Profile Icon**: Displays a profile icon on the right side of the navigation bar.

## How to Use
This component is used to create a minimalistic navigation bar in a React project. It imports two SVG images and styles the navigation bar using a CSS file.

### Example Usage
```jsx
import React from 'react';
import './Navbar.css';
import navlogo from '../../assets/nav-logo.svg';
import navProfile from '../../assets/nav-profile.svg';

const Navbar = () => {
    return (
        <div className='navbar'>
            <img src={navlogo} alt="Logo" className='nav-logo' />
            <img src={navProfile} alt="Profile" className='nav-profile' />
        </div>
    );
};

export default Navbar;


# Reading the contents of the newly uploaded Sidebar.jsx file to understand its structure and functionality
file_path_sidebar = '/mnt/data/Sidebar.jsx'

# Reading the content of the Sidebar.jsx file
with open(file_path_sidebar, 'r') as file:
    file_content_sidebar = file.read()

file_content_sidebar[:1000]  # Displaying a part of the content to get an idea


# Admin Component

## Overview
This is a `Admin.jsx` file, which likely contains a React component used for managing administrative tasks in a web application. The component could include features such as managing users, settings, content, or other administrative functions.

## Prerequisites

Before using this component, make sure you have the following installed:

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) (for managing dependencies)
- [React](https://reactjs.org/) library for rendering the component

## Installation

1. Clone the repository or copy the `Admin.jsx` file into your project.
   
   ```bash
   git clone <your-repo-url>


Install the required dependencies:

npm install
# or
yarn install

Import the Admin.jsx component into your project:

import Admin from './Admin';


Here’s a simple example of how to use the Admin component:

import React from 'react';
import Admin from './Admin';

function App() {
  return (
    <div>
      <Admin />
      {/* Other components */}
    </div>
  );
}

export default App;


To run the app with the Admin component:

npm start
# or
yarn start


The application will be available on http://localhost:3000 (default for React).

Contributing
If you want to contribute to this component:

Fork the repository.
Create a new branch for your feature/bugfix.
Submit a pull request.

License
This project is licensed under the MIT License - see the LICENSE file for details.


Would you like me to save this `README.md` file, similar to how I did for the `Navbar.jsx` component?


# App Component

## Overview
The `App.jsx` file is the main entry point of your React application. It is responsible for rendering the core structure of your app, integrating components like the `Navbar`, `Admin`, and any other UI elements.

## Prerequisites

Before running this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) for dependency management
- [React](https://reactjs.org/) for rendering components

## Installation

1. Clone or copy the `App.jsx` file into your React project.

   ```bash
   git clone <your-repo-url>


Install project dependencies:

npm install
# or
yarn install


Ensure the App.jsx file is correctly imported and integrated into the index.js (or similar entry point):

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));



Usage
The App.jsx component typically integrates various other components, such as:

import React from 'react';
import Navbar from './Navbar'; // A navigation bar component
import Admin from './Admin'; // An admin dashboard component

function App() {
  return (
    <div>
      <Navbar />
      <Admin />
      {/* Other components can be added here */}
    </div>
  );
}

export default App;

You can customize the component by:

Adding new routes for navigation.
Managing the state for global application features.
Including additional components.


Running the App
To start the development server:

npm start
# or
yarn start


This will run the app at http://localhost:3000.

Customization
The App.jsx component can be customized to fit your application’s structure:

Add routes: Implement routing for different sections of the app using libraries like react-router.
State management: Use useState or useContext for managing the global state.
Styling: Apply styles or themes globally through the App.jsx component.


Contributing
To contribute to this component:

Fork the repository.
Create a new branch for your feature (git checkout -b feature-branch).
Commit your changes (git commit -m 'Add new feature').
Push to the branch (git push origin feature-branch).
Submit a pull request.


License
This project is licensed under the MIT License - see the LICENSE file for details.






---

# React Application

This project is a React application that utilizes `react-router-dom` for routing and includes custom styles through `index.css`. 

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Dependencies](#dependencies)

## Installation

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```
2. Navigate to the project directory:
   ```bash
   cd your-repo-name
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

To start the development server, run:
```bash
npm start
```

This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Project Structure

- `main.jsx`: The entry point of the application, where the `App` component is rendered and routing is enabled via `react-router-dom`.
- `App.jsx`: Main component that defines the structure and routing of the app.
- `index.css`: Global styles for the app.

## Scripts

- `npm start`: Runs the app in development mode.
- `npm run build`: Builds the app for production to the `build` folder.

## Dependencies

- `react`: JavaScript library for building user interfaces.
- `react-dom`: Provides DOM-specific methods for React.
- `react-router-dom`: Enables routing in React apps.

---



---

# Environment Variables

This project requires environment variables to connect to external services. The `.env` file is used to store these variables securely.

## Setup

1. Create a `.env` file in the root directory of your project.
2. Add the following environment variable to the file:

   ```bash
   MONGODB_URI="mongodb+srv://<username>:<password>@cluster0.x0j21.mongodb.net/<database>"
   ```

   - Replace `<username>` and `<password>` with your MongoDB credentials.
   - Replace `<database>` with the name of the MongoDB database you are using.

## Important

- **Do not share** your `.env` file publicly or commit it to version control, as it contains sensitive information.
- Ensure that the `.env` file is included in your `.gitignore` file to prevent accidental exposure of your credentials.

---


---

# E-Commerce Backend Application

This project is an Express-based backend for an e-commerce platform, allowing for user registration, login, product management, and cart functionality. The app interacts with a MongoDB database for data persistence and includes features for handling image uploads and JWT-based authentication.

## Prerequisites

Ensure that you have the following installed:

- Node.js
- MongoDB
- npm (Node Package Manager)
- A `.env` file containing the necessary environment variables.

## Getting Started

### 1. Clone the repository
```bash
git clone <repository-url>
cd <project-directory>
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
Create a `.env` file in the root directory with the following variables:

```bash
PORT=4000
MONGODB_URI=<your_mongodb_connection_uri>
```

### 4. Start the server
```bash
npm start
```

The server will run on `http://localhost:4000` or the port defined in your environment variables.

## Endpoints

### General
- `GET /` - Test endpoint to check if the app is running.

### Image Upload
- `POST /upload` - Upload an image to the server.
  - Request body: Multipart form data with `product` field.

### Products
- `POST /addproduct` - Add a new product.
- `POST /removeproduct` - Remove a product by `id`.
- `GET /allproducts` - Fetch all products.
- `GET /newcollections` - Fetch the latest 8 products.
- `GET /popularinwomen` - Fetch the first 4 products in the "women" category.

### Users
- `POST /signup` - Register a new user.
- `POST /login` - Login with email and password.

### Cart Management
- `POST /addtocart` - Add an item to the user's cart. Requires authentication.
- `POST /removefromcart` - Remove an item from the user's cart. Requires authentication.
- `POST /getcart` - Get the user's cart data. Requires authentication.

## Authentication

JWT (JSON Web Token) is used for user authentication. To access cart-related endpoints, you need to include an `auth-token` in the request headers.

```bash
auth-token: <your_jwt_token>
```

## Image Storage

Uploaded images are stored in the `upload/images` directory and can be accessed via the `/images` endpoint.

## License

This project is licensed under the MIT License.

---


---

# React E-Commerce Application

This is a front-end application for an e-commerce platform built with React. It interacts with a backend API for features like product management, user authentication, and cart functionality.

## Prerequisites

Ensure that you have the following installed:

- Node.js
- npm (Node Package Manager)
- A backend server (e.g., Express with MongoDB) to handle API requests.

## Getting Started

### 1. Clone the repository
```bash
git clone <repository-url>
cd <project-directory>
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the application
```bash
npm start
```

The application will be accessible at `http://localhost:3000` in your browser.

## Features

- **Product Browsing**: Browse through available products in different categories.
- **User Authentication**: Sign up and log in with JWT-based authentication.
- **Cart Management**: Add, remove, and view products in the cart.
- **Product Search and Filters**: Search and filter products based on various criteria.
- **Responsive Design**: The app is responsive and works across different devices.

## File Structure

- `App.jsx`: The main component that sets up routing and renders the app layout.
- `components/`: Contains various components used throughout the app (e.g., `Navbar`, `ProductList`, `Cart`, etc.).
- `services/`: Contains API service functions for interacting with the backend.
- `pages/`: Contains pages for different routes such as Home, Product, Cart, and Login.
- `assets/`: Contains images, icons, and other static assets.

## API Endpoints

The app communicates with a backend API that handles user authentication, product data, and cart functionality. Here are some common API endpoints:

- `GET /api/products` - Fetch all products.
- `POST /api/login` - Log in a user.
- `POST /api/signup` - Register a new user.
- `POST /api/addtocart` - Add an item to the user’s cart.
- `POST /api/removefromcart` - Remove an item from the user’s cart.

## Components

- **Navbar**: The navigation bar includes links to different sections like Home, Products, and Cart.
- **Product List**: Displays a list of products with sorting and filtering options.
- **Product Card**: Displays individual product details.
- **Cart**: Manages items added to the cart and provides checkout options.
- **User Authentication**: Handles user signup and login forms.

## State Management

React's `useState` and `useEffect` hooks are used for managing component state, while `React Router` is used for handling client-side routing.

## Deployment

To deploy this app, run the following command to build the production-ready files:

```bash
npm run build
```

After the build is complete, you can deploy the app using any static hosting service (e.g., Netlify, Vercel, or GitHub Pages).

## License

This project is licensed under the MIT License.

---





---

# React Application Entry Point

This is the entry point for your React application, typically where the root component is rendered into the DOM. It also integrates with libraries like React Router for routing and Redux for state management if applicable.

## Prerequisites

Before running the application, make sure you have the following installed:

- **Node.js** (v14.x or later)
- **npm** or **yarn**

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd <project-directory>
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm start
```

The app should now be running at `http://localhost:3000`.

## Overview of `main.jsx`

The `main.jsx` file is typically responsible for rendering the root component (often `App.jsx`) into the DOM. Here’s a basic structure of what `main.jsx` might look like:

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';  // Assuming App.jsx is your main component
import { BrowserRouter } from 'react-router-dom';  // Optional if using React Router

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

### Key Components

- **ReactDOM.createRoot**: This is used to initialize the React application and render it into the DOM.
- **App Component**: The main component where all the application logic and routing takes place.
- **BrowserRouter**: This is included if React Router is being used for client-side routing.

## Additional Libraries

Depending on the application, you might be using additional libraries. Common ones include:

- **React Router**: For handling routing in the application.
- **Redux**: For managing global state.
- **Axios**: For making HTTP requests to your backend API.

## File Structure

Here's an example of the file structure relevant to `main.jsx`:

```
/src
  ├── /components  # Reusable components
  ├── /pages       # Application pages
  ├── App.jsx      # Main component
  ├── main.jsx     # Entry point file
  └── index.html   # HTML file where the React app is mounted
```

## Building for Production

To create a production build, run the following command:

```bash
npm run build
```

This will create a `build/` folder with all the optimized production files, ready for deployment.

## License

This project is licensed under the MIT License.

---


---

# CartItems Component

## Overview
The `CartItems` component is part of a React shopping cart application. It displays the items that the user has added to their shopping cart, along with their details such as product title, price, quantity, and total cost per item. Users can also remove items from the cart using this component.

## Key Features
- Displays product details (title, price, quantity, total, and a remove button).
- Integrates with the global `ShopContext` for state management.
- Allows users to remove items from their cart.

## File Structure
- **CartItems.jsx**: The main component file.
- **CartItems.css**: The stylesheet that handles the component's styling.
- **cart_cross_icon.png**: An icon for removing items from the cart.

## Dependencies
- **React**: Core library for building the user interface.
- **ShopContext**: Context API used for managing the state of the cart and its items.

## Usage

### Importing the Component
To use the `CartItems` component in your application:
```js
import { CartItems } from './path/to/CartItems';
```

### Required Context
The component uses the following values from the `ShopContext`:
- **getTotalCartAmount**: Function to get the total cart amount.
- **all_product**: Array containing all available products.
- **cartItems**: Object holding the quantity of each item in the cart.
- **removeFromCart**: Function to remove an item from the cart.

### Example
```jsx
import React from 'react';
import { CartItems } from './components/CartItems';

function App() {
  return (
    <div className="App">
      <CartItems />
    </div>
  );
}

export default App;
```

## Component Logic

1. **Rendering Cart Items**: 
   The component maps through the `all_product` array and checks whether an item is present in the `cartItems` object. If the item has a quantity greater than zero, it displays the item in the cart.

2. **Removing Items**: 
   Each item has a remove button (rendered as an image) that, when clicked, triggers the `removeFromCart` function to remove the item from the cart.

## Styling
The component's layout is controlled through `CartItems.css`, which ensures proper formatting of the product grid.

---




---

# Navbar Component

## Overview
The `Navbar` component is a key part of the application's user interface, typically located at the top of the page. It allows users to navigate between different sections of the site, such as home, shop, cart, or other pages, depending on the app’s structure.

## Key Features
- Provides navigation links for different sections of the website.
- Displays the current cart item count (if integrated with a cart system).
- Can be customized with additional navigation links or branding.
  
## File Structure
- **Navbar.jsx**: The main functional component file responsible for rendering the navigation bar.
- **Navbar.css**: The stylesheet for handling the layout and design of the navigation bar.
  
## Dependencies
- **React**: The core library for building the user interface.
- **React Router (optional)**: If the navigation is dependent on routing between different pages.
- **Context (optional)**: If integrated with a context API to manage cart states or user data.

## Usage

### Importing the Component
To use the `Navbar` component, import it into your app:
```js
import { Navbar } from './path/to/Navbar';
```

### Example Usage
```jsx
import React from 'react';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* Other components like homepage, shop, etc. */}
    </div>
  );
}

export default App;
```

## Component Logic

1. **Navigation Links**: 
   The component typically renders a set of links or buttons that allow the user to navigate to different sections of the app.

2. **Cart Icon**: 
   If integrated with a shopping cart system, the `Navbar` might display a cart icon with the current number of items in the cart, using state from a context like `ShopContext` to track this data.

3. **Responsive Design**: 
   The `Navbar` is often designed to be responsive, adapting to different screen sizes (mobile, tablet, desktop).

## Styling
The `Navbar.css` file is used to control the layout, ensuring that elements are properly aligned and styled. Custom styles may include background colors, font styles, spacing, and hover effects for links.

## Customization
You can customize the `Navbar` component by adding:
- Additional navigation links.
- A logo or brand name in the header.
- Search functionality for a more feature-rich navigation experience.

---

---

```markdown

---
# DescriptionBox Component

The `DescriptionBox` component is a React functional component designed to display a description section with navigation tabs for "Description" and "Reviews." 

## Features

- **Description Section**: Displays a block of descriptive text.
- **Navigation Tabs**: Allows users to switch between "Description" and "Reviews" views.
- **Styling**: Includes basic CSS styling for layout and design.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd <project-directory>
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Ensure that you have `DescriptionBox.css` in the same directory as your `DescriptionBox` component file.

## Usage

Import and use the `DescriptionBox` component in your React application as follows:

```jsx
import React from 'react';
import { DescriptionBox } from './DescriptionBox';

function App() {
    return (
        <div className="App">
            <DescriptionBox />
        </div>
    );
}

export default App;
```

## CSS Styling

Ensure that the `DescriptionBox.css` file includes the following styles to apply proper formatting:

```css
.descrptionbox {
    /* Add your styling here */
}

.descriptionbox-navigator {
    /* Add your styling here */
}

.descriptionbox-nav-box {
    /* Add your styling here */
}

.descriptionbox-nav-box.fade {
    /* Add your styling here */
}

.descriptionbox-descripton {
    /* Add your styling here */
}
```



Contributions are welcome! Please submit a pull request or open an issue for any bugs or feature requests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```
---


---


```markdown
# Footer Component

The `Footer` component is a React functional component designed to display a footer section with a logo, navigation links, social media icons, and copyright information.

## Features

- **Logo**: Displays a logo image and company name.
- **Navigation Links**: Provides links to various sections such as Company, Products, Offices, About, and Contact.
- **Social Media Icons**: Includes icons for Instagram, Pinterest, and WhatsApp.
- **Copyright Information**: Displays copyright information.

## Installation## Contributing

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd <project-directory>
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Ensure that you have the following assets in the specified paths:
   - `footer_logo` - Located at `../Assets/logo_big.png`
   - `instagram_icon` - Located at `../Assets/instagram_icon.png`
   - `pintester_icon` - Located at `../Assets/pintester_icon.png`
   - `watsapp_icon` - Located at `../Assets/whatsapp_icon.png`

## Usage

Import and use the `Footer` component in your React application as follows:

```jsx
import React from 'react';
import { Footer } from './Footer';

function App() {
    return (
        <div className="App">
            <Footer />
        </div>
    );
}

export default App;
```

## CSS Styling

Ensure that the `Footer.css` file includes the following styles to apply proper formatting:

```css
.footer {
    /* Add your styling here */
}

.footer-logo {
    /* Add your styling here */
}

.footer-links {
    /* Add your styling here */
}

.footer-social-icon {
    /* Add your styling here */
}

.footer-icons-container {
    /* Add your styling here */
}

.footer-copyright {
    /* Add your styling here */
}
```
```
---

---


```markdown
# Hero Component

The `Hero` component is a React functional component designed to display a hero section with a promotional message, an icon, a button, and an image.

## Features

- **Heading**: Displays a main heading for the hero section.
- **Promotional Message**: Shows a message with a hand icon and a description of the new collection.
- **Button**: Includes a button with text and an arrow icon to link to the latest collection.
- **Hero Image**: Displays a large image on the right side of the hero section.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd <project-directory>
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Ensure that you have the following assets in the specified paths:
   - `hand_icon` - Located at `../Assets/hand_icon.png`
   - `arrow_icon` - Located at `../Assets/arrow.png`
   - `hero_image` - Located at `../Assets/hero_image.png`

## Usage

Import and use the `Hero` component in your React application as follows:

```jsx
import React from 'react';
import { Hero } from './Hero';

function App() {
    return (
        <div className="App">
            <Hero />
        </div>
    );
}

export default App;
```

## CSS Styling

Ensure that the `Hero.css` file includes the following styles to apply proper formatting:

```css
.hero {
    /* Add your styling here */
}

.hero-left {
    /* Add your styling here */
}

.hero-hand-icon {
    /* Add your styling here */
}

.hero-latest-btn {
    /* Add your styling here */
}

.hero-right {
    /* Add your styling here */
}
```

```

---

---

```markdown
# Item Component

The `Item` component is a React functional component used to display product items. It shows an image, product name, and price information, including both the new and old prices.

## Features

- **Product Image**: Displays an image of the product. Clicking the image will scroll to the top of the page.
- **Product Name**: Displays the name of the product.
- **Price Information**: Shows both the new and old prices of the product.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd <project-directory>
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

Import and use the `Item` component in your React application as follows:

```jsx
import React from 'react';
import { Item } from './Item';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    const product = {
        id: 1,
        image: 'path/to/image.png',
        name: 'Product Name',
        new_price: '99.99',
        old_price: '129.99'
    };

    return (
        <Router>
            <div className="App">
                <Item 
                    id={product.id} 
                    image={product.image} 
                    name={product.name} 
                    new_price={product.new_price} 
                    old_price={product.old_price} 
                />
                <Routes>
                    <Route path="/products/:id" element={<ProductDetail />} />
                </Routes>
            </div>
        </Router>
    );
}

function ProductDetail() {
    // Implementation of product detail page
    return <div>Product Detail Page</div>;
}

export default App;
```

## Props

The `Item` component accepts the following props:

- `id` (string): The unique identifier for the product. Used in the URL to navigate to the product detail page.
- `image` (string): The URL of the product image.
- `name` (string): The name of the product.
- `new_price` (string): The new price of the product.
- `old_price` (string): The old price of the product.

## CSS Styling

Ensure that you include styles for the `Item` component in your CSS file (`Item.css` or equivalent):

```css
.item {
    /* Add your styling here */
}

.item img {
    /* Add your styling here */
}

.item-prices {
    /* Add your styling here */
}

.item-price-new {
    /* Add your styling here */
}

.item-price-old {
    /* Add your styling here */
}
```

```
---

---


```markdown
# Navbar Component

The `Navbar` component is a React functional component designed to provide navigation for your application. It includes a logo, navigation links with dropdown functionality, and cart information.

## Features

- **Logo and Brand Name**: Displays a logo image and the brand name "SMART SHOPPER."
- **Navigation Menu**: Includes links to different sections (Shop, Mens, Womens, Kids) with dropdown functionality to show/hide the menu.
- **Cart Information**: Shows a cart icon with a count of total items in the cart.
- **Authentication**: Provides login/logout functionality based on the presence of an authentication token.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd <project-directory>
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Ensure that you have the following assets in the specified paths:
   - `logo` - Located at `../Assets/logo.png`
   - `cart_icon` - Located at `../Assets/cart_icon.png`
   - `nav_dropdown` - Located at `../Assets/nav_dropdown.png`

5. Make sure you have the `ShopContext` provider setup in your application.

## Usage

Import and use the `Navbar` component in your React application as follows:

```jsx
import React from 'react';
import { Navbar } from './Navbar';
import { ShopProvider } from '../../Context/ShopContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Router>
            <ShopProvider>
                <Navbar />
                <Routes>
                    {/* Your Routes here */}
                </Routes>
            </ShopProvider>
        </Router>
    );
}

export default App;
```

## Context

The `Navbar` component uses `ShopContext` to get the total number of items in the cart. Ensure that `ShopContext` is properly provided in your application.

## CSS Styling

Ensure that you include styles for the `Navbar` component in your CSS file (`Navbar.css`):

```css
.navbar {
    /* Add your styling here */
}

.nav-logo {
    /* Add your styling here */
}

.nav-dropdown {
    /* Add your styling here */
}

.nav-menu {
    /* Add your styling here */
}

.nav-menu-visible {
    /* Add your styling here */
}

.nav-login-cart {
    /* Add your styling here */
}

.nav-cart-count {
    /* Add your styling here */
}
```

```

---



---

---

```markdown
# NewCollections Component

The `NewCollections` component is a React functional component that fetches and displays a list of new collections from an API. Each collection item is rendered using the `Item` component.

## Features

- **Fetch Data**: Retrieves a list of new collections from an external API endpoint.
- **Display Collections**: Renders each item in the collection using the `Item` component, including its image, name, and pricing information.
- **Styling**: Includes basic styling to format the list of collections.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd <project-directory>
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

Import and use the `NewCollections` component in your React application as follows:

```jsx
import React from 'react';
import { NewCollections } from './NewCollections';

function App() {
    return (
        <div className="App">
            <NewCollections />
        </div>
    );
}

export default App;
```

## API Endpoint

The `NewCollections` component fetches data from the following endpoint:

- `https://smart-shopper-e79a.onrender.com/newcollections`

Ensure that this endpoint is available and returns a JSON array with the following properties for each item:

- `id` (string): Unique identifier for the product.
- `name` (string): Name of the product.
- `image` (string): URL of the product image.
- `new_price` (string): New price of the product.
- `old_price` (string): Old price of the product.

## CSS Styling

Ensure that you include styles for the `NewCollections` component in your CSS file (`NewCollections.css`):

```css
.new-collections {
    /* Add your styling here */
}

.collections {
    /* Add your styling here */
}
```


```

---

---

```markdown
# NewsLetter Component

The `NewsLetter` component is a React functional component designed to prompt users to subscribe to a newsletter. It includes an email input field and a subscription button.

## Features

- **Subscription Prompt**: Encourages users to subscribe to receive exclusive offers via email.
- **Email Input**: Allows users to enter their email address.
- **Subscribe Button**: Button to submit the email address for subscription.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd <project-directory>
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

Import and use the `NewsLetter` component in your React application as follows:

```jsx
import React from 'react';
import { NewsLetter } from './NewsLetter';

function App() {
    return (
        <div className="App">
            <NewsLetter />
        </div>
    );
}

export default App;
```

## CSS Styling

Ensure that you include styles for the `NewsLetter` component in your CSS file (`NewsLetter.css`):

```css
.news-letter {
    /* Add your styling here */
}

.news-letter input {
    /* Add your styling here */
}

.news-letter button {
    /* Add your styling here */
}
```

```

---


---

```markdown
# Offers Component

The `Offers` component is a React functional component designed to showcase exclusive offers. It includes a promotional message and an image.

## Features

- **Promotional Message**: Displays a heading and a subheading to highlight exclusive offers.
- **Call to Action**: Includes a button for users to check out the offers.
- **Image**: Displays an image related to the offers.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd <project-directory>
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Ensure that you have the following asset in the specified path:
   - `exclusive_image` - Located at `../Assets/exclusive_image.png`

## Usage

Import and use the `Offers` component in your React application as follows:

```jsx
import React from 'react';
import { Offers } from './Offers';

function App() {
    return (
        <div className="App">
            <Offers />
        </div>
    );
}

export default App;
```

## CSS Styling

Ensure that you include styles for the `Offers` component in your CSS file (`Offers.css`):

```css
.offers {
    /* Add your styling here */
}

.offers-left {
    /* Add your styling here */
}

.offers-right {
    /* Add your styling here */
}

.offers-right img {
    /* Add your styling here */
}

button {
    /* Add your styling here */
}
```

```

---

---

```markdown
# Popular Component

The `Popular` component is a React functional component that displays a list of popular products specifically in the women's category. It fetches data from an API and renders each product using the `Item` component.

## Features

- **Fetch Data**: Retrieves a list of popular products from an external API endpoint.
- **Display Products**: Renders each product with its image, name, and pricing information using the `Item` component.
- **Styling**: Includes basic styling for displaying the popular products.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd <project-directory>
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

Import and use the `Popular` component in your React application as follows:

```jsx
import React from 'react';
import { Popular } from './Popular';

function App() {
    return (
        <div className="App">
            <Popular />
        </div>
    );
}

export default App;
```

## API Endpoint

The `Popular` component fetches data from the following endpoint:

- `https://smart-shopper-e79a.onrender.com/popularinwomen`

Ensure that this endpoint is available and returns a JSON array with the following properties for each product:

- `id` (string): Unique identifier for the product.
- `name` (string): Name of the product.
- `image` (string): URL of the product image.
- `new_price` (string): New price of the product.
- `old_price` (string): Old price of the product.

## CSS Styling

Ensure that you include styles for the `Popular` component in your CSS file (`Popular.css`):

```css
.popular {
    /* Add your styling here */
}

.popular-item {
    /* Add your styling here */
}
```


```

---


---

```markdown
# ProductDisplay Component

The `ProductDisplay` component is a React functional component that presents detailed information about a product. It includes product images, ratings, pricing, size selection, and the option to add the product to the cart.

## Features

- **Product Images**: Displays multiple images of the product and a main image for larger view.
- **Rating**: Shows product rating with stars, with a visual representation of both filled and unfilled stars.
- **Pricing**: Displays both the old and new prices of the product.
- **Description**: Provides a brief description of the product.
- **Size Selection**: Allows users to select a size for the product.
- **Add to Cart**: Button to add the product to the shopping cart.
- **Category and Tags**: Displays product category and tags for better filtering.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd <project-directory>
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Ensure that you have the following assets in the specified paths:
   - `star_icon` - Located at `../Assets/star_icon.png`
   - `star_dull_icon` - Located at `../Assets/star_dull_icon.png`

5. Make sure you have the `ShopContext` provider setup in your application.

## Usage

Import and use the `ProductDisplay` component in your React application as follows:

```jsx
import React from 'react';
import { ProductDisplay } from './ProductDisplay';
import { ShopProvider } from '../../Context/ShopContext';

function App() {
    const product = {
        id: 1,
        name: 'Sample Product',
        image: 'path/to/image.png',
        old_price: '129.99',
        new_price: '99.99',
        // Other product details
    };

    return (
        <ShopProvider>
            <div className="App">
                <ProductDisplay products={product} />
            </div>
        </ShopProvider>
    );
}

export default App;
```

## Props

The `ProductDisplay` component accepts the following props:

- `products` (object): An object containing details of the product. It should include:
  - `id` (string): Unique identifier for the product.
  - `name` (string): Name of the product.
  - `image` (string): URL of the product image.
  - `old_price` (string): Old price of the product.
  - `new_price` (string): New price of the product.

## CSS Styling

Ensure that you include styles for the `ProductDisplay` component in your CSS file (`ProductDisplay.css`):

```css
.productdisplay {
    /* Add your styling here */
}

.productdisplay-left {
    /* Add your styling here */
}

.productdisplay-right {
    /* Add your styling here */
}

.productdisplay-main-img {
    /* Add your styling here */
}

.productdisplay-right-star img {
    /* Add your styling here */
}

.productdisplay-right-prices {
    /* Add your styling here */
}

button {
    /* Add your styling here */
}

.productdisplay-right-category {
    /* Add your styling here */
}
```


```

---

---

```markdown
# RelatedProducts Component

The `RelatedProducts` component is a React functional component that displays a list of related products. It uses hardcoded data from a local source and renders each product using the `Item` component.

## Features

- **Display Related Products**: Shows a list of related products below the main product details.
- **Rendering Items**: Each product is rendered using the `Item` component, displaying its image, name, and pricing information.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd <project-directory>
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Ensure that you have the `data_product` file in the specified path:
   - `data_product` - Located at `../Assets/data`

## Usage

Import and use the `RelatedProducts` component in your React application as follows:

```jsx
import React from 'react';
import { RelatedProducts } from './RelatedProducts';

function App() {
    return (
        <div className="App">
            <RelatedProducts />
        </div>
    );
}

export default App;
```

## Data Source

The `RelatedProducts` component uses hardcoded data from `data_product`. Ensure that this file contains an array of product objects with the following properties:

- `id` (string): Unique identifier for the product.
- `name` (string): Name of the product.
- `image` (string): URL of the product image.
- `new_price` (string): New price of the product.
- `old_price` (string): Old price of the product.

## CSS Styling

Ensure that you include styles for the `RelatedProducts` component in your CSS file (`RelatedProducts.css`):

```css
.relatdproducts {
    /* Add your styling here */
}

.relatedproducts-item {
    /* Add your styling here */
}
```


```

---

---

```markdown
# ShopContext

`ShopContext` is a React context that provides a way to manage and share shopping cart data and product information throughout your application. It includes functionalities to add and remove items from the cart, and compute total cart amounts.

## Features

- **Manage Cart Items**: Keep track of items in the cart and update quantities.
- **Fetch Product Data**: Load and store product information from an API.
- **Calculate Totals**: Compute the total number of items and total amount in the cart.
- **Context Provider**: Use the context provider to wrap your components and provide access to the context values.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd <project-directory>
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

Wrap your application in the `ShopContextProvider` to provide context values to your components. Here’s an example of how to use it:

```jsx
import React from 'react';
import ShopContextProvider from './path/to/ShopContextProvider';
import YourComponent from './path/to/YourComponent';

function App() {
    return (
        <ShopContextProvider>
            <YourComponent />
            {/* Other components */}
        </ShopContextProvider>
    );
}

export default App;
```

### Using the Context

To access the context values in your components, use the `useContext` hook:

```jsx
import React, { useContext } from 'react';
import { ShopContext } from './path/to/ShopContext';

function YourComponent() {
    const { getTotalCartItems, getTotalCartAmount, addToCart, removeFromCart, all_product, cartItems } = useContext(ShopContext);

    // Use the context values as needed
}
```

## Functions

### `addToCart(itemId)`

- **Description**: Adds the specified item to the cart.
- **Parameters**: `itemId` (number) - The ID of the item to add.
- **Effect**: Updates the cart state and makes a request to the server to add the item to the cart.

### `removeFromCart(itemId)`

- **Description**: Removes the specified item from the cart.
- **Parameters**: `itemId` (number) - The ID of the item to remove.
- **Effect**: Updates the cart state and makes a request to the server to remove the item from the cart.

### `getTotalCartAmount()`

- **Description**: Calculates the total amount of items in the cart.
- **Returns**: (number) - The total amount.

### `getTotalCartItems()`

- **Description**: Calculates the total number of items in the cart.
- **Returns**: (number) - The total number of items.

## API Endpoints

- **Fetch All Products**: `https://smart-shopper-e79a.onrender.com/allproducts`
- **Get Cart**: `https://smart-shopper-e79a.onrender.com/getcart`
- **Add to Cart**: `https://smart-shopper-e79a.onrender.com/addtocart`
- **Remove from Cart**: `https://smart-shopper-e79a.onrender.com/removefromcart`

## CSS Styling

This context provider does not include specific styling. Ensure your components using this context are styled appropriately.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any bugs or feature requests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```

---