import MediumCard from "./MediumCard";
import { useFetchList, useQuery } from "@/app/lib/hooks";

interface MediumCardsProps {
  products: string[];
}

function MediumCards(prop: MediumCardsProps) {
  // Fetch products from API
  const [query, setQuery, resetQuery] = useQuery({
    products: prop.products
  });

  const [products] = useFetchList("/api/products/layout", query, { cache: "no-store" });
  console.log("Products fetched:", products);

  return (
    <div className="flex gap-3 flex-wrap justify-center w-full">
      {products.map((product: any) => (
        <MediumCard
          key={product._key}
          appleIntel={product.details.appleIntel}
          descriptionPos={product.details.descriptionPos}
          learnMore={product.details.learnMore}
          buy={product.details.buy}
          title={product.details.title}
          noTitle={product.details.noTitle}
          icon={product.details.icon}
          descriptions={product.details.descriptions}
          imageUrl={product.details.imageUrl}
        />
      ))}
    </div>
  );
}

export default MediumCards;
