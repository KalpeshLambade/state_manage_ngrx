export class Cart {
  id!: number;
  title!: string;
  price!: number;
  total!: number;
  quantity?: number;
  discountPercentage?: number;
  discountedTotal?: number;
  thumbnail?: string;
}
