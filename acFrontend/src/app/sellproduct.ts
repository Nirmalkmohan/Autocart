export interface Sellproduct {
        map(arg0: (product: any) => any): any;
        slice(): any[];
        id : number;
        sellngItem: string;
        Category: string;
        description: string;
        price: number;
        image: File;
        user : number;
}
