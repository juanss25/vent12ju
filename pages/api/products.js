import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const products = await prisma.product.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return res.status(200).json(products);
  }

  if (req.method === 'POST') {
    const product = await prisma.product.create({
      data: req.body
    });
    return res.status(201).json(product);
  }

  res.status(405).json({ message: 'Method not allowed' });
}
