import { brands } from "../data/brands";

export default function BrandFilter({ selectedBrand, onSelect }) {
  return (
    <section className="mt-20 border-t pt-12 text-center">
      <h3 className="text-2xl font-semibold mb-10">
        Shop by brand
      </h3>

      <div className="flex flex-wrap justify-center gap-8 items-center">
        {/* Todas */}
        <button
          onClick={() => onSelect(null)}
          className={`px-8 py-4 border rounded-full text-base font-medium transition ${
            selectedBrand === null
              ? "bg-green-700 text-white border-green-700"
              : "text-gray-700 border-gray-300 hover:border-green-700"
          }`}
        >
          All brands
        </button>

        {brands.map((brand) => (
           <button
            key={brand.slug}
            onClick={() => onSelect(brand.name.toLowerCase())}
            className={`p-6 border rounded-2xl transition hover:shadow-lg ${
              selectedBrand === brand.name.toLowerCase()
                ? "border-red-700 shadow-md"
                : "border-gray-200"
            }`}
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="h-26 w-auto object-contain grayscale hover:grayscale-0 transition"
            />
          </button>
        ))}
      </div>
    </section>
  );
}
