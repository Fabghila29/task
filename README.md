# CAPSTONE PROJECT 2

## PROJECT TREE
<p>

    └── src/
        ├── App.css
        ├── App.js
        ├── App.test.js
        ├── index.css
        ├── index.js
        ├── logo.svg
        ├── reportWebVitals.js
        ├── setupTests.js
        ├── store/
        │   ├── controlSlice.js
        │   └── store.js
        └── components/
            ├── pages/
            │   ├── 1Landing.css
            │   ├── 1Landing.js
            │   ├── 2Products.css
            │   ├── 2Products.js
            │   ├── 3Cart.css
            │   └── 3Cart.js
            └── features/
                ├── 0Navbar.css
                ├── 0Navbar.js
                ├── 1Login.css
                ├── 1Login.js
                ├── 2Help.css
                ├── 2Help.js
                ├── 3ProductList.css
                ├── 3ProductList.js
                ├── 4ProductItem.css
                ├── 4ProductItem.js
                ├── 5CartList.css
                ├── 5CartList.js
                ├── 7notifications.css
                └── 7Notifications.js
</p>


## OPERATION

- User logs in passing through validation and unlocks all the functionalities.

- The user is presented with the landing version of the Home component.

- The Navbar will allow the user to go to the store or cart section of the website.

- The Products page (when logged in) displays a list of product items built on a copy of the one it actually operates on. This ensures that the store remains untouched but products will still maintain traceability and properties.
The user is always alerted by the modal system of the Notifications component whenever the products are dispatched to the cart.

- The Cart page will collect all of the bought items and display the current shipment selector, which when operated triggers an alert with all the current order info.
