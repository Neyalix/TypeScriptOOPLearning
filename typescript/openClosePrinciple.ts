// regular customer, should get 10 %
// premium customer, should get 20 %
// gold cutomerm, should get 30 %

// interface Customer {
//   giveDiscount(): number;
// }
// // Open to modify the discount for the particular customer, but yet not modifying logic 
// class RegularCustomer implements Customer {
//   giveDiscount(): number {
//     return 10;
//   }
// }
// class PremiumCustomer implements Customer {
//   giveDiscount(): number {
//     return 20;
//   }
// }
// class GoldCustomer implements Customer {
//   giveDiscount(): number {
//     return 30;
//   }
// }

// class Discount {
//   giveDiscount(customer: Customer): number {
//     return customer.giveDiscount();
//   }
// }

// let premiumCustomer: PremiumCustomer = new PremiumCustomer();
// let goldCustomer: GoldCustomer = new GoldCustomer();
// let discount: Discount = new Discount();

// let finalValue = discount.giveDiscount(goldCustomer)
// console.log(`Discount is ${finalValue}%`)

