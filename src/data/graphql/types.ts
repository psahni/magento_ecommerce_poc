import { GraphQLClient, RequestOptions } from "graphql-request";
import gql from "graphql-tag";
export type Maybe<T> = T | undefined;
export type InputMaybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
type GraphQLClientRequestHeaders = RequestOptions["requestHeaders"];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

/** Defines the bundle products to add to the cart. */
export type AddBundleProductsToCartInput = {
  /** The ID of the cart. */
  cart_id: Scalars["String"]["input"];
  /** An array of bundle products to add. */
  cart_items: Array<InputMaybe<BundleProductCartItemInput>>;
};

/** Defines the configurable products to add to the cart. */
export type AddConfigurableProductsToCartInput = {
  /** The ID of the cart. */
  cart_id: Scalars["String"]["input"];
  /** An array of configurable products to add. */
  cart_items: Array<InputMaybe<ConfigurableProductCartItemInput>>;
};

export type AddDownloadableProductsToCartInput = {
  /** The ID of the cart. */
  cart_id: Scalars["String"]["input"];
  /** An array of downloadable products to add. */
  cart_items: Array<InputMaybe<DownloadableProductCartItemInput>>;
};

/** Contains products to add to an existing compare list. */
export type AddProductsToCompareListInput = {
  /** An array of product IDs to add to the compare list. */
  products: Array<InputMaybe<Scalars["ID"]["input"]>>;
  /** The unique identifier of the compare list to modify. */
  uid: Scalars["ID"]["input"];
};

/** Defines the simple and group products to add to the cart. */
export type AddSimpleProductsToCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars["String"]["input"];
  /** An array of simple and group items to add. */
  cart_items: Array<InputMaybe<SimpleProductCartItemInput>>;
};

/** Defines the virtual products to add to the cart. */
export type AddVirtualProductsToCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars["String"]["input"];
  /** An array of virtual products to add. */
  cart_items: Array<InputMaybe<VirtualProductCartItemInput>>;
};

/** Filter category aggregations in layered navigation. */
export type AggregationsCategoryFilterInput = {
  /** Indicates whether to include only direct subcategories or all children categories at all levels. */
  includeDirectChildrenOnly?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** An input object that specifies the filters used in product aggregations. */
export type AggregationsFilterInput = {
  /** Filter category aggregations in layered navigation. */
  category?: InputMaybe<AggregationsCategoryFilterInput>;
};

/** Apple Pay inputs */
export type ApplePayMethodInput = {
  /** The payment source for the payment method */
  payment_source?: InputMaybe<Scalars["String"]["input"]>;
  /** The payment services order ID */
  payments_order_id?: InputMaybe<Scalars["String"]["input"]>;
  /** PayPal order ID */
  paypal_order_id?: InputMaybe<Scalars["String"]["input"]>;
};

/** Specifies the coupon code to apply to the cart. */
export type ApplyCouponToCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars["String"]["input"];
  /** A valid coupon code. */
  coupon_code: Scalars["String"]["input"];
};

/** AreaInput defines the parameters which will be used for filter by specified location. */
export type AreaInput = {
  /** The radius for the search in KM. */
  radius: Scalars["Int"]["input"];
  /** The country code where search must be performed. Required parameter together with region, city or postcode. */
  search_term: Scalars["String"]["input"];
};

/** List of all entity types. Populated by the modules introducing EAV entities. */
export enum AttributeEntityTypeEnum {
  CatalogCategory = "CATALOG_CATEGORY",
  CatalogProduct = "CATALOG_PRODUCT",
  Customer = "CUSTOMER",
  CustomerAddress = "CUSTOMER_ADDRESS",
}

