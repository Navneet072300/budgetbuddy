import { Product } from "@/types";
import ClientImage from "./ClientImage";
import Link from "next/link";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  if (!product) return <div>Product data is unavailable.</div>;

  return (
    <Link
      href={`/products/${product._id}`}
      className="product-card"
      aria-label={`View details for ${product.title}`}
    >
      <div className="product-card_img-container">
        <ClientImage
          src={product.image}
          alt={product.title}
          width={200}
          height={200}
        />
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="product-title">{product.title}</h3>

        <div className="flex justify-between">
          <p className="text-black opacity-50 text-lg capitalize">
            {product.category || "Uncategorized"}
          </p>
          <p className="text-black text-lg font-semibold">
            <span>{product?.currency || "$"}</span>
            <span>{product?.currentPrice?.toFixed(2) || "0.00"}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
