export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /**
   * A string containing a hexadecimal representation of a color.
   *
   * For example, "#6A8D48".
   */
  Color: string
  /**
   * Represents an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)-encoded date and time string.
   * For example, 3:50 pm on September 7, 2019 in the time zone of UTC (Coordinated Universal Time) is
   * represented as `"2019-09-07T15:50:00Z`".
   */
  DateTime: string
  /**
   * A signed decimal number, which supports arbitrary precision and is serialized as a string.
   *
   * Example values: `"29.99"`, `"29.999"`.
   */
  Decimal: string
  /**
   * A string containing HTML code. Refer to the [HTML spec](https://html.spec.whatwg.org/#elements-3) for a
   * complete list of HTML elements.
   *
   * Example value: `"<p>Grey cotton knit sweater.</p>"`.
   */
  HTML: string
  /** A monetary value string without a currency symbol or code. Example value: `"100.57"`. */
  Money: string
  /**
   * Represents an [RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986) and
   * [RFC 3987](https://datatracker.ietf.org/doc/html/rfc3987)-compliant URI string.
   *
   * For example, `"https://johns-apparel.myshopify.com"` is a valid URL. It includes a scheme (`https`) and a host
   * (`johns-apparel.myshopify.com`).
   */
  URL: string
}

/**
 * A version of the API, as defined by [Shopify API versioning](https://shopify.dev/api/usage/versioning).
 * Versions are commonly referred to by their handle (for example, `2021-10`).
 */
export interface ApiVersion {
  __typename?: 'ApiVersion'
  /** The human-readable name of the version. */
  displayName: Scalars['String']
  /** The unique identifier of an ApiVersion. All supported API versions have a date-based (YYYY-MM) or `unstable` handle. */
  handle: Scalars['String']
  /** Whether the version is actively supported by Shopify. Supported API versions are guaranteed to be stable. Unsupported API versions include unstable, release candidate, and end-of-life versions that are marked as unsupported. For more information, refer to [Versioning](https://shopify.dev/api/usage/versioning). */
  supported: Scalars['Boolean']
}

/** Details about the gift card used on the checkout. */
export type AppliedGiftCard = Node & {
  __typename?: 'AppliedGiftCard'
  /** The amount that was taken from the gift card by applying it. */
  amountUsed: MoneyV2
  /** The amount left on the gift card. */
  balance: MoneyV2
  /** A globally-unique identifier. */
  id: Scalars['ID']
  /** The last characters of the gift card. */
  lastCharacters: Scalars['String']
  /** The amount that was applied to the checkout in its currency. */
  presentmentAmountUsed: MoneyV2
}

/** An article in an online store blog. */
export type Article = HasMetafields & Node & {
  __typename?: 'Article'
  /**
   * The article's author.
   * @deprecated Use `authorV2` instead
   */
  author: ArticleAuthor
  /** The article's author. */
  authorV2?: Maybe<ArticleAuthor>
  /** The blog that the article belongs to. */
  blog: Blog
  /** List of comments posted on the article. */
  comments: CommentConnection
  /** Stripped content of the article, single line with HTML tags removed. */
  content: Scalars['String']
  /** The content of the article, complete with HTML formatting. */
  contentHtml: Scalars['HTML']
  /** Stripped excerpt of the article, single line with HTML tags removed. */
  excerpt?: Maybe<Scalars['String']>
  /** The excerpt of the article, complete with HTML formatting. */
  excerptHtml?: Maybe<Scalars['HTML']>
  /** A human-friendly unique string for the Article automatically generated from its title. */
  handle: Scalars['String']
  /** A globally-unique identifier. */
  id: Scalars['ID']
  /** The image associated with the article. */
  image?: Maybe<Image>
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<Metafield>
  /**
   * A paginated list of metafields associated with the resource.
   * @deprecated The `metafields` field will be removed in the future in favor of using [aliases](https://graphql.org/learn/queries/#aliases) with the `metafield` field.
   *
   */
  metafields: MetafieldConnection
  /** The date and time when the article was published. */
  publishedAt: Scalars['DateTime']
  /** The article’s SEO information. */
  seo?: Maybe<Seo>
  /** A categorization that a article can be tagged with. */
  tags: Array<Scalars['String']>
  /** The article’s name. */
  title: Scalars['String']
  /**
   * The url pointing to the article accessible from the web.
   * @deprecated Use `onlineStoreUrl` instead
   */
  url: Scalars['URL']
}