/** An input object that specifies the filters used for attributes. */
export type AttributeFilterInput = {
  /** Whether a product or category attribute can be compared against another or not. */
  is_comparable?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Whether a product or category attribute can be filtered or not. */
  is_filterable?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Whether a product or category attribute can be filtered in search or not. */
  is_filterable_in_search?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Whether a product or category attribute can use HTML on front or not. */
  is_html_allowed_on_front?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Whether a product or category attribute can be searched or not. */
  is_searchable?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Whether a product or category attribute can be used for price rules or not. */
  is_used_for_price_rules?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Whether a product or category attribute is used for promo rules or not. */
  is_used_for_promo_rules?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Whether a product or category attribute is visible in advanced search or not. */
  is_visible_in_advanced_search?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Whether a product or category attribute is visible on front or not. */
  is_visible_on_front?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Whether a product or category attribute has WYSIWYG enabled or not. */
  is_wysiwyg_enabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Whether a product or category attribute is used in product listing or not. */
  used_in_product_listing?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** EAV attribute frontend input types. */
export enum AttributeFrontendInputEnum {
  Boolean = "BOOLEAN",
  Date = "DATE",
  Datetime = "DATETIME",
  File = "FILE",
  Gallery = "GALLERY",
  Hidden = "HIDDEN",
  Image = "IMAGE",
  MediaImage = "MEDIA_IMAGE",
  Multiline = "MULTILINE",
  Multiselect = "MULTISELECT",
  Price = "PRICE",
  Select = "SELECT",
  Text = "TEXT",
  Textarea = "TEXTAREA",
  Undefined = "UNDEFINED",
  Weight = "WEIGHT",
}

/** Defines the attribute characteristics to search for the `attribute_code` and `entity_type` to search. */
export type AttributeInput = {
  /** The unique identifier for an attribute code. This value should be in lowercase letters without spaces. */
  attribute_code?: InputMaybe<Scalars["String"]["input"]>;
  /** The type of entity that defines the attribute. */
  entity_type?: InputMaybe<Scalars["String"]["input"]>;
};

/** Specifies selected option for a select or multiselect attribute value. */
export type AttributeInputSelectedOption = {
  /** The attribute option value. */
  value: Scalars["String"]["input"];
};

/** Attribute metadata retrieval error types. */
export enum AttributeMetadataErrorType {
  /** The requested attribute was not found. */
  AttributeNotFound = "ATTRIBUTE_NOT_FOUND",
  /** The requested entity was not found. */
  EntityNotFound = "ENTITY_NOT_FOUND",
  /** The filter cannot be applied as it does not belong to the entity */
  FilterNotFound = "FILTER_NOT_FOUND",
  /** Not categorized error, see the error message. */
  Undefined = "UNDEFINED",
}

/** Specifies the value for attribute. */
export type AttributeValueInput = {
  /** The code of the attribute. */
  attribute_code: Scalars["String"]["input"];
  /** An array containing selected options for a select or multiselect attribute. */
  selected_options?: InputMaybe<
    Array<InputMaybe<AttributeInputSelectedOption>>
  >;
  /** The value assigned to the attribute. */
  value?: InputMaybe<Scalars["String"]["input"]>;
};

export enum BatchMutationStatus {
  Failure = "FAILURE",
  MixedResults = "MIXED_RESULTS",
  Success = "SUCCESS",
}

/** Defines the billing address. */
export type BillingAddressInput = {
  /** Defines a billing address. */
  address?: InputMaybe<CartAddressInput>;
  /** An ID from the customer's address book that uniquely identifies the address to be used for billing. */
  customer_address_id?: InputMaybe<Scalars["Int"]["input"]>;
  /** Indicates whether to set the billing address to be the same as the existing shipping address on the cart. */
  same_as_shipping?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Indicates whether to set the shipping address to be the same as this billing address. */
  use_for_shipping?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type BraintreeCcVaultInput = {
  device_data?: InputMaybe<Scalars["String"]["input"]>;
  public_hash: Scalars["String"]["input"];
};

export type BraintreeInput = {
  /** Contains a fingerprint provided by Braintree JS SDK and should be sent with sale transaction details to the Braintree payment gateway. */
  device_data?: InputMaybe<Scalars["String"]["input"]>;
  /** States whether the payment details (Credit/Debit Card, PayPal Account) entered by a customer should be tokenized for later usage. Required only if Vault is enabled for the relevant Braintree payment integration. */
  is_active_payment_token_enabler: Scalars["Boolean"]["input"];
  /** The one-time payment token generated by Braintree payment gateway based on payment details (Card, PayPal). Required field to make sale transaction. */
  payment_method_nonce: Scalars["String"]["input"];
};

export type BraintreeVaultInput = {
  device_data?: InputMaybe<Scalars["String"]["input"]>;
  public_hash: Scalars["String"]["input"];
};

/** Defines the input for a bundle option. */
export type BundleOptionInput = {
  /** The ID of the option. */
  id: Scalars["Int"]["input"];
  /** The number of the selected item to add to the cart. */
  quantity: Scalars["Float"]["input"];
  /** An array with the chosen value of the option. */
  value: Array<InputMaybe<Scalars["String"]["input"]>>;
};

/** Defines a single bundle product. */
export type BundleProductCartItemInput = {
  /** A mandatory array of options for the bundle product, including each chosen option and specified quantity. */
  bundle_options: Array<InputMaybe<BundleOptionInput>>;
  /** The ID and value of the option. */
  customizable_options?: InputMaybe<Array<InputMaybe<CustomizableOptionInput>>>;
  /** The quantity and SKU of the bundle product. */
  data: CartItemInput;
};

/** Defines the order to cancel. */
export type CancelOrderInput = {
  /** Order ID. */
  order_id: Scalars["ID"]["input"];
  /** Cancellation reason. */
  reason: Scalars["String"]["input"];
};

/** Defines the billing or shipping address to be applied to the cart. */
export type CartAddressInput = {
  /** The city specified for the billing or shipping address. */
  city: Scalars["String"]["input"];
  /** The company specified for the billing or shipping address. */
  company?: InputMaybe<Scalars["String"]["input"]>;
  /** The country code and label for the billing or shipping address. */
  country_code: Scalars["String"]["input"];
  /** The customer's fax number. */
  fax?: InputMaybe<Scalars["String"]["input"]>;
  /** The first name of the customer or guest. */
  firstname: Scalars["String"]["input"];
  /** The last name of the customer or guest. */
  lastname: Scalars["String"]["input"];
  /** The middle name of the person associated with the billing/shipping address. */
  middlename?: InputMaybe<Scalars["String"]["input"]>;
  /** The ZIP or postal code of the billing or shipping address. */
  postcode?: InputMaybe<Scalars["String"]["input"]>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: InputMaybe<Scalars["String"]["input"]>;
  /** A string that defines the state or province of the billing or shipping address. */
  region?: InputMaybe<Scalars["String"]["input"]>;
  /** An integer that defines the state or province of the billing or shipping address. */
  region_id?: InputMaybe<Scalars["Int"]["input"]>;
  /** Determines whether to save the address in the customer's address book. The default value is true. */
  save_in_address_book?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** An array containing the street for the billing or shipping address. */
  street: Array<InputMaybe<Scalars["String"]["input"]>>;
  /** A value such as Sr., Jr., or III. */
  suffix?: InputMaybe<Scalars["String"]["input"]>;
  /** The telephone number for the billing or shipping address. */
  telephone?: InputMaybe<Scalars["String"]["input"]>;
  /** The VAT company number for billing or shipping address. */
  vat_id?: InputMaybe<Scalars["String"]["input"]>;
};

export enum CartDiscountType {
  Item = "ITEM",
  Shipping = "SHIPPING",
}

export enum CartItemErrorType {
  ItemIncrements = "ITEM_INCREMENTS",
  ItemQty = "ITEM_QTY",
  Undefined = "UNDEFINED",
}

/** Defines an item to be added to the cart. */
export type CartItemInput = {
  /** An array of entered options for the base product, such as personalization text. */
  entered_options?: InputMaybe<Array<InputMaybe<EnteredOptionInput>>>;
  /** For a child product, the SKU of its parent product. */
  parent_sku?: InputMaybe<Scalars["String"]["input"]>;
  /** The amount or number of an item to add. */
  quantity: Scalars["Float"]["input"];
  /** The selected options for the base product, such as color or size, using the unique ID for an object such as `CustomizableRadioOption`, `CustomizableDropDownOption`, or `ConfigurableProductOptionsValues`. */
  selected_options?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** The SKU of the product. */
  sku: Scalars["String"]["input"];
};

/** A single item to be updated. */
export type CartItemUpdateInput = {
  /** Deprecated. Use `cart_item_uid` instead. */
  cart_item_id?: InputMaybe<Scalars["Int"]["input"]>;
  /** The unique ID for a `CartItemInterface` object. */
  cart_item_uid?: InputMaybe<Scalars["ID"]["input"]>;
  /** An array that defines customizable options for the product. */
  customizable_options?: InputMaybe<Array<InputMaybe<CustomizableOptionInput>>>;
  /** Gift message details for the cart item */
  gift_message?: InputMaybe<GiftMessageInput>;
  /** The new quantity of the item. */
  quantity?: InputMaybe<Scalars["Float"]["input"]>;
};

export enum CartUserInputErrorType {
  InsufficientStock = "INSUFFICIENT_STOCK",
  NotSalable = "NOT_SALABLE",
  ProductNotFound = "PRODUCT_NOT_FOUND",
  Undefined = "UNDEFINED",
}

export enum CatalogAttributeApplyToEnum {
  Bundle = "BUNDLE",
  Category = "CATEGORY",
  Configurable = "CONFIGURABLE",
  Downloadable = "DOWNLOADABLE",
  Grouped = "GROUPED",
  Simple = "SIMPLE",
  Virtual = "VIRTUAL",
}

/** Defines the filters to be used in the search. A filter contains at least one attribute, a comparison operator, and the value that is being searched for. */
export type CategoryFilterInput = {
  /** Filter by the unique category ID for a `CategoryInterface` object. */
  category_uid?: InputMaybe<FilterEqualTypeInput>;
  /** Deprecated: use 'category_uid' to filter uniquely identifiers of categories. */
  ids?: InputMaybe<FilterEqualTypeInput>;
  /** Filter by the display name of the category. */
  name?: InputMaybe<FilterMatchTypeInput>;
  /** Filter by the unique parent category ID for a `CategoryInterface` object. */
  parent_category_uid?: InputMaybe<FilterEqualTypeInput>;
  /** Filter by the unique parent category ID for a `CategoryInterface` object. */
  parent_id?: InputMaybe<FilterEqualTypeInput>;
  /** Filter by the part of the URL that identifies the category. */
  url_key?: InputMaybe<FilterEqualTypeInput>;
  /** Filter by the URL path for the category. */
  url_path?: InputMaybe<FilterEqualTypeInput>;
};

/** Indicates how agreements are accepted. */
export enum CheckoutAgreementMode {
  /** Conditions are automatically accepted upon checkout. */
  Auto = "AUTO",
  /** Shoppers must manually accept the conditions to place an order. */
  Manual = "MANUAL",
}

export enum CheckoutUserInputErrorCodes {
  InsufficientStock = "INSUFFICIENT_STOCK",
  NotSalable = "NOT_SALABLE",
  ProductNotFound = "PRODUCT_NOT_FOUND",
  ReorderNotAvailable = "REORDER_NOT_AVAILABLE",
  Undefined = "UNDEFINED",
}

export type ConfigurableProductCartItemInput = {
  /** The ID and value of the option. */
  customizable_options?: InputMaybe<Array<InputMaybe<CustomizableOptionInput>>>;
  /** The quantity and SKU of the configurable product. */
  data: CartItemInput;
  /** The SKU of the parent configurable product. */
  parent_sku?: InputMaybe<Scalars["String"]["input"]>;
  /** Deprecated. Use `CartItemInput.sku` instead. */
  variant_sku?: InputMaybe<Scalars["String"]["input"]>;
};

/** Contains details about a customer email address to confirm. */
export type ConfirmEmailInput = {
  /** The key to confirm the email address. */
  confirmation_key: Scalars["String"]["input"];
  /** The email address to be confirmed. */
  email: Scalars["String"]["input"];
};

/** List of account confirmation statuses. */
export enum ConfirmationStatusEnum {
  /** Account confirmation not required */
  AccountConfirmationNotRequired = "ACCOUNT_CONFIRMATION_NOT_REQUIRED",
  /** Account confirmed */
  AccountConfirmed = "ACCOUNT_CONFIRMED",
}

export type ContactUsInput = {
  /** The shopper's comment to the merchant. */
  comment: Scalars["String"]["input"];
  /** The email address of the shopper. */
  email: Scalars["String"]["input"];
  /** The full name of the shopper. */
  name: Scalars["String"]["input"];
  /** The shopper's telephone number. */
  telephone?: InputMaybe<Scalars["String"]["input"]>;
};

/** The list of country codes. */
export enum CountryCodeEnum {
  /** Andorra */
  Ad = "AD",
  /** United Arab Emirates */
  Ae = "AE",
  /** Afghanistan */
  Af = "AF",
  /** Antigua & Barbuda */
  Ag = "AG",
  /** Anguilla */
  Ai = "AI",
  /** Albania */
  Al = "AL",
  /** Armenia */
  Am = "AM",
  /** Netherlands Antilles */
  An = "AN",
  /** Angola */
  Ao = "AO",
  /** Antarctica */
  Aq = "AQ",
  /** Argentina */
  Ar = "AR",
  /** American Samoa */
  As = "AS",
  /** Austria */
  At = "AT",
  /** Australia */
  Au = "AU",
  /** Aruba */
  Aw = "AW",
  /** Åland Islands */
  Ax = "AX",
  /** Azerbaijan */
  Az = "AZ",
  /** Bosnia & Herzegovina */
  Ba = "BA",
  /** Barbados */
  Bb = "BB",
  /** Bangladesh */
  Bd = "BD",
  /** Belgium */
  Be = "BE",
  /** Burkina Faso */
  Bf = "BF",
  /** Bulgaria */
  Bg = "BG",
  /** Bahrain */
  Bh = "BH",
  /** Burundi */
  Bi = "BI",
  /** Benin */
  Bj = "BJ",
  /** St. Barthélemy */
  Bl = "BL",
  /** Bermuda */
  Bm = "BM",
  /** Brunei */
  Bn = "BN",
  /** Bolivia */
  Bo = "BO",
  /** Brazil */
  Br = "BR",
  /** Bahamas */
  Bs = "BS",
  /** Bhutan */
  Bt = "BT",
  /** Bouvet Island */
  Bv = "BV",
  /** Botswana */
  Bw = "BW",
  /** Belarus */
  By = "BY",
  /** Belize */
  Bz = "BZ",
  /** Canada */
  Ca = "CA",
  /** Cocos (Keeling) Islands */
  Cc = "CC",
  /** Congo-Kinshasa */
  Cd = "CD",
  /** Central African Republic */
  Cf = "CF",
  /** Congo-Brazzaville */
  Cg = "CG",
  /** Switzerland */
  Ch = "CH",
  /** Côte d’Ivoire */
  Ci = "CI",
  /** Cook Islands */
  Ck = "CK",
  /** Chile */
  Cl = "CL",
  /** Cameroon */
  Cm = "CM",
  /** China */
  Cn = "CN",
  /** Colombia */
  Co = "CO",
  /** Costa Rica */
  Cr = "CR",
  /** Cuba */
  Cu = "CU",
  /** Cape Verde */
  Cv = "CV",
  /** Christmas Island */
  Cx = "CX",
  /** Cyprus */
  Cy = "CY",
  /** Czech Republic */
  Cz = "CZ",
  /** Germany */
  De = "DE",
  /** Djibouti */
  Dj = "DJ",
  /** Denmark */
  Dk = "DK",
  /** Dominica */
  Dm = "DM",
  /** Dominican Republic */
  Do = "DO",
  /** Algeria */
  Dz = "DZ",
  /** Ecuador */
  Ec = "EC",
  /** Estonia */
  Ee = "EE",
  /** Egypt */
  Eg = "EG",
  /** Western Sahara */
  Eh = "EH",
  /** Eritrea */
  Er = "ER",
  /** Spain */
  Es = "ES",
  /** Ethiopia */
  Et = "ET",
  /** Finland */
  Fi = "FI",
  /** Fiji */
  Fj = "FJ",
  /** Falkland Islands */
  Fk = "FK",
  /** Micronesia */
  Fm = "FM",
  /** Faroe Islands */
  Fo = "FO",
  /** France */
  Fr = "FR",
  /** Gabon */
  Ga = "GA",
  /** United Kingdom */
  Gb = "GB",
  /** Grenada */
  Gd = "GD",
  /** Georgia */
  Ge = "GE",
  /** French Guiana */
  Gf = "GF",
  /** Guernsey */
  Gg = "GG",
  /** Ghana */
  Gh = "GH",
  /** Gibraltar */
  Gi = "GI",
  /** Greenland */
  Gl = "GL",
  /** Gambia */
  Gm = "GM",
  /** Guinea */
  Gn = "GN",
  /** Guadeloupe */
  Gp = "GP",
  /** Equatorial Guinea */
  Gq = "GQ",
  /** Greece */
  Gr = "GR",
  /** South Georgia & South Sandwich Islands */
  Gs = "GS",
  /** Guatemala */
  Gt = "GT",
  /** Guam */
  Gu = "GU",
  /** Guinea-Bissau */
  Gw = "GW",
  /** Guyana */
  Gy = "GY",
  /** Hong Kong SAR China */
  Hk = "HK",
  /** Heard &amp; McDonald Islands */
  Hm = "HM",
  /** Honduras */
  Hn = "HN",
  /** Croatia */
  Hr = "HR",
  /** Haiti */
  Ht = "HT",
  /** Hungary */
  Hu = "HU",
  /** Indonesia */
  Id = "ID",
  /** Ireland */
  Ie = "IE",
  /** Israel */
  Il = "IL",
  /** Isle of Man */
  Im = "IM",
  /** India */
  In = "IN",
  /** British Indian Ocean Territory */
  Io = "IO",
  /** Iraq */
  Iq = "IQ",
  /** Iran */
  Ir = "IR",
  /** Iceland */
  Is = "IS",
  /** Italy */
  It = "IT",
  /** Jersey */
  Je = "JE",
  /** Jamaica */
  Jm = "JM",
  /** Jordan */
  Jo = "JO",
  /** Japan */
  Jp = "JP",
  /** Kenya */
  Ke = "KE",
  /** Kyrgyzstan */
  Kg = "KG",
  /** Cambodia */
  Kh = "KH",
  /** Kiribati */
  Ki = "KI",
  /** Comoros */
  Km = "KM",
  /** St. Kitts & Nevis */
  Kn = "KN",
  /** North Korea */
  Kp = "KP",
  /** South Korea */
  Kr = "KR",
  /** Kuwait */
  Kw = "KW",
  /** Cayman Islands */
  Ky = "KY",
  /** Kazakhstan */
  Kz = "KZ",
  /** Laos */
  La = "LA",
  /** Lebanon */
  Lb = "LB",
  /** St. Lucia */
  Lc = "LC",
  /** Liechtenstein */
  Li = "LI",
  /** Sri Lanka */
  Lk = "LK",
  /** Liberia */
  Lr = "LR",
  /** Lesotho */
  Ls = "LS",
  /** Lithuania */
  Lt = "LT",
  /** Luxembourg */
  Lu = "LU",
  /** Latvia */
  Lv = "LV",
  /** Libya */
  Ly = "LY",
  /** Morocco */
  Ma = "MA",
  /** Monaco */
  Mc = "MC",
  /** Moldova */
  Md = "MD",
  /** Montenegro */
  Me = "ME",
  /** St. Martin */
  Mf = "MF",
  /** Madagascar */
  Mg = "MG",
  /** Marshall Islands */
  Mh = "MH",
  /** Macedonia */
  Mk = "MK",
  /** Mali */
  Ml = "ML",
  /** Myanmar (Burma) */
  Mm = "MM",
  /** Mongolia */
  Mn = "MN",
  /** Macau SAR China */
  Mo = "MO",
  /** Northern Mariana Islands */
  Mp = "MP",
  /** Martinique */
  Mq = "MQ",
  /** Mauritania */
  Mr = "MR",
  /** Montserrat */
  Ms = "MS",
  /** Malta */
  Mt = "MT",
  /** Mauritius */
  Mu = "MU",
  /** Maldives */
  Mv = "MV",
  /** Malawi */
  Mw = "MW",
  /** Mexico */
  Mx = "MX",
  /** Malaysia */
  My = "MY",
  /** Mozambique */
  Mz = "MZ",
  /** Namibia */
  Na = "NA",
  /** New Caledonia */
  Nc = "NC",
  /** Niger */
  Ne = "NE",
  /** Norfolk Island */
  Nf = "NF",
  /** Nigeria */
  Ng = "NG",
  /** Nicaragua */
  Ni = "NI",
  /** Netherlands */
  Nl = "NL",
  /** Norway */
  No = "NO",
  /** Nepal */
  Np = "NP",
  /** Nauru */
  Nr = "NR",
  /** Niue */
  Nu = "NU",
  /** New Zealand */
  Nz = "NZ",
  /** Oman */
  Om = "OM",
  /** Panama */
  Pa = "PA",
  /** Peru */
  Pe = "PE",
  /** French Polynesia */
  Pf = "PF",
  /** Papua New Guinea */
  Pg = "PG",
  /** Philippines */
  Ph = "PH",
  /** Pakistan */
  Pk = "PK",
  /** Poland */
  Pl = "PL",
  /** St. Pierre & Miquelon */
  Pm = "PM",
  /** Pitcairn Islands */
  Pn = "PN",
  /** Palestinian Territories */
  Ps = "PS",
  /** Portugal */
  Pt = "PT",
  /** Palau */
  Pw = "PW",
  /** Paraguay */
  Py = "PY",
  /** Qatar */
  Qa = "QA",
  /** Réunion */
  Re = "RE",
  /** Romania */
  Ro = "RO",
  /** Serbia */
  Rs = "RS",
  /** Russia */
  Ru = "RU",
  /** Rwanda */
  Rw = "RW",
  /** Saudi Arabia */
  Sa = "SA",
  /** Solomon Islands */
  Sb = "SB",
  /** Seychelles */
  Sc = "SC",
  /** Sudan */
  Sd = "SD",
  /** Sweden */
  Se = "SE",
  /** Singapore */
  Sg = "SG",
  /** St. Helena */
  Sh = "SH",
  /** Slovenia */
  Si = "SI",
  /** Svalbard & Jan Mayen */
  Sj = "SJ",
  /** Slovakia */
  Sk = "SK",
  /** Sierra Leone */
  Sl = "SL",
  /** San Marino */
  Sm = "SM",
  /** Senegal */
  Sn = "SN",
  /** Somalia */
  So = "SO",
  /** Suriname */
  Sr = "SR",
  /** São Tomé & Príncipe */
  St = "ST",
  /** El Salvador */
  Sv = "SV",
  /** Syria */
  Sy = "SY",
  /** Eswatini */
  Sz = "SZ",
  /** Turks & Caicos Islands */
  Tc = "TC",
  /** Chad */
  Td = "TD",
  /** French Southern Territories */
  Tf = "TF",
  /** Togo */
  Tg = "TG",
  /** Thailand */
  Th = "TH",
  /** Tajikistan */
  Tj = "TJ",
  /** Tokelau */
  Tk = "TK",
  /** Timor-Leste */
  Tl = "TL",
  /** Turkmenistan */
  Tm = "TM",
  /** Tunisia */
  Tn = "TN",
  /** Tonga */
  To = "TO",
  /** Turkey */
  Tr = "TR",
  /** Trinidad & Tobago */
  Tt = "TT",
  /** Tuvalu */
  Tv = "TV",
  /** Taiwan */
  Tw = "TW",
  /** Tanzania */
  Tz = "TZ",
  /** Ukraine */
  Ua = "UA",
  /** Uganda */
  Ug = "UG",
  /** U.S. Outlying Islands */
  Um = "UM",
  /** United States */
  Us = "US",
  /** Uruguay */
  Uy = "UY",
  /** Uzbekistan */
  Uz = "UZ",
  /** Vatican City */
  Va = "VA",
  /** St. Vincent & Grenadines */
  Vc = "VC",
  /** Venezuela */
  Ve = "VE",
  /** British Virgin Islands */
  Vg = "VG",
  /** U.S. Virgin Islands */
  Vi = "VI",
  /** Vietnam */
  Vn = "VN",
  /** Vanuatu */
  Vu = "VU",
  /** Wallis & Futuna */
  Wf = "WF",
  /** Samoa */
  Ws = "WS",
  /** Yemen */
  Ye = "YE",
  /** Mayotte */
  Yt = "YT",
  /** South Africa */
  Za = "ZA",
  /** Zambia */
  Zm = "ZM",
  /** Zimbabwe */
  Zw = "ZW",
}

/** Contains an array of product IDs to use for creating a compare list. */
export type CreateCompareListInput = {
  /** An array of product IDs to add to the compare list. */
  products?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
};

export type CreateGuestCartInput = {
  /** Optional client-generated ID */
  cart_uid?: InputMaybe<Scalars["ID"]["input"]>;
};

/** Contains payment order details that are used while processing the payment order */
export type CreatePaymentOrderInput = {
  /** The customer cart ID */
  cartId: Scalars["String"]["input"];
  /** Defines the origin location for that payment request */
  location: PaymentLocation;
  /** The code for the payment method used in the order */
  methodCode: Scalars["String"]["input"];
  /** The identifiable payment source for the payment method */
  paymentSource: Scalars["String"]["input"];
  /** Indicates whether the payment information should be vaulted */
  vaultIntent?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Defines a new product review. */
export type CreateProductReviewInput = {
  /** The customer's nickname. Defaults to the customer name, if logged in. */
  nickname: Scalars["String"]["input"];
  /** The ratings details by category. For example, Price: 5 stars, Quality: 4 stars, etc. */
  ratings: Array<InputMaybe<ProductReviewRatingInput>>;
  /** The SKU of the reviewed product. */
  sku: Scalars["String"]["input"];
  /** The summary (title) of the review. */
  summary: Scalars["String"]["input"];
  /** The review text. */
  text: Scalars["String"]["input"];
};

/** Required fields for Payflow Pro and Payments Pro credit card payments. */
export type CreditCardDetailsInput = {
  /** The credit card expiration month. */
  cc_exp_month: Scalars["Int"]["input"];
  /** The credit card expiration year. */
  cc_exp_year: Scalars["Int"]["input"];
  /** The last 4 digits of the credit card. */
  cc_last_4: Scalars["Int"]["input"];
  /** The credit card type. */
  cc_type: Scalars["String"]["input"];
};

/** The list of available currency codes. */
export enum CurrencyEnum {
  Aed = "AED",
  Afn = "AFN",
  All = "ALL",
  Amd = "AMD",
  Ang = "ANG",
  Aoa = "AOA",
  Ars = "ARS",
  Aud = "AUD",
  Awg = "AWG",
  Azm = "AZM",
  Azn = "AZN",
  Bam = "BAM",
  Bbd = "BBD",
  Bdt = "BDT",
  Bgn = "BGN",
  Bhd = "BHD",
  Bif = "BIF",
  Bmd = "BMD",
  Bnd = "BND",
  Bob = "BOB",
  Brl = "BRL",
  Bsd = "BSD",
  Btn = "BTN",
  Buk = "BUK",
  Bwp = "BWP",
  Byn = "BYN",
  Bzd = "BZD",
  Cad = "CAD",
  Cdf = "CDF",
  Che = "CHE",
  Chf = "CHF",
  Chw = "CHW",
  Clp = "CLP",
  Cny = "CNY",
  Cop = "COP",
  Crc = "CRC",
  Cup = "CUP",
  Cve = "CVE",
  Czk = "CZK",
  Djf = "DJF",
  Dkk = "DKK",
  Dop = "DOP",
  Dzd = "DZD",
  Eek = "EEK",
  Egp = "EGP",
  Ern = "ERN",
  Etb = "ETB",
  Eur = "EUR",
  Fjd = "FJD",
  Fkp = "FKP",
  Gbp = "GBP",
  Gek = "GEK",
  Gel = "GEL",
  Ghs = "GHS",
  Gip = "GIP",
  Gmd = "GMD",
  Gnf = "GNF",
  Gqe = "GQE",
  Gtq = "GTQ",
  Gyd = "GYD",
  Hkd = "HKD",
  Hnl = "HNL",
  Hrk = "HRK",
  Htg = "HTG",
  Huf = "HUF",
  Idr = "IDR",
  Ils = "ILS",
  Inr = "INR",
  Iqd = "IQD",
  Irr = "IRR",
  Isk = "ISK",
  Jmd = "JMD",
  Jod = "JOD",
  Jpy = "JPY",
  Kes = "KES",
  Kgs = "KGS",
  Khr = "KHR",
  Kmf = "KMF",
  Kpw = "KPW",
  Krw = "KRW",
  Kwd = "KWD",
  Kyd = "KYD",
  Kzt = "KZT",
  Lak = "LAK",
  Lbp = "LBP",
  Lkr = "LKR",
  Lrd = "LRD",
  Lsl = "LSL",
  Lsm = "LSM",
  Ltl = "LTL",
  Lvl = "LVL",
  Lyd = "LYD",
  Mad = "MAD",
  Mdl = "MDL",
  Mga = "MGA",
  Mkd = "MKD",
  Mmk = "MMK",
  Mnt = "MNT",
  Mop = "MOP",
  Mro = "MRO",
  Mur = "MUR",
  Mvr = "MVR",
  Mwk = "MWK",
  Mxn = "MXN",
  Myr = "MYR",
  Mzn = "MZN",
  Nad = "NAD",
  Ngn = "NGN",
  Nic = "NIC",
  Nok = "NOK",
  Npr = "NPR",
  Nzd = "NZD",
  Omr = "OMR",
  Pab = "PAB",
  Pen = "PEN",
  Pgk = "PGK",
  Php = "PHP",
  Pkr = "PKR",
  Pln = "PLN",
  Pyg = "PYG",
  Qar = "QAR",
  Rhd = "RHD",
  Rol = "ROL",
  Ron = "RON",
  Rsd = "RSD",
  Rub = "RUB",
  Rwf = "RWF",
  Sar = "SAR",
  Sbd = "SBD",
  Scr = "SCR",
  Sdg = "SDG",
  Sek = "SEK",
  Sgd = "SGD",
  Shp = "SHP",
  Skk = "SKK",
  Sll = "SLL",
  Sos = "SOS",
  Srd = "SRD",
  Std = "STD",
  Svc = "SVC",
  Syp = "SYP",
  Szl = "SZL",
  Thb = "THB",
  Tjs = "TJS",
  Tmm = "TMM",
  Tnd = "TND",
  Top = "TOP",
  Trl = "TRL",
  Try = "TRY",
  Ttd = "TTD",
  Twd = "TWD",
  Tzs = "TZS",
  Uah = "UAH",
  Ugx = "UGX",
  Usd = "USD",
  Uyu = "UYU",
  Uzs = "UZS",
  Veb = "VEB",
  Vef = "VEF",
  Vnd = "VND",
  Vuv = "VUV",
  Wst = "WST",
  Xcd = "XCD",
  Xof = "XOF",
  Xpf = "XPF",
  Yer = "YER",
  Ytl = "YTL",
  Zar = "ZAR",
  Zmk = "ZMK",
  Zwd = "ZWD",
}

/** Specifies the attribute code and value of a customer attribute. */
export type CustomerAddressAttributeInput = {
  /** The name assigned to the attribute. */
  attribute_code: Scalars["String"]["input"];
  /** The value assigned to the attribute. */
  value: Scalars["String"]["input"];
};

/** Contains details about a billing or shipping address. */
export type CustomerAddressInput = {
  /** The customer's city or town. */
  city?: InputMaybe<Scalars["String"]["input"]>;
  /** The customer's company. */
  company?: InputMaybe<Scalars["String"]["input"]>;
  /** The two-letter code representing the customer's country. */
  country_code?: InputMaybe<CountryCodeEnum>;
  /** Deprecated: use `country_code` instead. */
  country_id?: InputMaybe<CountryCodeEnum>;
  /** Deprecated. Use custom_attributesV2 instead. */
  custom_attributes?: InputMaybe<
    Array<InputMaybe<CustomerAddressAttributeInput>>
  >;
  /** Custom attributes assigned to the customer address. */
  custom_attributesV2?: InputMaybe<Array<InputMaybe<AttributeValueInput>>>;
  /** Indicates whether the address is the default billing address. */
  default_billing?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Indicates whether the address is the default shipping address. */
  default_shipping?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** The customer's fax number. */
  fax?: InputMaybe<Scalars["String"]["input"]>;
  /** The first name of the person associated with the billing/shipping address. */
  firstname?: InputMaybe<Scalars["String"]["input"]>;
  /** The family name of the person associated with the billing/shipping address. */
  lastname?: InputMaybe<Scalars["String"]["input"]>;
  /** The middle name of the person associated with the billing/shipping address. */
  middlename?: InputMaybe<Scalars["String"]["input"]>;
  /** The customer's ZIP or postal code. */
  postcode?: InputMaybe<Scalars["String"]["input"]>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: InputMaybe<Scalars["String"]["input"]>;
  /** An object containing the region name, region code, and region ID. */
  region?: InputMaybe<CustomerAddressRegionInput>;
  /** An array of strings that define the street number and name. */
  street?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** A value such as Sr., Jr., or III. */
  suffix?: InputMaybe<Scalars["String"]["input"]>;
  /** The customer's telephone number. */
  telephone?: InputMaybe<Scalars["String"]["input"]>;
  /** The customer's Tax/VAT number (for corporate customers). */
  vat_id?: InputMaybe<Scalars["String"]["input"]>;
};

/** Defines the customer's state or province. */
export type CustomerAddressRegionInput = {
  /** The state or province name. */
  region?: InputMaybe<Scalars["String"]["input"]>;
  /** The address region code. */
  region_code?: InputMaybe<Scalars["String"]["input"]>;
  /** The unique ID for a pre-defined region. */
  region_id?: InputMaybe<Scalars["Int"]["input"]>;
};

/** An input object for creating a customer. */
export type CustomerCreateInput = {
  /** Indicates whether the customer has enabled remote shopping assistance. */
  allow_remote_shopping_assistance?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** The customer's custom attributes. */
  custom_attributes?: InputMaybe<Array<InputMaybe<AttributeValueInput>>>;
  /** The customer's date of birth. */
  date_of_birth?: InputMaybe<Scalars["String"]["input"]>;
  /** Deprecated: Use `date_of_birth` instead. */
  dob?: InputMaybe<Scalars["String"]["input"]>;
  /** The customer's email address. */
  email: Scalars["String"]["input"];
  /** The customer's first name. */
  firstname: Scalars["String"]["input"];
  /** The customer's gender (Male - 1, Female - 2). */
  gender?: InputMaybe<Scalars["Int"]["input"]>;
  /** Indicates whether the customer is subscribed to the company's newsletter. */
  is_subscribed?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** The customer's family name. */
  lastname: Scalars["String"]["input"];
  /** The customer's middle name. */
  middlename?: InputMaybe<Scalars["String"]["input"]>;
  /** The customer's password. */
  password?: InputMaybe<Scalars["String"]["input"]>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: InputMaybe<Scalars["String"]["input"]>;
  /** A value such as Sr., Jr., or III. */
  suffix?: InputMaybe<Scalars["String"]["input"]>;
  /** The customer's Tax/VAT number (for corporate customers). */
  taxvat?: InputMaybe<Scalars["String"]["input"]>;
};

/** An input object that assigns or updates customer attributes. */
export type CustomerInput = {
  /** The customer's date of birth. */
  date_of_birth?: InputMaybe<Scalars["String"]["input"]>;
  /** Deprecated: Use `date_of_birth` instead. */
  dob?: InputMaybe<Scalars["String"]["input"]>;
  /** The customer's email address. Required when creating a customer. */
  email?: InputMaybe<Scalars["String"]["input"]>;
  /** The customer's first name. */
  firstname?: InputMaybe<Scalars["String"]["input"]>;
  /** The customer's gender (Male - 1, Female - 2). */
  gender?: InputMaybe<Scalars["Int"]["input"]>;
  /** Indicates whether the customer is subscribed to the company's newsletter. */
  is_subscribed?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** The customer's family name. */
  lastname?: InputMaybe<Scalars["String"]["input"]>;
  /** The customer's middle name. */
  middlename?: InputMaybe<Scalars["String"]["input"]>;
  /** The customer's password. */
  password?: InputMaybe<Scalars["String"]["input"]>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: InputMaybe<Scalars["String"]["input"]>;
  /** A value such as Sr., Jr., or III. */
  suffix?: InputMaybe<Scalars["String"]["input"]>;
  /** The customer's Tax/VAT number (for corporate customers). */
  taxvat?: InputMaybe<Scalars["String"]["input"]>;
};

/** CustomerOrderSortInput specifies the field to use for sorting search results and indicates whether the results are sorted in ascending or descending order. */
export type CustomerOrderSortInput = {
  /** This enumeration indicates whether to return results in ascending or descending order */
  sort_direction: SortEnum;
  /** Specifies the field to use for sorting */
  sort_field: CustomerOrderSortableField;
};

/** Specifies the field to use for sorting */
export enum CustomerOrderSortableField {
  /** Sorts customer orders by created_at field */
  CreatedAt = "CREATED_AT",
  /** Sorts customer orders by number */
  Number = "NUMBER",
}

/** Identifies the filter to use for filtering orders. */
export type CustomerOrdersFilterInput = {
  /** Filters by order number. */
  number?: InputMaybe<FilterStringTypeInput>;
};

/** An input object for updating a customer. */
export type CustomerUpdateInput = {
  /** Indicates whether the customer has enabled remote shopping assistance. */
  allow_remote_shopping_assistance?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** The customer's custom attributes. */
  custom_attributes?: InputMaybe<Array<InputMaybe<AttributeValueInput>>>;
  /** The customer's date of birth. */
  date_of_birth?: InputMaybe<Scalars["String"]["input"]>;
  /** Deprecated: Use `date_of_birth` instead. */
  dob?: InputMaybe<Scalars["String"]["input"]>;
  /** The customer's first name. */
  firstname?: InputMaybe<Scalars["String"]["input"]>;
  /** The customer's gender (Male - 1, Female - 2). */
  gender?: InputMaybe<Scalars["Int"]["input"]>;
  /** Indicates whether the customer is subscribed to the company's newsletter. */
  is_subscribed?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** The customer's family name. */
  lastname?: InputMaybe<Scalars["String"]["input"]>;
  /** The customer's middle name. */
  middlename?: InputMaybe<Scalars["String"]["input"]>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: InputMaybe<Scalars["String"]["input"]>;
  /** A value such as Sr., Jr., or III. */
  suffix?: InputMaybe<Scalars["String"]["input"]>;
  /** The customer's Tax/VAT number (for corporate customers). */
  taxvat?: InputMaybe<Scalars["String"]["input"]>;
};

/** Defines the customizable date type. */
export enum CustomizableDateTypeEnum {
  Date = "DATE",
  DateTime = "DATE_TIME",
  Time = "TIME",
}

/** Defines a customizable option. */
export type CustomizableOptionInput = {
  /** The customizable option ID of the product. */
  id?: InputMaybe<Scalars["Int"]["input"]>;
  /** The unique ID for a `CartItemInterface` object. */
  uid?: InputMaybe<Scalars["ID"]["input"]>;
  /** The string value of the option. */
  value_string: Scalars["String"]["input"];
};

export enum DownloadableFileTypeEnum {
  /** @deprecated `sample_url` serves to get the downloadable sample */
  File = "FILE",
  /** @deprecated `sample_url` serves to get the downloadable sample */
  Url = "URL",
}

/** Defines a single downloadable product. */
export type DownloadableProductCartItemInput = {
  /** The ID and value of the option. */
  customizable_options?: InputMaybe<Array<InputMaybe<CustomizableOptionInput>>>;
  /** The quantity and SKU of the downloadable product. */
  data: CartItemInput;
  /** An array of objects containing the link_id of the downloadable product link. */
  downloadable_product_links?: InputMaybe<
    Array<InputMaybe<DownloadableProductLinksInput>>
  >;
};

/** Contains the link ID for the downloadable product. */
export type DownloadableProductLinksInput = {
  /** The unique ID of the downloadable product link. */
  link_id: Scalars["Int"]["input"];
};

/** Defines a customer-entered option. */
export type EnteredOptionInput = {
  /** The unique ID for a `CustomizableOptionInterface` object, such as a `CustomizableFieldOption`, `CustomizableFileOption`, or `CustomizableAreaOption` object. */
  uid: Scalars["ID"]["input"];
  /** Text the customer entered. */
  value: Scalars["String"]["input"];
};

/** Contains details about an address. */
export type EstimateAddressInput = {
  /** The two-letter code representing the customer's country. */
  country_code: CountryCodeEnum;
  /** The customer's ZIP or postal code. */
  postcode?: InputMaybe<Scalars["String"]["input"]>;
  /** An object containing the region name, region code, and region ID. */
  region?: InputMaybe<CustomerAddressRegionInput>;
};

export type EstimateTotalsInput = {
  /** Customer's address to estimate totals. */
  address: EstimateAddressInput;
  /** The unique ID of the cart to query. */
  cart_id: Scalars["String"]["input"];
  /** Selected shipping method to estimate totals. */
  shipping_method?: InputMaybe<ShippingMethodInput>;
};

/** Defines a filter that matches the input exactly. */
export type FilterEqualTypeInput = {
  /** Use this attribute to exactly match the specified string. For example, to filter on a specific category ID, specify a value such as `5`. */
  eq?: InputMaybe<Scalars["String"]["input"]>;
  /** Use this attribute to filter on an array of values. For example, to filter on category IDs 4, 5, and 6, specify a value of `["4", "5", "6"]`. */
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export enum FilterMatchTypeEnum {
  Full = "FULL",
  Partial = "PARTIAL",
}

/** Defines a filter that performs a fuzzy search. */
export type FilterMatchTypeInput = {
  /** Use this attribute to fuzzy match the specified string. For example, to filter on a specific SKU, specify a value such as `24-MB01`. */
  match?: InputMaybe<Scalars["String"]["input"]>;
  /** Filter match type for fine-tuned results. Possible values FULL or PARTIAL. If match_type is not provided, returned results will default to FULL match. */
  match_type?: InputMaybe<FilterMatchTypeEnum>;
};

/** Defines a filter that matches a range of values, such as prices or dates. */
export type FilterRangeTypeInput = {
  /** Use this attribute to specify the lowest possible value in the range. */
  from?: InputMaybe<Scalars["String"]["input"]>;
  /** Use this attribute to specify the highest possible value in the range. */
  to?: InputMaybe<Scalars["String"]["input"]>;
};

/** Defines a filter for an input string. */
export type FilterStringTypeInput = {
  /** Filters items that are exactly the same as the specified string. */
  eq?: InputMaybe<Scalars["String"]["input"]>;
  /** Filters items that are exactly the same as entries specified in an array of strings. */
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Defines a filter that performs a fuzzy search using the specified string. */
  match?: InputMaybe<Scalars["String"]["input"]>;
};

/** Defines the comparison operators that can be used in a filter. */
export type FilterTypeInput = {
  /** Equals. */
  eq?: InputMaybe<Scalars["String"]["input"]>;
  finset?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** From. Must be used with the `to` field. */
  from?: InputMaybe<Scalars["String"]["input"]>;
  /** Greater than. */
  gt?: InputMaybe<Scalars["String"]["input"]>;
  /** Greater than or equal to. */
  gteq?: InputMaybe<Scalars["String"]["input"]>;
  /** In. The value can contain a set of comma-separated values. */
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Like. The specified value can contain % (percent signs) to allow matching of 0 or more characters. */
  like?: InputMaybe<Scalars["String"]["input"]>;
  /** Less than. */
  lt?: InputMaybe<Scalars["String"]["input"]>;
  /** Less than or equal to. */
  lteq?: InputMaybe<Scalars["String"]["input"]>;
  /** More than or equal to. */
  moreq?: InputMaybe<Scalars["String"]["input"]>;
  /** Not equal to. */
  neq?: InputMaybe<Scalars["String"]["input"]>;
  /** Not in. The value can contain a set of comma-separated values. */
  nin?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Not null. */
  notnull?: InputMaybe<Scalars["String"]["input"]>;
  /** Is null. */
  null?: InputMaybe<Scalars["String"]["input"]>;
  /** To. Must be used with the `from` field. */
  to?: InputMaybe<Scalars["String"]["input"]>;
};

/** Lists display settings for the Fixed Product Tax. */
export enum FixedProductTaxDisplaySettings {
  /** The displayed price does not include the FPT amount. The values of `ProductPrice.fixed_product_taxes` and the price including the FPT are displayed separately. This value corresponds to 'Excluding FPT, Including FPT description and final price.' */
  ExcludeFptAndIncludeWithDetails = "EXCLUDE_FPT_AND_INCLUDE_WITH_DETAILS",
  /** The displayed price does not include the FPT amount. The values from `ProductPrice.fixed_product_taxes` are not displayed. This value corresponds to 'Excluding FPT'. */
  ExcludeFptWithoutDetails = "EXCLUDE_FPT_WITHOUT_DETAILS",
  /** The FPT feature is not enabled. You can omit `ProductPrice.fixed_product_taxes` from your query. */
  FptDisabled = "FPT_DISABLED",
  /** The displayed price includes the FPT amount without displaying the `ProductPrice.fixed_product_taxes` values. This value corresponds to 'Including FPT only'. */
  IncludeFptWithoutDetails = "INCLUDE_FPT_WITHOUT_DETAILS",
  /** The displayed price includes the FPT amount while displaying the values of `ProductPrice.fixed_product_taxes` separately. This value corresponds to 'Including FPT and FPT description'. */
  IncludeFptWithDetails = "INCLUDE_FPT_WITH_DETAILS",
}

/** Identifies which customer requires remote shopping assistance. */
export type GenerateCustomerTokenAsAdminInput = {
  /** The email address of the customer requesting remote shopping assistance. */
  customer_email: Scalars["String"]["input"];
};

/** Contains the text of a gift message, its sender, and recipient */
export type GiftMessageInput = {
  /** Sender name */
  from: Scalars["String"]["input"];
  /** Gift message text */
  message: Scalars["String"]["input"];
  /** Recipient name */
  to: Scalars["String"]["input"];
};

/** Google Pay inputs */
export type GooglePayMethodInput = {
  /** The payment source for the payment method */
  payment_source?: InputMaybe<Scalars["String"]["input"]>;
  /** The payment services order ID */
  payments_order_id?: InputMaybe<Scalars["String"]["input"]>;
  /** PayPal order ID */
  paypal_order_id?: InputMaybe<Scalars["String"]["input"]>;
};

/** Hosted Fields payment inputs */
export type HostedFieldsInput = {
  /** Card bin number */
  cardBin?: InputMaybe<Scalars["String"]["input"]>;
  /** Expiration month of the card */
  cardExpiryMonth?: InputMaybe<Scalars["String"]["input"]>;
  /** Expiration year of the card */
  cardExpiryYear?: InputMaybe<Scalars["String"]["input"]>;
  /** Last four digits of the card */
  cardLast4?: InputMaybe<Scalars["String"]["input"]>;
  /** Name on the card */
  holderName?: InputMaybe<Scalars["String"]["input"]>;
  /** Indicates whether details about the shopper's credit/debit card should be tokenized for later usage. Required only if Vault is enabled for the Payment Services payment integration. */
  is_active_payment_token_enabler?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** The payment source for the payment method */
  payment_source?: InputMaybe<Scalars["String"]["input"]>;
  /** The payment services order ID */
  payments_order_id?: InputMaybe<Scalars["String"]["input"]>;
  /** PayPal order ID */
  paypal_order_id?: InputMaybe<Scalars["String"]["input"]>;
};

/** Contains a set of relative URLs that PayPal uses in response to various actions during the authorization process. Magento prepends the base URL to this value to create a full URL. For example, if the full URL is https://www.example.com/path/to/page.html, the relative URL is path/to/page.html. Use this input for Payments Pro Hosted Solution payment method. */
export type HostedProInput = {
  /** The relative URL of the page that PayPal redirects to when the buyer cancels the transaction in order to choose a different payment method. For example, if the full URL to this page is https://www.example.com/paypal/action/cancel.html, the relative URL is paypal/action/cancel.html. */
  cancel_url: Scalars["String"]["input"];
  /** The relative URL of the final confirmation page that PayPal redirects to upon payment success. For example, if the full URL to this page is https://www.example.com/paypal/action/return.html, the relative URL is paypal/action/return.html. */
  return_url: Scalars["String"]["input"];
};

/** Contains the required input to request the secure URL for Payments Pro Hosted Solution payment. */
export type HostedProUrlInput = {
  /** The unique ID that identifies the shopper's cart. */
  cart_id: Scalars["String"]["input"];
};

/** List of templates/filters applied to customer attribute input. */
export enum InputFilterEnum {
  /** Forces attribute input to follow the date format. */
  Date = "DATE",
  /** Escape HTML Entities. */
  Escapehtml = "ESCAPEHTML",
  /** There are no templates or filters to be applied. */
  None = "NONE",
  /** Strip HTML Tags. */
  Striptags = "STRIPTAGS",
  /** Strip whitespace (or other characters) from the beginning and end of the input. */
  Trim = "TRIM",
}

/** Input to retrieve an order based on details. */
export type OrderInformationInput = {
  /** Order billing address email. */
  email: Scalars["String"]["input"];
  /** Order number. */
  number: Scalars["String"]["input"];
  /** Order billing address postcode. */
  postcode: Scalars["String"]["input"];
};

/** Input to retrieve an order based on token. */
export type OrderTokenInput = {
  /** Order token. */
  token: Scalars["String"]["input"];
};

/** Contains required input for Payflow Express Checkout payments. */
export type PayflowExpressInput = {
  /** The unique ID of the PayPal user. */
  payer_id: Scalars["String"]["input"];
  /** The token returned by the createPaypalExpressToken mutation. */
  token: Scalars["String"]["input"];
};

/** A set of relative URLs that PayPal uses in response to various actions during the authorization process. Adobe Commerce prepends the base URL to this value to create a full URL. For example, if the full URL is https://www.example.com/path/to/page.html, the relative URL is path/to/page.html. Use this input for Payflow Link and Payments Advanced payment methods. */
export type PayflowLinkInput = {
  /** The relative URL of the page that PayPal redirects to when the buyer cancels the transaction in order to choose a different payment method. If the full URL to this page is https://www.example.com/paypal/action/cancel.html, the relative URL is paypal/action/cancel.html. */
  cancel_url: Scalars["String"]["input"];
  /** The relative URL of the transaction error page that PayPal redirects to upon payment error. If the full URL to this page is https://www.example.com/paypal/action/error.html, the relative URL is paypal/action/error.html. */
  error_url: Scalars["String"]["input"];
  /** The relative URL of the order confirmation page that PayPal redirects to when the payment is successful and additional confirmation is not needed. If the full URL to this page is https://www.example.com/paypal/action/return.html, the relative URL is paypal/action/return.html. */
  return_url: Scalars["String"]["input"];
};

/** Indicates the mode for payment. Applies to the Payflow Link and Payments Advanced payment methods. */
export enum PayflowLinkMode {
  Live = "LIVE",
  Test = "TEST",
}

/** Contains information required to fetch payment token information for the Payflow Link and Payments Advanced payment methods. */
export type PayflowLinkTokenInput = {
  /** The unique ID that identifies the customer's cart. */
  cart_id: Scalars["String"]["input"];
};

/** Contains input for the Payflow Pro and Payments Pro payment methods. */
export type PayflowProInput = {
  /** Required input for credit card related information. */
  cc_details: CreditCardDetailsInput;
  /** Indicates whether details about the shopper's credit/debit card should be tokenized for later usage. Required only if Vault is enabled for the PayPal Payflow Pro payment integration. */
  is_active_payment_token_enabler?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Input required to complete payment. Applies to Payflow Pro and Payments Pro payment methods. */
export type PayflowProResponseInput = {
  /** The unique ID that identifies the shopper's cart. */
  cart_id: Scalars["String"]["input"];
  /** The payload returned from PayPal. */
  paypal_payload: Scalars["String"]["input"];
};

/** Contains input required to fetch payment token information for the Payflow Pro and Payments Pro payment methods. */
export type PayflowProTokenInput = {
  /** The unique ID that identifies the shopper's cart. */
  cart_id: Scalars["String"]["input"];
  /** A set of relative URLs that PayPal uses for callback. */
  urls: PayflowProUrlInput;
};

/** Contains a set of relative URLs that PayPal uses in response to various actions during the authorization process. Magento prepends the base URL to this value to create a full URL. For example, if the full URL is https://www.example.com/path/to/page.html, the relative URL is path/to/page.html. Use this input for the Payflow Pro and Payment Pro payment methods. */
export type PayflowProUrlInput = {
  /** The relative URL of the page that PayPal redirects to when the buyer cancels the transaction in order to choose a different payment method. If the full URL to this page is https://www.example.com/paypal/action/cancel.html, the relative URL is paypal/action/cancel.html. */
  cancel_url: Scalars["String"]["input"];
  /** The relative URL of the transaction error page that PayPal redirects to upon payment error. If the full URL to this page is https://www.example.com/paypal/action/error.html, the relative URL is paypal/action/error.html. */
  error_url: Scalars["String"]["input"];
  /** The relative URL of the final confirmation page that PayPal redirects to upon payment success. If the full URL to this page is https://www.example.com/paypal/action/return.html, the relative URL is paypal/action/return.html. */
  return_url: Scalars["String"]["input"];
};

/** Defines the origin location for that payment request */
export enum PaymentLocation {
  Admin = "ADMIN",
  Cart = "CART",
  Checkout = "CHECKOUT",
  Minicart = "MINICART",
  ProductDetail = "PRODUCT_DETAIL",
}

/** Defines the payment method. */
export type PaymentMethodInput = {
  braintree?: InputMaybe<BraintreeInput>;
  braintree_ach_direct_debit?: InputMaybe<BraintreeInput>;
  braintree_ach_direct_debit_vault?: InputMaybe<BraintreeVaultInput>;
  braintree_applepay_vault?: InputMaybe<BraintreeVaultInput>;
  braintree_cc_vault?: InputMaybe<BraintreeCcVaultInput>;
  braintree_googlepay_vault?: InputMaybe<BraintreeVaultInput>;
  braintree_paypal?: InputMaybe<BraintreeInput>;
  braintree_paypal_vault?: InputMaybe<BraintreeVaultInput>;
  /** The internal name for the payment method. */
  code: Scalars["String"]["input"];
  /** Required input for PayPal Hosted pro payments. */
  hosted_pro?: InputMaybe<HostedProInput>;
  /** Required input for Payflow Express Checkout payments. */
  payflow_express?: InputMaybe<PayflowExpressInput>;
  /** Required input for PayPal Payflow Link and Payments Advanced payments. */
  payflow_link?: InputMaybe<PayflowLinkInput>;
  /** Required input for PayPal Payflow Pro and Payment Pro payments. */
  payflowpro?: InputMaybe<PayflowProInput>;
  /** Required input for PayPal Payflow Pro vault payments. */
  payflowpro_cc_vault?: InputMaybe<VaultTokenInput>;
  /** Required input for Apple Pay button */
  payment_services_paypal_apple_pay?: InputMaybe<ApplePayMethodInput>;
  /** Required input for Google Pay button */
  payment_services_paypal_google_pay?: InputMaybe<GooglePayMethodInput>;
  /** Required input for Hosted Fields */
  payment_services_paypal_hosted_fields?: InputMaybe<HostedFieldsInput>;
  /** Required input for Smart buttons */
  payment_services_paypal_smart_buttons?: InputMaybe<SmartButtonMethodInput>;
  /** Required input for vault */
  payment_services_paypal_vault?: InputMaybe<VaultMethodInput>;
  /** Required input for Express Checkout and Payments Standard payments. */
  paypal_express?: InputMaybe<PaypalExpressInput>;
  /** The purchase order number. Optional for most payment methods. */
  purchase_order_number?: InputMaybe<Scalars["String"]["input"]>;
};

/** The list of available payment token types. */
export enum PaymentTokenTypeEnum {
  /** phpcs:ignore Magento2.GraphQL.ValidArgumentName */
  Account = "account",
  /** phpcs:ignore Magento2.GraphQL.ValidArgumentName */
  Card = "card",
}

/** Contains required input for Express Checkout and Payments Standard payments. */
export type PaypalExpressInput = {
  /** The unique ID of the PayPal user. */
  payer_id: Scalars["String"]["input"];
  /** The token returned by the `createPaypalExpressToken` mutation. */
  token: Scalars["String"]["input"];
};

/** Defines the attributes required to receive a payment token for Express Checkout and Payments Standard payment methods. */
export type PaypalExpressTokenInput = {
  /** The unique ID that identifies the customer's cart. */
  cart_id: Scalars["String"]["input"];
  /** The payment method code. */
  code: Scalars["String"]["input"];
  /** Indicates whether the buyer selected the quick checkout button. The default value is false. */
  express_button?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** A set of relative URLs that PayPal uses in response to various actions during the authorization process. */
  urls: PaypalExpressUrlsInput;
  /** Indicates whether the buyer clicked the PayPal credit button. The default value is false. */
  use_paypal_credit?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Contains a set of relative URLs that PayPal uses in response to various actions during the authorization process. Magento prepends the base URL to this value to create a full URL. For example, if the full URL is https://www.example.com/path/to/page.html, the relative URL is path/to/page.html. Use this input for Express Checkout and Payments Standard payment methods. */
export type PaypalExpressUrlsInput = {
  /** The relative URL of the page that PayPal redirects to when the buyer cancels the transaction in order to choose a different payment method. If the full URL to this page is https://www.example.com/paypal/action/cancel.html, the relative URL is paypal/action/cancel.html. */
  cancel_url: Scalars["String"]["input"];
  /** The relative URL of the page that PayPal redirects to when the payment has been put on hold for additional review. This condition mostly applies to ACH transactions, and is not applicable to most PayPal solutions. If the full URL to this page is https://www.example.com/paypal/action/success_pending.html, the relative URL is paypal/action/success_pending.html. */
  pending_url?: InputMaybe<Scalars["String"]["input"]>;
  /** The relative URL of the final confirmation page that PayPal redirects to upon payment success. If the full URL to this page is https://www.example.com/paypal/action/return.html, the relative URL is paypal/action/return.html. */
  return_url: Scalars["String"]["input"];
  /** The relative URL of the order confirmation page that PayPal redirects to when the payment is successful and additional confirmation is not needed. Not applicable to most PayPal solutions. If the full URL to this page is https://www.example.com/paypal/action/success.html, the relative URL is paypal/action/success.html. */
  success_url?: InputMaybe<Scalars["String"]["input"]>;
};

/** PickupLocationFilterInput defines the list of attributes and filters for the search. */
export type PickupLocationFilterInput = {
  /** Filter by city. */
  city?: InputMaybe<FilterTypeInput>;
  /** Filter by country. */
  country_id?: InputMaybe<FilterTypeInput>;
  /** Filter by pickup location name. */
  name?: InputMaybe<FilterTypeInput>;
  /** Filter by pickup location code. */
  pickup_location_code?: InputMaybe<FilterTypeInput>;
  /** Filter by postcode. */
  postcode?: InputMaybe<FilterTypeInput>;
  /** Filter by region. */
  region?: InputMaybe<FilterTypeInput>;
  /** Filter by region id. */
  region_id?: InputMaybe<FilterTypeInput>;
  /** Filter by street. */
  street?: InputMaybe<FilterTypeInput>;
};

/** PickupLocationSortInput specifies attribute to use for sorting search results and indicates whether the results are sorted in ascending or descending order. */
export type PickupLocationSortInput = {
  /** City where pickup location is placed. */
  city?: InputMaybe<SortEnum>;
  /** Name of the contact person. */
  contact_name?: InputMaybe<SortEnum>;
  /** Id of the country in two letters. */
  country_id?: InputMaybe<SortEnum>;
  /** Description of the pickup location. */
  description?: InputMaybe<SortEnum>;
  /** Distance to the address, requested by distance filter. Applicable only with distance filter. If distance sort order is present, all other sort orders will be ignored. */
  distance?: InputMaybe<SortEnum>;
  /** Contact email of the pickup location. */
  email?: InputMaybe<SortEnum>;
  /** Contact fax of the pickup location. */
  fax?: InputMaybe<SortEnum>;
  /** Geographic latitude where pickup location is placed. */
  latitude?: InputMaybe<SortEnum>;
  /** Geographic longitude where pickup location is placed. */
  longitude?: InputMaybe<SortEnum>;
  /** The pickup location name. Customer use this to identify the pickup location. */
  name?: InputMaybe<SortEnum>;
  /** Contact phone number of the pickup location. */
  phone?: InputMaybe<SortEnum>;
  /** A code assigned to pickup location to identify the source. */
  pickup_location_code?: InputMaybe<SortEnum>;
  /** Postcode where pickup location is placed. */
  postcode?: InputMaybe<SortEnum>;
  /** Name of the region. */
  region?: InputMaybe<SortEnum>;
  /** Id of the region. */
  region_id?: InputMaybe<SortEnum>;
  /** Street where pickup location is placed. */
  street?: InputMaybe<SortEnum>;
};

export enum PlaceOrderErrorCodes {
  CartNotActive = "CART_NOT_ACTIVE",
  CartNotFound = "CART_NOT_FOUND",
  GuestEmailMissing = "GUEST_EMAIL_MISSING",
  UnableToPlaceOrder = "UNABLE_TO_PLACE_ORDER",
  Undefined = "UNDEFINED",
}

/** Specifies the quote to be converted to an order. */
export type PlaceOrderInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars["String"]["input"];
};

/** `PriceAdjustment.code` is deprecated. */
export enum PriceAdjustmentCodesEnum {
  /** @deprecated `PriceAdjustmentCodesEnum` is deprecated. Tax is included or excluded in the price. Tax is not shown separately in Catalog. */
  Tax = "TAX",
  /** @deprecated WEEE code is deprecated. Use `fixed_product_taxes.label` instead. */
  Weee = "WEEE",
  /** @deprecated Use `fixed_product_taxes` instead.  Tax is included or excluded in price. The tax is not shown separtely in Catalog. */
  WeeeTax = "WEEE_TAX",
}

/** `PriceAdjustmentDescriptionEnum` is deprecated. States whether a price adjustment is included or excluded. */
export enum PriceAdjustmentDescriptionEnum {
  Excluded = "EXCLUDED",
  Included = "INCLUDED",
}

/** Defines the price type. */
export enum PriceTypeEnum {
  Dynamic = "DYNAMIC",
  Fixed = "FIXED",
  Percent = "PERCENT",
}

/** Defines whether a bundle product's price is displayed as the lowest possible value or as a range. */
export enum PriceViewEnum {
  AsLowAs = "AS_LOW_AS",
  PriceRange = "PRICE_RANGE",
}

/** Defines the filters to be used in the search. A filter contains at least one attribute, a comparison operator, and the value that is being searched for. */
export type ProductAttributeFilterInput = {
  /** Attribute label: Activity */
  activity?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Category Gear */
  category_gear?: InputMaybe<FilterEqualTypeInput>;
  /** Deprecated: use `category_uid` to filter product by category ID. */
  category_id?: InputMaybe<FilterEqualTypeInput>;
  /** Filter product by the unique ID for a `CategoryInterface` object. */
  category_uid?: InputMaybe<FilterEqualTypeInput>;
  /** Filter product by category URL path. */
  category_url_path?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Climate */
  climate?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Collar */
  collar?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Color */
  color?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Description */
  description?: InputMaybe<FilterMatchTypeInput>;
  /** Attribute label: Eco Collection */
  eco_collection?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Erin Recommends */
  erin_recommends?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Features */
  features_bags?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Format */
  format?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Gender */
  gender?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Material */
  material?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Product Name */
  name?: InputMaybe<FilterMatchTypeInput>;
  /** Attribute label: New */
  new?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Pattern */
  pattern?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Performance Fabric */
  performance_fabric?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Price */
  price?: InputMaybe<FilterRangeTypeInput>;
  /** Attribute label: Sale */
  sale?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Short Description */
  short_description?: InputMaybe<FilterMatchTypeInput>;
  /** Attribute label: Size */
  size?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: SKU */
  sku?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Sleeve */
  sleeve?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Strap/Handle */
  strap_bags?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Style Bags */
  style_bags?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Style Bottom */
  style_bottom?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Style General */
  style_general?: InputMaybe<FilterEqualTypeInput>;
  /** The part of the URL that identifies the product */
  url_key?: InputMaybe<FilterEqualTypeInput>;
};

/** Specifies the attribute to use for sorting search results and indicates whether the results are sorted in ascending or descending order. It's possible to sort products using searchable attributes with enabled 'Use in Filter Options' option */
export type ProductAttributeSortInput = {
  /** Attribute label: Product Name */
  name?: InputMaybe<SortEnum>;
  /** Sort by the position assigned to each product. */
  position?: InputMaybe<SortEnum>;
  /** Attribute label: Price */
  price?: InputMaybe<SortEnum>;
  /** Sort by the search relevance score (default). */
  relevance?: InputMaybe<SortEnum>;
};

/** ProductFilterInput is deprecated, use @ProductAttributeFilterInput instead. ProductFilterInput defines the filters to be used in the search. A filter contains at least one attribute, a comparison operator, and the value that is being searched for. */
export type ProductFilterInput = {
  /** The category ID the product belongs to. */
  category_id?: InputMaybe<FilterTypeInput>;
  /** The product's country of origin. */
  country_of_manufacture?: InputMaybe<FilterTypeInput>;
  /** The timestamp indicating when the product was created. */
  created_at?: InputMaybe<FilterTypeInput>;
  /** The name of a custom layout. */
  custom_layout?: InputMaybe<FilterTypeInput>;
  /** XML code that is applied as a layout update to the product page. */
  custom_layout_update?: InputMaybe<FilterTypeInput>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: InputMaybe<FilterTypeInput>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: InputMaybe<FilterTypeInput>;
  /** Indicates whether additional attributes have been created for the product. */
  has_options?: InputMaybe<FilterTypeInput>;
  /** The relative path to the main image on the product page. */
  image?: InputMaybe<FilterTypeInput>;
  /** The label assigned to a product image. */
  image_label?: InputMaybe<FilterTypeInput>;
  /** A number representing the product's manufacturer. */
  manufacturer?: InputMaybe<FilterTypeInput>;
  /** The numeric maximal price of the product. Do not include the currency code. */
  max_price?: InputMaybe<FilterTypeInput>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: InputMaybe<FilterTypeInput>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: InputMaybe<FilterTypeInput>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: InputMaybe<FilterTypeInput>;
  /** The numeric minimal price of the product. Do not include the currency code. */
  min_price?: InputMaybe<FilterTypeInput>;
  /** The product name. Customers use this name to identify the product. */
  name?: InputMaybe<FilterTypeInput>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  news_from_date?: InputMaybe<FilterTypeInput>;
  /** The end date for new product listings. */
  news_to_date?: InputMaybe<FilterTypeInput>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: InputMaybe<FilterTypeInput>;
  /** The keyword required to perform a logical OR comparison. */
  or?: InputMaybe<ProductFilterInput>;
  /** The price of an item. */
  price?: InputMaybe<FilterTypeInput>;
  /** Indicates whether the product has required options. */
  required_options?: InputMaybe<FilterTypeInput>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: InputMaybe<FilterTypeInput>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: InputMaybe<FilterTypeInput>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: InputMaybe<FilterTypeInput>;
  /** The label assigned to a product's small image. */
  small_image_label?: InputMaybe<FilterTypeInput>;
  /** The beginning date that a product has a special price. */
  special_from_date?: InputMaybe<FilterTypeInput>;
  /** The discounted price of the product. Do not include the currency code. */
  special_price?: InputMaybe<FilterTypeInput>;
  /** The end date that a product has a special price. */
  special_to_date?: InputMaybe<FilterTypeInput>;
  /** The file name of a swatch image. */
  swatch_image?: InputMaybe<FilterTypeInput>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: InputMaybe<FilterTypeInput>;
  /** The label assigned to a product's thumbnail image. */
  thumbnail_label?: InputMaybe<FilterTypeInput>;
  /** The price when tier pricing is in effect and the items purchased threshold has been reached. */
  tier_price?: InputMaybe<FilterTypeInput>;
  /** The timestamp indicating when the product was updated. */
  updated_at?: InputMaybe<FilterTypeInput>;
  /** The part of the URL that identifies the product */
  url_key?: InputMaybe<FilterTypeInput>;
  url_path?: InputMaybe<FilterTypeInput>;
  /** The weight of the item, in units defined by the store. */
  weight?: InputMaybe<FilterTypeInput>;
};

/** Product Information used for Pickup Locations search. */
export type ProductInfoInput = {
  /** Product SKU. */
  sku: Scalars["String"]["input"];
};

/** Contains the reviewer's rating for a single aspect of a review. */
export type ProductReviewRatingInput = {
  /** An encoded rating ID. */
  id: Scalars["String"]["input"];
  /** An encoded rating value ID. */
  value_id: Scalars["String"]["input"];
};

/** Deprecated. Use `ProductAttributeSortInput` instead. Specifies the attribute to use for sorting search results and indicates whether the results are sorted in ascending or descending order. */
export type ProductSortInput = {
  /** The product's country of origin. */
  country_of_manufacture?: InputMaybe<SortEnum>;
  /** The timestamp indicating when the product was created. */
  created_at?: InputMaybe<SortEnum>;
  /** The name of a custom layout. */
  custom_layout?: InputMaybe<SortEnum>;
  /** XML code that is applied as a layout update to the product page. */
  custom_layout_update?: InputMaybe<SortEnum>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: InputMaybe<SortEnum>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: InputMaybe<SortEnum>;
  /** Indicates whether additional attributes have been created for the product. */
  has_options?: InputMaybe<SortEnum>;
  /** The relative path to the main image on the product page. */
  image?: InputMaybe<SortEnum>;
  /** The label assigned to a product image. */
  image_label?: InputMaybe<SortEnum>;
  /** A number representing the product's manufacturer. */
  manufacturer?: InputMaybe<SortEnum>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: InputMaybe<SortEnum>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: InputMaybe<SortEnum>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: InputMaybe<SortEnum>;
  /** The product name. Customers use this name to identify the product. */
  name?: InputMaybe<SortEnum>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  news_from_date?: InputMaybe<SortEnum>;
  /** The end date for new product listings. */
  news_to_date?: InputMaybe<SortEnum>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: InputMaybe<SortEnum>;
  /** The price of the item. */
  price?: InputMaybe<SortEnum>;
  /** Indicates whether the product has required options. */
  required_options?: InputMaybe<SortEnum>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: InputMaybe<SortEnum>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: InputMaybe<SortEnum>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: InputMaybe<SortEnum>;
  /** The label assigned to a product's small image. */
  small_image_label?: InputMaybe<SortEnum>;
  /** The beginning date that a product has a special price. */
  special_from_date?: InputMaybe<SortEnum>;
  /** The discounted price of the product. */
  special_price?: InputMaybe<SortEnum>;
  /** The end date that a product has a special price. */
  special_to_date?: InputMaybe<SortEnum>;
  /** Indicates the criteria to sort swatches. */
  swatch_image?: InputMaybe<SortEnum>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: InputMaybe<SortEnum>;
  /** The label assigned to a product's thumbnail image. */
  thumbnail_label?: InputMaybe<SortEnum>;
  /** The price when tier pricing is in effect and the items purchased threshold has been reached. */
  tier_price?: InputMaybe<SortEnum>;
  /** The timestamp indicating when the product was updated. */
  updated_at?: InputMaybe<SortEnum>;
  /** The part of the URL that identifies the product */
  url_key?: InputMaybe<SortEnum>;
  url_path?: InputMaybe<SortEnum>;
  /** The weight of the item, in units defined by the store. */
  weight?: InputMaybe<SortEnum>;
};

/** This enumeration states whether a product stock status is in stock or out of stock */
export enum ProductStockStatus {
  InStock = "IN_STOCK",
  OutOfStock = "OUT_OF_STOCK",
}

/** Specifies the field to use for sorting quote items */
export type QuoteItemsSortInput = {
  /** Specifies the quote items field to sort by */
  field: SortQuoteItemsEnum;
  /** Specifies the order of quote items' sorting */
  order: SortEnum;
};

export enum ReCaptchaFormEnum {
  Braintree = "BRAINTREE",
  Contact = "CONTACT",
  CustomerCreate = "CUSTOMER_CREATE",
  CustomerEdit = "CUSTOMER_EDIT",
  CustomerForgotPassword = "CUSTOMER_FORGOT_PASSWORD",
  CustomerLogin = "CUSTOMER_LOGIN",
  Newsletter = "NEWSLETTER",
  PlaceOrder = "PLACE_ORDER",
  ProductReview = "PRODUCT_REVIEW",
  Sendfriend = "SENDFRIEND",
}

/** Specifies the cart from which to remove a coupon. */
export type RemoveCouponFromCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars["String"]["input"];
};

/** Specifies which items to remove from the cart. */
export type RemoveItemFromCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars["String"]["input"];
  /** Deprecated. Use `cart_item_uid` instead. */
  cart_item_id?: InputMaybe<Scalars["Int"]["input"]>;
  /** Required field. The unique ID for a `CartItemInterface` object. */
  cart_item_uid?: InputMaybe<Scalars["ID"]["input"]>;
};

/** Defines which products to remove from a compare list. */
export type RemoveProductsFromCompareListInput = {
  /** An array of product IDs to remove from the compare list. */
  products: Array<InputMaybe<Scalars["ID"]["input"]>>;
  /** The unique identifier of the compare list to modify. */
  uid: Scalars["ID"]["input"];
};

/** This enumeration defines the scope type for customer orders. */
export enum ScopeTypeEnum {
  Global = "GLOBAL",
  Store = "STORE",
  Website = "WEBSITE",
}

/** Defines the referenced product and the email sender and recipients. */
export type SendEmailToFriendInput = {
  /** The ID of the product that the sender is referencing. */
  product_id: Scalars["Int"]["input"];
  /** An array containing information about each recipient. */
  recipients: Array<InputMaybe<SendEmailToFriendRecipientInput>>;
  /** Information about the customer and the content of the message. */
  sender: SendEmailToFriendSenderInput;
};

/** Contains details about a recipient. */
export type SendEmailToFriendRecipientInput = {
  /** The email address of the recipient. */
  email: Scalars["String"]["input"];
  /** The name of the recipient. */
  name: Scalars["String"]["input"];
};

/** Contains details about the sender. */
export type SendEmailToFriendSenderInput = {
  /** The email address of the sender. */
  email: Scalars["String"]["input"];
  /** The text of the message to be sent. */
  message: Scalars["String"]["input"];
  /** The name of the sender. */
  name: Scalars["String"]["input"];
};

/** Sets the billing address. */
export type SetBillingAddressOnCartInput = {
  /** The billing address. */
  billing_address: BillingAddressInput;
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars["String"]["input"];
};

/** Defines the guest email and cart. */
export type SetGuestEmailOnCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars["String"]["input"];
  /** The email address of the guest. */
  email: Scalars["String"]["input"];
};

/** Applies a payment method to the quote. */
export type SetPaymentMethodAndPlaceOrderInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars["String"]["input"];
  /** The payment method data to apply to the cart. */
  payment_method: PaymentMethodInput;
};

/** Applies a payment method to the cart. */
export type SetPaymentMethodOnCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars["String"]["input"];
  /** The payment method data to apply to the cart. */
  payment_method: PaymentMethodInput;
};

