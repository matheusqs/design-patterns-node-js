import { OneProduct } from "./OneProduct";
import { TwoProduct } from "./TwoProduct";
import { ProductEnum } from "./ProductEnum";

export default class ProductFactory {
  create(type: string | undefined) {
    switch (type) {
      case ProductEnum.OneProduct:
        return new OneProduct();
      case ProductEnum.TwoProduct:
        return new TwoProduct();
      default:
        throw new Error("Product type not supported");
    }
  }
}
