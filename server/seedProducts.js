import "dotenv/config";
import path from "path";
import { fileURLToPath } from "url";
import mongoose from "mongoose";
import { v2 as cloudinary } from "cloudinary";

import Product from "./models/Product.js";
import connectDB from "./configs/db.js";
import connectCloudinary from "./configs/cloudinary.js";


// ============================================================
// PATH SETUP
// ============================================================

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ASSETS_DIR = path.resolve(
  __dirname,
  "../client/src/assets"
);


// ============================================================
// PRODUCT CATALOGUE
// ============================================================

const products = [

  // ==========================================================
  // VEGETABLES
  // ==========================================================

  {
    name: "Potato 500g - 1",
    category: "Vegetables",
    price: 25,
    offerPrice: 20,
    images: [
      "potato_image_1.png"
    ],
    description: [
      "Fresh and organic",
      "Rich in carbohydrates",
      "Ideal for curries and fries"
    ]
  },

  {
    name: "Potato 500g - 2",
    category: "Vegetables",
    price: 25,
    offerPrice: 20,
    images: [
      "potato_image_2.png"
    ],
    description: [
      "Fresh and organic",
      "Rich in carbohydrates",
      "Ideal for curries and fries"
    ]
  },

  {
    name: "Potato 500g - 3",
    category: "Vegetables",
    price: 25,
    offerPrice: 20,
    images: [
      "potato_image_3.png"
    ],
    description: [
      "Fresh and organic",
      "Rich in carbohydrates",
      "Ideal for curries and fries"
    ]
  },

  {
    name: "Potato 500g - 4",
    category: "Vegetables",
    price: 25,
    offerPrice: 20,
    images: [
      "potato_image_4.png"
    ],
    description: [
      "Fresh and organic",
      "Rich in carbohydrates",
      "Ideal for curries and fries"
    ]
  },


  // ----------------------------------------------------------
  // TOMATO
  // ----------------------------------------------------------

  {
    name: "Tomato 1 kg - 1",
    category: "Vegetables",
    price: 40,
    offerPrice: 35,
    images: [
      "tomato_image.png"
    ],
    description: [
      "Juicy and ripe",
      "Rich in Vitamin C",
      "Perfect for salads and sauces",
      "Farm fresh quality"
    ]
  },

  {
    name: "Tomato 1 kg - 2",
    category: "Vegetables",
    price: 40,
    offerPrice: 35,
    images: [
      "tomato_image_2.png"
    ],
    description: [
      "Juicy and ripe",
      "Rich in Vitamin C",
      "Perfect for salads and sauces",
      "Farm fresh quality"
    ]
  },


  // ----------------------------------------------------------
  // CARROT
  // ----------------------------------------------------------

  {
    name: "Carrot 500g",
    category: "Vegetables",
    price: 30,
    offerPrice: 28,
    images: [
      "carrot_image.png"
    ],
    description: [
      "Sweet and crunchy",
      "Good for eyesight",
      "Ideal for juices and salads"
    ]
  },


  // ----------------------------------------------------------
  // SPINACH
  // ----------------------------------------------------------

  {
    name: "Spinach 500g",
    category: "Vegetables",
    price: 18,
    offerPrice: 15,
    images: [
      "spinach_image_1.png"
    ],
    description: [
      "Rich in iron",
      "High in vitamins",
      "Perfect for soups and salads"
    ]
  },


  // ----------------------------------------------------------
  // ONION
  // ----------------------------------------------------------

  {
    name: "Onion 500g",
    category: "Vegetables",
    price: 22,
    offerPrice: 19,
    images: [
      "onion_image_1.png"
    ],
    description: [
      "Fresh and pungent",
      "Perfect for cooking",
      "A kitchen staple"
    ]
  },


  // ==========================================================
  // FRUITS
  // ==========================================================

  {
    name: "Apple 1 kg",
    category: "Fruits",
    price: 120,
    offerPrice: 110,
    images: [
      "apple_image.png"
    ],
    description: [
      "Crisp and juicy",
      "Rich in fiber",
      "Boosts immunity",
      "Perfect for snacking and desserts",
      "Organic and farm fresh"
    ]
  },


  {
    name: "Orange 1 kg",
    category: "Fruits",
    price: 80,
    offerPrice: 75,
    images: [
      "orange_image.png"
    ],
    description: [
      "Juicy and sweet",
      "Rich in Vitamin C",
      "Perfect for juices and salads"
    ]
  },


  {
    name: "Banana 1 kg",
    category: "Fruits",
    price: 50,
    offerPrice: 45,
    images: [
      "banana_image_1.png"
    ],
    description: [
      "Sweet and ripe",
      "High in potassium",
      "Great for smoothies and snacking"
    ]
  },


  {
    name: "Mango 1 kg",
    category: "Fruits",
    price: 150,
    offerPrice: 140,
    images: [
      "mango_image_1.png"
    ],
    description: [
      "Sweet and flavorful",
      "Perfect for smoothies and desserts",
      "Rich in Vitamin A"
    ]
  },


  {
    name: "Grapes 500g",
    category: "Fruits",
    price: 70,
    offerPrice: 65,
    images: [
      "grapes_image_1.png"
    ],
    description: [
      "Fresh and juicy",
      "Rich in antioxidants",
      "Perfect for snacking and fruit salads"
    ]
  },


  // ==========================================================
  // DAIRY
  // ==========================================================

  {
    name: "Amul Milk 1L",
    category: "Dairy",
    price: 60,
    offerPrice: 55,
    images: [
      "amul_milk_image.png"
    ],
    description: [
      "Pure and fresh",
      "Rich in calcium",
      "Ideal for tea, coffee, and desserts",
      "Trusted brand quality"
    ]
  },


  // ----------------------------------------------------------
  // PANEER 1
  // ----------------------------------------------------------

  {
    name: "Paneer 200g - 1",
    category: "Dairy",
    price: 90,
    offerPrice: 85,
    images: [
      "paneer_image.png"
    ],
    description: [
      "Soft and fresh",
      "Rich in protein",
      "Ideal for curries and snacks"
    ]
  },


  // ----------------------------------------------------------
  // EGGS
  // ----------------------------------------------------------

  {
    name: "Eggs 12 pcs",
    category: "Dairy",
    price: 90,
    offerPrice: 85,
    images: [
      "eggs_image.png"
    ],
    description: [
      "Farm fresh",
      "Rich in protein",
      "Ideal for breakfast and baking"
    ]
  },


  // ----------------------------------------------------------
  // PANEER 2
  // ----------------------------------------------------------

  {
    name: "Paneer 200g - 2",
    category: "Dairy",
    price: 90,
    offerPrice: 85,
    images: [
      "paneer_image_2.png"
    ],
    description: [
      "Soft and fresh",
      "Rich in protein",
      "Ideal for curries and snacks"
    ]
  },


  // ----------------------------------------------------------
  // CHEESE
  // ----------------------------------------------------------

  {
    name: "Cheese 200g",
    category: "Dairy",
    price: 140,
    offerPrice: 130,
    images: [
      "cheese_image.png"
    ],
    description: [
      "Creamy and delicious",
      "Perfect for pizzas and sandwiches",
      "Rich in calcium"
    ]
  },


  // ==========================================================
  // DRINKS
  // ==========================================================

  {
    name: "Coca-Cola 1.5L",
    category: "Drinks",
    price: 80,
    offerPrice: 75,
    images: [
      "coca_cola_image.png"
    ],
    description: [
      "Refreshing and fizzy",
      "Perfect for parties and gatherings",
      "Best served chilled"
    ]
  },


  // ----------------------------------------------------------
  // PEPSI 1
  // ----------------------------------------------------------

  {
    name: "Pepsi 1.5L - 1",
    category: "Drinks",
    price: 78,
    offerPrice: 73,
    images: [
      "pepsi_image.png"
    ],
    description: [
      "Chilled and refreshing",
      "Perfect for celebrations",
      "Best served cold"
    ]
  },


  // ----------------------------------------------------------
  // PEPSI 2
  // ----------------------------------------------------------

  {
    name: "Pepsi 1.5L - 2",
    category: "Drinks",
    price: 78,
    offerPrice: 73,
    images: [
      "pepsi_image_2.png"
    ],
    description: [
      "Chilled and refreshing",
      "Perfect for celebrations",
      "Best served cold"
    ]
  },


  {
    name: "Sprite 1.5L",
    category: "Drinks",
    price: 79,
    offerPrice: 74,
    images: [
      "sprite_image_1.png"
    ],
    description: [
      "Refreshing citrus taste",
      "Perfect for hot days",
      "Best served chilled"
    ]
  },


  {
    name: "Fanta 1.5L",
    category: "Drinks",
    price: 77,
    offerPrice: 72,
    images: [
      "fanta_image_1.png"
    ],
    description: [
      "Sweet and fizzy",
      "Great for parties and gatherings",
      "Best served cold"
    ]
  },


  {
    name: "7 Up 1.5L",
    category: "Drinks",
    price: 76,
    offerPrice: 71,
    images: [
      "seven_up_image_1.png"
    ],
    description: [
      "Refreshing lemon-lime flavor",
      "Perfect for refreshing",
      "Best served chilled"
    ]
  },


  // ==========================================================
  // GRAINS
  // ==========================================================

  {
    name: "Basmati Rice 5kg",
    category: "Grains",
    price: 550,
    offerPrice: 520,
    images: [
      "basmati_rice_image.png"
    ],
    description: [
      "Long grain and aromatic",
      "Perfect for biryani and pulao",
      "Premium quality"
    ]
  },


  {
    name: "Wheat Flour 5kg",
    category: "Grains",
    price: 250,
    offerPrice: 230,
    images: [
      "wheat_flour_image.png"
    ],
    description: [
      "High-quality whole wheat",
      "Soft and fluffy rotis",
      "Rich in nutrients"
    ]
  },


  {
    name: "Organic Quinoa 500g",
    category: "Grains",
    price: 450,
    offerPrice: 420,
    images: [
      "quinoa_image.png"
    ],
    description: [
      "High in protein and fiber",
      "Gluten-free",
      "Rich in vitamins and minerals"
    ]
  },


  {
    name: "Brown Rice 1kg",
    category: "Grains",
    price: 120,
    offerPrice: 110,
    images: [
      "brown_rice_image.png"
    ],
    description: [
      "Whole grain and nutritious",
      "Helps in weight management",
      "Good source of magnesium"
    ]
  },


  {
    name: "Barley 1kg",
    category: "Grains",
    price: 150,
    offerPrice: 140,
    images: [
      "barley_image.png"
    ],
    description: [
      "Rich in fiber",
      "Helps improve digestion",
      "Low in fat and cholesterol"
    ]
  },


  // ==========================================================
  // BAKERY
  // ==========================================================

  {
    name: "Brown Bread 400g",
    category: "Bakery",
    price: 40,
    offerPrice: 35,
    images: [
      "brown_bread_image.png"
    ],
    description: [
      "Soft and healthy",
      "Made from whole wheat",
      "Ideal for breakfast and sandwiches"
    ]
  },


  {
    name: "Butter Croissant 100g",
    category: "Bakery",
    price: 50,
    offerPrice: 45,
    images: [
      "butter_croissant_image.png"
    ],
    description: [
      "Flaky and buttery",
      "Freshly baked",
      "Perfect for breakfast or snacks"
    ]
  },


  {
    name: "Chocolate Cake 500g",
    category: "Bakery",
    price: 350,
    offerPrice: 325,
    images: [
      "chocolate_cake_image.png"
    ],
    description: [
      "Rich and moist",
      "Made with premium cocoa",
      "Ideal for celebrations and parties"
    ]
  },


  {
    name: "Whole Bread 400g",
    category: "Bakery",
    price: 45,
    offerPrice: 40,
    images: [
      "whole_wheat_bread_image.png"
    ],
    description: [
      "Healthy and nutritious",
      "Made with whole wheat flour",
      "Ideal for sandwiches and toast"
    ]
  },


  {
    name: "Vanilla Muffins 6 pcs",
    category: "Bakery",
    price: 100,
    offerPrice: 90,
    images: [
      "vanilla_muffins_image.png"
    ],
    description: [
      "Soft and fluffy",
      "Perfect for a quick snack",
      "Made with real vanilla"
    ]
  },


  // ==========================================================
  // INSTANT FOOD
  // ==========================================================

  {
    name: "Maggi Noodles 280g",
    category: "Instant",
    price: 55,
    offerPrice: 50,
    images: [
      "maggi_image.png"
    ],
    description: [
      "Instant and easy to cook",
      "Delicious taste",
      "Popular among kids and adults"
    ]
  },


  {
    name: "Top Ramen 270g",
    category: "Instant",
    price: 45,
    offerPrice: 40,
    images: [
      "top_ramen_image.png"
    ],
    description: [
      "Quick and easy to prepare",
      "Spicy and flavorful",
      "Loved by college students and families"
    ]
  },


  {
    name: "Knorr Cup Soup 70g",
    category: "Instant",
    price: 35,
    offerPrice: 30,
    images: [
      "knorr_soup_image.png"
    ],
    description: [
      "Convenient for on-the-go",
      "Healthy and nutritious",
      "Variety of flavors"
    ]
  },


  {
    name: "Yippee Noodles 260g",
    category: "Instant",
    price: 50,
    offerPrice: 45,
    images: [
      "yippee_image.png"
    ],
    description: [
      "Non-fried noodles for healthier choice",
      "Tasty and filling",
      "Convenient for busy schedules"
    ]
  },


  {
    name: "Oats Noodles 72g",
    category: "Instant",
    price: 40,
    offerPrice: 35,
    images: [
      "maggi_oats_image.png"
    ],
    description: [
      "Healthy alternative with oats",
      "Good for digestion",
      "Perfect for breakfast or snacks"
    ]
  }

];