/** Specifies an array of addresses to use for shipping. */
export type SetShippingAddressesOnCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars["String"]["input"];
  /** An array of shipping addresses. */
  shipping_addresses: Array<InputMaybe<ShippingAddressInput>>;
};

/** Applies one or shipping methods to the cart. */
export type SetShippingMethodsOnCartInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars["String"]["input"];
  /** An array of shipping methods. */
  shipping_methods: Array<InputMaybe<ShippingMethodInput>>;
};

/** Defines whether bundle items must be shipped together. */
export enum ShipBundleItemsEnum {
  Separately = "SEPARATELY",
  Together = "TOGETHER",
}

/** Defines a single shipping address. */
export type ShippingAddressInput = {
  /** Defines a shipping address. */
  address?: InputMaybe<CartAddressInput>;
  /** An ID from the customer's address book that uniquely identifies the address to be used for shipping. */
  customer_address_id?: InputMaybe<Scalars["Int"]["input"]>;
  /** Text provided by the shopper. */
  customer_notes?: InputMaybe<Scalars["String"]["input"]>;
  /** The code of Pickup Location which will be used for In-Store Pickup. */
  pickup_location_code?: InputMaybe<Scalars["String"]["input"]>;
};

/** Defines the shipping carrier and method. */
export type ShippingMethodInput = {
  /** A string that identifies a commercial carrier or an offline delivery method. */
  carrier_code: Scalars["String"]["input"];
  /** A string that indicates which service a commercial carrier will use to ship items. For offline delivery methods, this value is similar to the label displayed on the checkout page. */
  method_code: Scalars["String"]["input"];
};

