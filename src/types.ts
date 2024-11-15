export interface IProduct {
  title: string;
  description?: string;
  slug?: string;
  image: {
    url?: string | undefined;
  };
}

export interface IProductCollection {
  total: number;
  items: IProduct[] | [];
}