/** An article in an online store blog. */
export interface ArticleCommentsArgs {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** An article in an online store blog. */
export interface ArticleContentArgs {
  truncateAt?: Maybe<Scalars['Int']>
}

/** An article in an online store blog. */
export interface ArticleExcerptArgs {
  truncateAt?: Maybe<Scalars['Int']>
}

/** An article in an online store blog. */
export interface ArticleImageArgs {
  maxWidth?: Maybe<Scalars['Int']>
  maxHeight?: Maybe<Scalars['Int']>
  crop?: Maybe<CropRegion>
  scale?: Maybe<Scalars['Int']>
}

/** An article in an online store blog. */
export interface ArticleMetafieldArgs {
  namespace: Scalars['String']
  key: Scalars['String']
}

/** An article in an online store blog. */
export interface ArticleMetafieldsArgs {
  namespace?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** The author of an article. */
export interface ArticleAuthor {
  __typename?: 'ArticleAuthor'
  /** The author's bio. */
  bio?: Maybe<Scalars['String']>
  /** The author’s email. */
  email: Scalars['String']
  /** The author's first name. */
  firstName: Scalars['String']
  /** The author's last name. */
  lastName: Scalars['String']
  /** The author's full name. */
  name: Scalars['String']
}

/** An auto-generated type for paginating through multiple Articles. */
export interface ArticleConnection {
  __typename?: 'ArticleConnection'
  /** A list of edges. */
  edges: Array<ArticleEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/** An auto-generated type which holds one Article and a cursor during pagination. */
export interface ArticleEdge {
  __typename?: 'ArticleEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of ArticleEdge. */
  node: Article
}

/** The set of valid sort keys for the Article query. */
export enum ArticleSortKeys {
  /** Sort by the `title` value. */
  Title = 'TITLE',
  /** Sort by the `blog_title` value. */
  BlogTitle = 'BLOG_TITLE',
  /** Sort by the `author` value. */
  Author = 'AUTHOR',
  /** Sort by the `updated_at` value. */
  UpdatedAt = 'UPDATED_AT',
  /** Sort by the `published_at` value. */
  PublishedAt = 'PUBLISHED_AT',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   */
  Relevance = 'RELEVANCE',
}

/** Represents a generic custom attribute. */
export interface Attribute {
  __typename?: 'Attribute'
  /** Key or name of the attribute. */
  key: Scalars['String']
  /** Value of the attribute. */
  value?: Maybe<Scalars['String']>
}

/** Specifies the input fields required for an attribute. */
export interface AttributeInput {
  /** Key or name of the attribute. */
  key: Scalars['String']
  /** Value of the attribute. */
  value: Scalars['String']
}

/** Automatic discount applications capture the intentions of a discount that was automatically applied. */
export type AutomaticDiscountApplication = DiscountApplication & {
  __typename?: 'AutomaticDiscountApplication'
  /** The method by which the discount's value is allocated to its entitled items. */
  allocationMethod: DiscountApplicationAllocationMethod
  /** Which lines of targetType that the discount is allocated over. */
  targetSelection: DiscountApplicationTargetSelection
  /** The type of line that the discount is applicable towards. */
  targetType: DiscountApplicationTargetType
  /** The title of the application. */
  title: Scalars['String']
  /** The value of the discount application. */
  value: PricingValue
}

/** A collection of available shipping rates for a checkout. */
export interface AvailableShippingRates {
  __typename?: 'AvailableShippingRates'
  /**
   * Whether or not the shipping rates are ready.
   * The `shippingRates` field is `null` when this value is `false`.
   * This field should be polled until its value becomes `true`.
   */
  ready: Scalars['Boolean']
  /** The fetched shipping rates. `null` until the `ready` field is `true`. */
  shippingRates?: Maybe<Array<ShippingRate>>
}

/** An online store blog. */
export type Blog = HasMetafields & Node & {
  __typename?: 'Blog'
  /** Find an article by its handle. */
  articleByHandle?: Maybe<Article>
  /** List of the blog's articles. */
  articles: ArticleConnection
  /** The authors who have contributed to the blog. */
  authors: Array<ArticleAuthor>
  /** A human-friendly unique string for the Blog automatically generated from its title. */
  handle: Scalars['String']
  /** A globally-unique identifier. */
  id: Scalars['ID']
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<Metafield>
  /**
   * A paginated list of metafields associated with the resource.
   * @deprecated The `metafields` field will be removed in the future in favor of using [aliases](https://graphql.org/learn/queries/#aliases) with the `metafield` field.
   *
   */
  metafields: MetafieldConnection
  /** The blog's SEO information. */
  seo?: Maybe<Seo>
  /** The blogs’s title. */
  title: Scalars['String']
  /**
   * The url pointing to the blog accessible from the web.
   * @deprecated Use `onlineStoreUrl` instead
   */
  url: Scalars['URL']
}

/** An online store blog. */
export interface BlogArticleByHandleArgs {
  handle: Scalars['String']
}

/** An online store blog. */
export interface BlogArticlesArgs {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<ArticleSortKeys>
  query?: Maybe<Scalars['String']>
}

/** An online store blog. */
export interface BlogMetafieldArgs {
  namespace: Scalars['String']
  key: Scalars['String']
}

/** An online store blog. */
export interface BlogMetafieldsArgs {
  namespace?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** An auto-generated type for paginating through multiple Blogs. */
export interface BlogConnection {
  __typename?: 'BlogConnection'
  /** A list of edges. */
  edges: Array<BlogEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/** An auto-generated type which holds one Blog and a cursor during pagination. */
export interface BlogEdge {
  __typename?: 'BlogEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of BlogEdge. */
  node: Blog
}

/** The set of valid sort keys for the Blog query. */
export enum BlogSortKeys {
  /** Sort by the `handle` value. */
  Handle = 'HANDLE',
  /** Sort by the `title` value. */
  Title = 'TITLE',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   */
  Relevance = 'RELEVANCE',
}

/** Card brand, such as Visa or Mastercard, which can be used for payments. */
export enum CardBrand {
  /** Visa. */
  Visa = 'VISA',
  /** Mastercard. */
  Mastercard = 'MASTERCARD',
  /** Discover. */
  Discover = 'DISCOVER',
  /** American Express. */
  AmericanExpress = 'AMERICAN_EXPRESS',
  /** Diners Club. */
  DinersClub = 'DINERS_CLUB',
  /** JCB. */
  Jcb = 'JCB',
}

/**
 * A cart represents the merchandise that a buyer intends to purchase, and the estimated cost associated with the cart.
 * Learn how to interact with a cart during a customer's session. (https://shopify.dev/custom-storefronts/internationalization/international-pricing)
 */
export type Cart = Node & {
  __typename?: 'Cart'
  /** An attribute associated with the cart. */
  attribute?: Maybe<Attribute>
  /** The attributes associated with the cart. Attributes are represented as key-value pairs. */
  attributes: Array<Attribute>
  /** Information about the buyer that is interacting with the cart. */
  buyerIdentity: CartBuyerIdentity
  /** The URL of the checkout for the cart. */
  checkoutUrl: Scalars['URL']
  /**
   * The estimated costs that the buyer will pay at checkout.
   * The costs are subject to change and changes will be reflected at checkout.
   * The cost field uses the buyerIdentity field to determine international pricing. (https://shopify.dev/custom-storefronts/internationalization/international-pricing)
   */
  cost: CartCost
  /** The date and time when the cart was created. */
  createdAt: Scalars['DateTime']
  /**
   * The delivery groups available for the cart,
   * based on the buyer identity default delivery address preference or the default address of the logged-in customer.
   */
  deliveryGroups: CartDeliveryGroupConnection
  /** The discounts that have been applied to the entire cart. */
  discountAllocations: Array<CartDiscountAllocation>
  /** The case-insensitive discount codes that the customer added at checkout. */
  discountCodes: Array<CartDiscountCode>
  /** A globally-unique identifier. */
  id: Scalars['ID']
  /** A list of lines containing information about the items the customer intends to purchase. */
  lines: CartLineConnection
  /**
   * A note that is associated with the cart.
   * For example, the note can be a personalized message to the buyer.
   **/
  note?: Maybe<Scalars['String']>
  /** The total number of items in the cart. */
  totalQuantity: Scalars['Int']
  /** The date and time when the cart was updated. */
  updatedAt: Scalars['DateTime']
}

/** The discount codes applied to the cart. */
export interface CartDiscountCode {
  /** Whether the discount code is applicable to the cart's current contents. */
  applicable: Scalars['Boolean']
  /** The code for the discount. */
  code: Scalars['String']
}

/** Represents information about the buyer that is interacting with the cart. */
export interface CartBuyerIdentity {
  __typename?: 'CartBuyerIdentity'
  /** The country where the buyer is located. */
  countryCode?: Maybe<CountryCode>
  /** The customer account associated with the cart. */
  customer?: Maybe<Customer>
  /**
   * An ordered set of delivery addresses tied to the buyer that is interacting with the cart.
   * The rank of the preferences is determined by the order of the addresses in the array.
   * Preferences can be used to populate relevant fields in the checkout flow.
   */
  deliveryAddressPreferences: Array<DeliveryAddress>
  /** The email address of the buyer that is interacting with the cart. */
  email?: Maybe<Scalars['String']>
  /** The phone number of the buyer that is interacting with the cart. */
  phone?: Maybe<Scalars['String']>
}

/** A delivery address of the buyer that is interacting with the cart. */
export type DeliveryAddress = MailingAddress

/**
 * The costs that the buyer will pay at checkout.
 * The cart cost uses CartBuyerIdentity to determine
 * international pricing. (https://shopify.dev/custom-storefronts/internationalization/international-pricing)
*/
export interface CartCost {
  __typename?: 'CartCost'
  /**
   * The estimated amount, before taxes and discounts, for the customer to pay at checkout.
   * The checkout charge amount doesn't include any deferred payments that'll be paid at a later date.
   * If the cart has no deferred payments, then the checkout charge amount is equivalent to subtotalAmount.
   */
  checkoutChargeAmount: MoneyV2
  /** The amount, before taxes and cart-level discounts, for the customer to pay. */
  subtotalAmount: MoneyV2
  /** Whether the subtotal amount is estimated. */
  subtotalAmountEstimated: Scalars['Boolean']
  /** The total amount for the customer to pay. */
  totalAmount: MoneyV2
  /** Whether the total amount is estimated. */
  totalAmountEstimated: Scalars['Boolean']
  /** The duty amount for the customer to pay at checkout. */
  totalDutyAmount?: Maybe<MoneyV2>
  /** Whether the total duty amount is estimated. */
  totalDutyAmountEstimated: Scalars['Boolean']
  /** The tax amount for the customer to pay at checkout. */
  totalTaxAmount?: Maybe<MoneyV2>
  /** Whether the total tax amount is estimated. */
  totalTaxAmountEstimated: Scalars['Boolean']
}

/** An auto-generated type for paginating through multiple CartDeliveryGroups. */
export interface CartDeliveryGroupConnection {
  __typename?: 'CartDeliveryGroupConnection'
  /** A list of edges. */
  edges: Array<CartDeliveryGroupEdge>
  /** A list of the nodes contained in CartDeliveryGroupEdge. */
  nodes: Array<CartDeliveryGroup>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/** An auto-generated type which holds one CartDeliveryGroup and a cursor during pagination. */
export interface CartDeliveryGroupEdge {
  __typename?: 'CartDeliveryGroupEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of CartDeliveryGroupEdge. */
  node: CartDeliveryGroup
}

/** Information about the options available for one or more line items to be delivered to a specific address. */
export interface CartDeliveryGroup {
  __typename?: 'CartDeliveryGroup'
  /** A list of cart lines for the delivery group. */
  cartLines: CartLineConnection
  /** The destination address for the delivery group. */
  deliveryAddress: MailingAddress
  /** The delivery options available for the delivery group. */
  deliveryOptions: Array<CartDeliveryOption>
  /** The ID for the delivery group. */
  id: Scalars['ID']
  /** The selected delivery option for the delivery group. */
  selectedDeliveryOption?: Maybe<CartDeliveryOption>
}

/** An auto-generated type for paginating through multiple CartLines. */
export interface CartLineConnection {
  __typename?: 'CartLineConnection'
  /** A list of edges. */
  edges: Array<CartLineEdge>
  /** A list of the nodes contained in CartLineEdge. */
  nodes: Array<CartLine>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/** An auto-generated type which holds one CartLine and a cursor during pagination. */
export interface CartLineEdge {
  __typename?: 'CartLineEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of CartLineEdge. */
  node: CartLine
}

/** Represents information about the merchandise in the cart. */
export type CartLine = Node & {
  __typename?: 'CartLine'
  /** An attribute associated with the cart line. */
  attribute?: Maybe<Attribute>
  /** The attributes associated with the cart line. Attributes are represented as key-value pairs. */
  attributes: Array<Attribute>
  /** The cost of the merchandise that the buyer will pay for at checkout.
   * The costs are subject to change and changes will be reflected at checkout.
   * */
  cost: CartLineCost
  /** The discounts that have been applied to the cart line. */
  discountAllocations: Array<CartDiscountAllocation>
  /** A globally-unique identifier. */
  id: Scalars['ID']
  /** The merchandise that the buyer intends to purchase. */
  merchandise: Merchandise
  /** The quantity of the merchandise that the customer intends to purchase. */
  quantity: Scalars['Int']
  /** The selling plan associated with the cart line and the effect that each selling plan has on variants when they're purchased. */
  sellingPlanAllocation: SellingPlanAllocation
}

/** The merchandise to be purchased at checkout. */
export type Merchandise = ProductVariant

/** The discounts that have been applied to the cart line. */
export interface CartDiscountAllocation {
  /** The discounted amount that has been applied to the cart line. */
  discountedAmount: MoneyV2
}

/** The cost of the merchandise line that the buyer will pay at checkout. */
export interface CartLineCost {
  __typename?: 'CartLineCost'
  /** The amount of the merchandise line. */
  amountPerQuantity: MoneyV2
  /** The compare at amount of the merchandise line. */
  compareAtAmountPerQuantity?: Maybe<MoneyV2>
  /** The cost of the merchandise line before line-level discounts. */
  subtotalAmount: MoneyV2
  /** The total cost of the merchandise line. */
  totalAmount: MoneyV2
}

/** Information about a delivery option. */
export interface CartDeliveryOption {
  __typename?: 'CartDeliveryOption'
  /** The code of the delivery option. */
  code?: Maybe<Scalars['String']>
  /** The method for the delivery option. */
  deliveryMethodType: DeliveryMethodType
  /** The description of the delivery option. */
  description?: Maybe<Scalars['String']>
  /** The estimated cost for the delivery option. */
  estimatedCost: MoneyV2
  /** The unique identifier of the delivery option. */
  handle: Scalars['String']
  /** The title of the delivery option. */
  title?: Maybe<Scalars['String']>
}

/** List of different delivery method types. */
export enum DeliveryMethodType {
  /** Shipping. */
  SHIPPING = 'SHIPPING',
  /** Local Pickup. */
  LOCAL_PICKUP = 'LOCAL_PICKUP',
  /** Retail. */
  RETAIL = 'RETAIL',
  /** Local Delivery. */
  LOCAL = 'LOCAL',
  /** Shipping to a Pickup Point. */
  PICKUP_POINT = 'PICKUP_POINT',
  /** None. */
  NONE = 'NONE',
}

/** Specifies the input fields to update a line item on a cart. */
export interface CartLineUpdateInput {
  /** The identifier of the merchandise line. */
  id: Scalars['ID']
  /** The quantity of the line item. */
  quantity?: Maybe<Scalars['Int']>
  /** The identifier of the merchandise for the line item. */
  merchandiseId?: Maybe<Scalars['ID']>
  /** An array of key-value pairs that contains additional information about the merchandise line. */
  attributes?: Maybe<Array<AttributeInput>>
  /** The identifier of the selling plan that the merchandise is being purchased with. */
  sellingPlanId?: Maybe<Scalars['ID']>
}

/**
 * Specifies the input fields to update the buyer information associated with a cart.
 * Buyer identity is used to determine international pricing
 * and should match the customer's shipping address.
 */
export interface CartBuyerIdentityInput {
  /** The email address of the buyer that is interacting with the cart. */
  email?: Maybe<Scalars['String']>
  /** The phone number of the buyer that is interacting with the cart. */
  phone?: Maybe<Scalars['String']>
  /** The country where the buyer is located. */
  countryCode?: Maybe<CountryCode>
  /** The access token used to identify the customer associated with the cart. */
  customerAccessToken?: Maybe<Scalars['String']>
  /**
   * An ordered set of delivery addresses tied to the buyer that is interacting with the cart.
   * The rank of the preferences is determined by the order of the addresses in the array.
   * Preferences can be used to populate relevant fields in the checkout flow.
   */
  deliveryAddressPreferences?: Maybe<Array<DeliveryAddressInput>>
}

/** Return type for cartBuyerIdentityUpdate mutation. */
export interface CartBuyerIdentityUpdatePayload {
  __typename?: 'CartBuyerIdentityUpdatePayload'
  /** The updated cart. */
  cart?: Maybe<Cart>
  /** List of errors that occurred from executing the mutation. */
  userErrors: Array<CartUserError>
}

/** Represents an error that happens during execution of a cart mutation. */
export type CartUserError = DisplayableError & {
  __typename?: 'CartUserError'
  /** The error code. */
  code?: Maybe<CartErrorCode>
  /** The path to the input field that caused the error. */
  field?: Maybe<Array<Scalars['String']>>
  /** The error message. */
  message: Scalars['String']
}

/** Possible error codes that can be returned by CartUserError. */
export enum CartErrorCode {
  /** The input value is invalid. */
  INVALID = 'INVALID',
  /** The input value should be less than the maximum value allowed. */
  LESS_THAN = 'LESS_THAN',
  /** Merchandise line was not found in cart. */
  INVALID_MERCHANDISE_LINE = 'INVALID_MERCHANDISE_LINE',
  /** Missing discount code. */
  MISSING_DISCOUNT_CODE = 'MISSING_DISCOUNT_CODE',
  /** Missing note. */
  MISSING_NOTE = 'MISSING_NOTE',
}

/** The input fields for delivery address preferences. */
export interface DeliveryAddressInput {
  /** A delivery address preference of a buyer that is interacting with the cart. */
  deliveryAddress: MailingAddressInput
}

/** Return type for cartCreate mutation. */
export interface CartCreatePayload {
  __typename?: 'CartCreatePayload'
  /** The new cart. */
  cart?: Maybe<Cart>
  /** List of errors that occurred from executing the mutation. */
  userErrors: Array<CartUserError>
}

/** Specifies the input fields to create a cart. */
export interface CartInput {
  /** An array of key-value pairs that contains additional information about the cart. */
  attributes?: Maybe<Array<AttributeInput>>
  /** A list of merchandise lines to add to the cart. */
  lines?: Maybe<Array<CartLineInput>>
  /** The case-insensitive discount codes that the customer added at checkout. */
  discountCodes?: Maybe<Array<Scalars['String']>>
  /** A note that is associated with the cart. For example, the note can be a personalized message to the buyer. */
  note?: Maybe<Scalars['String']>
  /**
   * The customer associated with the cart.
   * Used to determine [international pricing](https://shopify.dev/custom-storefronts/internationalization/international-pricing).
   * Buyer identity should match the customer's shipping address.
   */
  buyerIdentity?: Maybe<CartBuyerIdentityInput>
}

/** Specifies the input fields to create a merchandise line on a cart. */
export interface CartLineInput {
  /** An array of key-value pairs that contains additional information about the merchandise line. */
  attributes?: Maybe<Array<AttributeInput>>
  /** The quantity of the merchandise. */
  quantity?: Maybe<Scalars['Int']>
  /** The identifier of the merchandise that the buyer intends to purchase. */
  merchandiseId: Scalars['ID']
  /** The identifier of the selling plan that the merchandise is being purchased with. */
  sellingPlanId?: Maybe<Scalars['ID']>
}

/** Return type for cartLinesAdd mutation. */
export interface CartLinesAddPayload {
  __typename?: 'CartLinesAddPayload'
  /** The updated cart. */
  cart?: Maybe<Cart>
  /** List of errors that occurred from executing the mutation. */
  userErrors: Array<CartUserError>
}

/** Return type for cartLinesRemove mutation. */
export interface CartLinesRemovePayload {
  __typename?: 'CartLinesRemovePayload'
  /** The updated cart. */
  cart?: Maybe<Cart>
  /** List of errors that occurred from executing the mutation. */
  userErrors: Array<CartUserError>
}

/** Return type for cartLinesUpdate mutation. */
export interface CartLinesUpdatePayload {
  __typename?: 'CartLinesUpdatePayload'
  /** The updated cart. */
  cart?: Maybe<Cart>
  /** List of errors that occurred from executing the mutation. */
  userErrors: Array<CartUserError>
}

/** A container for all the information required to checkout items and pay. */
export type Checkout = Node & {
  __typename?: 'Checkout'
  /** The gift cards used on the checkout. */
  appliedGiftCards: Array<AppliedGiftCard>
  /**
   * The available shipping rates for this Checkout.
   * Should only be used when checkout `requiresShipping` is `true` and
   * the shipping address is valid.
   */
  availableShippingRates?: Maybe<AvailableShippingRates>
  /** The identity of the customer associated with the checkout. */
  buyerIdentity: CheckoutBuyerIdentity
  /** The date and time when the checkout was completed. */
  completedAt?: Maybe<Scalars['DateTime']>
  /** The date and time when the checkout was created. */
  createdAt: Scalars['DateTime']
  /** The currency code for the checkout. */
  currencyCode: CurrencyCode
  /** A list of extra information that is added to the checkout. */
  customAttributes: Array<Attribute>
  /**
   * The customer associated with the checkout.
   * @deprecated This field will always return null. If you have an authentication token for the customer, you can use the `customer` field on the query root to retrieve it.
   */
  customer?: Maybe<Customer>
  /** Discounts that have been applied on the checkout. */
  discountApplications: DiscountApplicationConnection
  /** The email attached to this checkout. */
  email?: Maybe<Scalars['String']>
  /** A globally-unique identifier. */
  id: Scalars['ID']
  /** A list of line item objects, each one containing information about an item in the checkout. */
  lineItems: CheckoutLineItemConnection
  /** The sum of all the prices of all the items in the checkout. Duties, taxes, shipping and discounts excluded. */
  lineItemsSubtotalPrice: MoneyV2
  /** The note associated with the checkout. */
  note?: Maybe<Scalars['String']>
  /** The resulting order from a paid checkout. */
  order?: Maybe<Order>
  /** The Order Status Page for this Checkout, null when checkout is not completed. */
  orderStatusUrl?: Maybe<Scalars['URL']>
  /** The amount left to be paid. This is equal to the cost of the line items, duties, taxes and shipping minus discounts and gift cards. */
  paymentDue: MoneyV2
  /**
   * Whether or not the Checkout is ready and can be completed. Checkouts may
   * have asynchronous operations that can take time to finish. If you want
   * to complete a checkout or ensure all the fields are populated and up to
   * date, polling is required until the value is true.
   */
  ready: Scalars['Boolean']
  /** States whether or not the fulfillment requires shipping. */
  requiresShipping: Scalars['Boolean']
  /** The shipping address to where the line items will be shipped. */
  shippingAddress?: Maybe<MailingAddress>
  /** The discounts that have been allocated onto the shipping line by discount applications. */
  shippingDiscountAllocations: Array<DiscountAllocation>
  /** Once a shipping rate is selected by the customer it is transitioned to a `shipping_line` object. */
  shippingLine?: Maybe<ShippingRate>
  /** Price of the checkout before duties, shipping and taxes. */
  subtotalPrice: MoneyV2
  /** Whether the checkout is tax exempt. */
  taxExempt: Scalars['Boolean']
  /** Whether taxes are included in the line item and shipping line prices. */
  taxesIncluded: Scalars['Boolean']
  /** The sum of all the duties applied to the line items in the checkout. */
  totalDuties?: Maybe<MoneyV2>
  /** The sum of all the prices of all the items in the checkout, duties, taxes and discounts included. */
  totalPrice: MoneyV2
  /** The sum of all the taxes applied to the line items and shipping lines in the checkout. */
  totalTax: MoneyV2
  /** The date and time when the checkout was last updated. */
  updatedAt: Scalars['DateTime']
  /** The url pointing to the checkout accessible from the web. */
  webUrl: Scalars['URL']
}

/** A container for all the information required to checkout items and pay. */
export interface CheckoutDiscountApplicationsArgs {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** A container for all the information required to checkout items and pay. */
export interface CheckoutLineItemsArgs {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** Specifies the fields required to update a checkout's attributes. */
export interface CheckoutAttributesUpdateInput {
  /** The text of an optional note that a shop owner can attach to the checkout. */
  note?: Maybe<Scalars['String']>
  /** A list of extra information that is added to the checkout. */
  customAttributes?: Maybe<Array<AttributeInput>>
  /**
   * Allows setting partial addresses on a Checkout, skipping the full validation of attributes.
   * The required attributes are city, province, and country.
   * Full validation of the addresses is still done at completion time. Defaults to `false` with
   * each operation.
   */
  allowPartialAddresses?: Maybe<Scalars['Boolean']>
}

/** Return type for `checkoutAttributesUpdate` mutation. */
export interface CheckoutAttributesUpdatePayload {
  __typename?: 'CheckoutAttributesUpdatePayload'
  /** The updated checkout object. */
  checkout: Checkout
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>
}

/** Specifies the fields required to update a checkout's attributes. */
export interface CheckoutAttributesUpdateV2Input {
  /** The text of an optional note that a shop owner can attach to the checkout. */
  note?: Maybe<Scalars['String']>
  /** A list of extra information that is added to the checkout. */
  customAttributes?: Maybe<Array<AttributeInput>>
  /**
   * Allows setting partial addresses on a Checkout, skipping the full validation of attributes.
   * The required attributes are city, province, and country.
   * Full validation of the addresses is still done at completion time. Defaults to `false` with
   * each operation.
   */
  allowPartialAddresses?: Maybe<Scalars['Boolean']>
}

/** Return type for `checkoutAttributesUpdateV2` mutation. */
export interface CheckoutAttributesUpdateV2Payload {
  __typename?: 'CheckoutAttributesUpdateV2Payload'
  /** The updated checkout object. */
  checkout?: Maybe<Checkout>
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>
}

/** The identity of the customer associated with the checkout. */
export interface CheckoutBuyerIdentity {
  __typename?: 'CheckoutBuyerIdentity'
  /** The country code for the checkout. For example, `CA`. */
  countryCode?: Maybe<CountryCode>
}

/** Specifies the identity of the customer associated with the checkout. */
export interface CheckoutBuyerIdentityInput {
  /**
   * The country code of one of the shop's
   * [enabled countries](https://help.shopify.com/en/manual/payments/shopify-payments/multi-currency/setup).
   * For example, `CA`. Including this field creates a checkout in the specified country's currency.
   */
  countryCode: CountryCode
}

/** Return type for `checkoutCompleteFree` mutation. */
export interface CheckoutCompleteFreePayload {
  __typename?: 'CheckoutCompleteFreePayload'
  /** The updated checkout object. */
  checkout?: Maybe<Checkout>
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>
}

/** Return type for `checkoutCompleteWithCreditCard` mutation. */
export interface CheckoutCompleteWithCreditCardPayload {
  __typename?: 'CheckoutCompleteWithCreditCardPayload'
  /** The checkout on which the payment was applied. */
  checkout: Checkout
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>
  /** A representation of the attempted payment. */
  payment?: Maybe<Payment>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>
}

/** Return type for `checkoutCompleteWithCreditCardV2` mutation. */
export interface CheckoutCompleteWithCreditCardV2Payload {
  __typename?: 'CheckoutCompleteWithCreditCardV2Payload'
  /** The checkout on which the payment was applied. */
  checkout?: Maybe<Checkout>
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>
  /** A representation of the attempted payment. */
  payment?: Maybe<Payment>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>
}

/** Return type for `checkoutCompleteWithTokenizedPayment` mutation. */
export interface CheckoutCompleteWithTokenizedPaymentPayload {
  __typename?: 'CheckoutCompleteWithTokenizedPaymentPayload'
  /** The checkout on which the payment was applied. */
  checkout: Checkout
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>
  /** A representation of the attempted payment. */
  payment?: Maybe<Payment>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>
}

/** Return type for `checkoutCompleteWithTokenizedPaymentV2` mutation. */
export interface CheckoutCompleteWithTokenizedPaymentV2Payload {
  __typename?: 'CheckoutCompleteWithTokenizedPaymentV2Payload'
  /** The checkout on which the payment was applied. */
  checkout?: Maybe<Checkout>
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>
  /** A representation of the attempted payment. */
  payment?: Maybe<Payment>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>
}

/** Return type for `checkoutCompleteWithTokenizedPaymentV3` mutation. */
export interface CheckoutCompleteWithTokenizedPaymentV3Payload {
  __typename?: 'CheckoutCompleteWithTokenizedPaymentV3Payload'
  /** The checkout on which the payment was applied. */
  checkout?: Maybe<Checkout>
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>
  /** A representation of the attempted payment. */
  payment?: Maybe<Payment>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>
}

/** Specifies the fields required to create a checkout. */
export interface CheckoutCreateInput {
  /** The email with which the customer wants to checkout. */
  email?: Maybe<Scalars['String']>
  /** A list of line item objects, each one containing information about an item in the checkout. */
  lineItems?: Maybe<Array<CheckoutLineItemInput>>
  /** The shipping address to where the line items will be shipped. */
  shippingAddress?: Maybe<MailingAddressInput>
  /** The text of an optional note that a shop owner can attach to the checkout. */
  note?: Maybe<Scalars['String']>
  /** A list of extra information that is added to the checkout. */
  customAttributes?: Maybe<Array<AttributeInput>>
  /**
   * Allows setting partial addresses on a Checkout, skipping the full validation of attributes.
   * The required attributes are city, province, and country.
   * Full validation of addresses is still done at completion time. Defaults to `null`.
   */
  allowPartialAddresses?: Maybe<Scalars['Boolean']>
  /**
   * The three-letter currency code of one of the shop's enabled presentment currencies.
   * Including this field creates a checkout in the specified currency. By default, new
   * checkouts are created in the shop's primary currency.
   *  This argument is deprecated: Use `country` field instead.
   */
  presentmentCurrencyCode?: Maybe<CurrencyCode>
  /** The identity of the customer associated with the checkout. */
  buyerIdentity?: Maybe<CheckoutBuyerIdentityInput>
}

/** Return type for `checkoutCreate` mutation. */
export interface CheckoutCreatePayload {
  __typename?: 'CheckoutCreatePayload'
  /** The new checkout object. */
  checkout?: Maybe<Checkout>
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>
  /** The checkout queue token. Available only to selected stores. */
  queueToken?: Maybe<Scalars['String']>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>
}

/** Return type for `checkoutCustomerAssociate` mutation. */
export interface CheckoutCustomerAssociatePayload {
  __typename?: 'CheckoutCustomerAssociatePayload'
  /** The updated checkout object. */
  checkout: Checkout
  /** The associated customer object. */
  customer?: Maybe<Customer>
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<UserError>
}

/** Return type for `checkoutCustomerAssociateV2` mutation. */
export interface CheckoutCustomerAssociateV2Payload {
  __typename?: 'CheckoutCustomerAssociateV2Payload'
  /** The updated checkout object. */
  checkout?: Maybe<Checkout>
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>
  /** The associated customer object. */
  customer?: Maybe<Customer>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>
}

/** Return type for `checkoutCustomerDisassociate` mutation. */
export interface CheckoutCustomerDisassociatePayload {
  __typename?: 'CheckoutCustomerDisassociatePayload'
  /** The updated checkout object. */
  checkout: Checkout
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>
}

/** Return type for `checkoutCustomerDisassociateV2` mutation. */
export interface CheckoutCustomerDisassociateV2Payload {
  __typename?: 'CheckoutCustomerDisassociateV2Payload'
  /** The updated checkout object. */
  checkout?: Maybe<Checkout>
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>
}

/** Return type for `checkoutDiscountCodeApply` mutation. */
export interface CheckoutDiscountCodeApplyPayload {
  __typename?: 'CheckoutDiscountCodeApplyPayload'
  /** The updated checkout object. */
  checkout: Checkout
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>
}

/** Return type for `checkoutDiscountCodeApplyV2` mutation. */
export interface CheckoutDiscountCodeApplyV2Payload {
  __typename?: 'CheckoutDiscountCodeApplyV2Payload'
  /** The updated checkout object. */
  checkout?: Maybe<Checkout>
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>
}

/** Return type for `checkoutDiscountCodeRemove` mutation. */
export interface CheckoutDiscountCodeRemovePayload {
  __typename?: 'CheckoutDiscountCodeRemovePayload'
  /** The updated checkout object. */
  checkout?: Maybe<Checkout>
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>
}

/** Return type for `checkoutEmailUpdate` mutation. */
export interface CheckoutEmailUpdatePayload {
  __typename?: 'CheckoutEmailUpdatePayload'
  /** The checkout object with the updated email. */
  checkout: Checkout
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>
}

/** Return type for `checkoutEmailUpdateV2` mutation. */
export interface CheckoutEmailUpdateV2Payload {
  __typename?: 'CheckoutEmailUpdateV2Payload'
  /** The checkout object with the updated email. */
  checkout?: Maybe<Checkout>
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>
}

/** Possible error codes that can be returned by `CheckoutUserError`. */
export enum CheckoutErrorCode {
  /** The input value is blank. */
  Blank = 'BLANK',
  /** The input value is invalid. */
  Invalid = 'INVALID',
  /** The input value is too long. */
  TooLong = 'TOO_LONG',
  /** The input value needs to be blank. */
  Present = 'PRESENT',
  /** The input value should be less than the maximum value allowed. */
  LessThan = 'LESS_THAN',
  /** The input value should be greater than or equal to the minimum value allowed. */
  GreaterThanOrEqualTo = 'GREATER_THAN_OR_EQUAL_TO',
  /** The input value should be less than or equal to the maximum value allowed. */
  LessThanOrEqualTo = 'LESS_THAN_OR_EQUAL_TO',
  /** Checkout is already completed. */
  AlreadyCompleted = 'ALREADY_COMPLETED',
  /** Checkout is locked. */
  Locked = 'LOCKED',
  /** Input value is not supported. */
  NotSupported = 'NOT_SUPPORTED',
  /** Input email contains an invalid domain name. */
  BadDomain = 'BAD_DOMAIN',
  /** Input Zip is invalid for country provided. */
  InvalidForCountry = 'INVALID_FOR_COUNTRY',
  /** Input Zip is invalid for country and province provided. */
  InvalidForCountryAndProvince = 'INVALID_FOR_COUNTRY_AND_PROVINCE',
  /** Invalid state in country. */
  InvalidStateInCountry = 'INVALID_STATE_IN_COUNTRY',
  /** Invalid province in country. */
  InvalidProvinceInCountry = 'INVALID_PROVINCE_IN_COUNTRY',
  /** Invalid region in country. */
  InvalidRegionInCountry = 'INVALID_REGION_IN_COUNTRY',
  /** Shipping rate expired. */
  ShippingRateExpired = 'SHIPPING_RATE_EXPIRED',
  /** Gift card cannot be applied to a checkout that contains a gift card. */
  GiftCardUnusable = 'GIFT_CARD_UNUSABLE',
  /** Gift card is disabled. */
  GiftCardDisabled = 'GIFT_CARD_DISABLED',
  /** Gift card code is invalid. */
  GiftCardCodeInvalid = 'GIFT_CARD_CODE_INVALID',
  /** Gift card has already been applied. */
  GiftCardAlreadyApplied = 'GIFT_CARD_ALREADY_APPLIED',
  /** Gift card currency does not match checkout currency. */
  GiftCardCurrencyMismatch = 'GIFT_CARD_CURRENCY_MISMATCH',
  /** Gift card is expired. */
  GiftCardExpired = 'GIFT_CARD_EXPIRED',
  /** Gift card has no funds left. */
  GiftCardDepleted = 'GIFT_CARD_DEPLETED',
  /** Gift card was not found. */
  GiftCardNotFound = 'GIFT_CARD_NOT_FOUND',
  /** Cart does not meet discount requirements notice. */
  CartDoesNotMeetDiscountRequirementsNotice = 'CART_DOES_NOT_MEET_DISCOUNT_REQUIREMENTS_NOTICE',
  /** Discount expired. */
  DiscountExpired = 'DISCOUNT_EXPIRED',
  /** Discount disabled. */
  DiscountDisabled = 'DISCOUNT_DISABLED',
  /** Discount limit reached. */
  DiscountLimitReached = 'DISCOUNT_LIMIT_REACHED',
  /** Discount not found. */
  DiscountNotFound = 'DISCOUNT_NOT_FOUND',
  /** Customer already used once per customer discount notice. */
  CustomerAlreadyUsedOncePerCustomerDiscountNotice = 'CUSTOMER_ALREADY_USED_ONCE_PER_CUSTOMER_DISCOUNT_NOTICE',
  /** Checkout is already completed. */
  Empty = 'EMPTY',
  /** Not enough in stock. */
  NotEnoughInStock = 'NOT_ENOUGH_IN_STOCK',
  /** Missing payment input. */
  MissingPaymentInput = 'MISSING_PAYMENT_INPUT',
  /** The amount of the payment does not match the value to be paid. */
  TotalPriceMismatch = 'TOTAL_PRICE_MISMATCH',
  /** Line item was not found in checkout. */
  LineItemNotFound = 'LINE_ITEM_NOT_FOUND',
  /** Unable to apply discount. */
  UnableToApply = 'UNABLE_TO_APPLY',
  /** Discount already applied. */
  DiscountAlreadyApplied = 'DISCOUNT_ALREADY_APPLIED',
  /** Throttled during checkout. */
  ThrottledDuringCheckout = 'THROTTLED_DURING_CHECKOUT',
  /** Queue token has expired. */
  ExpiredQueueToken = 'EXPIRED_QUEUE_TOKEN',
  /** Queue token is invalid. */
  InvalidQueueToken = 'INVALID_QUEUE_TOKEN',
  /** Cannot specify country and presentment currency code. */
  InvalidCountryAndCurrency = 'INVALID_COUNTRY_AND_CURRENCY',
}

/** Return type for `checkoutGiftCardApply` mutation. */
export interface CheckoutGiftCardApplyPayload {
  __typename?: 'CheckoutGiftCardApplyPayload'
  /** The updated checkout object. */
  checkout: Checkout
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>
}

/** Return type for `checkoutGiftCardRemove` mutation. */
export interface CheckoutGiftCardRemovePayload {
  __typename?: 'CheckoutGiftCardRemovePayload'
  /** The updated checkout object. */
  checkout: Checkout
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>
}

/** Return type for `checkoutGiftCardRemoveV2` mutation. */
export interface CheckoutGiftCardRemoveV2Payload {
  __typename?: 'CheckoutGiftCardRemoveV2Payload'
  /** The updated checkout object. */
  checkout?: Maybe<Checkout>
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>
}

/** Return type for `checkoutGiftCardsAppend` mutation. */
export interface CheckoutGiftCardsAppendPayload {
  __typename?: 'CheckoutGiftCardsAppendPayload'
  /** The updated checkout object. */
  checkout?: Maybe<Checkout>
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>
}

/** A single line item in the checkout, grouped by variant and attributes. */
export type CheckoutLineItem = Node & {
  __typename?: 'CheckoutLineItem'
  /** Extra information in the form of an array of Key-Value pairs about the line item. */
  customAttributes: Array<Attribute>
  /** The discounts that have been allocated onto the checkout line item by discount applications. */
  discountAllocations: Array<DiscountAllocation>
  /** A globally-unique identifier. */
  id: Scalars['ID']
  /** The quantity of the line item. */
  quantity: Scalars['Int']
  /** Title of the line item. Defaults to the product's title. */
  title: Scalars['String']
  /** Unit price of the line item. */
  unitPrice?: Maybe<MoneyV2>
  /** Product variant of the line item. */
  variant?: Maybe<ProductVariant>
}

/** An auto-generated type for paginating through multiple CheckoutLineItems. */
export interface CheckoutLineItemConnection {
  __typename?: 'CheckoutLineItemConnection'
  /** A list of edges. */
  edges: Array<CheckoutLineItemEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/** An auto-generated type which holds one CheckoutLineItem and a cursor during pagination. */
export interface CheckoutLineItemEdge {
  __typename?: 'CheckoutLineItemEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of CheckoutLineItemEdge. */
  node: CheckoutLineItem
}

/** Specifies the input fields to create a line item on a checkout. */
export interface CheckoutLineItemInput {
  /** Extra information in the form of an array of Key-Value pairs about the line item. */
  customAttributes?: Maybe<Array<AttributeInput>>
  /** The quantity of the line item. */
  quantity: Scalars['Int']
  /** The identifier of the product variant for the line item. */
  variantId: Scalars['ID']
}

/** Specifies the input fields to update a line item on the checkout. */
export interface CheckoutLineItemUpdateInput {
  /** The identifier of the line item. */
  id?: Maybe<Scalars['ID']>
  /** The variant identifier of the line item. */
  variantId?: Maybe<Scalars['ID']>
  /** The quantity of the line item. */
  quantity?: Maybe<Scalars['Int']>
  /** Extra information in the form of an array of Key-Value pairs about the line item. */
  customAttributes?: Maybe<Array<AttributeInput>>
}

/** Return type for `checkoutLineItemsAdd` mutation. */
export interface CheckoutLineItemsAddPayload {
  __typename?: 'CheckoutLineItemsAddPayload'
  /** The updated checkout object. */
  checkout?: Maybe<Checkout>
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>
}

/** Return type for `checkoutLineItemsRemove` mutation. */
export interface CheckoutLineItemsRemovePayload {
  __typename?: 'CheckoutLineItemsRemovePayload'
  /** The updated checkout object. */
  checkout?: Maybe<Checkout>
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>
}

/** Return type for `checkoutLineItemsReplace` mutation. */
export interface CheckoutLineItemsReplacePayload {
  __typename?: 'CheckoutLineItemsReplacePayload'
  /** The updated checkout object. */
  checkout?: Maybe<Checkout>
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<CheckoutUserError>
}

/** Return type for `checkoutLineItemsUpdate` mutation. */
export interface CheckoutLineItemsUpdatePayload {
  __typename?: 'CheckoutLineItemsUpdatePayload'
  /** The updated checkout object. */
  checkout?: Maybe<Checkout>
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>
}

/** Return type for `checkoutShippingAddressUpdate` mutation. */
export interface CheckoutShippingAddressUpdatePayload {
  __typename?: 'CheckoutShippingAddressUpdatePayload'
  /** The updated checkout object. */
  checkout: Checkout
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>
}

/** Return type for `checkoutShippingAddressUpdateV2` mutation. */
export interface CheckoutShippingAddressUpdateV2Payload {
  __typename?: 'CheckoutShippingAddressUpdateV2Payload'
  /** The updated checkout object. */
  checkout?: Maybe<Checkout>
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>
}

/** Return type for `checkoutShippingLineUpdate` mutation. */
export interface CheckoutShippingLineUpdatePayload {
  __typename?: 'CheckoutShippingLineUpdatePayload'
  /** The updated checkout object. */
  checkout?: Maybe<Checkout>
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<UserError>
}

/** Represents an error that happens during execution of a checkout mutation. */
export type CheckoutUserError = DisplayableError & {
  __typename?: 'CheckoutUserError'
  /** The error code. */
  code?: Maybe<CheckoutErrorCode>
  /** The path to the input field that caused the error. */
  field?: Maybe<Array<Scalars['String']>>
  /** The error message. */
  message: Scalars['String']
}

/** A collection represents a grouping of products that a shop owner can create to organize them or make their shops easier to browse. */
export type Collection = HasMetafields & Node & {
  __typename?: 'Collection'
  /** Stripped description of the collection, single line with HTML tags removed. */
  description: Scalars['String']
  /** The description of the collection, complete with HTML formatting. */
  descriptionHtml: Scalars['HTML']
  /**
   * A human-friendly unique string for the collection automatically generated from its title.
   * Limit of 255 characters.
   */
  handle: Scalars['String']
  /** A globally-unique identifier. */
  id: Scalars['ID']
  /** Image associated with the collection. */
  image?: Maybe<Image>
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<Metafield>
  /**
   * A paginated list of metafields associated with the resource.
   * @deprecated The `metafields` field will be removed in the future in favor of using [aliases](https://graphql.org/learn/queries/#aliases) with the `metafield` field.
   *
   */
  metafields: MetafieldConnection
  /** List of products in the collection. */
  products: ProductConnection
  /** The collection’s name. Limit of 255 characters. */
  title: Scalars['String']
  /** The date and time when the collection was last modified. */
  updatedAt: Scalars['DateTime']
}

/** A collection represents a grouping of products that a shop owner can create to organize them or make their shops easier to browse. */
export interface CollectionDescriptionArgs {
  truncateAt?: Maybe<Scalars['Int']>
}

/** A collection represents a grouping of products that a shop owner can create to organize them or make their shops easier to browse. */
export interface CollectionImageArgs {
  maxWidth?: Maybe<Scalars['Int']>
  maxHeight?: Maybe<Scalars['Int']>
  crop?: Maybe<CropRegion>
  scale?: Maybe<Scalars['Int']>
}

/** A collection represents a grouping of products that a shop owner can create to organize them or make their shops easier to browse. */
export interface CollectionMetafieldArgs {
  namespace: Scalars['String']
  key: Scalars['String']
}

/** A collection represents a grouping of products that a shop owner can create to organize them or make their shops easier to browse. */
export interface CollectionMetafieldsArgs {
  namespace?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** A collection represents a grouping of products that a shop owner can create to organize them or make their shops easier to browse. */
export interface CollectionProductsArgs {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<ProductCollectionSortKeys>
}

/** An auto-generated type for paginating through multiple Collections. */
export interface CollectionConnection {
  __typename?: 'CollectionConnection'
  /** A list of edges. */
  edges: Array<CollectionEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/** An auto-generated type which holds one Collection and a cursor during pagination. */
export interface CollectionEdge {
  __typename?: 'CollectionEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of CollectionEdge. */
  node: Collection
}

/** The set of valid sort keys for the Collection query. */
export enum CollectionSortKeys {
  /** Sort by the `title` value. */
  Title = 'TITLE',
  /** Sort by the `updated_at` value. */
  UpdatedAt = 'UPDATED_AT',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   */
  Relevance = 'RELEVANCE',
}

/** A comment on an article. */
export type Comment = Node & {
  __typename?: 'Comment'
  /** The comment’s author. */
  author: CommentAuthor
  /** Stripped content of the comment, single line with HTML tags removed. */
  content: Scalars['String']
  /** The content of the comment, complete with HTML formatting. */
  contentHtml: Scalars['HTML']
  /** A globally-unique identifier. */
  id: Scalars['ID']
}

/** A comment on an article. */
export interface CommentContentArgs {
  truncateAt?: Maybe<Scalars['Int']>
}

/** The author of a comment. */
export interface CommentAuthor {
  __typename?: 'CommentAuthor'
  /** The author's email. */
  email: Scalars['String']
  /** The author’s name. */
  name: Scalars['String']
}

/** An auto-generated type for paginating through multiple Comments. */
export interface CommentConnection {
  __typename?: 'CommentConnection'
  /** A list of edges. */
  edges: Array<CommentEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/** An auto-generated type which holds one Comment and a cursor during pagination. */
export interface CommentEdge {
  __typename?: 'CommentEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of CommentEdge. */
  node: Comment
}

/** A country. */
export interface Country {
  __typename?: 'Country'
  /** The currency of the country. */
  currency: Currency
  /** The ISO code of the country. */
  isoCode: CountryCode
  /** The name of the country. */
  name: Scalars['String']
  /** The unit system used in the country. */
  unitSystem: UnitSystem
}

/** A language. */
export interface Language {
  __typename?: 'Language'
  /** The name of the language in the language itself.
   * If the language uses capitalization, it is capitalized for a mid-sentence position.
   */
  endonymName: Scalars['String']
  /** The ISO code. */
  isoCode: LanguageCode
  /** The name of the language in the current language. */
  name: Scalars['String']
}

/**
 * The code designating a country/region, which generally follows ISO 3166-1 alpha-2 guidelines.
 * If a territory doesn't have a country code value in the `CountryCode` enum, it might be considered a subdivision
 * of another country. For example, the territories associated with Spain are represented by the country code `ES`,
 * and the territories associated with the United States of America are represented by the country code `US`.
 */
export enum CountryCode {
  /** Afghanistan. */
  Af = 'AF',
  /** Åland Islands. */
  Ax = 'AX',
  /** Albania. */
  Al = 'AL',
  /** Algeria. */
  Dz = 'DZ',
  /** Andorra. */
  Ad = 'AD',
  /** Angola. */
  Ao = 'AO',
  /** Anguilla. */
  Ai = 'AI',
  /** Antigua & Barbuda. */
  Ag = 'AG',
  /** Argentina. */
  Ar = 'AR',
  /** Armenia. */
  Am = 'AM',
  /** Aruba. */
  Aw = 'AW',
  /** Ascension Island. */
  Ac = 'AC',
  /** Australia. */
  Au = 'AU',
  /** Austria. */
  At = 'AT',
  /** Azerbaijan. */
  Az = 'AZ',
  /** Bahamas. */
  Bs = 'BS',
  /** Bahrain. */
  Bh = 'BH',
  /** Bangladesh. */
  Bd = 'BD',
  /** Barbados. */
  Bb = 'BB',
  /** Belarus. */
  By = 'BY',
  /** Belgium. */
  Be = 'BE',
  /** Belize. */
  Bz = 'BZ',
  /** Benin. */
  Bj = 'BJ',
  /** Bermuda. */
  Bm = 'BM',
  /** Bhutan. */
  Bt = 'BT',
  /** Bolivia. */
  Bo = 'BO',
  /** Bosnia & Herzegovina. */
  Ba = 'BA',
  /** Botswana. */
  Bw = 'BW',
  /** Bouvet Island. */
  Bv = 'BV',
  /** Brazil. */
  Br = 'BR',
  /** British Indian Ocean Territory. */
  Io = 'IO',
  /** Brunei. */
  Bn = 'BN',
  /** Bulgaria. */
  Bg = 'BG',
  /** Burkina Faso. */
  Bf = 'BF',
  /** Burundi. */
  Bi = 'BI',
  /** Cambodia. */
  Kh = 'KH',
  /** Canada. */
  Ca = 'CA',
  /** Cape Verde. */
  Cv = 'CV',
  /** Caribbean Netherlands. */
  Bq = 'BQ',
  /** Cayman Islands. */
  Ky = 'KY',
  /** Central African Republic. */
  Cf = 'CF',
  /** Chad. */
  Td = 'TD',
  /** Chile. */
  Cl = 'CL',
  /** China. */
  Cn = 'CN',
  /** Christmas Island. */
  Cx = 'CX',
  /** Cocos (Keeling) Islands. */
  Cc = 'CC',
  /** Colombia. */
  Co = 'CO',
  /** Comoros. */
  Km = 'KM',
  /** Congo - Brazzaville. */
  Cg = 'CG',
  /** Congo - Kinshasa. */
  Cd = 'CD',
  /** Cook Islands. */
  Ck = 'CK',
  /** Costa Rica. */
  Cr = 'CR',
  /** Croatia. */
  Hr = 'HR',
  /** Cuba. */
  Cu = 'CU',
  /** Curaçao. */
  Cw = 'CW',
  /** Cyprus. */
  Cy = 'CY',
  /** Czechia. */
  Cz = 'CZ',
  /** Côte d’Ivoire. */
  Ci = 'CI',
  /** Denmark. */
  Dk = 'DK',
  /** Djibouti. */
  Dj = 'DJ',
  /** Dominica. */
  Dm = 'DM',
  /** Dominican Republic. */
  Do = 'DO',
  /** Ecuador. */
  Ec = 'EC',
  /** Egypt. */
  Eg = 'EG',
  /** El Salvador. */
  Sv = 'SV',
  /** Equatorial Guinea. */
  Gq = 'GQ',
  /** Eritrea. */
  Er = 'ER',
  /** Estonia. */
  Ee = 'EE',
  /** Eswatini. */
  Sz = 'SZ',
  /** Ethiopia. */
  Et = 'ET',
  /** Falkland Islands. */
  Fk = 'FK',
  /** Faroe Islands. */
  Fo = 'FO',
  /** Fiji. */
  Fj = 'FJ',
  /** Finland. */
  Fi = 'FI',
  /** France. */
  Fr = 'FR',
  /** French Guiana. */
  Gf = 'GF',
  /** French Polynesia. */
  Pf = 'PF',
  /** French Southern Territories. */
  Tf = 'TF',
  /** Gabon. */
  Ga = 'GA',
  /** Gambia. */
  Gm = 'GM',
  /** Georgia. */
  Ge = 'GE',
  /** Germany. */
  De = 'DE',
  /** Ghana. */
  Gh = 'GH',
  /** Gibraltar. */
  Gi = 'GI',
  /** Greece. */
  Gr = 'GR',
  /** Greenland. */
  Gl = 'GL',
  /** Grenada. */
  Gd = 'GD',
  /** Guadeloupe. */
  Gp = 'GP',
  /** Guatemala. */
  Gt = 'GT',
  /** Guernsey. */
  Gg = 'GG',
  /** Guinea. */
  Gn = 'GN',
  /** Guinea-Bissau. */
  Gw = 'GW',
  /** Guyana. */
  Gy = 'GY',
  /** Haiti. */
  Ht = 'HT',
  /** Heard & McDonald Islands. */
  Hm = 'HM',
  /** Vatican City. */
  Va = 'VA',
  /** Honduras. */
  Hn = 'HN',
  /** Hong Kong SAR. */
  Hk = 'HK',
  /** Hungary. */
  Hu = 'HU',
  /** Iceland. */
  Is = 'IS',
  /** India. */
  In = 'IN',
  /** Indonesia. */
  Id = 'ID',
  /** Iran. */
  Ir = 'IR',
  /** Iraq. */
  Iq = 'IQ',
  /** Ireland. */
  Ie = 'IE',
  /** Isle of Man. */
  Im = 'IM',
  /** Israel. */
  Il = 'IL',
  /** Italy. */
  It = 'IT',
  /** Jamaica. */
  Jm = 'JM',
  /** Japan. */
  Jp = 'JP',
  /** Jersey. */
  Je = 'JE',
  /** Jordan. */
  Jo = 'JO',
  /** Kazakhstan. */
  Kz = 'KZ',
  /** Kenya. */
  Ke = 'KE',
  /** Kiribati. */
  Ki = 'KI',
  /** North Korea. */
  Kp = 'KP',
  /** Kosovo. */
  Xk = 'XK',
  /** Kuwait. */
  Kw = 'KW',
  /** Kyrgyzstan. */
  Kg = 'KG',
  /** Laos. */
  La = 'LA',
  /** Latvia. */
  Lv = 'LV',
  /** Lebanon. */
  Lb = 'LB',
  /** Lesotho. */
  Ls = 'LS',
  /** Liberia. */
  Lr = 'LR',
  /** Libya. */
  Ly = 'LY',
  /** Liechtenstein. */
  Li = 'LI',
  /** Lithuania. */
  Lt = 'LT',
  /** Luxembourg. */
  Lu = 'LU',
  /** Macao SAR. */
  Mo = 'MO',
  /** Madagascar. */
  Mg = 'MG',
  /** Malawi. */
  Mw = 'MW',
  /** Malaysia. */
  My = 'MY',
  /** Maldives. */
  Mv = 'MV',
  /** Mali. */
  Ml = 'ML',
  /** Malta. */
  Mt = 'MT',
  /** Martinique. */
  Mq = 'MQ',
  /** Mauritania. */
  Mr = 'MR',
  /** Mauritius. */
  Mu = 'MU',
  /** Mayotte. */
  Yt = 'YT',
  /** Mexico. */
  Mx = 'MX',
  /** Moldova. */
  Md = 'MD',
  /** Monaco. */
  Mc = 'MC',
  /** Mongolia. */
  Mn = 'MN',
  /** Montenegro. */
  Me = 'ME',
  /** Montserrat. */
  Ms = 'MS',
  /** Morocco. */
  Ma = 'MA',
  /** Mozambique. */
  Mz = 'MZ',
  /** Myanmar (Burma). */
  Mm = 'MM',
  /** Namibia. */
  Na = 'NA',
  /** Nauru. */
  Nr = 'NR',
  /** Nepal. */
  Np = 'NP',
  /** Netherlands. */
  Nl = 'NL',
  /** Netherlands Antilles. */
  An = 'AN',
  /** New Caledonia. */
  Nc = 'NC',
  /** New Zealand. */
  Nz = 'NZ',
  /** Nicaragua. */
  Ni = 'NI',
  /** Niger. */
  Ne = 'NE',
  /** Nigeria. */
  Ng = 'NG',
  /** Niue. */
  Nu = 'NU',
  /** Norfolk Island. */
  Nf = 'NF',
  /** North Macedonia. */
  Mk = 'MK',
  /** Norway. */
  No = 'NO',
  /** Oman. */
  Om = 'OM',
  /** Pakistan. */
  Pk = 'PK',
  /** Palestinian Territories. */
  Ps = 'PS',
  /** Panama. */
  Pa = 'PA',
  /** Papua New Guinea. */
  Pg = 'PG',
  /** Paraguay. */
  Py = 'PY',
  /** Peru. */
  Pe = 'PE',
  /** Philippines. */
  Ph = 'PH',
  /** Pitcairn Islands. */
  Pn = 'PN',
  /** Poland. */
  Pl = 'PL',
  /** Portugal. */
  Pt = 'PT',
  /** Qatar. */
  Qa = 'QA',
  /** Cameroon. */
  Cm = 'CM',
  /** Réunion. */
  Re = 'RE',
  /** Romania. */
  Ro = 'RO',
  /** Russia. */
  Ru = 'RU',
  /** Rwanda. */
  Rw = 'RW',
  /** St. Barthélemy. */
  Bl = 'BL',
  /** St. Helena. */
  Sh = 'SH',
  /** St. Kitts & Nevis. */
  Kn = 'KN',
  /** St. Lucia. */
  Lc = 'LC',
  /** St. Martin. */
  Mf = 'MF',
  /** St. Pierre & Miquelon. */
  Pm = 'PM',
  /** Samoa. */
  Ws = 'WS',
  /** San Marino. */
  Sm = 'SM',
  /** São Tomé & Príncipe. */
  St = 'ST',
  /** Saudi Arabia. */
  Sa = 'SA',
  /** Senegal. */
  Sn = 'SN',
  /** Serbia. */
  Rs = 'RS',
  /** Seychelles. */
  Sc = 'SC',
  /** Sierra Leone. */
  Sl = 'SL',
  /** Singapore. */
  Sg = 'SG',
  /** Sint Maarten. */
  Sx = 'SX',
  /** Slovakia. */
  Sk = 'SK',
  /** Slovenia. */
  Si = 'SI',
  /** Solomon Islands. */
  Sb = 'SB',
  /** Somalia. */
  So = 'SO',
  /** South Africa. */
  Za = 'ZA',
  /** South Georgia & South Sandwich Islands. */
  Gs = 'GS',
  /** South Korea. */
  Kr = 'KR',
  /** South Sudan. */
  Ss = 'SS',
  /** Spain. */
  Es = 'ES',
  /** Sri Lanka. */
  Lk = 'LK',
  /** St. Vincent & Grenadines. */
  Vc = 'VC',
  /** Sudan. */
  Sd = 'SD',
  /** Suriname. */
  Sr = 'SR',
  /** Svalbard & Jan Mayen. */
  Sj = 'SJ',
  /** Sweden. */
  Se = 'SE',
  /** Switzerland. */
  Ch = 'CH',
  /** Syria. */
  Sy = 'SY',
  /** Taiwan. */
  Tw = 'TW',
  /** Tajikistan. */
  Tj = 'TJ',
  /** Tanzania. */
  Tz = 'TZ',
  /** Thailand. */
  Th = 'TH',
  /** Timor-Leste. */
  Tl = 'TL',
  /** Togo. */
  Tg = 'TG',
  /** Tokelau. */
  Tk = 'TK',
  /** Tonga. */
  To = 'TO',
  /** Trinidad & Tobago. */
  Tt = 'TT',
  /** Tristan da Cunha. */
  Ta = 'TA',
  /** Tunisia. */
  Tn = 'TN',
  /** Turkey. */
  Tr = 'TR',
  /** Turkmenistan. */
  Tm = 'TM',
  /** Turks & Caicos Islands. */
  Tc = 'TC',
  /** Tuvalu. */
  Tv = 'TV',
  /** Uganda. */
  Ug = 'UG',
  /** Ukraine. */
  Ua = 'UA',
  /** United Arab Emirates. */
  Ae = 'AE',
  /** United Kingdom. */
  Gb = 'GB',
  /** United States. */
  Us = 'US',
  /** U.S. Outlying Islands. */
  Um = 'UM',
  /** Uruguay. */
  Uy = 'UY',
  /** Uzbekistan. */
  Uz = 'UZ',
  /** Vanuatu. */
  Vu = 'VU',
  /** Venezuela. */
  Ve = 'VE',
  /** Vietnam. */
  Vn = 'VN',
  /** British Virgin Islands. */
  Vg = 'VG',
  /** Wallis & Futuna. */
  Wf = 'WF',
  /** Western Sahara. */
  Eh = 'EH',
  /** Yemen. */
  Ye = 'YE',
  /** Zambia. */
  Zm = 'ZM',
  /** Zimbabwe. */
  Zw = 'ZW',
  /** Unknown Region. */
  Zz = 'ZZ',
}

/**
 * ISO 639-1 language codes supported by Shopify.
 */
export enum LanguageCode {
  /** Afrikaans. */
  AF = 'AF',
  /** Akan. */
  AK = 'AK',
  /** Amharic */
  AM = 'AM',
  /** Arabic. */
  AR = 'AR',
  /** Assamese */
  AS = 'AS',
  /** Azerbaijani */
  AZ = 'AZ',
  /** Belarusian */
  BE = 'BE',
  /** Bulgarian. */
  BG = 'BG',
  /** Bambara. */
  BM = 'BM',
  /** Bengla. */
  BN = 'BN',
  /** Tibetan. */
  BO = 'BO',
  /** Breton. */
  BR = 'BR',
  /** Bosnian. */
  BS = 'BS',
  /** Catalan. */
  CA = 'CA',
  /** Chechen. */
  CE = 'CE',
  /** Czech. */
  CS = 'CS',
  /** Welsh. */
  CY = 'CY',
  /** Danish. */
  DA = 'DA',
  /** German. */
  DE = 'DE',
  /** Dzongkha. */
  DZ = 'DZ',
  /** Ewe. */
  EE = 'EE',
  /** Greek. */
  EL = 'EL',
  /** English. */
  EN = 'EN',
  /** Esperanto. */
  EO = 'EO',
  /** Spanish. */
  ES = 'ES',
  /** Estonian. */
  ET = 'ET',
  /** Basque. */
  EU = 'EU',
  /** Persian. */
  FA = 'FA',
  /** Fulah. */
  FF = 'FF',
  /** Finnish. */
  FI = 'FI',
  /** Faroese. */
  FO = 'FO',
  /** French. */
  FR = 'FR',
  /** Western Frisian. */
  FY = 'FY',
  /** Irish. */
  GA = 'GA',
  /** Scottish Gaelic. */
  GD = 'GD',
  /** Galician. */
  GL = 'GL',
  /** Gujarati */
  GU = 'GU',
  /** Manx. */
  GV = 'GV',
  /** Hausa. */
  HA = 'HA',
  /** Hebrew. */
  HE = 'HE',
  /** Hindi. */
  HI = 'HI',
  /** Croatian. */
  HR = 'HR',
  /** Hungarian */
  HU = 'HU',
  /** Armenian. */
  HY = 'HY',
  /** Interlingua */
  IA = 'IA',
  /** Indonesian. */
  ID = 'ID',
  /** Igbo. */
  IG = 'IG',
  /** Sichuan Yi. */
  II = 'II',
  /** Icelandic. */
  IS = 'IS',
  /** Italian. */
  IT = 'IT',
  /** Japanese */
  JA = 'JA',
  /** Javanese. */
  JV = 'JV',
  /** Georgian. */
  KA = 'KA',
  /** Kikuyu */
  KI = 'KI',
  /** Kazakh. */
  KK = 'KK',
  /** Kalaallisut. */
  KL = 'KL',
  /** Khmer */
  KM = 'KM',
  /** Kannada. */
  KN = 'KN',
  /** Korean. */
  KO = 'KO',
  /** Kashmiri. */
  KS = 'KS',
  /** Kurdish. */
  KU = 'KU',
  /** Cornish. */
  KW = 'KW',
  /** Kyrgyz. */
  KY = 'KY',
  /** Luxembourgish */
  LB = 'LB',
  /** Ganda. */
  LG = 'LG',
  /** Lingala. */
  LN = 'LN',
  /** Lao. */
  LO = 'LO',
  /** Lithuanian. */
  LT = 'LT',
  /** Luba-Katanga */
  LU = 'LU',
  /** Latvian. */
  LV = 'LV',
  /** Malagasy. */
  MG = 'MG',
  /** Māori. */
  MI = 'MI',
  /** Macedonian. */
  MK = 'MK',
  /** Malayalam. */
  ML = 'ML',
  /** Mongolian. */
  MN = 'MN',
  /** Marathi. */
  MR = 'MR',
  /** Malay. */
  MS = 'MS',
  /** Maltese. */
  MT = 'MT',
  /** Burmese. */
  MY = 'MY',
  /** Norwegian (Bokmål). */
  NB = 'NB',
  /** North Ndebele. */
  ND = 'ND',
  /** Nepali. */
  NE = 'NE',
  /** Dutch. */
  NL = 'NL',
  /** Norwegian Nynorsk. */
  NN = 'NN',
  /** Norwegian. */
  NO = 'NO',
  /** Oromo. */
  OM = 'OM',
  /** Odia. */
  OR = 'OR',
  /** Ossetic. */
  OS = 'OS',
  /** Punjabi. */
  PA = 'PA',
  /** Polish. */
  PL = 'PL',
  /** Pashto. */
  PS = 'PS',
  /** Portuguese (Brazil). */
  PT_BR = 'PT_BR',
  /** Portuguese (Portugal). */
  PT_PT = 'PT_PT',
  /** Quechua. */
  QU = 'QU',
  /** Romansh. */
  RM = 'RM',
  /** Rundi */
  RN = 'RN',
  /** Romanian. */
  RO = 'RO',
  /** Russian. */
  RU = 'RU',
  /** Kinyarwanda. */
  RW = 'RW',
  /** Sindhi */
  SD = 'SD',
  /** Northern Sami. */
  SE = 'SE',
  /** Sango. */
  SG = 'SG',
  /** Sinhala. */
  SI = 'SI',
  /** Slovak. */
  SK = 'SK',
  /** Slovenian. */
  SL = 'SL',
  /** Shona. */
  SN = 'SN',
  /** Somali. */
  SO = 'SO',
  /** Albanian. */
  SQ = 'SQ',
  /** Serbian. */
  SR = 'SR',
  /** Sundanese */
  SU = 'SU',
  /** Swedish. */
  SV = 'SV',
  /** Swahili. */
  SW = 'SW',
  /** Tamil. */
  TA = 'TA',
  /** Telugu. */
  TE = 'TE',
  /** Tajik. */
  TG = 'TG',
  /** Thai. */
  TH = 'TH',
  /** Tigrinya. */
  TI = 'TI',
  /** Turkmen. */
  TK = 'TK',
  /** Tongan */
  TO = 'TO',
  /** Turkish. */
  TR = 'TR',
  /** Tatar */
  TT = 'TT',
  /** Uyghur */
  UG = 'UG',
  /** Ukrainian. */
  UK = 'UK',
  /** Urdu. */
  UR = 'UR',
  /** Uzbek. */
  UZ = 'UZ',
  /** Vietnamese. */
  VI = 'VI',
  /** Wolof. */
  WO = 'WO',
  /** Xhosa. */
  XH = 'XH',
  /** Yiddish. */
  YI = 'YI',
  /** Yoruba. */
  YO = 'YO',
  /** Chinese (Simplified). */
  ZH_CN = 'ZH_CN',
  /** Chinese (Traditional). */
  ZH_TW = 'ZH_TW',
  /** Zulu. */
  ZU = 'ZU',
  /** Chinese. */
  ZH = 'ZH',
  /** Portuguese. */
  PT = 'PT',
  /** Church Slavic. */
  CU = 'CU',
  /** Volapük. */
  VO = 'VO',
}

/** Credit card information used for a payment. */
export interface CreditCard {
  __typename?: 'CreditCard'
  /** The brand of the credit card. */
  brand?: Maybe<Scalars['String']>
  /** The expiry month of the credit card. */
  expiryMonth?: Maybe<Scalars['Int']>
  /** The expiry year of the credit card. */
  expiryYear?: Maybe<Scalars['Int']>
  /** The credit card's BIN number. */
  firstDigits?: Maybe<Scalars['String']>
  /** The first name of the card holder. */
  firstName?: Maybe<Scalars['String']>
  /** The last 4 digits of the credit card. */
  lastDigits?: Maybe<Scalars['String']>
  /** The last name of the card holder. */
  lastName?: Maybe<Scalars['String']>
  /** The masked credit card number with only the last 4 digits displayed. */
  maskedNumber?: Maybe<Scalars['String']>
}

/**
 * Specifies the fields required to complete a checkout with
 * a Shopify vaulted credit card payment.
 */
export interface CreditCardPaymentInput {
  /** The amount of the payment. */
  amount: Scalars['Money']
  /** A unique client generated key used to avoid duplicate charges. When a duplicate payment is found, the original is returned instead of creating a new one. For more information, refer to [Idempotent requests](https://shopify.dev/api/usage/idempotent-requests). */
  idempotencyKey: Scalars['String']
  /** The billing address for the payment. */
  billingAddress: MailingAddressInput
  /** The ID returned by Shopify's Card Vault. */
  vaultId: Scalars['String']
  /** Executes the payment in test mode if possible. Defaults to `false`. */
  test?: Maybe<Scalars['Boolean']>
}

/**
 * Specifies the fields required to complete a checkout with
 * a Shopify vaulted credit card payment.
 */
export interface CreditCardPaymentInputV2 {
  /** The amount and currency of the payment. */
  paymentAmount: MoneyInput
  /** A unique client generated key used to avoid duplicate charges. When a duplicate payment is found, the original is returned instead of creating a new one. For more information, refer to [Idempotent requests](https://shopify.dev/api/usage/idempotent-requests). */
  idempotencyKey: Scalars['String']
  /** The billing address for the payment. */
  billingAddress: MailingAddressInput
  /** The ID returned by Shopify's Card Vault. */
  vaultId: Scalars['String']
  /** Executes the payment in test mode if possible. Defaults to `false`. */
  test?: Maybe<Scalars['Boolean']>
}

/** The part of the image that should remain after cropping. */
export enum CropRegion {
  /** Keep the center of the image. */
  Center = 'CENTER',
  /** Keep the top of the image. */
  Top = 'TOP',
  /** Keep the bottom of the image. */
  Bottom = 'BOTTOM',
  /** Keep the left of the image. */
  Left = 'LEFT',
  /** Keep the right of the image. */
  Right = 'RIGHT',
}

/** A currency. */
export interface Currency {
  __typename?: 'Currency'
  /** The ISO code of the currency. */
  isoCode: CurrencyCode
  /** The name of the currency. */
  name: Scalars['String']
  /** The symbol of the currency. */
  symbol: Scalars['String']
}

/**
 * The three-letter currency codes that represent the world currencies used in stores. These include standard ISO 4217 codes, legacy codes,
 * and non-standard codes.
 */
export enum CurrencyCode {
  /** United States Dollars (USD). */
  Usd = 'USD',
  /** Euro (EUR). */
  Eur = 'EUR',
  /** United Kingdom Pounds (GBP). */
  Gbp = 'GBP',
  /** Canadian Dollars (CAD). */
  Cad = 'CAD',
  /** Afghan Afghani (AFN). */
  Afn = 'AFN',
  /** Albanian Lek (ALL). */
  All = 'ALL',
  /** Algerian Dinar (DZD). */
  Dzd = 'DZD',
  /** Angolan Kwanza (AOA). */
  Aoa = 'AOA',
  /** Argentine Pesos (ARS). */
  Ars = 'ARS',
  /** Armenian Dram (AMD). */
  Amd = 'AMD',
  /** Aruban Florin (AWG). */
  Awg = 'AWG',
  /** Australian Dollars (AUD). */
  Aud = 'AUD',
  /** Barbadian Dollar (BBD). */
  Bbd = 'BBD',
  /** Azerbaijani Manat (AZN). */
  Azn = 'AZN',
  /** Bangladesh Taka (BDT). */
  Bdt = 'BDT',
  /** Bahamian Dollar (BSD). */
  Bsd = 'BSD',
  /** Bahraini Dinar (BHD). */
  Bhd = 'BHD',
  /** Burundian Franc (BIF). */
  Bif = 'BIF',
  /** Belize Dollar (BZD). */
  Bzd = 'BZD',
  /** Bermudian Dollar (BMD). */
  Bmd = 'BMD',
  /** Bhutanese Ngultrum (BTN). */
  Btn = 'BTN',
  /** Bosnia and Herzegovina Convertible Mark (BAM). */
  Bam = 'BAM',
  /** Brazilian Real (BRL). */
  Brl = 'BRL',
  /** Bolivian Boliviano (BOB). */
  Bob = 'BOB',
  /** Botswana Pula (BWP). */
  Bwp = 'BWP',
  /** Brunei Dollar (BND). */
  Bnd = 'BND',
  /** Bulgarian Lev (BGN). */
  Bgn = 'BGN',
  /** Burmese Kyat (MMK). */
  Mmk = 'MMK',
  /** Cambodian Riel. */
  Khr = 'KHR',
  /** Cape Verdean escudo (CVE). */
  Cve = 'CVE',
  /** Cayman Dollars (KYD). */
  Kyd = 'KYD',
  /** Central African CFA Franc (XAF). */
  Xaf = 'XAF',
  /** Chilean Peso (CLP). */
  Clp = 'CLP',
  /** Chinese Yuan Renminbi (CNY). */
  Cny = 'CNY',
  /** Colombian Peso (COP). */
  Cop = 'COP',
  /** Comorian Franc (KMF). */
  Kmf = 'KMF',
  /** Congolese franc (CDF). */
  Cdf = 'CDF',
  /** Costa Rican Colones (CRC). */
  Crc = 'CRC',
  /** Croatian Kuna (HRK). */
  Hrk = 'HRK',
  /** Czech Koruny (CZK). */
  Czk = 'CZK',
  /** Danish Kroner (DKK). */
  Dkk = 'DKK',
  /** Dominican Peso (DOP). */
  Dop = 'DOP',
  /** East Caribbean Dollar (XCD). */
  Xcd = 'XCD',
  /** Egyptian Pound (EGP). */
  Egp = 'EGP',
  /** Ethiopian Birr (ETB). */
  Etb = 'ETB',
  /** CFP Franc (XPF). */
  Xpf = 'XPF',
  /** Fijian Dollars (FJD). */
  Fjd = 'FJD',
  /** Gambian Dalasi (GMD). */
  Gmd = 'GMD',
  /** Ghanaian Cedi (GHS). */
  Ghs = 'GHS',
  /** Guatemalan Quetzal (GTQ). */
  Gtq = 'GTQ',
  /** Guyanese Dollar (GYD). */
  Gyd = 'GYD',
  /** Georgian Lari (GEL). */
  Gel = 'GEL',
  /** Haitian Gourde (HTG). */
  Htg = 'HTG',
  /** Honduran Lempira (HNL). */
  Hnl = 'HNL',
  /** Hong Kong Dollars (HKD). */
  Hkd = 'HKD',
  /** Hungarian Forint (HUF). */
  Huf = 'HUF',
  /** Icelandic Kronur (ISK). */
  Isk = 'ISK',
  /** Indian Rupees (INR). */
  Inr = 'INR',
  /** Indonesian Rupiah (IDR). */
  Idr = 'IDR',
  /** Israeli New Shekel (NIS). */
  Ils = 'ILS',
  /** Iraqi Dinar (IQD). */
  Iqd = 'IQD',
  /** Jamaican Dollars (JMD). */
  Jmd = 'JMD',
  /** Japanese Yen (JPY). */
  Jpy = 'JPY',
  /** Jersey Pound. */
  Jep = 'JEP',
  /** Jordanian Dinar (JOD). */
  Jod = 'JOD',
  /** Kazakhstani Tenge (KZT). */
  Kzt = 'KZT',
  /** Kenyan Shilling (KES). */
  Kes = 'KES',
  /** Kuwaiti Dinar (KWD). */
  Kwd = 'KWD',
  /** Kyrgyzstani Som (KGS). */
  Kgs = 'KGS',
  /** Laotian Kip (LAK). */
  Lak = 'LAK',
  /** Latvian Lati (LVL). */
  Lvl = 'LVL',
  /** Lebanese Pounds (LBP). */
  Lbp = 'LBP',
  /** Lesotho Loti (LSL). */
  Lsl = 'LSL',
  /** Liberian Dollar (LRD). */
  Lrd = 'LRD',
  /** Lithuanian Litai (LTL). */
  Ltl = 'LTL',
  /** Malagasy Ariary (MGA). */
  Mga = 'MGA',
  /** Macedonia Denar (MKD). */
  Mkd = 'MKD',
  /** Macanese Pataca (MOP). */
  Mop = 'MOP',
  /** Malawian Kwacha (MWK). */
  Mwk = 'MWK',
  /** Maldivian Rufiyaa (MVR). */
  Mvr = 'MVR',
  /** Mexican Pesos (MXN). */
  Mxn = 'MXN',
  /** Malaysian Ringgits (MYR). */
  Myr = 'MYR',
  /** Mauritian Rupee (MUR). */
  Mur = 'MUR',
  /** Moldovan Leu (MDL). */
  Mdl = 'MDL',
  /** Moroccan Dirham. */
  Mad = 'MAD',
  /** Mongolian Tugrik. */
  Mnt = 'MNT',
  /** Mozambican Metical. */
  Mzn = 'MZN',
  /** Namibian Dollar. */
  Nad = 'NAD',
  /** Nepalese Rupee (NPR). */
  Npr = 'NPR',
  /** Netherlands Antillean Guilder. */
  Ang = 'ANG',
  /** New Zealand Dollars (NZD). */
  Nzd = 'NZD',
  /** Nicaraguan Córdoba (NIO). */
  Nio = 'NIO',
  /** Nigerian Naira (NGN). */
  Ngn = 'NGN',
  /** Norwegian Kroner (NOK). */
  Nok = 'NOK',
  /** Omani Rial (OMR). */
  Omr = 'OMR',
  /** Panamian Balboa (PAB). */
  Pab = 'PAB',
  /** Pakistani Rupee (PKR). */
  Pkr = 'PKR',
  /** Papua New Guinean Kina (PGK). */
  Pgk = 'PGK',
  /** Paraguayan Guarani (PYG). */
  Pyg = 'PYG',
  /** Peruvian Nuevo Sol (PEN). */
  Pen = 'PEN',
  /** Philippine Peso (PHP). */
  Php = 'PHP',
  /** Polish Zlotych (PLN). */
  Pln = 'PLN',
  /** Qatari Rial (QAR). */
  Qar = 'QAR',
  /** Romanian Lei (RON). */
  Ron = 'RON',
  /** Russian Rubles (RUB). */
  Rub = 'RUB',
  /** Rwandan Franc (RWF). */
  Rwf = 'RWF',
  /** Samoan Tala (WST). */
  Wst = 'WST',
  /** Saudi Riyal (SAR). */
  Sar = 'SAR',
  /** Serbian dinar (RSD). */
  Rsd = 'RSD',
  /** Seychellois Rupee (SCR). */
  Scr = 'SCR',
  /** Singapore Dollars (SGD). */
  Sgd = 'SGD',
  /** Sudanese Pound (SDG). */
  Sdg = 'SDG',
  /** Syrian Pound (SYP). */
  Syp = 'SYP',
  /** South African Rand (ZAR). */
  Zar = 'ZAR',
  /** South Korean Won (KRW). */
  Krw = 'KRW',
  /** South Sudanese Pound (SSP). */
  Ssp = 'SSP',
  /** Solomon Islands Dollar (SBD). */
  Sbd = 'SBD',
  /** Sri Lankan Rupees (LKR). */
  Lkr = 'LKR',
  /** Surinamese Dollar (SRD). */
  Srd = 'SRD',
  /** Swazi Lilangeni (SZL). */
  Szl = 'SZL',
  /** Swedish Kronor (SEK). */
  Sek = 'SEK',
  /** Swiss Francs (CHF). */
  Chf = 'CHF',
  /** Taiwan Dollars (TWD). */
  Twd = 'TWD',
  /** Thai baht (THB). */
  Thb = 'THB',
  /** Tanzanian Shilling (TZS). */
  Tzs = 'TZS',
  /** Trinidad and Tobago Dollars (TTD). */
  Ttd = 'TTD',
  /** Tunisian Dinar (TND). */
  Tnd = 'TND',
  /** Turkish Lira (TRY). */
  Try = 'TRY',
  /** Turkmenistani Manat (TMT). */
  Tmt = 'TMT',
  /** Ugandan Shilling (UGX). */
  Ugx = 'UGX',
  /** Ukrainian Hryvnia (UAH). */
  Uah = 'UAH',
  /** United Arab Emirates Dirham (AED). */
  Aed = 'AED',
  /** Uruguayan Pesos (UYU). */
  Uyu = 'UYU',
  /** Uzbekistan som (UZS). */
  Uzs = 'UZS',
  /** Vanuatu Vatu (VUV). */
  Vuv = 'VUV',
  /** Vietnamese đồng (VND). */
  Vnd = 'VND',
  /** West African CFA franc (XOF). */
  Xof = 'XOF',
  /** Yemeni Rial (YER). */
  Yer = 'YER',
  /** Zambian Kwacha (ZMW). */
  Zmw = 'ZMW',
  /** Belarusian Ruble (BYN). */
  Byn = 'BYN',
  /** Belarusian Ruble (BYR). */
  Byr = 'BYR',
  /** Djiboutian Franc (DJF). */
  Djf = 'DJF',
  /** Eritrean Nakfa (ERN). */
  Ern = 'ERN',
  /** Falkland Islands Pounds (FKP). */
  Fkp = 'FKP',
  /** Gibraltar Pounds (GIP). */
  Gip = 'GIP',
  /** Guinean Franc (GNF). */
  Gnf = 'GNF',
  /** Iranian Rial (IRR). */
  Irr = 'IRR',
  /** Kiribati Dollar (KID). */
  Kid = 'KID',
  /** Libyan Dinar (LYD). */
  Lyd = 'LYD',
  /** Mauritanian Ouguiya (MRU). */
  Mru = 'MRU',
  /** Sierra Leonean Leone (SLL). */
  Sll = 'SLL',
  /** Saint Helena Pounds (SHP). */
  Shp = 'SHP',
  /** Somali Shilling (SOS). */
  Sos = 'SOS',
  /** Sao Tome And Principe Dobra (STD). */
  Std = 'STD',
  /** Tajikistani Somoni (TJS). */
  Tjs = 'TJS',
  /** Tongan Pa'anga (TOP). */
  Top = 'TOP',
  /** Venezuelan Bolivares (VEF). */
  Vef = 'VEF',
  /** Venezuelan Bolivares (VES). */
  Ves = 'VES',
  /** Unrecognized currency. */
  Xxx = 'XXX',
}

/** A customer represents a customer account with the shop. Customer accounts store contact information for the customer, saving logged-in customers the trouble of having to provide it at every checkout. */
export type Customer = HasMetafields & {
  __typename?: 'Customer'
  /** Indicates whether the customer has consented to be sent marketing material via email. */
  acceptsMarketing: Scalars['Boolean']
  /** A list of addresses for the customer. */
  addresses: MailingAddressConnection
  /** The date and time when the customer was created. */
  createdAt: Scalars['DateTime']
  /** The customer’s default address. */
  defaultAddress?: Maybe<MailingAddress>
  /** The customer’s name, email or phone number. */
  displayName: Scalars['String']
  /** The customer’s email address. */
  email?: Maybe<Scalars['String']>
  /** The customer’s first name. */
  firstName?: Maybe<Scalars['String']>
  /** A unique identifier for the customer. */
  id: Scalars['ID']
  /** The customer's most recently updated, incomplete checkout. */
  lastIncompleteCheckout?: Maybe<Checkout>
  /** The customer’s last name. */
  lastName?: Maybe<Scalars['String']>
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<Metafield>
  /**
   * A paginated list of metafields associated with the resource.
   * @deprecated The `metafields` field will be removed in the future in favor of using [aliases](https://graphql.org/learn/queries/#aliases) with the `metafield` field.
   *
   */
  metafields: MetafieldConnection
  /** The orders associated with the customer. */
  orders: OrderConnection
  /** The customer’s phone number. */
  phone?: Maybe<Scalars['String']>
  /**
   * A comma separated list of tags that have been added to the customer.
   * Additional access scope required: unauthenticated_read_customer_tags.
   */
  tags: Array<Scalars['String']>
  /** The date and time when the customer information was updated. */
  updatedAt: Scalars['DateTime']
}

/** A customer represents a customer account with the shop. Customer accounts store contact information for the customer, saving logged-in customers the trouble of having to provide it at every checkout. */
export interface CustomerAddressesArgs {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** A customer represents a customer account with the shop. Customer accounts store contact information for the customer, saving logged-in customers the trouble of having to provide it at every checkout. */
export interface CustomerMetafieldArgs {
  namespace: Scalars['String']
  key: Scalars['String']
}

/** A customer represents a customer account with the shop. Customer accounts store contact information for the customer, saving logged-in customers the trouble of having to provide it at every checkout. */
export interface CustomerMetafieldsArgs {
  namespace?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** A customer represents a customer account with the shop. Customer accounts store contact information for the customer, saving logged-in customers the trouble of having to provide it at every checkout. */
export interface CustomerOrdersArgs {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<OrderSortKeys>
  query?: Maybe<Scalars['String']>
}

/** A CustomerAccessToken represents the unique token required to make modifications to the customer object. */
export interface CustomerAccessToken {
  __typename?: 'CustomerAccessToken'
  /** The customer’s access token. */
  accessToken: Scalars['String']
  /** The date and time when the customer access token expires. */
  expiresAt: Scalars['DateTime']
}

/** Specifies the input fields required to create a customer access token. */
export interface CustomerAccessTokenCreateInput {
  /** The email associated to the customer. */
  email: Scalars['String']
  /** The login password to be used by the customer. */
  password: Scalars['String']
}

/** Return type for `customerAccessTokenCreate` mutation. */
export interface CustomerAccessTokenCreatePayload {
  __typename?: 'CustomerAccessTokenCreatePayload'
  /** The newly created customer access token object. */
  customerAccessToken?: Maybe<CustomerAccessToken>
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<UserError>
}

/** Return type for `customerAccessTokenCreateWithMultipass` mutation. */
export interface CustomerAccessTokenCreateWithMultipassPayload {
  __typename?: 'CustomerAccessTokenCreateWithMultipassPayload'
  /** An access token object associated with the customer. */
  customerAccessToken?: Maybe<CustomerAccessToken>
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserError>
}

/** Return type for `customerAccessTokenDelete` mutation. */
export interface CustomerAccessTokenDeletePayload {
  __typename?: 'CustomerAccessTokenDeletePayload'
  /** The destroyed access token. */
  deletedAccessToken?: Maybe<Scalars['String']>
  /** ID of the destroyed customer access token. */
  deletedCustomerAccessTokenId?: Maybe<Scalars['String']>
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<UserError>
}

/** Return type for `customerAccessTokenRenew` mutation. */
export interface CustomerAccessTokenRenewPayload {
  __typename?: 'CustomerAccessTokenRenewPayload'
  /** The renewed customer access token object. */
  customerAccessToken?: Maybe<CustomerAccessToken>
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<UserError>
}

/** Return type for `customerActivateByUrl` mutation. */
export interface CustomerActivateByUrlPayload {
  __typename?: 'CustomerActivateByUrlPayload'
  /** The customer that was activated. */
  customer?: Maybe<Customer>
  /** A new customer access token for the customer. */
  customerAccessToken?: Maybe<CustomerAccessToken>
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserError>
}

/** Specifies the input fields required to activate a customer. */
export interface CustomerActivateInput {
  /** The activation token required to activate the customer. */
  activationToken: Scalars['String']
  /** New password that will be set during activation. */
  password: Scalars['String']
}

/** Return type for `customerActivate` mutation. */
export interface CustomerActivatePayload {
  __typename?: 'CustomerActivatePayload'
  /** The customer object. */
  customer?: Maybe<Customer>
  /** A newly created customer access token object for the customer. */
  customerAccessToken?: Maybe<CustomerAccessToken>
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<UserError>
}

/** Return type for `customerAddressCreate` mutation. */
export interface CustomerAddressCreatePayload {
  __typename?: 'CustomerAddressCreatePayload'
  /** The new customer address object. */
  customerAddress?: Maybe<MailingAddress>
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<UserError>
}

/** Return type for `customerAddressDelete` mutation. */
export interface CustomerAddressDeletePayload {
  __typename?: 'CustomerAddressDeletePayload'
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserError>
  /** ID of the deleted customer address. */
  deletedCustomerAddressId?: Maybe<Scalars['String']>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<UserError>
}

/** Return type for `customerAddressUpdate` mutation. */
export interface CustomerAddressUpdatePayload {
  __typename?: 'CustomerAddressUpdatePayload'
  /** The customer’s updated mailing address. */
  customerAddress?: Maybe<MailingAddress>
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<UserError>
}

/** The fields required to create a new customer. */
export interface CustomerCreateInput {
  /** The customer’s first name. */
  firstName?: Maybe<Scalars['String']>
  /** The customer’s last name. */
  lastName?: Maybe<Scalars['String']>
  /** The customer’s email. */
  email: Scalars['String']
  /**
   * A unique phone number for the customer.
   *
   * Formatted using E.164 standard. For example, _+16135551111_.
   */
  phone?: Maybe<Scalars['String']>
  /** The login password used by the customer. */
  password: Scalars['String']
  /** Indicates whether the customer has consented to be sent marketing material via email. */
  acceptsMarketing?: Maybe<Scalars['Boolean']>
}

/** Return type for `customerCreate` mutation. */
export interface CustomerCreatePayload {
  __typename?: 'CustomerCreatePayload'
  /** The created customer object. */
  customer?: Maybe<Customer>
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<UserError>
}

/** Return type for `customerDefaultAddressUpdate` mutation. */
export interface CustomerDefaultAddressUpdatePayload {
  __typename?: 'CustomerDefaultAddressUpdatePayload'
  /** The updated customer object. */
  customer?: Maybe<Customer>
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<UserError>
}

/** Possible error codes that can be returned by `CustomerUserError`. */
export enum CustomerErrorCode {
  /** The input value is blank. */
  Blank = 'BLANK',
  /** The input value is invalid. */
  Invalid = 'INVALID',
  /** The input value is already taken. */
  Taken = 'TAKEN',
  /** The input value is too long. */
  TooLong = 'TOO_LONG',
  /** The input value is too short. */
  TooShort = 'TOO_SHORT',
  /** Unidentified customer. */
  UnidentifiedCustomer = 'UNIDENTIFIED_CUSTOMER',
  /** Customer is disabled. */
  CustomerDisabled = 'CUSTOMER_DISABLED',
  /** Input password starts or ends with whitespace. */
  PasswordStartsOrEndsWithWhitespace = 'PASSWORD_STARTS_OR_ENDS_WITH_WHITESPACE',
  /** Input contains HTML tags. */
  ContainsHtmlTags = 'CONTAINS_HTML_TAGS',
  /** Input contains URL. */
  ContainsUrl = 'CONTAINS_URL',
  /** Invalid activation token. */
  TokenInvalid = 'TOKEN_INVALID',
  /** Customer already enabled. */
  AlreadyEnabled = 'ALREADY_ENABLED',
  /** Address does not exist. */
  NotFound = 'NOT_FOUND',
  /** Input email contains an invalid domain name. */
  BadDomain = 'BAD_DOMAIN',
  /** Multipass token is not valid. */
  InvalidMultipassRequest = 'INVALID_MULTIPASS_REQUEST',
}

/** Return type for `customerRecover` mutation. */
export interface CustomerRecoverPayload {
  __typename?: 'CustomerRecoverPayload'
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<UserError>
}

/** Return type for `customerResetByUrl` mutation. */
export interface CustomerResetByUrlPayload {
  __typename?: 'CustomerResetByUrlPayload'
  /** The customer object which was reset. */
  customer?: Maybe<Customer>
  /** A newly created customer access token object for the customer. */
  customerAccessToken?: Maybe<CustomerAccessToken>
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<UserError>
}

/** Specifies the fields required to reset a customer’s password. */
export interface CustomerResetInput {
  /** The reset token required to reset the customer’s password. */
  resetToken: Scalars['String']
  /** New password that will be set as part of the reset password process. */
  password: Scalars['String']
}

/** Return type for `customerReset` mutation. */
export interface CustomerResetPayload {
  __typename?: 'CustomerResetPayload'
  /** The customer object which was reset. */
  customer?: Maybe<Customer>
  /** A newly created customer access token object for the customer. */
  customerAccessToken?: Maybe<CustomerAccessToken>
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<UserError>
}

/** Specifies the fields required to update the Customer information. */
export interface CustomerUpdateInput {
  /** The customer’s first name. */
  firstName?: Maybe<Scalars['String']>
  /** The customer’s last name. */
  lastName?: Maybe<Scalars['String']>
  /** The customer’s email. */
  email?: Maybe<Scalars['String']>
  /**
   * A unique phone number for the customer.
   *
   * Formatted using E.164 standard. For example, _+16135551111_. To remove the phone number, specify `null`.
   */
  phone?: Maybe<Scalars['String']>
  /** The login password used by the customer. */
  password?: Maybe<Scalars['String']>
  /** Indicates whether the customer has consented to be sent marketing material via email. */
  acceptsMarketing?: Maybe<Scalars['Boolean']>
}

/** Return type for `customerUpdate` mutation. */
export interface CustomerUpdatePayload {
  __typename?: 'CustomerUpdatePayload'
  /** The updated customer object. */
  customer?: Maybe<Customer>
  /**
   * The newly created customer access token. If the customer's password is updated, all previous access tokens
   * (including the one used to perform this mutation) become invalid, and a new token is generated.
   */
  customerAccessToken?: Maybe<CustomerAccessToken>
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<UserError>
}

/** Represents an error that happens during execution of a customer mutation. */
export type CustomerUserError = DisplayableError & {
  __typename?: 'CustomerUserError'
  /** The error code. */
  code?: Maybe<CustomerErrorCode>
  /** The path to the input field that caused the error. */
  field?: Maybe<Array<Scalars['String']>>
  /** The error message. */
  message: Scalars['String']
}

/** Digital wallet, such as Apple Pay, which can be used for accelerated checkouts. */
export enum DigitalWallet {
  /** Apple Pay. */
  ApplePay = 'APPLE_PAY',
  /** Android Pay. */
  AndroidPay = 'ANDROID_PAY',
  /** Google Pay. */
  GooglePay = 'GOOGLE_PAY',
  /** Shopify Pay. */
  ShopifyPay = 'SHOPIFY_PAY',
}

/** An amount discounting the line that has been allocated by a discount. */
export interface DiscountAllocation {
  __typename?: 'DiscountAllocation'
  /** Amount of discount allocated. */
  allocatedAmount: MoneyV2
  /** The discount this allocated amount originated from. */
  discountApplication: DiscountApplication
}

/**
 * Discount applications capture the intentions of a discount source at
 * the time of application.
 */
export interface DiscountApplication {
  /** The method by which the discount's value is allocated to its entitled items. */
  allocationMethod: DiscountApplicationAllocationMethod
  /** Which lines of targetType that the discount is allocated over. */
  targetSelection: DiscountApplicationTargetSelection
  /** The type of line that the discount is applicable towards. */
  targetType: DiscountApplicationTargetType
  /** The value of the discount application. */
  value: PricingValue
}

/** The method by which the discount's value is allocated onto its entitled lines. */
export enum DiscountApplicationAllocationMethod {
  /** The value is spread across all entitled lines. */
  Across = 'ACROSS',
  /** The value is applied onto every entitled line. */
  Each = 'EACH',
  /** The value is specifically applied onto a particular line. */
  One = 'ONE',
}

/** An auto-generated type for paginating through multiple DiscountApplications. */
export interface DiscountApplicationConnection {
  __typename?: 'DiscountApplicationConnection'
  /** A list of edges. */
  edges: Array<DiscountApplicationEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/** An auto-generated type which holds one DiscountApplication and a cursor during pagination. */
export interface DiscountApplicationEdge {
  __typename?: 'DiscountApplicationEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of DiscountApplicationEdge. */
  node: DiscountApplication
}

/**
 * The lines on the order to which the discount is applied, of the type defined by
 * the discount application's `targetType`. For example, the value `ENTITLED`, combined with a `targetType` of
 * `LINE_ITEM`, applies the discount on all line items that are entitled to the discount.
 * The value `ALL`, combined with a `targetType` of `SHIPPING_LINE`, applies the discount on all shipping lines.
 */
export enum DiscountApplicationTargetSelection {
  /** The discount is allocated onto all the lines. */
  All = 'ALL',
  /** The discount is allocated onto only the lines that it's entitled for. */
  Entitled = 'ENTITLED',
  /** The discount is allocated onto explicitly chosen lines. */
  Explicit = 'EXPLICIT',
}

/** The type of line (i.e. line item or shipping line) on an order that the discount is applicable towards. */
export enum DiscountApplicationTargetType {
  /** The discount applies onto line items. */
  LineItem = 'LINE_ITEM',
  /** The discount applies onto shipping lines. */
  ShippingLine = 'SHIPPING_LINE',
}

/**
 * Discount code applications capture the intentions of a discount code at
 * the time that it is applied.
 */
export type DiscountCodeApplication = DiscountApplication & {
  __typename?: 'DiscountCodeApplication'
  /** The method by which the discount's value is allocated to its entitled items. */
  allocationMethod: DiscountApplicationAllocationMethod
  /** Specifies whether the discount code was applied successfully. */
  applicable: Scalars['Boolean']
  /** The string identifying the discount code that was used at the time of application. */
  code: Scalars['String']
  /** Which lines of targetType that the discount is allocated over. */
  targetSelection: DiscountApplicationTargetSelection
  /** The type of line that the discount is applicable towards. */
  targetType: DiscountApplicationTargetType
  /** The value of the discount application. */
  value: PricingValue
}

/** Represents an error in the input of a mutation. */
export interface DisplayableError {
  /** The path to the input field that caused the error. */
  field?: Maybe<Array<Scalars['String']>>
  /** The error message. */
  message: Scalars['String']
}

/** Represents a web address. */
export interface Domain {
  __typename?: 'Domain'
  /** The host name of the domain (eg: `example.com`). */
  host: Scalars['String']
  /** Whether SSL is enabled or not. */
  sslEnabled: Scalars['Boolean']
  /** The URL of the domain (eg: `https://example.com`). */
  url: Scalars['URL']
}

/** Represents a video hosted outside of Shopify. */
export type ExternalVideo = Media & Node & {
  __typename?: 'ExternalVideo'
  /** A word or phrase to share the nature or contents of a media. */
  alt?: Maybe<Scalars['String']>
  /**
   * The URL.
   * @deprecated Use `originUrl` instead
   */
  embeddedUrl: Scalars['URL']
  /** The host of the external video. */
  host: MediaHost
  /** A globally-unique identifier. */
  id: Scalars['ID']
  /** The media content type. */
  mediaContentType: MediaContentType
  /** The preview image for the media. */
  previewImage?: Maybe<Image>
}

/** Represents a single fulfillment in an order. */
export interface Fulfillment {
  __typename?: 'Fulfillment'
  /** List of the fulfillment's line items. */
  fulfillmentLineItems: FulfillmentLineItemConnection
  /** The name of the tracking company. */
  trackingCompany?: Maybe<Scalars['String']>
  /**
   * Tracking information associated with the fulfillment,
   * such as the tracking number and tracking URL.
   */
  trackingInfo: Array<FulfillmentTrackingInfo>
}

/** Represents a single fulfillment in an order. */
export interface FulfillmentFulfillmentLineItemsArgs {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** Represents a single fulfillment in an order. */
export interface FulfillmentTrackingInfoArgs {
  first?: Maybe<Scalars['Int']>
}

/** Represents a single line item in a fulfillment. There is at most one fulfillment line item for each order line item. */
export interface FulfillmentLineItem {
  __typename?: 'FulfillmentLineItem'
  /** The associated order's line item. */
  lineItem: OrderLineItem
  /** The amount fulfilled in this fulfillment. */
  quantity: Scalars['Int']
}

/** An auto-generated type for paginating through multiple FulfillmentLineItems. */
export interface FulfillmentLineItemConnection {
  __typename?: 'FulfillmentLineItemConnection'
  /** A list of edges. */
  edges: Array<FulfillmentLineItemEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/** An auto-generated type which holds one FulfillmentLineItem and a cursor during pagination. */
export interface FulfillmentLineItemEdge {
  __typename?: 'FulfillmentLineItemEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of FulfillmentLineItemEdge. */
  node: FulfillmentLineItem
}

/** Tracking information associated with the fulfillment. */
export interface FulfillmentTrackingInfo {
  __typename?: 'FulfillmentTrackingInfo'
  /** The tracking number of the fulfillment. */
  number?: Maybe<Scalars['String']>
  /** The URL to track the fulfillment. */
  url?: Maybe<Scalars['URL']>
}

/** Used to specify a geographical location. */
export interface GeoCoordinateInput {
  /** The coordinate's latitude value. */
  latitude: Scalars['Float']
  /** The coordinate's longitude value. */
  longitude: Scalars['Float']
}

/** Represents information about the metafields associated to the specified resource. */
export interface HasMetafields {
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<Metafield>
  /**
   * A paginated list of metafields associated with the resource.
   * @deprecated The `metafields` field will be removed in the future in favor of using [aliases](https://graphql.org/learn/queries/#aliases) with the `metafield` field.
   *
   */
  metafields: MetafieldConnection
}

/** Represents information about the metafields associated to the specified resource. */
export interface HasMetafieldsMetafieldArgs {
  namespace: Scalars['String']
  key: Scalars['String']
}

/** Represents information about the metafields associated to the specified resource. */
export interface HasMetafieldsMetafieldsArgs {
  namespace?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** Represents an image resource. */
export interface Image {
  __typename?: 'Image'
  /** A word or phrase to share the nature or contents of an image. */
  altText?: Maybe<Scalars['String']>
  /** The original height of the image in pixels. Returns `null` if the image is not hosted by Shopify. */
  height?: Maybe<Scalars['Int']>
  /** A unique identifier for the image. */
  id?: Maybe<Scalars['ID']>
  /**
   * The location of the original image as a URL.
   *
   * If there are any existing transformations in the original source URL, they will remain and not be stripped.
   * @deprecated Use `url` instead
   */
  originalSrc: Scalars['URL']
  /**
   * The location of the image as a URL.
   * @deprecated Use `url` instead
   */
  src: Scalars['URL']
  /**
   * The location of the transformed image as a URL.
   *
   * All transformation arguments are considered "best-effort". If they can be applied to an image, they will be.
   * Otherwise any transformations which an image type does not support will be ignored.
   * @deprecated Use `url(transform:)` instead
   */
  transformedSrc: Scalars['URL']
  /** The original width of the image in pixels. Returns `null` if the image is not hosted by Shopify. */
  width?: Maybe<Scalars['Int']>
}

/** Represents an image resource. */
export interface ImageTransformedSrcArgs {
  maxWidth?: Maybe<Scalars['Int']>
  maxHeight?: Maybe<Scalars['Int']>
  crop?: Maybe<CropRegion>
  scale?: Maybe<Scalars['Int']>
  preferredContentType?: Maybe<ImageContentType>
}

/** An auto-generated type for paginating through multiple Images. */
export interface ImageConnection {
  __typename?: 'ImageConnection'
  /** A list of edges. */
  edges: Array<ImageEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/** List of supported image content types. */
export enum ImageContentType {
  /** A PNG image. */
  Png = 'PNG',
  /** A JPG image. */
  Jpg = 'JPG',
  /** A WEBP image. */
  Webp = 'WEBP',
}

/** An auto-generated type which holds one Image and a cursor during pagination. */
export interface ImageEdge {
  __typename?: 'ImageEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of ImageEdge. */
  node: Image
}

/** Information about the localized experiences configured for the shop. */
export interface Localization {
  __typename?: 'Localization'
  /** The list of countries with enabled localized experiences. */
  availableCountries: Array<Country>
  /** The list of languages available for the active country. */
  availableLanguages: Array<Language>
  /** The country of the active localized experience. Use the `@inContext` directive to change this value. */
  country: Country
  /** The language of the active localized experience. Use the @inContext directive to change this value. */
  language: Language
}

/** Represents a location where product inventory is held. */
export type Location = Node & {
  __typename?: 'Location'
  /** The address of the location. */
  address: LocationAddress
  /** A globally-unique identifier. */
  id: Scalars['ID']
  /** The name of the location. */
  name: Scalars['String']
}

/** Represents the address of a location. */
export interface LocationAddress {
  __typename?: 'LocationAddress'
  /** The first line of the address for the location. */
  address1?: Maybe<Scalars['String']>
  /** The second line of the address for the location. */
  address2?: Maybe<Scalars['String']>
  /** The city of the location. */
  city?: Maybe<Scalars['String']>
  /** The country of the location. */
  country?: Maybe<Scalars['String']>
  /** The country code of the location. */
  countryCode?: Maybe<Scalars['String']>
  /** A formatted version of the address for the location. */
  formatted: Array<Scalars['String']>
  /** The latitude coordinates of the location. */
  latitude?: Maybe<Scalars['Float']>
  /** The longitude coordinates of the location. */
  longitude?: Maybe<Scalars['Float']>
  /** The phone number of the location. */
  phone?: Maybe<Scalars['String']>
  /** The province of the location. */
  province?: Maybe<Scalars['String']>
  /** The code for the province, state, or district of the address of the location. */
  provinceCode?: Maybe<Scalars['String']>
  /** The ZIP code of the location. */
  zip?: Maybe<Scalars['String']>
}

/** An auto-generated type for paginating through multiple Locations. */
export interface LocationConnection {
  __typename?: 'LocationConnection'
  /** A list of edges. */
  edges: Array<LocationEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/** An auto-generated type which holds one Location and a cursor during pagination. */
export interface LocationEdge {
  __typename?: 'LocationEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of LocationEdge. */
  node: Location
}

/** The set of valid sort keys for the Location query. */
export enum LocationSortKeys {
  /** Sort by the `id` value. */
  Id = 'ID',
  /** Sort by the `name` value. */
  Name = 'NAME',
  /** Sort by the `city` value. */
  City = 'CITY',
  /** Sort by the `distance` value. */
  Distance = 'DISTANCE',
}

/** Represents a mailing address for customers and shipping. */
export type MailingAddress = Node & {
  __typename?: 'MailingAddress'
  /** The first line of the address. Typically the street address or PO Box number. */
  address1?: Maybe<Scalars['String']>
  /** The second line of the address. Typically the number of the apartment, suite, or unit. */
  address2?: Maybe<Scalars['String']>
  /** The name of the city, district, village, or town. */
  city?: Maybe<Scalars['String']>
  /** The name of the customer's company or organization. */
  company?: Maybe<Scalars['String']>
  /** The name of the country. */
  country?: Maybe<Scalars['String']>
  /**
   * The two-letter code for the country of the address.
   *
   * For example, US.
   * @deprecated Use `countryCodeV2` instead
   */
  countryCode?: Maybe<Scalars['String']>
  /**
   * The two-letter code for the country of the address.
   *
   * For example, US.
   */
  countryCodeV2?: Maybe<CountryCode>
  /** The first name of the customer. */
  firstName?: Maybe<Scalars['String']>
  /** A formatted version of the address, customized by the provided arguments. */
  formatted: Array<Scalars['String']>
  /** A comma-separated list of the values for city, province, and country. */
  formattedArea?: Maybe<Scalars['String']>
  /** A globally-unique identifier. */
  id: Scalars['ID']
  /** The last name of the customer. */
  lastName?: Maybe<Scalars['String']>
  /** The latitude coordinate of the customer address. */
  latitude?: Maybe<Scalars['Float']>
  /** The longitude coordinate of the customer address. */
  longitude?: Maybe<Scalars['Float']>
  /** The full name of the customer, based on firstName and lastName. */
  name?: Maybe<Scalars['String']>
  /**
   * A unique phone number for the customer.
   *
   * Formatted using E.164 standard. For example, _+16135551111_.
   */
  phone?: Maybe<Scalars['String']>
  /** The region of the address, such as the province, state, or district. */
  province?: Maybe<Scalars['String']>
  /**
   * The two-letter code for the region.
   *
   * For example, ON.
   */
  provinceCode?: Maybe<Scalars['String']>
  /** The zip or postal code of the address. */
  zip?: Maybe<Scalars['String']>
}

/** Represents a mailing address for customers and shipping. */
export interface MailingAddressFormattedArgs {
  withName?: Maybe<Scalars['Boolean']>
  withCompany?: Maybe<Scalars['Boolean']>
}

/** An auto-generated type for paginating through multiple MailingAddresses. */
export interface MailingAddressConnection {
  __typename?: 'MailingAddressConnection'
  /** A list of edges. */
  edges: Array<MailingAddressEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/** An auto-generated type which holds one MailingAddress and a cursor during pagination. */
export interface MailingAddressEdge {
  __typename?: 'MailingAddressEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of MailingAddressEdge. */
  node: MailingAddress
}

/** Specifies the fields accepted to create or update a mailing address. */
export interface MailingAddressInput {
  /** The first line of the address. Typically the street address or PO Box number. */
  address1?: Maybe<Scalars['String']>
  /** The second line of the address. Typically the number of the apartment, suite, or unit. */
  address2?: Maybe<Scalars['String']>
  /** The name of the city, district, village, or town. */
  city?: Maybe<Scalars['String']>
  /** The name of the customer's company or organization. */
  company?: Maybe<Scalars['String']>
  /** The name of the country. */
  country?: Maybe<Scalars['String']>
  /** The first name of the customer. */
  firstName?: Maybe<Scalars['String']>
  /** The last name of the customer. */
  lastName?: Maybe<Scalars['String']>
  /**
   * A unique phone number for the customer.
   *
   * Formatted using E.164 standard. For example, _+16135551111_.
   */
  phone?: Maybe<Scalars['String']>
  /** The region of the address, such as the province, state, or district. */
  province?: Maybe<Scalars['String']>
  /** The zip or postal code of the address. */
  zip?: Maybe<Scalars['String']>
}

/** Manual discount applications capture the intentions of a discount that was manually created. */
export type ManualDiscountApplication = DiscountApplication & {
  __typename?: 'ManualDiscountApplication'
  /** The method by which the discount's value is allocated to its entitled items. */
  allocationMethod: DiscountApplicationAllocationMethod
  /** The description of the application. */
  description?: Maybe<Scalars['String']>
  /** Which lines of targetType that the discount is allocated over. */
  targetSelection: DiscountApplicationTargetSelection
  /** The type of line that the discount is applicable towards. */
  targetType: DiscountApplicationTargetType
  /** The title of the application. */
  title: Scalars['String']
  /** The value of the discount application. */
  value: PricingValue
}

/** Represents a media interface. */
export interface Media {
  /** A word or phrase to share the nature or contents of a media. */
  alt?: Maybe<Scalars['String']>
  /** The media content type. */
  mediaContentType: MediaContentType
  /** The preview image for the media. */
  previewImage?: Maybe<Image>
}

/** An auto-generated type for paginating through multiple Media. */
export interface MediaConnection {
  __typename?: 'MediaConnection'
  /** A list of edges. */
  edges: Array<MediaEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/** The possible content types for a media object. */
export enum MediaContentType {
  /** An externally hosted video. */
  ExternalVideo = 'EXTERNAL_VIDEO',
  /** A Shopify hosted image. */
  Image = 'IMAGE',
  /** A 3d model. */
  Model_3D = 'MODEL_3D',
  /** A Shopify hosted video. */
  Video = 'VIDEO',
}

/** An auto-generated type which holds one Media and a cursor during pagination. */
export interface MediaEdge {
  __typename?: 'MediaEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of MediaEdge. */
  node: Media
}

/** Host for a Media Resource. */
export enum MediaHost {
  /** Host for YouTube embedded videos. */
  Youtube = 'YOUTUBE',
  /** Host for Vimeo embedded videos. */
  Vimeo = 'VIMEO',
}

/** Represents a Shopify hosted image. */
export type MediaImage = Media & Node & {
  __typename?: 'MediaImage'
  /** A word or phrase to share the nature or contents of a media. */
  alt?: Maybe<Scalars['String']>
  /** A globally-unique identifier. */
  id: Scalars['ID']
  /** The image for the media. */
  image?: Maybe<Image>
  /** The media content type. */
  mediaContentType: MediaContentType
  /** The preview image for the media. */
  previewImage?: Maybe<Image>
}

/**
 * The generic file resource lets you manage files in a merchant’s store.
 * Generic files include any file that doesn’t fit into a designated type such as image or video.
 * Example: PDF, JSON.
 * */
export type GenericFile = Node & {
  __typename?: 'GenericFile'
  /** A word or phrase to indicate the contents of a file. */
  alt?: Maybe<Scalars['String']>
  /** A globally-unique identifier. */
  id: Scalars['ID']
  /** The MIME type of the file. */
  mimeType?: Maybe<Scalars['String']>
  /** The size of the original file in bytes. */
  originalFileSize?: Maybe<Scalars['Int']>
  /** The preview image for the file. */
  previewImage?: Maybe<Image>
  /** The URL of the file. */
  url?: Maybe<Scalars['URL']>
}

/**
 * Metafields represent custom metadata attached to a resource. Metafields can be sorted into namespaces and are
 * comprised of keys, values, and value types.
 */
export type Metafield = Node & {
  __typename?: 'Metafield'
  /** The date and time when the storefront metafield was created. */
  createdAt: Scalars['DateTime']
  /** The description of a metafield. */
  description?: Maybe<Scalars['String']>
  /** A globally-unique identifier. */
  id: Scalars['ID']
  /** The key name for a metafield. */
  key: Scalars['String']
  /** The namespace for a metafield. */
  namespace: Scalars['String']
  /** The parent object that the metafield belongs to. */
  parentResource: MetafieldParentResource
  /**
   * The type name of the metafield.
   * See the list of [supported types](https://shopify.dev/apps/metafields/definitions/types).
   */
  type: Scalars['String']
  /** The date and time when the storefront metafield was updated. */
  updatedAt: Scalars['DateTime']
  /** The value of a metafield. */
  value: Scalars['String']
  /**
   * Represents the metafield value type.
   * @deprecated `valueType` is deprecated and replaced by `type` in API version 2021-07.
   */
  valueType: MetafieldValueType
}

/** An auto-generated type for paginating through multiple Metafields. */
export interface MetafieldConnection {
  __typename?: 'MetafieldConnection'
  /** A list of edges. */
  edges: Array<MetafieldEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/** An auto-generated type for paginating through multiple MetafieldReferences. */
export interface MetafieldReferenceConnection {
  __typename?: 'MetafieldReferenceConnection'
  /** A list of edges. */
  edges: Array<MetafieldReferenceEdge>
  /** A list of the nodes contained in MetafieldReferenceEdge. */
  nodes: Array<MetafieldReference>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/** An auto-generated type which holds one MetafieldReference and a cursor during pagination. */
export interface MetafieldReferenceEdge {
  __typename?: 'MetafieldReferenceEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of MetafieldReferenceEdge. */
  node: MetafieldReference
}

/** Returns the resource which is being referred to by a metafield. */
export type MetafieldReference = Collection | GenericFile | MediaImage | Page | Product | ProductVariant | Video

/** An auto-generated type which holds one Metafield and a cursor during pagination. */
export interface MetafieldEdge {
  __typename?: 'MetafieldEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of MetafieldEdge. */
  node: Metafield
}

/** A resource that the metafield belongs to. */
export type MetafieldParentResource = Article | Blog | Collection | Customer | Order | Page | Product | ProductVariant | Shop

/** Metafield value types. */
export enum MetafieldValueType {
  /** A string metafield. */
  String = 'STRING',
  /** An integer metafield. */
  Integer = 'INTEGER',
  /** A json string metafield. */
  JsonString = 'JSON_STRING',
  /** A boolean metafield. */
  Boolean = 'BOOLEAN',
}

/** Represents a Shopify hosted 3D model. */
export type Model3d = Media & Node & {
  __typename?: 'Model3d'
  /** A word or phrase to share the nature or contents of a media. */
  alt?: Maybe<Scalars['String']>
  /** A globally-unique identifier. */
  id: Scalars['ID']
  /** The media content type. */
  mediaContentType: MediaContentType
  /** The preview image for the media. */
  previewImage?: Maybe<Image>
  /** The sources for a 3d model. */
  sources: Array<Model3dSource>
}

/** Represents a source for a Shopify hosted 3d model. */
export interface Model3dSource {
  __typename?: 'Model3dSource'
  /** The filesize of the 3d model. */
  filesize: Scalars['Int']
  /** The format of the 3d model. */
  format: Scalars['String']
  /** The MIME type of the 3d model. */
  mimeType: Scalars['String']
  /** The URL of the 3d model. */
  url: Scalars['String']
}

/** Specifies the fields for a monetary value with currency. */
export interface MoneyInput {
  /** Decimal money amount. */
  amount: Scalars['Decimal']
  /** Currency of the money. */
  currencyCode: CurrencyCode
}

/** A monetary value with currency. */
export interface MoneyV2 {
  __typename?: 'MoneyV2'
  /** Decimal money amount. */
  amount: Scalars['Decimal']
  /** Currency of the money. */
  currencyCode: CurrencyCode
}

/** An auto-generated type for paginating through multiple MoneyV2s. */
export interface MoneyV2Connection {
  __typename?: 'MoneyV2Connection'
  /** A list of edges. */
  edges: Array<MoneyV2Edge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/** An auto-generated type which holds one MoneyV2 and a cursor during pagination. */
export interface MoneyV2Edge {
  __typename?: 'MoneyV2Edge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of MoneyV2Edge. */
  node: MoneyV2
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface Mutation {
  __typename?: 'Mutation'
  /**
   * Updates the attributes of a checkout if `allowPartialAddresses` is `true`.
   * @deprecated Use `checkoutAttributesUpdateV2` instead
   */
  checkoutAttributesUpdate?: Maybe<CheckoutAttributesUpdatePayload>
  /** Updates the attributes of a checkout if `allowPartialAddresses` is `true`. */
  checkoutAttributesUpdateV2?: Maybe<CheckoutAttributesUpdateV2Payload>
  /** Completes a checkout without providing payment information. You can use this mutation for free items or items whose purchase price is covered by a gift card. */
  checkoutCompleteFree?: Maybe<CheckoutCompleteFreePayload>
  /**
   * Completes a checkout using a credit card token from Shopify's Vault.
   * @deprecated Use `checkoutCompleteWithCreditCardV2` instead
   */
  checkoutCompleteWithCreditCard?: Maybe<CheckoutCompleteWithCreditCardPayload>
  /** Completes a checkout using a credit card token from Shopify's card vault. Before you can complete checkouts using CheckoutCompleteWithCreditCardV2, you need to  [_request payment processing_](https://shopify.dev/apps/channels/getting-started#request-payment-processing). */
  checkoutCompleteWithCreditCardV2?: Maybe<CheckoutCompleteWithCreditCardV2Payload>
  /**
   * Completes a checkout with a tokenized payment.
   * @deprecated Use `checkoutCompleteWithTokenizedPaymentV2` instead
   */
  checkoutCompleteWithTokenizedPayment?: Maybe<CheckoutCompleteWithTokenizedPaymentPayload>
  /**
   * Completes a checkout with a tokenized payment.
   * @deprecated Use `checkoutCompleteWithTokenizedPaymentV3` instead
   */
  checkoutCompleteWithTokenizedPaymentV2?: Maybe<CheckoutCompleteWithTokenizedPaymentV2Payload>
  /** Completes a checkout with a tokenized payment. */
  checkoutCompleteWithTokenizedPaymentV3?: Maybe<CheckoutCompleteWithTokenizedPaymentV3Payload>
  /** Creates a new checkout. */
  checkoutCreate?: Maybe<CheckoutCreatePayload>
  /**
   * Associates a customer to the checkout.
   * @deprecated Use `checkoutCustomerAssociateV2` instead
   */
  checkoutCustomerAssociate?: Maybe<CheckoutCustomerAssociatePayload>
  /** Associates a customer to the checkout. */
  checkoutCustomerAssociateV2?: Maybe<CheckoutCustomerAssociateV2Payload>
  /**
   * Disassociates the current checkout customer from the checkout.
   * @deprecated Use `checkoutCustomerDisassociateV2` instead
   */
  checkoutCustomerDisassociate?: Maybe<CheckoutCustomerDisassociatePayload>
  /** Disassociates the current checkout customer from the checkout. */
  checkoutCustomerDisassociateV2?: Maybe<CheckoutCustomerDisassociateV2Payload>
  /**
   * Applies a discount to an existing checkout using a discount code.
   * @deprecated Use `checkoutDiscountCodeApplyV2` instead
   */
  checkoutDiscountCodeApply?: Maybe<CheckoutDiscountCodeApplyPayload>
  /** Applies a discount to an existing checkout using a discount code. */
  checkoutDiscountCodeApplyV2?: Maybe<CheckoutDiscountCodeApplyV2Payload>
  /** Removes the applied discounts from an existing checkout. */
  checkoutDiscountCodeRemove?: Maybe<CheckoutDiscountCodeRemovePayload>
  /**
   * Updates the email on an existing checkout.
   * @deprecated Use `checkoutEmailUpdateV2` instead
   */
  checkoutEmailUpdate?: Maybe<CheckoutEmailUpdatePayload>
  /** Updates the email on an existing checkout. */
  checkoutEmailUpdateV2?: Maybe<CheckoutEmailUpdateV2Payload>
  /**
   * Applies a gift card to an existing checkout using a gift card code. This will replace all currently applied gift cards.
   * @deprecated Use `checkoutGiftCardsAppend` instead
   */
  checkoutGiftCardApply?: Maybe<CheckoutGiftCardApplyPayload>
  /**
   * Removes an applied gift card from the checkout.
   * @deprecated Use `checkoutGiftCardRemoveV2` instead
   */
  checkoutGiftCardRemove?: Maybe<CheckoutGiftCardRemovePayload>
  /** Removes an applied gift card from the checkout. */
  checkoutGiftCardRemoveV2?: Maybe<CheckoutGiftCardRemoveV2Payload>
  /** Appends gift cards to an existing checkout. */
  checkoutGiftCardsAppend?: Maybe<CheckoutGiftCardsAppendPayload>
  /** Adds a list of line items to a checkout. */
  checkoutLineItemsAdd?: Maybe<CheckoutLineItemsAddPayload>
  /** Removes line items from an existing checkout. */
  checkoutLineItemsRemove?: Maybe<CheckoutLineItemsRemovePayload>
  /** Sets a list of line items to a checkout. */
  checkoutLineItemsReplace?: Maybe<CheckoutLineItemsReplacePayload>
  /** Updates line items on a checkout. */
  checkoutLineItemsUpdate?: Maybe<CheckoutLineItemsUpdatePayload>
  /**
   * Updates the shipping address of an existing checkout.
   * @deprecated Use `checkoutShippingAddressUpdateV2` instead
   */
  checkoutShippingAddressUpdate?: Maybe<CheckoutShippingAddressUpdatePayload>
  /** Updates the shipping address of an existing checkout. */
  checkoutShippingAddressUpdateV2?: Maybe<CheckoutShippingAddressUpdateV2Payload>
  /** Updates the shipping lines on an existing checkout. */
  checkoutShippingLineUpdate?: Maybe<CheckoutShippingLineUpdatePayload>
  /**
   * Creates a customer access token.
   * The customer access token is required to modify the customer object in any way.
   */
  customerAccessTokenCreate?: Maybe<CustomerAccessTokenCreatePayload>
  /**
   * Creates a customer access token using a multipass token instead of email and password.
   * A customer record is created if customer does not exist. If a customer record already
   * exists but the record is disabled, then it's enabled.
   */
  customerAccessTokenCreateWithMultipass?: Maybe<CustomerAccessTokenCreateWithMultipassPayload>
  /** Permanently destroys a customer access token. */
  customerAccessTokenDelete?: Maybe<CustomerAccessTokenDeletePayload>
  /**
   * Renews a customer access token.
   *
   * Access token renewal must happen *before* a token expires.
   * If a token has already expired, a new one should be created instead via `customerAccessTokenCreate`.
   */
  customerAccessTokenRenew?: Maybe<CustomerAccessTokenRenewPayload>
  /** Activates a customer. */
  customerActivate?: Maybe<CustomerActivatePayload>
  /** Activates a customer with the activation url received from `customerCreate`. */
  customerActivateByUrl?: Maybe<CustomerActivateByUrlPayload>
  /** Creates a new address for a customer. */
  customerAddressCreate?: Maybe<CustomerAddressCreatePayload>
  /** Permanently deletes the address of an existing customer. */
  customerAddressDelete?: Maybe<CustomerAddressDeletePayload>
  /** Updates the address of an existing customer. */
  customerAddressUpdate?: Maybe<CustomerAddressUpdatePayload>
  /** Creates a new customer. */
  customerCreate?: Maybe<CustomerCreatePayload>
  /** Updates the default address of an existing customer. */
  customerDefaultAddressUpdate?: Maybe<CustomerDefaultAddressUpdatePayload>
  /** Sends a reset password email to the customer, as the first step in the reset password process. */
  customerRecover?: Maybe<CustomerRecoverPayload>
  /** Resets a customer’s password with a token received from `CustomerRecover`. */
  customerReset?: Maybe<CustomerResetPayload>
  /** Resets a customer’s password with the reset password url received from `CustomerRecover`. */
  customerResetByUrl?: Maybe<CustomerResetByUrlPayload>
  /** Updates an existing customer. */
  customerUpdate?: Maybe<CustomerUpdatePayload>
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCheckoutAttributesUpdateArgs {
  checkoutId: Scalars['ID']
  input: CheckoutAttributesUpdateInput
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCheckoutAttributesUpdateV2Args {
  checkoutId: Scalars['ID']
  input: CheckoutAttributesUpdateV2Input
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCheckoutCompleteFreeArgs {
  checkoutId: Scalars['ID']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCheckoutCompleteWithCreditCardArgs {
  checkoutId: Scalars['ID']
  payment: CreditCardPaymentInput
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCheckoutCompleteWithCreditCardV2Args {
  checkoutId: Scalars['ID']
  payment: CreditCardPaymentInputV2
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCheckoutCompleteWithTokenizedPaymentArgs {
  checkoutId: Scalars['ID']
  payment: TokenizedPaymentInput
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCheckoutCompleteWithTokenizedPaymentV2Args {
  checkoutId: Scalars['ID']
  payment: TokenizedPaymentInputV2
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCheckoutCompleteWithTokenizedPaymentV3Args {
  checkoutId: Scalars['ID']
  payment: TokenizedPaymentInputV3
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCheckoutCreateArgs {
  input: CheckoutCreateInput
  queueToken?: Maybe<Scalars['String']>
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCheckoutCustomerAssociateArgs {
  checkoutId: Scalars['ID']
  customerAccessToken: Scalars['String']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCheckoutCustomerAssociateV2Args {
  checkoutId: Scalars['ID']
  customerAccessToken: Scalars['String']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCheckoutCustomerDisassociateArgs {
  checkoutId: Scalars['ID']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCheckoutCustomerDisassociateV2Args {
  checkoutId: Scalars['ID']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCheckoutDiscountCodeApplyArgs {
  discountCode: Scalars['String']
  checkoutId: Scalars['ID']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCheckoutDiscountCodeApplyV2Args {
  discountCode: Scalars['String']
  checkoutId: Scalars['ID']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCheckoutDiscountCodeRemoveArgs {
  checkoutId: Scalars['ID']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCheckoutEmailUpdateArgs {
  checkoutId: Scalars['ID']
  email: Scalars['String']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCheckoutEmailUpdateV2Args {
  checkoutId: Scalars['ID']
  email: Scalars['String']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCheckoutGiftCardApplyArgs {
  giftCardCode: Scalars['String']
  checkoutId: Scalars['ID']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCheckoutGiftCardRemoveArgs {
  appliedGiftCardId: Scalars['ID']
  checkoutId: Scalars['ID']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCheckoutGiftCardRemoveV2Args {
  appliedGiftCardId: Scalars['ID']
  checkoutId: Scalars['ID']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCheckoutGiftCardsAppendArgs {
  giftCardCodes: Array<Scalars['String']>
  checkoutId: Scalars['ID']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCheckoutLineItemsAddArgs {
  lineItems: Array<CheckoutLineItemInput>
  checkoutId: Scalars['ID']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCheckoutLineItemsRemoveArgs {
  checkoutId: Scalars['ID']
  lineItemIds: Array<Scalars['ID']>
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCheckoutLineItemsReplaceArgs {
  lineItems: Array<CheckoutLineItemInput>
  checkoutId: Scalars['ID']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCheckoutLineItemsUpdateArgs {
  checkoutId: Scalars['ID']
  lineItems: Array<CheckoutLineItemUpdateInput>
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCheckoutShippingAddressUpdateArgs {
  shippingAddress: MailingAddressInput
  checkoutId: Scalars['ID']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCheckoutShippingAddressUpdateV2Args {
  shippingAddress: MailingAddressInput
  checkoutId: Scalars['ID']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCheckoutShippingLineUpdateArgs {
  checkoutId: Scalars['ID']
  shippingRateHandle: Scalars['String']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCustomerAccessTokenCreateArgs {
  input: CustomerAccessTokenCreateInput
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCustomerAccessTokenCreateWithMultipassArgs {
  multipassToken: Scalars['String']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCustomerAccessTokenDeleteArgs {
  customerAccessToken: Scalars['String']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCustomerAccessTokenRenewArgs {
  customerAccessToken: Scalars['String']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCustomerActivateArgs {
  id: Scalars['ID']
  input: CustomerActivateInput
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCustomerActivateByUrlArgs {
  activationUrl: Scalars['URL']
  password: Scalars['String']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCustomerAddressCreateArgs {
  customerAccessToken: Scalars['String']
  address: MailingAddressInput
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCustomerAddressDeleteArgs {
  id: Scalars['ID']
  customerAccessToken: Scalars['String']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCustomerAddressUpdateArgs {
  customerAccessToken: Scalars['String']
  id: Scalars['ID']
  address: MailingAddressInput
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCustomerCreateArgs {
  input: CustomerCreateInput
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCustomerDefaultAddressUpdateArgs {
  customerAccessToken: Scalars['String']
  addressId: Scalars['ID']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCustomerRecoverArgs {
  email: Scalars['String']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCustomerResetArgs {
  id: Scalars['ID']
  input: CustomerResetInput
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCustomerResetByUrlArgs {
  resetUrl: Scalars['URL']
  password: Scalars['String']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationCustomerUpdateArgs {
  customerAccessToken: Scalars['String']
  customer: CustomerUpdateInput
}

/**
 * An object with an ID field to support global identification, in accordance with the
 * [Relay specification](https://relay.dev/graphql/objectidentification.htm#sec-Node-Interface).
 * This interface is used by the [node](https://shopify.dev/api/admin-graphql/unstable/queries/node)
 * and [nodes](https://shopify.dev/api/admin-graphql/unstable/queries/nodes) queries.
 */
export interface Node {
  /** A globally-unique identifier. */
  id: Scalars['ID']
}

/** An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information. */
export type Order = HasMetafields & Node & {
  __typename?: 'Order'
  /** The reason for the order's cancellation. Returns `null` if the order wasn't canceled. */
  cancelReason?: Maybe<OrderCancelReason>
  /** The date and time when the order was canceled. Returns null if the order wasn't canceled. */
  canceledAt?: Maybe<Scalars['DateTime']>
  /** The code of the currency used for the payment. */
  currencyCode: CurrencyCode
  /** The subtotal of line items and their discounts, excluding line items that have been removed. Does not contain order-level discounts, duties, shipping costs, or shipping discounts. Taxes are not included unless the order is a taxes-included order. */
  currentSubtotalPrice: MoneyV2
  /** The total cost of duties for the order, including refunds. */
  currentTotalDuties?: Maybe<MoneyV2>
  /** The total amount of the order, including duties, taxes and discounts, minus amounts for line items that have been removed. */
  currentTotalPrice: MoneyV2
  /** The total of all taxes applied to the order, excluding taxes for returned line items. */
  currentTotalTax: MoneyV2
  /** The locale code in which this specific order happened. */
  customerLocale?: Maybe<Scalars['String']>
  /** The unique URL that the customer can use to access the order. */
  customerUrl?: Maybe<Scalars['URL']>
  /** Discounts that have been applied on the order. */
  discountApplications: DiscountApplicationConnection
  /** Whether the order has had any edits applied or not. */
  edited: Scalars['Boolean']
  /** The customer's email address. */
  email?: Maybe<Scalars['String']>
  /** The financial status of the order. */
  financialStatus?: Maybe<OrderFinancialStatus>
  /** The fulfillment status for the order. */
  fulfillmentStatus: OrderFulfillmentStatus
  /** A globally-unique identifier. */
  id: Scalars['ID']
  /** List of the order’s line items. */
  lineItems: OrderLineItemConnection
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<Metafield>
  /**
   * A paginated list of metafields associated with the resource.
   * @deprecated The `metafields` field will be removed in the future in favor of using [aliases](https://graphql.org/learn/queries/#aliases) with the `metafield` field.
   *
   */
  metafields: MetafieldConnection
  /**
   * Unique identifier for the order that appears on the order.
   * For example, _#1000_ or _Store1001.
   */
  name: Scalars['String']
  /** A unique numeric identifier for the order for use by shop owner and customer. */
  orderNumber: Scalars['Int']
  /** The total cost of duties charged at checkout. */
  originalTotalDuties?: Maybe<MoneyV2>
  /** The total price of the order before any applied edits. */
  originalTotalPrice: MoneyV2
  /** The customer's phone number for receiving SMS notifications. */
  phone?: Maybe<Scalars['String']>
  /**
   * The date and time when the order was imported.
   * This value can be set to dates in the past when importing from other systems.
   * If no value is provided, it will be auto-generated based on current date and time.
   */
  processedAt: Scalars['DateTime']
  /** The address to where the order will be shipped. */
  shippingAddress?: Maybe<MailingAddress>
  /** The discounts that have been allocated onto the shipping line by discount applications. */
  shippingDiscountAllocations: Array<DiscountAllocation>
  /** The unique URL for the order's status page. */
  statusUrl: Scalars['URL']
  /** Price of the order before duties, shipping and taxes. */
  subtotalPrice?: Maybe<MoneyV2>
  /** List of the order’s successful fulfillments. */
  successfulFulfillments?: Maybe<Array<Fulfillment>>
  /** The sum of all the prices of all the items in the order, duties, taxes and discounts included (must be positive). */
  totalPrice: MoneyV2
  /** The total amount that has been refunded. */
  totalRefunded: MoneyV2
  /** The total cost of shipping. */
  totalShippingPrice: MoneyV2
  /** The total cost of taxes. */
  totalTax?: Maybe<MoneyV2>
}

/** An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information. */
export interface OrderDiscountApplicationsArgs {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information. */
export interface OrderLineItemsArgs {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information. */
export interface OrderMetafieldArgs {
  namespace: Scalars['String']
  key: Scalars['String']
}

/** An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information. */
export interface OrderMetafieldsArgs {
  namespace?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information. */
export interface OrderSuccessfulFulfillmentsArgs {
  first?: Maybe<Scalars['Int']>
}

/** Represents the reason for the order's cancellation. */
export enum OrderCancelReason {
  /** The customer wanted to cancel the order. */
  Customer = 'CUSTOMER',
  /** The order was fraudulent. */
  Fraud = 'FRAUD',
  /** There was insufficient inventory. */
  Inventory = 'INVENTORY',
  /** Payment was declined. */
  Declined = 'DECLINED',
  /** The order was canceled for an unlisted reason. */
  Other = 'OTHER',
}

/** An auto-generated type for paginating through multiple Orders. */
export interface OrderConnection {
  __typename?: 'OrderConnection'
  /** A list of edges. */
  edges: Array<OrderEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/** An auto-generated type which holds one Order and a cursor during pagination. */
export interface OrderEdge {
  __typename?: 'OrderEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of OrderEdge. */
  node: Order
}

/** Represents the order's current financial status. */
export enum OrderFinancialStatus {
  /** Displayed as **Pending**. */
  Pending = 'PENDING',
  /** Displayed as **Authorized**. */
  Authorized = 'AUTHORIZED',
  /** Displayed as **Partially paid**. */
  PartiallyPaid = 'PARTIALLY_PAID',
  /** Displayed as **Partially refunded**. */
  PartiallyRefunded = 'PARTIALLY_REFUNDED',
  /** Displayed as **Voided**. */
  Voided = 'VOIDED',
  /** Displayed as **Paid**. */
  Paid = 'PAID',
  /** Displayed as **Refunded**. */
  Refunded = 'REFUNDED',
}

/** Represents the order's aggregated fulfillment status for display purposes. */
export enum OrderFulfillmentStatus {
  /** Displayed as **Unfulfilled**. None of the items in the order have been fulfilled. */
  Unfulfilled = 'UNFULFILLED',
  /** Displayed as **Partially fulfilled**. Some of the items in the order have been fulfilled. */
  PartiallyFulfilled = 'PARTIALLY_FULFILLED',
  /** Displayed as **Fulfilled**. All of the items in the order have been fulfilled. */
  Fulfilled = 'FULFILLED',
  /** Displayed as **Restocked**. All of the items in the order have been restocked. Replaced by "UNFULFILLED" status. */
  Restocked = 'RESTOCKED',
  /** Displayed as **Pending fulfillment**. A request for fulfillment of some items awaits a response from the fulfillment service. Replaced by "IN_PROGRESS" status. */
  PendingFulfillment = 'PENDING_FULFILLMENT',
  /** Displayed as **Open**. None of the items in the order have been fulfilled. Replaced by "UNFULFILLED" status. */
  Open = 'OPEN',
  /** Displayed as **In progress**. Some of the items in the order have been fulfilled, or a request for fulfillment has been sent to the fulfillment service. */
  InProgress = 'IN_PROGRESS',
  /** Displayed as **On hold**. All of the unfulfilled items in this order are on hold. */
  OnHold = 'ON_HOLD',
  /** Displayed as **Scheduled**. All of the unfulfilled items in this order are scheduled for fulfillment at later time. */
  Scheduled = 'SCHEDULED',
}

/** Represents a single line in an order. There is one line item for each distinct product variant. */
export interface OrderLineItem {
  __typename?: 'OrderLineItem'
  /** The number of entries associated to the line item minus the items that have been removed. */
  currentQuantity: Scalars['Int']
  /** List of custom attributes associated to the line item. */
  customAttributes: Array<Attribute>
  /** The discounts that have been allocated onto the order line item by discount applications. */
  discountAllocations: Array<DiscountAllocation>
  /** The total price of the line item, including discounts, and displayed in the presentment currency. */
  discountedTotalPrice: MoneyV2
  /** The total price of the line item, not including any discounts. The total price is calculated using the original unit price multiplied by the quantity, and it is displayed in the presentment currency. */
  originalTotalPrice: MoneyV2
  /** The number of products variants associated to the line item. */
  quantity: Scalars['Int']
  /** The title of the product combined with title of the variant. */
  title: Scalars['String']
  /** The product variant object associated to the line item. */
  variant?: Maybe<ProductVariant>
}

/** An auto-generated type for paginating through multiple OrderLineItems. */
export interface OrderLineItemConnection {
  __typename?: 'OrderLineItemConnection'
  /** A list of edges. */
  edges: Array<OrderLineItemEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/** An auto-generated type which holds one OrderLineItem and a cursor during pagination. */
export interface OrderLineItemEdge {
  __typename?: 'OrderLineItemEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of OrderLineItemEdge. */
  node: OrderLineItem
}

/** The set of valid sort keys for the Order query. */
export enum OrderSortKeys {
  /** Sort by the `processed_at` value. */
  ProcessedAt = 'PROCESSED_AT',
  /** Sort by the `total_price` value. */
  TotalPrice = 'TOTAL_PRICE',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   */
  Relevance = 'RELEVANCE',
}

/** Shopify merchants can create pages to hold static HTML content. Each Page object represents a custom page on the online store. */
export type Page = HasMetafields & Node & {
  __typename?: 'Page'
  /** The description of the page, complete with HTML formatting. */
  body: Scalars['HTML']
  /** Summary of the page body. */
  bodySummary: Scalars['String']
  /** The timestamp of the page creation. */
  createdAt: Scalars['DateTime']
  /** A human-friendly unique string for the page automatically generated from its title. */
  handle: Scalars['String']
  /** A globally-unique identifier. */
  id: Scalars['ID']
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<Metafield>
  /**
   * A paginated list of metafields associated with the resource.
   * @deprecated The `metafields` field will be removed in the future in favor of using [aliases](https://graphql.org/learn/queries/#aliases) with the `metafield` field.
   *
   */
  metafields: MetafieldConnection
  /** The page's SEO information. */
  seo?: Maybe<Seo>
  /** The title of the page. */
  title: Scalars['String']
  /** The timestamp of the latest page update. */
  updatedAt: Scalars['DateTime']
  /**
   * The url pointing to the page accessible from the web.
   * @deprecated Use `onlineStoreUrl` instead
   */
  url: Scalars['URL']
}

/** Shopify merchants can create pages to hold static HTML content. Each Page object represents a custom page on the online store. */
export interface PageMetafieldArgs {
  namespace: Scalars['String']
  key: Scalars['String']
}

/** Shopify merchants can create pages to hold static HTML content. Each Page object represents a custom page on the online store. */
export interface PageMetafieldsArgs {
  namespace?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** An auto-generated type for paginating through multiple Pages. */
export interface PageConnection {
  __typename?: 'PageConnection'
  /** A list of edges. */
  edges: Array<PageEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/** An auto-generated type which holds one Page and a cursor during pagination. */
export interface PageEdge {
  __typename?: 'PageEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of PageEdge. */
  node: Page
}

/**
 * Returns information about pagination in a connection, in accordance with the
 * [Relay specification](https://relay.dev/graphql/connections.htm#sec-undefined.PageInfo).
 */
export interface PageInfo {
  __typename?: 'PageInfo'
  /** Whether there are more pages to fetch following the current page. */
  hasNextPage: Scalars['Boolean']
  /** Whether there are any pages prior to the current page. */
  hasPreviousPage: Scalars['Boolean']
}

/** The set of valid sort keys for the Page query. */
export enum PageSortKeys {
  /** Sort by the `title` value. */
  Title = 'TITLE',
  /** Sort by the `updated_at` value. */
  UpdatedAt = 'UPDATED_AT',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   */
  Relevance = 'RELEVANCE',
}

/** A payment applied to a checkout. */
export type Payment = Node & {
  __typename?: 'Payment'
  /** The amount of the payment. */
  amount: MoneyV2
  /** The billing address for the payment. */
  billingAddress?: Maybe<MailingAddress>
  /** The checkout to which the payment belongs. */
  checkout: Checkout
  /** The credit card used for the payment in the case of direct payments. */
  creditCard?: Maybe<CreditCard>
  /** A message describing a processing error during asynchronous processing. */
  errorMessage?: Maybe<Scalars['String']>
  /** A globally-unique identifier. */
  id: Scalars['ID']
  /**
   * A client-side generated token to identify a payment and perform idempotent operations.
   * For more information, refer to
   * [Idempotent requests](https://shopify.dev/api/usage/idempotent-requests).
   */
  idempotencyKey?: Maybe<Scalars['String']>
  /** The URL where the customer needs to be redirected so they can complete the 3D Secure payment flow. */
  nextActionUrl?: Maybe<Scalars['URL']>
  /** Whether or not the payment is still processing asynchronously. */
  ready: Scalars['Boolean']
  /** A flag to indicate if the payment is to be done in test mode for gateways that support it. */
  test: Scalars['Boolean']
  /** The actual transaction recorded by Shopify after having processed the payment with the gateway. */
  transaction?: Maybe<Transaction>
}

/** Settings related to payments. */
export interface PaymentSettings {
  __typename?: 'PaymentSettings'
  /** List of the card brands which the shop accepts. */
  acceptedCardBrands: Array<CardBrand>
  /** The url pointing to the endpoint to vault credit cards. */
  cardVaultUrl: Scalars['URL']
  /** The country where the shop is located. */
  countryCode: CountryCode
  /** The three-letter code for the shop's primary currency. */
  currencyCode: CurrencyCode
  /** A list of enabled currencies (ISO 4217 format) that the shop accepts. Merchants can enable currencies from their Shopify Payments settings in the Shopify admin. */
  enabledPresentmentCurrencies: Array<CurrencyCode>
  /** The shop’s Shopify Payments account id. */
  shopifyPaymentsAccountId?: Maybe<Scalars['String']>
  /** List of the digital wallets which the shop supports. */
  supportedDigitalWallets: Array<DigitalWallet>
}

/** The valid values for the types of payment token. */
export enum PaymentTokenType {
  /** Apple Pay token type. */
  ApplePay = 'APPLE_PAY',
  /** Vault payment token type. */
  Vault = 'VAULT',
  /** Shopify Pay token type. */
  ShopifyPay = 'SHOPIFY_PAY',
  /** Google Pay token type. */
  GooglePay = 'GOOGLE_PAY',
}

/** The value of the percentage pricing object. */
export interface PricingPercentageValue {
  __typename?: 'PricingPercentageValue'
  /** The percentage value of the object. */
  percentage: Scalars['Float']
}

/** The price value (fixed or percentage) for a discount application. */
export type PricingValue = MoneyV2 | PricingPercentageValue

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type Product = HasMetafields & Node & {
  __typename?: 'Product'
  /** Indicates if at least one product variant is available for sale. */
  availableForSale: Scalars['Boolean']
  /** List of collections a product belongs to. */
  collections: CollectionConnection
  /** The compare at price of the product across all variants. */
  compareAtPriceRange: ProductPriceRange
  /** The date and time when the product was created. */
  createdAt: Scalars['DateTime']
  /** Stripped description of the product, single line with HTML tags removed. */
  description: Scalars['String']
  /** The description of the product, complete with HTML formatting. */
  descriptionHtml: Scalars['HTML']
  /**
   * A human-friendly unique string for the Product automatically generated from its title.
   * They are used by the Liquid templating language to refer to objects.
   */
  handle: Scalars['String']
  /** A globally-unique identifier. */
  id: Scalars['ID']
  /** List of images associated with the product. */
  images: ImageConnection
  /** The media associated with the product. */
  media: MediaConnection
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<Metafield>
  /**
   * A paginated list of metafields associated with the resource.
   * @deprecated The `metafields` field will be removed in the future in favor of using [aliases](https://graphql.org/learn/queries/#aliases) with the `metafield` field.
   *
   */
  metafields: MetafieldConnection
  /** The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel. */
  onlineStoreUrl?: Maybe<Scalars['URL']>
  /** List of product options. */
  options: Array<ProductOption>
  /**
   * List of price ranges in the presentment currencies for this shop.
   * @deprecated Use `@inContext` instead.
   */
  presentmentPriceRanges: ProductPriceRangeConnection
  /** The price range. */
  priceRange: ProductPriceRange
  /** A categorization that a product can be tagged with, commonly used for filtering and searching. */
  productType: Scalars['String']
  /** The date and time when the product was published to the channel. */
  publishedAt: Scalars['DateTime']
  /** Whether the product can only be purchased with a selling plan. */
  requiresSellingPlan: Scalars['Boolean']
  /** A list of a product's available selling plan groups. A selling plan group represents a selling method. For example, 'Subscribe and save' is a selling method where customers pay for goods or services per delivery. A selling plan group contains individual selling plans. */
  sellingPlanGroups: SellingPlanGroupConnection
  /** The product's SEO information. */
  seo: Seo
  /**
   * A comma separated list of tags that have been added to the product.
   * Additional access scope required for private apps: unauthenticated_read_product_tags.
   */
  tags: Array<Scalars['String']>
  /** The product’s title. */
  title: Scalars['String']
  /** The total quantity of inventory in stock for this Product. */
  totalInventory?: Maybe<Scalars['Int']>
  /**
   * The date and time when the product was last modified.
   * A product's `updatedAt` value can change for different reasons. For example, if an order
   * is placed for a product that has inventory tracking set up, then the inventory adjustment
   * is counted as an update.
   */
  updatedAt: Scalars['DateTime']
  /**
   * Find a product’s variant based on its selected options.
   * This is useful for converting a user’s selection of product options into a single matching variant.
   * If there is not a variant for the selected options, `null` will be returned.
   */
  variantBySelectedOptions?: Maybe<ProductVariant>
  /** List of the product’s variants. */
  variants: ProductVariantConnection
  /** The product’s vendor name. */
  vendor: Scalars['String']
}

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export interface ProductCollectionsArgs {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export interface ProductDescriptionArgs {
  truncateAt?: Maybe<Scalars['Int']>
}

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export interface ProductImagesArgs {
  maxWidth?: Maybe<Scalars['Int']>
  maxHeight?: Maybe<Scalars['Int']>
  crop?: Maybe<CropRegion>
  scale?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<ProductImageSortKeys>
}

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export interface ProductMediaArgs {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<ProductMediaSortKeys>
}

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export interface ProductMetafieldArgs {
  namespace: Scalars['String']
  key: Scalars['String']
}

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export interface ProductMetafieldsArgs {
  namespace?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export interface ProductOptionsArgs {
  first?: Maybe<Scalars['Int']>
}

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export interface ProductPresentmentPriceRangesArgs {
  presentmentCurrencies?: Maybe<Array<CurrencyCode>>
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export interface ProductSellingPlanGroupsArgs {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export interface ProductVariantBySelectedOptionsArgs {
  selectedOptions: Array<SelectedOptionInput>
}

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export interface ProductVariantsArgs {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<ProductVariantSortKeys>
}

/** The set of valid sort keys for the ProductCollection query. */
export enum ProductCollectionSortKeys {
  /** Sort by the `title` value. */
  Title = 'TITLE',
  /** Sort by the `price` value. */
  Price = 'PRICE',
  /** Sort by the `best-selling` value. */
  BestSelling = 'BEST_SELLING',
  /** Sort by the `created` value. */
  Created = 'CREATED',
  /** Sort by the `id` value. */
  Id = 'ID',
  /** Sort by the `manual` value. */
  Manual = 'MANUAL',
  /** Sort by the `collection-default` value. */
  CollectionDefault = 'COLLECTION_DEFAULT',
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   */
  Relevance = 'RELEVANCE',
}

/** An auto-generated type for paginating through multiple Products. */
export interface ProductConnection {
  __typename?: 'ProductConnection'
  /** A list of edges. */
  edges: Array<ProductEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/** An auto-generated type which holds one Product and a cursor during pagination. */
export interface ProductEdge {
  __typename?: 'ProductEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of ProductEdge. */
  node: Product
}

/** The set of valid sort keys for the ProductImage query. */
export enum ProductImageSortKeys {
  /** Sort by the `created_at` value. */
  CreatedAt = 'CREATED_AT',
  /** Sort by the `position` value. */
  Position = 'POSITION',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   */
  Relevance = 'RELEVANCE',
}

/** The set of valid sort keys for the ProductMedia query. */
export enum ProductMediaSortKeys {
  /** Sort by the `position` value. */
  Position = 'POSITION',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   */
  Relevance = 'RELEVANCE',
}

/**
 * Product property names like "Size", "Color", and "Material" that the customers can select.
 * Variants are selected based on permutations of these options.
 * 255 characters limit each.
 */
export type ProductOption = Node & {
  __typename?: 'ProductOption'
  /** A globally-unique identifier. */
  id: Scalars['ID']
  /** The product option’s name. */
  name: Scalars['String']
  /** The corresponding value to the product option name. */
  values: Array<Scalars['String']>
}

/** The price range of the product. */
export interface ProductPriceRange {
  __typename?: 'ProductPriceRange'
  /** The highest variant's price. */
  maxVariantPrice: MoneyV2
  /** The lowest variant's price. */
  minVariantPrice: MoneyV2
}

/** An auto-generated type for paginating through multiple ProductPriceRanges. */
export interface ProductPriceRangeConnection {
  __typename?: 'ProductPriceRangeConnection'
  /** A list of edges. */
  edges: Array<ProductPriceRangeEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/** An auto-generated type which holds one ProductPriceRange and a cursor during pagination. */
export interface ProductPriceRangeEdge {
  __typename?: 'ProductPriceRangeEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of ProductPriceRangeEdge. */
  node: ProductPriceRange
}

/** The set of valid sort keys for the Product query. */
export enum ProductSortKeys {
  /** Sort by the `title` value. */
  Title = 'TITLE',
  /** Sort by the `product_type` value. */
  ProductType = 'PRODUCT_TYPE',
  /** Sort by the `vendor` value. */
  Vendor = 'VENDOR',
  /** Sort by the `updated_at` value. */
  UpdatedAt = 'UPDATED_AT',
  /** Sort by the `created_at` value. */
  CreatedAt = 'CREATED_AT',
  /** Sort by the `best_selling` value. */
  BestSelling = 'BEST_SELLING',
  /** Sort by the `price` value. */
  Price = 'PRICE',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   */
  Relevance = 'RELEVANCE',
}

/** A product variant represents a different version of a product, such as differing sizes or differing colors. */
export type ProductVariant = HasMetafields & Node & {
  __typename?: 'ProductVariant'
  /**
   * Indicates if the product variant is in stock.
   * @deprecated Use `availableForSale` instead
   */
  available?: Maybe<Scalars['Boolean']>
  /** Indicates if the product variant is available for sale. */
  availableForSale: Scalars['Boolean']
  /** The compare at price of the variant. This can be used to mark a variant as on sale, when `compareAtPriceV2` is higher than `priceV2`. */
  compareAtPrice?: Maybe<MoneyV2>
  /** Whether a product is out of stock but still available for purchase (used for backorders). */
  currentlyNotInStock: Scalars['Boolean']
  /** A globally-unique identifier. */
  id: Scalars['ID']
  /** Image associated with the product variant. This field falls back to the product image if no image is available. */
  image?: Maybe<Image>
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<Metafield>
  /**
   * A paginated list of metafields associated with the resource.
   * @deprecated The `metafields` field will be removed in the future in favor of using [aliases](https://graphql.org/learn/queries/#aliases) with the `metafield` field.
   *
   */
  metafields: MetafieldConnection
  /**
   * List of prices and compare-at prices in the presentment currencies for this shop.
   * @deprecated Use `@inContext` instead.
   */
  presentmentPrices: ProductVariantPricePairConnection
  /**
   * List of unit prices in the presentment currencies for this shop.
   * @deprecated Use `@inContext` instead.
   */
  presentmentUnitPrices: MoneyV2Connection
  /** The product variant’s price. */
  price: MoneyV2
  /** The product object that the product variant belongs to. */
  product: Product
  /** The total sellable quantity of the variant for online sales channels. */
  quantityAvailable?: Maybe<Scalars['Int']>
  /** Whether a customer needs to provide a shipping address when placing an order for the product variant. */
  requiresShipping: Scalars['Boolean']
  /** List of product options applied to the variant. */
  selectedOptions: Array<SelectedOption>
  /** Represents an association between a variant and a selling plan. Selling plan allocations describe which selling plans are available for each variant, and what their impact is on pricing. */
  sellingPlanAllocations: SellingPlanAllocationConnection
  /** The SKU (stock keeping unit) associated with the variant. */
  sku?: Maybe<Scalars['String']>
  /** The in-store pickup availability of this variant by location. */
  storeAvailability: StoreAvailabilityConnection
  /** The product variant’s title. */
  title: Scalars['String']
  /** The unit price value for the variant based on the variant's measurement. */
  unitPrice?: Maybe<MoneyV2>
  /** The unit price measurement for the variant. */
  unitPriceMeasurement?: Maybe<UnitPriceMeasurement>
  /** The weight of the product variant in the unit system specified with `weight_unit`. */
  weight?: Maybe<Scalars['Float']>
  /** Unit of measurement for weight. */
  weightUnit: WeightUnit
}

/** A product variant represents a different version of a product, such as differing sizes or differing colors. */
export interface ProductVariantImageArgs {
  maxWidth?: Maybe<Scalars['Int']>
  maxHeight?: Maybe<Scalars['Int']>
  crop?: Maybe<CropRegion>
  scale?: Maybe<Scalars['Int']>
}

/** A product variant represents a different version of a product, such as differing sizes or differing colors. */
export interface ProductVariantMetafieldArgs {
  namespace: Scalars['String']
  key: Scalars['String']
}

/** A product variant represents a different version of a product, such as differing sizes or differing colors. */
export interface ProductVariantMetafieldsArgs {
  namespace?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** A product variant represents a different version of a product, such as differing sizes or differing colors. */
export interface ProductVariantPresentmentPricesArgs {
  presentmentCurrencies?: Maybe<Array<CurrencyCode>>
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** A product variant represents a different version of a product, such as differing sizes or differing colors. */
export interface ProductVariantPresentmentUnitPricesArgs {
  presentmentCurrencies?: Maybe<Array<CurrencyCode>>
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** A product variant represents a different version of a product, such as differing sizes or differing colors. */
export interface ProductVariantSellingPlanAllocationsArgs {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** A product variant represents a different version of a product, such as differing sizes or differing colors. */
export interface ProductVariantStoreAvailabilityArgs {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** An auto-generated type for paginating through multiple ProductVariants. */
export interface ProductVariantConnection {
  __typename?: 'ProductVariantConnection'
  /** A list of edges. */
  edges: Array<ProductVariantEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/** An auto-generated type which holds one ProductVariant and a cursor during pagination. */
export interface ProductVariantEdge {
  __typename?: 'ProductVariantEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of ProductVariantEdge. */
  node: ProductVariant
}

/** The compare-at price and price of a variant sharing a currency. */
export interface ProductVariantPricePair {
  __typename?: 'ProductVariantPricePair'
  /** The compare-at price of the variant with associated currency. */
  compareAtPrice?: Maybe<MoneyV2>
  /** The price of the variant with associated currency. */
  price: MoneyV2
}

/** An auto-generated type for paginating through multiple ProductVariantPricePairs. */
export interface ProductVariantPricePairConnection {
  __typename?: 'ProductVariantPricePairConnection'
  /** A list of edges. */
  edges: Array<ProductVariantPricePairEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/** An auto-generated type which holds one ProductVariantPricePair and a cursor during pagination. */
export interface ProductVariantPricePairEdge {
  __typename?: 'ProductVariantPricePairEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of ProductVariantPricePairEdge. */
  node: ProductVariantPricePair
}

/** The set of valid sort keys for the ProductVariant query. */
export enum ProductVariantSortKeys {
  /** Sort by the `title` value. */
  Title = 'TITLE',
  /** Sort by the `sku` value. */
  Sku = 'SKU',
  /** Sort by the `position` value. */
  Position = 'POSITION',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   */
  Relevance = 'RELEVANCE',
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QueryRoot {
  __typename?: 'QueryRoot'
  /** List of the shop's articles. */
  articles: ArticleConnection
  /**
   * Find a blog by its handle.
   * @deprecated Use `blog` instead
   */
  blogByHandle?: Maybe<Blog>
  /** List of the shop's blogs. */
  blogs: BlogConnection
  /**
   * Find a collection by its handle.
   * @deprecated Use `collection` instead
   */
  collectionByHandle?: Maybe<Collection>
  /** List of the shop’s collections. */
  collections: CollectionConnection
  /** Find a customer by its access token. */
  customer?: Maybe<Customer>
  /** Returns the localized experiences configured for the shop. */
  localization: Localization
  /**
   * List of the shop's locations that support in-store pickup.
   *
   * When sorting by distance, you must specify a location via the `near` argument.
   */
  locations: LocationConnection
  /** Returns a specific node by ID. */
  node?: Maybe<Node>
  /** Returns the list of nodes with the given IDs. */
  nodes: Array<Maybe<Node>>
  /**
   * Find a page by its handle.
   * @deprecated Use `page` instead
   */
  pageByHandle?: Maybe<Page>
  /** List of the shop's pages. */
  pages: PageConnection
  /**
   * Find a product by its handle.
   * @deprecated Use `product` instead
   */
  productByHandle?: Maybe<Product>
  /**
   * Find recommended products related to a given `product_id`.
   * To learn more about how recommendations are generated, see
   * [*Showing product recommendations on product pages*](https://help.shopify.com/themes/development/recommended-products).
   */
  productRecommendations?: Maybe<Array<Product>>
  /**
   * Tags added to products.
   * Additional access scope required: unauthenticated_read_product_tags.
   */
  productTags: StringConnection
  /** List of product types for the shop's products that are published to your app. */
  productTypes: StringConnection
  /** List of the shop’s products. */
  products: ProductConnection
  /** The list of public Storefront API versions, including supported, release candidate and unstable versions. */
  publicApiVersions: Array<ApiVersion>
  /** The shop associated with the storefront access token. */
  shop: Shop
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QueryRootArticlesArgs {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<ArticleSortKeys>
  query?: Maybe<Scalars['String']>
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QueryRootBlogByHandleArgs {
  handle: Scalars['String']
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QueryRootBlogsArgs {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<BlogSortKeys>
  query?: Maybe<Scalars['String']>
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QueryRootCollectionByHandleArgs {
  handle: Scalars['String']
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QueryRootCollectionsArgs {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<CollectionSortKeys>
  query?: Maybe<Scalars['String']>
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QueryRootCustomerArgs {
  customerAccessToken: Scalars['String']
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QueryRootLocationsArgs {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<LocationSortKeys>
  near?: Maybe<GeoCoordinateInput>
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QueryRootNodeArgs {
  id: Scalars['ID']
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QueryRootNodesArgs {
  ids: Array<Scalars['ID']>
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QueryRootPageByHandleArgs {
  handle: Scalars['String']
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QueryRootPagesArgs {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<PageSortKeys>
  query?: Maybe<Scalars['String']>
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QueryRootProductByHandleArgs {
  handle: Scalars['String']
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QueryRootProductRecommendationsArgs {
  productId: Scalars['ID']
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QueryRootProductTagsArgs {
  first: Scalars['Int']
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QueryRootProductTypesArgs {
  first: Scalars['Int']
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QueryRootProductsArgs {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<ProductSortKeys>
  query?: Maybe<Scalars['String']>
}

/** SEO information. */
export interface Seo {
  __typename?: 'SEO'
  /** The meta description. */
  description?: Maybe<Scalars['String']>
  /** The SEO title. */
  title?: Maybe<Scalars['String']>
}

/**
 * Script discount applications capture the intentions of a discount that
 * was created by a Shopify Script.
 */
export type ScriptDiscountApplication = DiscountApplication & {
  __typename?: 'ScriptDiscountApplication'
  /** The method by which the discount's value is allocated to its entitled items. */
  allocationMethod: DiscountApplicationAllocationMethod
  /**
   * The description of the application as defined by the Script.
   * @deprecated Use `title` instead
   */
  description: Scalars['String']
  /** Which lines of targetType that the discount is allocated over. */
  targetSelection: DiscountApplicationTargetSelection
  /** The type of line that the discount is applicable towards. */
  targetType: DiscountApplicationTargetType
  /** The title of the application as defined by the Script. */
  title: Scalars['String']
  /** The value of the discount application. */
  value: PricingValue
}

/**
 * Properties used by customers to select a product variant.
 * Products can have multiple options, like different sizes or colors.
 */
export interface SelectedOption {
  __typename?: 'SelectedOption'
  /** The product option’s name. */
  name: Scalars['String']
  /** The product option’s value. */
  value: Scalars['String']
}

/** Specifies the input fields required for a selected option. */
export interface SelectedOptionInput {
  /** The product option’s name. */
  name: Scalars['String']
  /** The product option’s value. */
  value: Scalars['String']
}

/** Represents how products and variants can be sold and purchased. */
export interface SellingPlan {
  __typename?: 'SellingPlan'
  /** The description of the selling plan. */
  description?: Maybe<Scalars['String']>
  /** A globally-unique identifier. */
  id: Scalars['ID']
  /** The name of the selling plan. For example, '6 weeks of prepaid granola, delivered weekly'. */
  name: Scalars['String']
  /** The selling plan options available in the drop-down list in the storefront. For example, 'Delivery every week' or 'Delivery every 2 weeks' specifies the delivery frequency options for the product. */
  options: Array<SellingPlanOption>
  /** The price adjustments that a selling plan makes when a variant is purchased with a selling plan. */
  priceAdjustments: Array<SellingPlanPriceAdjustment>
  /** Whether purchasing the selling plan will result in multiple deliveries. */
  recurringDeliveries: Scalars['Boolean']
}

/** Represents an association between a variant and a selling plan. Selling plan allocations describe the options offered for each variant, and the price of the variant when purchased with a selling plan. */
export interface SellingPlanAllocation {
  __typename?: 'SellingPlanAllocation'
  /** A list of price adjustments, with a maximum of two. When there are two, the first price adjustment goes into effect at the time of purchase, while the second one starts after a certain number of orders. A price adjustment represents how a selling plan affects pricing when a variant is purchased with a selling plan. Prices display in the customer's currency if the shop is configured for it. */
  priceAdjustments: Array<SellingPlanAllocationPriceAdjustment>
  /** A representation of how products and variants can be sold and purchased. For example, an individual selling plan could be '6 weeks of prepaid granola, delivered weekly'. */
  sellingPlan: SellingPlan
}

/** An auto-generated type for paginating through multiple SellingPlanAllocations. */
export interface SellingPlanAllocationConnection {
  __typename?: 'SellingPlanAllocationConnection'
  /** A list of edges. */
  edges: Array<SellingPlanAllocationEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/** An auto-generated type which holds one SellingPlanAllocation and a cursor during pagination. */
export interface SellingPlanAllocationEdge {
  __typename?: 'SellingPlanAllocationEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of SellingPlanAllocationEdge. */
  node: SellingPlanAllocation
}

/** The resulting prices for variants when they're purchased with a specific selling plan. */
export interface SellingPlanAllocationPriceAdjustment {
  __typename?: 'SellingPlanAllocationPriceAdjustment'
  /** The price of the variant when it's purchased without a selling plan for the same number of deliveries. For example, if a customer purchases 6 deliveries of $10.00 granola separately, then the price is 6 x $10.00 = $60.00. */
  compareAtPrice: MoneyV2
  /** The effective price for a single delivery. For example, for a prepaid subscription plan that includes 6 deliveries at the price of $48.00, the per delivery price is $8.00. */
  perDeliveryPrice: MoneyV2
  /** The price of the variant when it's purchased with a selling plan For example, for a prepaid subscription plan that includes 6 deliveries of $10.00 granola, where the customer gets 20% off, the price is 6 x $10.00 x 0.80 = $48.00. */
  price: MoneyV2
  /** The resulting price per unit for the variant associated with the selling plan. If the variant isn't sold by quantity or measurement, then this field returns `null`. */
  unitPrice?: Maybe<MoneyV2>
}

/** An auto-generated type for paginating through multiple SellingPlans. */
export interface SellingPlanConnection {
  __typename?: 'SellingPlanConnection'
  /** A list of edges. */
  edges: Array<SellingPlanEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/** An auto-generated type which holds one SellingPlan and a cursor during pagination. */
export interface SellingPlanEdge {
  __typename?: 'SellingPlanEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of SellingPlanEdge. */
  node: SellingPlan
}

/** A fixed amount that's deducted from the original variant price. For example, $10.00 off. */
export interface SellingPlanFixedAmountPriceAdjustment {
  __typename?: 'SellingPlanFixedAmountPriceAdjustment'
  /** The money value of the price adjustment. */
  adjustmentAmount: MoneyV2
}

/** A fixed price adjustment for a variant that's purchased with a selling plan. */
export interface SellingPlanFixedPriceAdjustment {
  __typename?: 'SellingPlanFixedPriceAdjustment'
  /** A new price of the variant when it's purchased with the selling plan. */
  price: MoneyV2
}

/** Represents a selling method. For example, 'Subscribe and save' is a selling method where customers pay for goods or services per delivery. A selling plan group contains individual selling plans. */
export interface SellingPlanGroup {
  __typename?: 'SellingPlanGroup'
  /** A display friendly name for the app that created the selling plan group. */
  appName?: Maybe<Scalars['String']>
  /** The name of the selling plan group. */
  name: Scalars['String']
  /** Represents the selling plan options available in the drop-down list in the storefront. For example, 'Delivery every week' or 'Delivery every 2 weeks' specifies the delivery frequency options for the product. */
  options: Array<SellingPlanGroupOption>
  /** A list of selling plans in a selling plan group. A selling plan is a representation of how products and variants can be sold and purchased. For example, an individual selling plan could be '6 weeks of prepaid granola, delivered weekly'. */
  sellingPlans: SellingPlanConnection
}

/** Represents a selling method. For example, 'Subscribe and save' is a selling method where customers pay for goods or services per delivery. A selling plan group contains individual selling plans. */
export interface SellingPlanGroupSellingPlansArgs {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** An auto-generated type for paginating through multiple SellingPlanGroups. */
export interface SellingPlanGroupConnection {
  __typename?: 'SellingPlanGroupConnection'
  /** A list of edges. */
  edges: Array<SellingPlanGroupEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/** An auto-generated type which holds one SellingPlanGroup and a cursor during pagination. */
export interface SellingPlanGroupEdge {
  __typename?: 'SellingPlanGroupEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of SellingPlanGroupEdge. */
  node: SellingPlanGroup
}

/** Represents an option on a selling plan group that's available in the drop-down list in the storefront. */
export interface SellingPlanGroupOption {
  __typename?: 'SellingPlanGroupOption'
  /** The name of the option. For example, 'Delivery every'. */
  name: Scalars['String']
  /** The values for the options specified by the selling plans in the selling plan group. For example, '1 week', '2 weeks', '3 weeks'. */
  values: Array<Scalars['String']>
}

/** An option provided by a Selling Plan. */
export interface SellingPlanOption {
  __typename?: 'SellingPlanOption'
  /** The name of the option (ie "Delivery every"). */
  name?: Maybe<Scalars['String']>
  /** The value of the option (ie "Month"). */
  value?: Maybe<Scalars['String']>
}

/** A percentage amount that's deducted from the original variant price. For example, 10% off. */
export interface SellingPlanPercentagePriceAdjustment {
  __typename?: 'SellingPlanPercentagePriceAdjustment'
  /** The percentage value of the price adjustment. */
  adjustmentPercentage: Scalars['Int']
}

/** Represents by how much the price of a variant associated with a selling plan is adjusted. Each variant can have up to two price adjustments. */
export interface SellingPlanPriceAdjustment {
  __typename?: 'SellingPlanPriceAdjustment'
  /** The type of price adjustment. An adjustment value can have one of three types: percentage, amount off, or a new price. */
  adjustmentValue: SellingPlanPriceAdjustmentValue
  /** The number of orders that the price adjustment applies to If the price adjustment always applies, then this field is `null`. */
  orderCount?: Maybe<Scalars['Int']>
}

/** Represents by how much the price of a variant associated with a selling plan is adjusted. Each variant can have up to two price adjustments. */
export type SellingPlanPriceAdjustmentValue = SellingPlanFixedAmountPriceAdjustment | SellingPlanFixedPriceAdjustment | SellingPlanPercentagePriceAdjustment

/** A shipping rate to be applied to a checkout. */
export interface ShippingRate {
  __typename?: 'ShippingRate'
  /** Human-readable unique identifier for this shipping rate. */
  handle: Scalars['String']
  /** Price of this shipping rate. */
  price: MoneyV2
  /** Title of this shipping rate. */
  title: Scalars['String']
}

/** The store's branding configuration. */
export interface Brand {
  __typename?: 'Brand'
  /**
   * The colors of the shop's brand.
   */
  colors: BrandColors
  /**
   * The store's cover image.
   * */
  coverImage?: Maybe<MediaImage>
  /**
   * The store's default logo.
   */
  logo?: Maybe<MediaImage>
  /**
   * The store's short description.
   */
  shortDescription?: Maybe<Scalars['String']>
  /**
   * The store's slogan.
   */
  slogan?: Maybe<Scalars['String']>
  /**
   * The store's preferred logo for square UI elements.
   */
  squareLogo?: Maybe<MediaImage>
}

export interface BrandColors {
  __typename?: 'BrandColors'
  /**
   * The shop's primary brand colors.
   */
  primary: Array<BrandColorGroup>
  /**
   * The shop's secondary brand colors.
   */
  secondary: Array<BrandColorGroup>
}

export interface BrandColorGroup {
  __typename?: 'BrandColorGroup'
  /**
   * The background color.
   */
  background?: Maybe<Scalars['Color']>
  /**
   * The foreground color.
   */
  foreground?: Maybe<Scalars['Color']>
}

/** Shop represents a collection of the general settings and information about the shop. */
export type Shop = HasMetafields & Node & {
  __typename?: 'Shop'
  /**
   * The store's branding configuration.
   */
  brand?: Maybe<Brand>
  /** A description of the shop. */
  description?: Maybe<Scalars['String']>
  /** A globally-unique identifier */
  id: Scalars['ID']
  /**
   * List of the shop' articles.
   * @deprecated Use `QueryRoot.articles` instead.
   */
  articles: ArticleConnection
  /**
   * List of the shop' blogs.
   * @deprecated Use `QueryRoot.blogs` instead.
   */
  blogs: BlogConnection

  collectionByHandle?: Maybe<Collection>
  /**
   * List of the shop’s collections.
   * @deprecated Use `QueryRoot.collections` instead.
   */
  collections: CollectionConnection
  /**
   * The three-letter code for the currency that the shop accepts.
   * @deprecated Use `paymentSettings` instead
   */
  currencyCode: CurrencyCode
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<Metafield>
  /**
   * A paginated list of metafields associated with the resource.
   * @deprecated The `metafields` field will be removed in the future in favor of using [aliases](https://graphql.org/learn/queries/#aliases) with the `metafield` field.
   *
   */
  metafields: MetafieldConnection
  /** A string representing the way currency is formatted when the currency isn’t specified. */
  moneyFormat: Scalars['String']
  /** The shop’s name. */
  name: Scalars['String']
  /** Settings related to payments. */
  paymentSettings: PaymentSettings
  /** The shop’s primary domain. */
  primaryDomain: Domain
  /** The shop’s privacy policy. */
  privacyPolicy?: Maybe<ShopPolicy>
  /**
   * Find a product by its handle.
   * @deprecated Use `QueryRoot.productByHandle` instead.
   */
  productByHandle?: Maybe<Product>
  /**
   * A list of tags that have been added to products.
   * Additional access scope required: unauthenticated_read_product_tags.
   * @deprecated Use `QueryRoot.productTags` instead.
   */
  productTags: StringConnection
  /**
   * List of the shop’s product types.
   * @deprecated Use `QueryRoot.productTypes` instead.
   */
  productTypes: StringConnection
  /**
   * List of the shop’s products.
   * @deprecated Use `QueryRoot.products` instead.
   */
  products: ProductConnection
  /** The shop’s refund policy. */
  refundPolicy?: Maybe<ShopPolicy>
  /** The shop’s shipping policy. */
  shippingPolicy?: Maybe<ShopPolicy>
  /** Countries that the shop ships to. */
  shipsToCountries: Array<CountryCode>
  /**
   * The shop’s Shopify Payments account id.
   * @deprecated Use `paymentSettings` instead
   */
  shopifyPaymentsAccountId?: Maybe<Scalars['String']>
  /** The shop’s terms of service. */
  termsOfService?: Maybe<ShopPolicy>
}

/** Shop represents a collection of the general settings and information about the shop. */
export interface ShopArticlesArgs {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<ArticleSortKeys>
  query?: Maybe<Scalars['String']>
}

/** Shop represents a collection of the general settings and information about the shop. */
export interface ShopBlogsArgs {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<BlogSortKeys>
  query?: Maybe<Scalars['String']>
}

/** Shop represents a collection of the general settings and information about the shop. */
export interface ShopCollectionByHandleArgs {
  handle: Scalars['String']
}

/** Shop represents a collection of the general settings and information about the shop. */
export interface ShopCollectionsArgs {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<CollectionSortKeys>
  query?: Maybe<Scalars['String']>
}

/** Shop represents a collection of the general settings and information about the shop. */
export interface ShopMetafieldArgs {
  namespace: Scalars['String']
  key: Scalars['String']
}

/** Shop represents a collection of the general settings and information about the shop. */
export interface ShopMetafieldsArgs {
  namespace?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** Shop represents a collection of the general settings and information about the shop. */
export interface ShopProductByHandleArgs {
  handle: Scalars['String']
}

/** Shop represents a collection of the general settings and information about the shop. */
export interface ShopProductTagsArgs {
  first: Scalars['Int']
}

/** Shop represents a collection of the general settings and information about the shop. */
export interface ShopProductTypesArgs {
  first: Scalars['Int']
}

/** Shop represents a collection of the general settings and information about the shop. */
export interface ShopProductsArgs {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<ProductSortKeys>
  query?: Maybe<Scalars['String']>
}

/** Policy that a merchant has configured for their store, such as their refund or privacy policy. */
export type ShopPolicy = Node & {
  __typename?: 'ShopPolicy'
  /** Policy text, maximum size of 64kb. */
  body: Scalars['String']
  /** Policy’s handle. */
  handle: Scalars['String']
  /** A globally-unique identifier. */
  id: Scalars['ID']
  /** Policy’s title. */
  title: Scalars['String']
  /** Public URL to the policy. */
  url: Scalars['URL']
}

/**
 * The availability of a product variant at a particular location.
 * Local pick-up must be enabled in the  store's shipping settings, otherwise this will return an empty result.
 */
export interface StoreAvailability {
  __typename?: 'StoreAvailability'
  /** Whether or not this product variant is in-stock at this location. */
  available: Scalars['Boolean']
  /** The location where this product variant is stocked at. */
  location: Location
  /** Returns the estimated amount of time it takes for pickup to be ready (Example: Usually ready in 24 hours). */
  pickUpTime: Scalars['String']
}

/** An auto-generated type for paginating through multiple StoreAvailabilities. */
export interface StoreAvailabilityConnection {
  __typename?: 'StoreAvailabilityConnection'
  /** A list of edges. */
  edges: Array<StoreAvailabilityEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/** An auto-generated type which holds one StoreAvailability and a cursor during pagination. */
export interface StoreAvailabilityEdge {
  __typename?: 'StoreAvailabilityEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of StoreAvailabilityEdge. */
  node: StoreAvailability
}

/** An auto-generated type for paginating through a list of Strings. */
export interface StringConnection {
  __typename?: 'StringConnection'
  /** A list of edges. */
  edges: Array<StringEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/** An auto-generated type which holds one String and a cursor during pagination. */
export interface StringEdge {
  __typename?: 'StringEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of StringEdge. */
  node: Scalars['String']
}

/**
 * Specifies the fields required to complete a checkout with
 * a tokenized payment.
 */
export interface TokenizedPaymentInput {
  /** The amount of the payment. */
  amount: Scalars['Money']
  /** A unique client generated key used to avoid duplicate charges. When a duplicate payment is found, the original is returned instead of creating a new one. For more information, refer to [Idempotent requests](https://shopify.dev/api/usage/idempotent-requests). */
  idempotencyKey: Scalars['String']
  /** The billing address for the payment. */
  billingAddress: MailingAddressInput
  /** The type of payment token. */
  type: Scalars['String']
  /** A simple string or JSON containing the required payment data for the tokenized payment. */
  paymentData: Scalars['String']
  /** Executes the payment in test mode if possible. Defaults to `false`. */
  test?: Maybe<Scalars['Boolean']>
  /** Public Hash Key used for AndroidPay payments only. */
  identifier?: Maybe<Scalars['String']>
}

/**
 * Specifies the fields required to complete a checkout with
 * a tokenized payment.
 */
export interface TokenizedPaymentInputV2 {
  /** The amount and currency of the payment. */
  paymentAmount: MoneyInput
  /** A unique client generated key used to avoid duplicate charges. When a duplicate payment is found, the original is returned instead of creating a new one. For more information, refer to [Idempotent requests](https://shopify.dev/api/usage/idempotent-requests). */
  idempotencyKey: Scalars['String']
  /** The billing address for the payment. */
  billingAddress: MailingAddressInput
  /** A simple string or JSON containing the required payment data for the tokenized payment. */
  paymentData: Scalars['String']
  /** Whether to execute the payment in test mode, if possible. Test mode is not supported in production stores. Defaults to `false`. */
  test?: Maybe<Scalars['Boolean']>
  /** Public Hash Key used for AndroidPay payments only. */
  identifier?: Maybe<Scalars['String']>
  /** The type of payment token. */
  type: Scalars['String']
}

/**
 * Specifies the fields required to complete a checkout with
 * a tokenized payment.
 */
export interface TokenizedPaymentInputV3 {
  /** The amount and currency of the payment. */
  paymentAmount: MoneyInput
  /** A unique client generated key used to avoid duplicate charges. When a duplicate payment is found, the original is returned instead of creating a new one. For more information, refer to [Idempotent requests](https://shopify.dev/api/usage/idempotent-requests). */
  idempotencyKey: Scalars['String']
  /** The billing address for the payment. */
  billingAddress: MailingAddressInput
  /** A simple string or JSON containing the required payment data for the tokenized payment. */
  paymentData: Scalars['String']
  /** Whether to execute the payment in test mode, if possible. Test mode is not supported in production stores. Defaults to `false`. */
  test?: Maybe<Scalars['Boolean']>
  /** Public Hash Key used for AndroidPay payments only. */
  identifier?: Maybe<Scalars['String']>
  /** The type of payment token. */
  type: PaymentTokenType
}

/** An object representing exchange of money for a product or service. */
export interface Transaction {
  __typename?: 'Transaction'
  /** The amount of money that the transaction was for. */
  amount: MoneyV2
  /** The kind of the transaction. */
  kind: TransactionKind
  /**
   * The status of the transaction.
   * @deprecated Use `statusV2` instead
   */
  status: TransactionStatus
  /** The status of the transaction. */
  statusV2?: Maybe<TransactionStatus>
  /** Whether the transaction was done in test mode or not. */
  test: Scalars['Boolean']
}

/** The different kinds of order transactions. */
export enum TransactionKind {
  /** An authorization and capture performed together in a single step. */
  Sale = 'SALE',
  /** A transfer of the money that was reserved during the authorization stage. */
  Capture = 'CAPTURE',
  /**
   * An amount reserved against the cardholder's funding source.
   * Money does not change hands until the authorization is captured.
   */
  Authorization = 'AUTHORIZATION',
  /** An authorization for a payment taken with an EMV credit card reader. */
  EmvAuthorization = 'EMV_AUTHORIZATION',
  /** Money returned to the customer when they have paid too much. */
  Change = 'CHANGE',
}

/** Transaction statuses describe the status of a transaction. */
export enum TransactionStatus {
  /** The transaction is pending. */
  Pending = 'PENDING',
  /** The transaction succeeded. */
  Success = 'SUCCESS',
  /** The transaction failed. */
  Failure = 'FAILURE',
  /** There was an error while processing the transaction. */
  Error = 'ERROR',
}

/** The measurement used to calculate a unit price for a product variant (e.g. $9.99 / 100ml). */
export interface UnitPriceMeasurement {
  __typename?: 'UnitPriceMeasurement'
  /** The type of unit of measurement for the unit price measurement. */
  measuredType?: Maybe<UnitPriceMeasurementMeasuredType>
  /** The quantity unit for the unit price measurement. */
  quantityUnit?: Maybe<UnitPriceMeasurementMeasuredUnit>
  /** The quantity value for the unit price measurement. */
  quantityValue: Scalars['Float']
  /** The reference unit for the unit price measurement. */
  referenceUnit?: Maybe<UnitPriceMeasurementMeasuredUnit>
  /** The reference value for the unit price measurement. */
  referenceValue: Scalars['Int']
}

/** The accepted types of unit of measurement. */
export enum UnitPriceMeasurementMeasuredType {
  /** Unit of measurements representing volumes. */
  Volume = 'VOLUME',
  /** Unit of measurements representing weights. */
  Weight = 'WEIGHT',
  /** Unit of measurements representing lengths. */
  Length = 'LENGTH',
  /** Unit of measurements representing areas. */
  Area = 'AREA',
}

/** The valid units of measurement for a unit price measurement. */
export enum UnitPriceMeasurementMeasuredUnit {
  /** 1000 milliliters equals 1 liter. */
  Ml = 'ML',
  /** 100 centiliters equals 1 liter. */
  Cl = 'CL',
  /** Metric system unit of volume. */
  L = 'L',
  /** 1 cubic meter equals 1000 liters. */
  M3 = 'M3',
  /** 1000 milligrams equals 1 gram. */
  Mg = 'MG',
  /** Metric system unit of weight. */
  G = 'G',
  /** 1 kilogram equals 1000 grams. */
  Kg = 'KG',
  /** 1000 millimeters equals 1 meter. */
  Mm = 'MM',
  /** 100 centimeters equals 1 meter. */
  Cm = 'CM',
  /** Metric system unit of length. */
  M = 'M',
  /** Metric system unit of area. */
  M2 = 'M2',
}

/** Systems of weights and measures. */
export enum UnitSystem {
  /** Imperial system of weights and measures. */
  ImperialSystem = 'IMPERIAL_SYSTEM',
  /** Metric system of weights and measures. */
  MetricSystem = 'METRIC_SYSTEM',
}

/** Represents an error in the input of a mutation. */
export type UserError = DisplayableError & {
  __typename?: 'UserError'
  /** The path to the input field that caused the error. */
  field?: Maybe<Array<Scalars['String']>>
  /** The error message. */
  message: Scalars['String']
}

/** Represents a Shopify hosted video. */
export type Video = Media & Node & {
  __typename?: 'Video'
  /** A word or phrase to share the nature or contents of a media. */
  alt?: Maybe<Scalars['String']>
  /** A globally-unique identifier. */
  id: Scalars['ID']
  /** The media content type. */
  mediaContentType: MediaContentType
  /** The preview image for the media. */
  previewImage?: Maybe<Image>
  /** The sources for a video. */
  sources: Array<VideoSource>
}

/** Represents a source for a Shopify hosted video. */
export interface VideoSource {
  __typename?: 'VideoSource'
  /** The format of the video source. */
  format: Scalars['String']
  /** The height of the video. */
  height: Scalars['Int']
  /** The video MIME type. */
  mimeType: Scalars['String']
  /** The URL of the video. */
  url: Scalars['String']
  /** The width of the video. */
  width: Scalars['Int']
}

/** Units of measurement for weight. */
export enum WeightUnit {
  /** 1 kilogram equals 1000 grams. */
  Kilograms = 'KILOGRAMS',
  /** Metric system unit of mass. */
  Grams = 'GRAMS',
  /** 1 pound equals 16 ounces. */
  Pounds = 'POUNDS',
  /** Imperial system unit of mass. */
  Ounces = 'OUNCES',
}