/** Defines a single product to add to the cart. */
export type SimpleProductCartItemInput = {
  /** An array that defines customizable options for the product. */
  customizable_options?: InputMaybe<Array<InputMaybe<CustomizableOptionInput>>>;
  /** An object containing the `sku`, `quantity`, and other relevant information about the product. */
  data: CartItemInput;
};

/** Smart button payment inputs */
export type SmartButtonMethodInput = {
  /** The payment source for the payment method */
  payment_source?: InputMaybe<Scalars["String"]["input"]>;
  /** The payment services order ID */
  payments_order_id?: InputMaybe<Scalars["String"]["input"]>;
  /** PayPal order ID */
  paypal_order_id?: InputMaybe<Scalars["String"]["input"]>;
};

/** Indicates whether to return results in ascending or descending order. */
export enum SortEnum {
  Asc = "ASC",
  Desc = "DESC",
}

/** Specifies the field to use for sorting quote items */
export enum SortQuoteItemsEnum {
  BaseDiscountAmount = "BASE_DISCOUNT_AMOUNT",
  BaseDiscountTaxCompensationAmount = "BASE_DISCOUNT_TAX_COMPENSATION_AMOUNT",
  BasePrice = "BASE_PRICE",
  BasePriceIncTax = "BASE_PRICE_INC_TAX",
  BaseRowTotal = "BASE_ROW_TOTAL",
  BaseRowTotalIncTax = "BASE_ROW_TOTAL_INC_TAX",
  BaseTaxAmount = "BASE_TAX_AMOUNT",
  BaseTaxBeforeDiscount = "BASE_TAX_BEFORE_DISCOUNT",
  CreatedAt = "CREATED_AT",
  CustomPrice = "CUSTOM_PRICE",
  Description = "DESCRIPTION",
  DiscountAmount = "DISCOUNT_AMOUNT",
  DiscountPercent = "DISCOUNT_PERCENT",
  DiscountTaxCompensationAmount = "DISCOUNT_TAX_COMPENSATION_AMOUNT",
  FreeShipping = "FREE_SHIPPING",
  ItemId = "ITEM_ID",
  Name = "NAME",
  OriginalCustomPrice = "ORIGINAL_CUSTOM_PRICE",
  Price = "PRICE",
  PriceIncTax = "PRICE_INC_TAX",
  ProductId = "PRODUCT_ID",
  ProductType = "PRODUCT_TYPE",
  Qty = "QTY",
  RowTotal = "ROW_TOTAL",
  RowTotalIncTax = "ROW_TOTAL_INC_TAX",
  RowTotalWithDiscount = "ROW_TOTAL_WITH_DISCOUNT",
  RowWeight = "ROW_WEIGHT",
  Sku = "SKU",
  TaxAmount = "TAX_AMOUNT",
  TaxBeforeDiscount = "TAX_BEFORE_DISCOUNT",
  TaxPercent = "TAX_PERCENT",
  UpdatedAt = "UPDATED_AT",
  Weight = "WEIGHT",
}

