class Product{
    constructor(title,price,inSale=false,salePrecentage=0,quantity,image){
        this.title=title
        this.price=price
        this.inSale=inSale
        this.salePrecentage=salePrecentage
        this.priceAfterSale=price;
        this.quantity=quantity
        this.image=image
    }
    discountedPrice(){
        if(this.inSale){
                    this.priceAfterSale=this.price -this.price*this.salePrecentage/100;
        }
    }
    getTotalPrice(){
        this.discountedPrice()
        return this.quantity*this.priceAfterSale
    }
}

let myProduct =new Product ("banana",100,false,0,10)
let myProduct2 =new Product ("banana",100,true,10,10)
console.log(myProduct.getTotalPrice());
console.log(myProduct2.getTotalPrice());
