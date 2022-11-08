export type CreateProduct = {
  name: string;
  description: string;
  price: number;
  stock: number;
  type: string[];
};

export type updateProduct = {
  price?: number;
  stock?: number;
};