/** Indicates the status of the request. */
export enum SubscriptionStatusesEnum {
  NotActive = "NOT_ACTIVE",
  Subscribed = "SUBSCRIBED",
  Unconfirmed = "UNCONFIRMED",
  Unsubscribed = "UNSUBSCRIBED",
}

/** Swatch attribute metadata input types. */
export enum SwatchInputTypeEnum {
  Boolean = "BOOLEAN",
  Date = "DATE",
  Datetime = "DATETIME",
  Dropdown = "DROPDOWN",
  File = "FILE",
  Gallery = "GALLERY",
  Hidden = "HIDDEN",
  Image = "IMAGE",
  MediaImage = "MEDIA_IMAGE",
  Multiline = "MULTILINE",
  Multiselect = "MULTISELECT",
  Price = "PRICE",
  Select = "SELECT",
  Text = "TEXT",
  Textarea = "TEXTAREA",
  Undefined = "UNDEFINED",
  Visual = "VISUAL",
  Weight = "WEIGHT",
}

/** Synchronizes the payment order details */
export type SyncPaymentOrderInput = {
  /** The customer cart ID */
  cartId: Scalars["String"]["input"];
  /** PayPal order ID */
  id: Scalars["String"]["input"];
};

export enum TaxWrappingEnum {
  DisplayExcludingTax = "DISPLAY_EXCLUDING_TAX",
  DisplayIncludingTax = "DISPLAY_INCLUDING_TAX",
  DisplayTypeBoth = "DISPLAY_TYPE_BOTH",
}

