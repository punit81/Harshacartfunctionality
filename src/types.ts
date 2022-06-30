// custom data type definitions
export type ProductType={
    productId: number;
    productName: string;
    productImage: string;
    productPrice: number;
    productStock: number; // optional properties should have ? 
    productQuantity?: number;
};
