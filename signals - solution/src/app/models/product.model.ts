/**
 * Product Model
 * Represents a product in the shopping cart
 */
export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

/**
 * Helper type for product updates
 */
export interface QuantityUpdate {
  productId: number;
  newQuantity: number;
}