/** Modifies the specified items in the cart. */
export type UpdateCartItemsInput = {
  /** The unique ID of a `Cart` object. */
  cart_id: Scalars["String"]["input"];
  /** An array of items to be updated. */
  cart_items: Array<InputMaybe<CartItemUpdateInput>>;
};

/** This enumeration defines the entity type. */
export enum UrlRewriteEntityTypeEnum {
  Category = "CATEGORY",
  CmsPage = "CMS_PAGE",
  Product = "PRODUCT",
}

/** Defines whether the attribute is filterable in layered navigation. */
export enum UseInLayeredNavigationOptions {
  FilterableNoResult = "FILTERABLE_NO_RESULT",
  FilterableWithResults = "FILTERABLE_WITH_RESULTS",
  No = "NO",
}

/** List of validation rule names applied to a customer attribute. */
export enum ValidationRuleEnum {
  DateRangeMax = "DATE_RANGE_MAX",
  DateRangeMin = "DATE_RANGE_MIN",
  FileExtensions = "FILE_EXTENSIONS",
  InputValidation = "INPUT_VALIDATION",
  MaxFileSize = "MAX_FILE_SIZE",
  MaxImageHeight = "MAX_IMAGE_HEIGHT",
  MaxImageWidth = "MAX_IMAGE_WIDTH",
  MaxTextLength = "MAX_TEXT_LENGTH",
  MinTextLength = "MIN_TEXT_LENGTH",
}

