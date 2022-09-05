import ProductFactory from "./ProductFactory";

export default class RunFactory {
  run() {
    try {
      this.execute();
    } catch (error) {
      console.error(error);
    }
  }

  execute() {
    const productFactory = new ProductFactory();
    const product = productFactory.create(process.env.product);

    console.log(product.type);
  }
}
