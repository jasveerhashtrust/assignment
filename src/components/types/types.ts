export interface DetailsType{
    filter?:any,
    details:{
        dob:{
            age:string
        }
        name:{
            first:string,
            last:string,
            title:string
        }
    }
}

export interface ItemTypes{
        dob:{
            age:string
        }
        name:{
            first:string,
            last:string,
            title:string
        }
    }

 export interface PriceTypes{
    price:string,
    currency:string
    price_gram_18k:string
    price_gram_24k:string
 }   