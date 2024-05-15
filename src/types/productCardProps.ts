export interface ProductCardProps {
  product: {
    _id?: string;
    ownerEmail?: string;
    buyerName?: string;
    name: string;
    brand: string;
    imageUrl: string;
    frameMaterial: string;
    frameShape: string;
    quantity: number;
    saleDate?: string;
    lens: string;
    price: number;
    gender: string;
    lenseColor: string;
    frameColor: string;
    bridgeSize: number;
    border: boolean;
    descriptions: string;
  };
}