require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');

const products = [{
        name: 'Silver Dive Watch',
        price: 2999,
        image: 'https://www.hgp-watches.com/cdn/shop/files/gmt-monnin-case-diving-watch-diver-200m-automatic-black-dial-black-bezel-steel-bracelet-hgp-23-d2g-001-021-bor-stl.jpg?v=1763372151',
        description: 'Stainless steel case, ceramic bezel, Swiss movement. Water-resistant to 300m.',
        category: 'Watches',
        stock: 2,
    },
    {
        name: 'Quilted Leather Handbag',
        price: 18500,
        image: 'https://media.mango.com/is/image/punto/37036367-99-900?wid=2048&hei=2867&fit=crop',
        description: 'Soft quilted leather with a fine gold chain. Hand-stitched in small batches.',
        category: 'Bags',
        stock: 5,
    },
    {
        name: 'Floral Print Handbag',
        price: 14500,
        image: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?w=900&q=85',
        description: 'Floral print leather handbag with a top handle. A statement for warm days.',
        category: 'Bags',
        stock: 3,
    },
    {
        name: 'Red Top-Handle Bag',
        price: 16500,
        image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=900&q=85',
        description: 'Structured red leather top-handle bag. A bold, elegant statement piece.',
        category: 'Bags',
        stock: 8,
    },
    {
        name: 'Gold Pendant Necklace',
        price: 12800,
        image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=900&q=85',
        description: 'Fine gold chain with a sculpted pendant. A quiet statement.',
        category: 'Jewelry',
        stock: 4,
    },
    {
        name: 'Linen Button Shirt',
        price: 6500,
        image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=900&q=85',
        description: 'Breathable linen shirt with a relaxed cut. Made for warm days.',
        category: 'Clothing',
        stock: 12,
    },
    {
        name: 'Tailored Wool Trousers',
        price: 12500,
        image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=900&q=85',
        description: 'Tailored wool trousers with a clean silhouette. Classic, quiet, versatile.',
        category: 'Clothing',
        stock: 2,
    },
    {
        name: 'Gold Link Bracelet',
        price: 11200,
        image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=900&q=85',
        description: 'A fine gold link bracelet. Refined, light, everyday.',
        category: 'Jewelry',
        stock: 6,
    },
    {
        name: 'White Leather Sneakers',
        price: 16500,
        image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=900&q=85',
        description: 'Clean white leather sneakers. Handcrafted, timeless, worn everywhere.',
        category: 'Shoes',
        stock: 7,
    },
    {
        name: 'Black Leather Loafers',
        price: 19500,
        image: 'https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=900&q=85',
        description: 'Polished black leather loafers. Hand-finished, classic, made to last.',
        category: 'Shoes',
        stock: 3,
    },
    {
        name: 'Aviator Sunglasses',
        price: 11500,
        image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=900&q=85',
        description: 'Classic aviators with a titanium frame and polarized lenses.',
        category: 'Accessories',
        stock: 9,
    },
    {
        name: 'Silk Patterned Scarf',
        price: 4800,
        image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=900&q=85',
        description: 'Hand-rolled silk with an intricate pattern. A quiet luxury.',
        category: 'Accessories',
        stock: 15,
    },
    {
        name: 'N°5 Eau de Parfum',
        price: 9800,
        image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=900&q=85',
        description: 'Iconic floral-aldehyde fragrance. Long-lasting, elegant, unmistakable.',
        category: 'Fragrance',
        stock: 5,
    },
    {
        name: 'Suede Chelsea Boots',
        price: 24000,
        image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=900&q=85',
        description: 'Soft suede Chelsea boots. Hand-finished, classic silhouette, made to last.',
        category: 'Shoes',
        stock: 2,
    },
    {
        name: 'Leather Card Holder',
        price: 3800,
        image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=900&q=85',
        description: 'Slim leather card holder. Hand-stitched, minimalist, everyday.',
        category: 'Accessories',
        stock: 20,
    },
];

async function seed() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('✅ MongoDB connected');

        await Product.deleteMany({});
        console.log('🗑️  Cleared existing products');

        const created = await Product.insertMany(products);
        console.log(`✅ Inserted ${created.length} products`);

        await mongoose.connection.close();
        console.log('👋 Done. Connection closed.');
    } catch (err) {
        console.error('❌ Error:', err.message);
        process.exit(1);
    }
}

seed();