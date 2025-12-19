import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    await prisma.product.deleteMany();

  await prisma.product.createMany({
    data: [
      {
        name: "Blusa de algodón",
        brand: "Zara",
        price: 39.9,
        size: "M",
        condition: "Usado - Excelente",
        imageUrl: "/images/ropa1.jpg",
        description: "Blusa de algodón en excelente estado, ideal para uso diario."
      },
      {
        name: "Vestido casual",
        brand: "H&M",
        price: 49.9,
        size: "S",
        condition: "Usado - Bueno",
        imageUrl: "/images/ropa1.jpg",
        description: "Vestido casual cómodo, sin daños visibles."
      },
      {
        name: "Chaqueta denim",
        brand: "Levi's",
        price: 79.9,
        size: "L",
        condition: "Usado - Excelente",
        imageUrl: "/images/ropa1.jpg",
        description: "Chaqueta denim clásica, poco uso."
      }
    ]
  });
}

main()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect());
