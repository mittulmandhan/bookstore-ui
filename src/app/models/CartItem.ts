export class CartItem {
    id: string;
    total: number;
    constructor(public productId: string,
                public name: string,
                public unitPrice: number,
                public quantity: number) { }
}
