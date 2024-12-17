export interface IProduct {
  uid: string;
  name: string;
  sku: string;
  description: { html: string };
  small_image: { url: string };
}

export interface IProductCollection {
  total_count: number;
  items: IProduct[] | [];
}
