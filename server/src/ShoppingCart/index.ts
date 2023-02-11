export type Cart = {
  unitPrice: number;
  quantity: number;
  discount: number;
};
export class Shopping {
  totalize(cart: Cart[]): number {
    return 0.0;
  }
}