// ============================================================
// CLOUDINARY IMAGE UPLOAD
// ============================================================

async function uploadImage(fileName) {

  const filePath = path.join(
    ASSETS_DIR,
    fileName
  );

  console.log(`   Uploading: ${fileName}`);

  try {

    const result = await cloudinary.uploader.upload(
      filePath,
      {
        folder: "grocerlygo/products"
      }
    );

    console.log(`   ✓ Uploaded`);

    return result.secure_url;

  } catch (error) {

    throw new Error(
      `Cloudinary upload failed for ${fileName}: ${error.message}`
    );

  }
}


// ============================================================
// SEED PRODUCTS
// ============================================================

async function seedProducts() {

  try {

    console.log("");
    console.log("==============================================");
    console.log("       GROCERLYGO PRODUCT SEEDER");
    console.log("==============================================");
    console.log("");

    // --------------------------------------------------------
    // CONNECT DATABASE
    // --------------------------------------------------------

    await connectDB();

    console.log("✓ MongoDB connected");


    // --------------------------------------------------------
    // CONNECT CLOUDINARY
    // --------------------------------------------------------

    await connectCloudinary();

    console.log("✓ Cloudinary configured");

    console.log("");
    console.log(`Total products in seed list: ${products.length}`);
    console.log("");


    let added = 0;
    let skipped = 0;
    let failed = 0;


    // ========================================================
    // PROCESS EVERY PRODUCT
    // ========================================================

    for (const item of products) {

      console.log("----------------------------------------------");
      console.log(`Processing: ${item.name}`);


      // ------------------------------------------------------
      // CHECK IF PRODUCT ALREADY EXISTS
      // ------------------------------------------------------

      const existingProduct = await Product.findOne({
        name: item.name
      });


      if (existingProduct) {

        console.log(
          `→ Already exists: ${item.name}`
        );

        console.log("→ Skipping");

        skipped++;

        continue;
      }


      // ------------------------------------------------------
      // UPLOAD IMAGES
      // ------------------------------------------------------

      const uploadedImages = [];


      try {

        for (const image of item.images) {

          const imageUrl = await uploadImage(image);

          uploadedImages.push(imageUrl);

        }


        // ----------------------------------------------------
        // CREATE PRODUCT
        // ----------------------------------------------------

        await Product.create({

          name: item.name,

          description: item.description,

          price: item.price,

          offerPrice: item.offerPrice,

          image: uploadedImages,

          category: item.category,

          inStock: true

        });


        console.log(
          `✓ Added successfully: ${item.name}`
        );

        added++;


      } catch (error) {

        console.error(
          `❌ Failed: ${item.name}`
        );

        console.error(
          error.message
        );

        failed++;

      }

    }


    // ========================================================
    // FINAL REPORT
    // ========================================================

    console.log("");
    console.log("");
    console.log("==============================================");
    console.log("             SEED COMPLETE");
    console.log("==============================================");

    console.log(
      `✓ Products added   : ${added}`
    );

    console.log(
      `→ Products skipped : ${skipped}`
    );

    console.log(
      `❌ Products failed  : ${failed}`
    );

    console.log(
      `→ Seed list total  : ${products.length}`
    );

    console.log("==============================================");
    console.log("");


  } catch (error) {

    console.error("");
    console.error("==============================================");
    console.error("❌ PRODUCT SEEDER FAILED");
    console.error("==============================================");
    console.error(error);
    console.error("");


  } finally {

    // --------------------------------------------------------
    // CLOSE MONGODB
    // --------------------------------------------------------

    await mongoose.connection.close();

    console.log(
      "MongoDB connection closed."
    );

  }

}


// ============================================================
// START SEEDER
// ============================================================

seedProducts();