/** Vault payment inputs */
export type VaultMethodInput = {
  /** The payment source for the payment method */
  payment_source?: InputMaybe<Scalars["String"]["input"]>;
  /** The payment services order ID */
  payments_order_id?: InputMaybe<Scalars["String"]["input"]>;
  /** PayPal order ID */
  paypal_order_id?: InputMaybe<Scalars["String"]["input"]>;
  /** The public hash of the token. */
  public_hash?: InputMaybe<Scalars["String"]["input"]>;
};

/** Contains required input for payment methods with Vault support. */
export type VaultTokenInput = {
  /** The public hash of the payment token. */
  public_hash: Scalars["String"]["input"];
};

/** Defines a single product to add to the cart. */
export type VirtualProductCartItemInput = {
  /** An array that defines customizable options for the product. */
  customizable_options?: InputMaybe<Array<InputMaybe<CustomizableOptionInput>>>;
  /** An object containing the `sku`, `quantity`, and other relevant information about the product. */
  data: CartItemInput;
};

/** A list of possible error types. */
export enum WishListUserInputErrorType {
  ProductNotFound = "PRODUCT_NOT_FOUND",
  Undefined = "UNDEFINED",
}

/** A list of possible error types. */
export enum WishlistCartUserInputErrorType {
  InsufficientStock = "INSUFFICIENT_STOCK",
  NotSalable = "NOT_SALABLE",
  ProductNotFound = "PRODUCT_NOT_FOUND",
  Undefined = "UNDEFINED",
}

