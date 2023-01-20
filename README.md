# Nuxt Storefront

![Nuxt Storefront Banner](/.github/images/banner.png)

## Introduction

Nuxt Storefront is a batteries-included, production-ready, headless and open-source e-commerce template for Nuxt 3-powered storefronts.

## Features

🛍️ Search and browse products

💫 Shopify store branding

🔒 Customer authentication and registration

🛒 Manage shopping cart

## Developer Experience

💚 [Nuxt 3](https://nuxt.com) - SSR, File-based routing, auto imported components, etc.

⚡ [Vite](https://vitejs.dev) - Lightning fast dev experience and instant HMR

🦾 Full type-safety on the Storefront API, powered by Typescript

🧩 Powerful, auto-imported composables for Shopify functions

😃 Use any icon set you want from [Iconify](https://iconify.design), powered by [Nuxt Icon]('https://https://github.com/nuxt-modules/icon')

🔥 `<script setup>` syntax

## Plugins

- [Headless UI](https://headlessui.dev/) - Fully accessible UI components, designed to integrate beautifully with Tailwind CSS.

### Nuxt Modules

- [Vueuse](https://vueuse.org/) - Collection of essential Composition API utilities
- [Tailwind](https://tailwindcss.nuxt.dev) - Utility-first CSS framework

## IDE

Strongly recommended to use [VSCode](https://code.visualstudio.com/) with the [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) extension.

## Getting Started

This template aims to be a starting point for any developers looking to build a Shopify store with Nuxt 3, and don't want to put in the effort of building out the often-complex storefront logic. It is meant to be customized and extended to fit your demands, and not to be used as a drop-in solution.

### What's the deal with headless?

Headless is a term used to describe a decoupled architecture where the frontend and backend are separated. This allows for a more flexible and scalable architecture, and allows for both the frontend and backend to be developed independently.

Headless is best suited for store owners who are willing to get their hands dirty with the code, and are looking for a more flexible and customizable solution than what's available with Shopify themes.

### [Why Nuxt 3?](https://nuxt.com/docs/getting-started/introduction)

Nuxt is an open-source framework under MIT license for building modern and performant web applications that can be deployed on any platform running JavaScript.

### Who is this template for?

This template is primarily for developers who want a scalable, and customizable starting point for building a headless Shopify Storefront with Nuxt 3. Requires an intermediate understanding of Vue 3 or Nuxt 3.

## Roadmap

This template is still in active development, and is not yet ready for production use. The following features are planned for the initial release:

### MVP

- [ ] Header
  - [x] Logo
  - [x] Navigation
  - [x] Topbar
  - [ ] Mobile View
- [ ] Footer
  - [ ] Logo
  - [ ] Navigation
- [ ] Localization
  - [ ] Country Selector
  - [ ] Site reflects selected country
- [ ] Collections
  - [x] Infinite Scroll Pagination
  - [ ] Filtering
  - [ ] Sorting
  - [x] Product Grid
  - [x] SEO
- [ ] Product Pages
  - [x] Variant Selection
  - [x] Images Gallery
  - [ ] Recommendations
  - [x] SEO
- [x] Search
  - [x] Product Grid
  - [x] SEO
- [x] Cart
  - [x] Remove Items
  - [x] Update Quantity
  - [x] Checkout Button
  - [x] Summary
- [x] Shopify Pages
  - [x] Content
  - [x] SEO
- [ ] Customer Authentication
  - [ ] Login
  - [ ] Register
  - [ ] Logout
  - [ ] Reset Password
- [ ] Customer Dashboard
  - [ ] View Order History
  - [ ] Addresses
    - [ ] Remove address
    - [ ] Favorite address
    - [ ] Create address

### Nice to have

- [ ] Wishlist
- [ ] Product Quick View
- [ ] Product Quick Add
- [ ] Cart Drawer

If you feel capable of contributing to this template, please refer to the [contributing guide](#contributing).

If you have any feature requests, please open an issue.

## Configuration

Setting up the template is fairly straightforward, but requires a few steps to get up and running.

### Shopify Set up

To use this template, you need to first have a Shopify store and a Storefront API access token.

Assuming you already have a Shopify store, you can create a Storefront API access token by following these steps:

1. Go to the Settings page of your Shopify store
2. Navigate to the App Development section by clicking `Apps and sales channels` -> `Develop apps`
3. Click `Create an app`, fill out the name and set yourself as the developer
4. Under `Configuration`, configure the `Storefront API` section and enable it

> Note: For best functionality, you should allow the app to access all permissions under the `Storefront API` section.

### Project Set up

In the root of the project, create a `.env` file with the following variables:

```bash
SHOPIFY_ENDPOINT
SHOPIFY_ACCESS_TOKEN
```

Set `SHOPIFY_ENDPOINT` to the GraphQL API endpoint of your Shopify store. For example, if your store is `my-store.myshopify.com`, then your endpoint will be `https://my-store.myshopify.com/api/2022-10/graphql.json`.

Set `SHOPIFY_ACCESS_TOKEN` to the Storefront API access token provided by the app you created in the Shopify admin.

> Note: This template uses version `2022-10` of the Shopify Storefront API. If you are trying to use a different version, you will experience errors and unexpected behavior.

## Composables

### `useCart()`

#### Functions

`add()` - Add a product to the cart, accepts an array of `CartLineInput` objects as an argument

`remove()` - Remove a product from the cart, accepts an array of merchandise `ID`s returned from the line item.

`update()` - Update a product in the cart, accepts an array of `CartLineUpdateInput` objects as an argument

`attachBuyer()` - Attach a buyer to the cart, accepts a `CartBuyerIdentityInput` object as an argument

`detachBuyer()` - Detach the buyer from the cart, accepts no arguments

#### Computed Properties

`cartId` - The ID of the cart, returns a `string`

`cart` - The full cart object, returns a `Cart` object

`checkoutUrl` - The URL to the checkout page, returns a `string`

`lines` - The lines in the cart, returns a `CartLineConnection` object

`linesCount` - The number of lines in the cart, returns a `number`

`subTotal` - The subtotal of the cart before taxes and shipping, returns a `MoneyV2` object

`total` - The total of the cart, returns a `MoneyV2` object

`discounts` - An array of discounts applied to the cart, returns an array of `CartDiscountCode` objects

### `useShop()`

#### Computed Properties

`shop` - The shop object, returns a `Shop` object

### `useAuth()`

#### Functions

`getCustomer()` - Fetches the customer object of the current customer access token, accepts no arguments but requires a valid access token to be set in state

`createToken()` - Creates a customer access token and updates access token state, accepts a `CustomerAccessTokenCreateInput` object as an argument

`destroyToken()` - Destroys the current customer access token and sets access token state to null, accepts no arguments

`login()` - Creates a customer access token and sets the current customer in state, accepts `email` and `password` as an argument

`logout()` - Destroys the current customer access token, removes customer data from state and detaches buyer from cart with `useCart().detachBuyer`, accepts no arguments

#### Computed Properties

`accessToken` - The access token of the authenticated user, returns a `CustomerAccessToken` object and is stored in cookies.

`customer` - The customer object of the authenticated user, returns a `Customer` object and is stored in application state.

`currentToken` - The current access token of the authenticated user, returns a `string` from the `CustomerAccessToken` object and is stored in application state.

`isTokenExpired` - Whether the current access token is expired, returns a `boolean` and is stored in application state.

`isAuthenticated` - Returns true if a token exists and is not expired, returns a `boolean` and is stored in application state.

### `useLocalization()`

## Components

Most components used within this template are all under the `components` directory. No third-party ui frameworks are used that may restrict creativity and enforce a specific design system.

To customize the look and feel of the components, you can easily edit them in the `components` directory.

Documentation for each component will be made available in the future.

## Page Structure

This template uses file-based routing and covers most every page you would need for a basic Shopify store.

### Account

Primary dashboard for authenticated users to manage their account.

### Collections `/collections/[handle]`

Display a collection of products based on the `handle` parameter in the URL.

### Products `/products/[handle]`

Display a product based on the `handle` parameter in the URL.

### Blogs `/blogs/[blog]`

Displays a blog and list of articles based on the `handle` parameter in the URL.

### Articles `/blogs/[blog]/[handle]`

Displays an article based on the `handle` and `blog` parameters in the URL.

### Pages `/pages/[handle]`

Displays a page based on the `handle` parameter in the URL.

## Deployment

Steps to use this template with your Shopify store will be made available in the future.

> Note: Shopify is currently working on documentation for using headless storefronts with the platform. This template will be updated once the documentation is released.

## Contributing

1. Clone this repository
2. Install dependencies with `pnpm`, `yarn` or `npm`
3. Use `pnpm run dev` to start the development server

## License

[MIT License](./LICENSE)