/** Defines the items to add to a wish list. */
export type WishlistItemInput = {
  /** An array of options that the customer entered. */
  entered_options?: InputMaybe<Array<InputMaybe<EnteredOptionInput>>>;
  /** For complex product types, the SKU of the parent product. */
  parent_sku?: InputMaybe<Scalars["String"]["input"]>;
  /** The amount or number of items to add. */
  quantity: Scalars["Float"]["input"];
  /** An array of strings corresponding to options the customer selected. */
  selected_options?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** The SKU of the product to add. For complex product types, specify the child product SKU. */
  sku: Scalars["String"]["input"];
};

/** Defines updates to items in a wish list. */
export type WishlistItemUpdateInput = {
  /** Customer-entered comments about the item. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** An array of options that the customer entered. */
  entered_options?: InputMaybe<Array<InputMaybe<EnteredOptionInput>>>;
  /** The new amount or number of this item. */
  quantity?: InputMaybe<Scalars["Float"]["input"]>;
  /** An array of strings corresponding to options the customer selected. */
  selected_options?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** The unique ID for a `WishlistItemInterface` object. */
  wishlist_item_id: Scalars["ID"]["input"];
};

/** Assigns a specific `cart_id` to the empty cart. */
export type CreateEmptyCartInput = {
  /** The ID to assign to the cart. */
  cart_id?: InputMaybe<Scalars["String"]["input"]>;
};

export type GetProductsCollectionMagentoQueryVariables = Exact<{
  filter?: InputMaybe<ProductAttributeFilterInput>;
  sort?: InputMaybe<ProductAttributeSortInput>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  currentPage?: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type GetProductsCollectionMagentoQuery = {
  products?:
    | {
        total_count?: number | undefined;
        items?:
          | Array<
              | {
                  uid: string;
                  name?: string | undefined;
                  sku?: string | undefined;
                  small_image?: { url?: string | undefined } | undefined;
                  description?: { html: string } | undefined;
                  price?:
                    | {
                        regularPrice?:
                          | {
                              amount?:
                                | {
                                    currency?: CurrencyEnum | undefined;
                                    value?: number | undefined;
                                  }
                                | undefined;
                            }
                          | undefined;
                      }
                    | undefined;
                }
              | {
                  uid: string;
                  name?: string | undefined;
                  sku?: string | undefined;
                  small_image?: { url?: string | undefined } | undefined;
                  description?: { html: string } | undefined;
                  price?:
                    | {
                        regularPrice?:
                          | {
                              amount?:
                                | {
                                    currency?: CurrencyEnum | undefined;
                                    value?: number | undefined;
                                  }
                                | undefined;
                            }
                          | undefined;
                      }
                    | undefined;
                }
              | {
                  uid: string;
                  name?: string | undefined;
                  sku?: string | undefined;
                  small_image?: { url?: string | undefined } | undefined;
                  description?: { html: string } | undefined;
                  price?:
                    | {
                        regularPrice?:
                          | {
                              amount?:
                                | {
                                    currency?: CurrencyEnum | undefined;
                                    value?: number | undefined;
                                  }
                                | undefined;
                            }
                          | undefined;
                      }
                    | undefined;
                }
              | {
                  uid: string;
                  name?: string | undefined;
                  sku?: string | undefined;
                  small_image?: { url?: string | undefined } | undefined;
                  description?: { html: string } | undefined;
                  price?:
                    | {
                        regularPrice?:
                          | {
                              amount?:
                                | {
                                    currency?: CurrencyEnum | undefined;
                                    value?: number | undefined;
                                  }
                                | undefined;
                            }
                          | undefined;
                      }
                    | undefined;
                }
              | {
                  uid: string;
                  name?: string | undefined;
                  sku?: string | undefined;
                  small_image?: { url?: string | undefined } | undefined;
                  description?: { html: string } | undefined;
                  price?:
                    | {
                        regularPrice?:
                          | {
                              amount?:
                                | {
                                    currency?: CurrencyEnum | undefined;
                                    value?: number | undefined;
                                  }
                                | undefined;
                            }
                          | undefined;
                      }
                    | undefined;
                }
              | {
                  uid: string;
                  name?: string | undefined;
                  sku?: string | undefined;
                  small_image?: { url?: string | undefined } | undefined;
                  description?: { html: string } | undefined;
                  price?:
                    | {
                        regularPrice?:
                          | {
                              amount?:
                                | {
                                    currency?: CurrencyEnum | undefined;
                                    value?: number | undefined;
                                  }
                                | undefined;
                            }
                          | undefined;
                      }
                    | undefined;
                }
              | undefined
            >
          | undefined;
      }
    | undefined;
};

export type GetProductBySkuQueryVariables = Exact<{
  sku: Scalars["String"]["input"];
}>;

export type GetProductBySkuQuery = {
  products?:
    | {
        items?:
          | Array<
              | {
                  uid: string;
                  sku?: string | undefined;
                  name?: string | undefined;
                  small_image?: { url?: string | undefined } | undefined;
                  description?: { html: string } | undefined;
                }
              | {
                  uid: string;
                  sku?: string | undefined;
                  name?: string | undefined;
                  small_image?: { url?: string | undefined } | undefined;
                  description?: { html: string } | undefined;
                }
              | {
                  uid: string;
                  sku?: string | undefined;
                  name?: string | undefined;
                  small_image?: { url?: string | undefined } | undefined;
                  description?: { html: string } | undefined;
                }
              | {
                  uid: string;
                  sku?: string | undefined;
                  name?: string | undefined;
                  small_image?: { url?: string | undefined } | undefined;
                  description?: { html: string } | undefined;
                }
              | {
                  uid: string;
                  sku?: string | undefined;
                  name?: string | undefined;
                  small_image?: { url?: string | undefined } | undefined;
                  description?: { html: string } | undefined;
                }
              | {
                  uid: string;
                  sku?: string | undefined;
                  name?: string | undefined;
                  small_image?: { url?: string | undefined } | undefined;
                  description?: { html: string } | undefined;
                }
              | undefined
            >
          | undefined;
      }
    | undefined;
};

export const GetProductsCollectionMagentoDocument = gql`
  query GetProductsCollectionMagento(
    $filter: ProductAttributeFilterInput
    $sort: ProductAttributeSortInput
    $limit: Int
    $currentPage: Int
  ) {
    products(
      filter: $filter
      sort: $sort
      pageSize: $limit
      currentPage: $currentPage
    ) {
      total_count
      items {
        uid
        name
        sku
        small_image {
          url
        }
        description {
          html
        }
        price {
          regularPrice {
            amount {
              currency
              value
            }
          }
        }
      }
    }
  }
`;
export const GetProductBySkuDocument = gql`
  query GetProductBySku($sku: String!) {
    products(filter: { sku: { eq: $sku } }) {
      items {
        uid
        sku
        name
        small_image {
          url
        }
        description {
          html
        }
      }
    }
  }
`;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string,
  variables?: any,
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (
  action,
  _operationName,
  _operationType,
  _variables,
) => action();

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper,
) {
  return {
    GetProductsCollectionMagento(
      variables?: GetProductsCollectionMagentoQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<GetProductsCollectionMagentoQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetProductsCollectionMagentoQuery>(
            GetProductsCollectionMagentoDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        "GetProductsCollectionMagento",
        "query",
        variables,
      );
    },
    GetProductBySku(
      variables: GetProductBySkuQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<GetProductBySkuQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetProductBySkuQuery>(
            GetProductBySkuDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        "GetProductBySku",
        "query",
        variables,
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
