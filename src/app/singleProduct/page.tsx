'use client';
import { Suspense } from 'react';
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";
import Swal from 'sweetalert2';

const products = [
  {
    id: 1,
    name: "Solid Copper Earth Rod ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$10",
    imageUrl: "/images/products/earthRod/copper-bonded-ul-earthing-rod.png"
  },
  {
    id: 2,
    name: "Solid Copper Earth Rod Externally Threaded",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$12",
    imageUrl: "/images/products/earthRod/solid-copper-earth-rods-matrix.png"
  },
  {
    id: 3,
    name: "Solid Copper Earth Rod Internally Threaded",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/tscer.png"
  },
  {
    id: 4,
    name: "Solid Copper Earth Rod Welded Busbar Clamp",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/sser.png",
    category: "earthrod"
  },
  {
    id: 5,
    name: "Solid Copper Earth Rods",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/gsers.png",
    category: "earthrod"
  },
  {
    id: 6,
    name: "Hot Dip Galvanized Solid Earth Rod Un-Threaded",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 7,
    name: "Hot Dip Galvanized Solid Earth Rod Externally Threaded",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 8,
    name: "Hot Dip Galvanized Solid Earth Rod Internally Threaded",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 9,
    name: "Hot Dip Galvanized Solid Earth Rod welded Busbar Clamp",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 10,
    name: "Galvanized Steel Earth Rods",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 11,
    name: "Copper Bonded Earth Rod Un-Threaded",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 12,
    name: "Copper Bonded Earth Rod Externally Threaded",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 13,
    name: "Copper Bonded Earth Rod Internally Threaded",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 14,
    name: "Copper Bonded Earth Rod welded busbar Clamp",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 15,
    name: "Copper bond Earth Rods",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 16,
    name: "Stainless Steel Solid Earth Rod Un-Threaded",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 17,
    name: "Stainless Steel Solid Earth Rod Externally Threaded",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 18,
    name: "Stainless Steel Solid Earth Rod Internally Threaded",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 19,
    name: "Stainless Steel Solid Earth Rod Welded Busbar Clamp",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 20,
    name: "Stainless Steel Earth Rods ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 21,
    name: "Molybdenum Stainless Steel Earth Rods",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 22,
    name: "Tinned Copper Solid Earth Rod Un-Threaded",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 23,
    name: "Tinned Copper Solid Earth Rods ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 24,
    name: "Tinned Copper Solid Earth Rod Internally Threaded",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 25,
    name: "Brass Solid Earth Rod Un-Threaded",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 26,
    name: "Brass Solid Earth Rod Externally Threaded",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 27,
    name: "Brass Solid Earth Rod Internally Threaded",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 28,
    name: "Brass Solid Earth Rod Welded Busbar Clamp",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 29,
    name: "Graphite Solid Earth Rod Un-Threaded",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 30,
    name: "Tinned Copper Solid Earth Rod Externally Threaded",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 31,
    name: "Graphite Solid Earth Rod Externally Threaded",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 32,
    name: "Graphite Solid Earth Rod Internally Threaded",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 33,
    name: "Graphite Solid Earth Rod Welded Busbar Clamp",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 34,
    name: "Angular Earth Rod ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 35,
    name: "Spike Earth Rod",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 36,
    name: "Zinc Earth Rod ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 37,
    name: "Nickel Plated Solid Copper Earth Rod",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 38,
    name: "Coupling Dowels",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 39,
    name: "Driving Heads",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 40,
    name: "Driving Spikes",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 41,
    name: "Cross Profile Galvanised Steel Earth Rods",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 42,
    name: "Nickel Earth Rods",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 43,
    name: "Ion Earth Rod",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 44,
    name: "Nickel Earth Rod ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 45,
    name: "Copper Clad Steel Earth Rod",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 46,
    name: "Molybdenum Earth Rod",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
];

const SingleProduct = () => {
  const searchParams = useSearchParams();
  const productId = searchParams.get("id");
  const [quoteItems, setQuoteItems] = useState([]);

  useEffect(() => {
    updateCart();
  }, []);


const updateCart =()=>{
  const storedQuoteItems = JSON.parse(localStorage.getItem('quoteItems')) || [];
    setQuoteItems(storedQuoteItems);
} 

  const product = products.find((item) => item.id.toString() === productId);

  const addToQuote = () => {
    const storedQuoteItems = JSON.parse(localStorage.getItem('quoteItems')) || [];
    const newQuoteItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      category: product.category,
    };

    // Check if the item is already in the quote
    const existingItem = storedQuoteItems.find(item => item.id === newQuoteItem.id);

    if (!existingItem) {
      const updatedQuoteItems = [...storedQuoteItems, newQuoteItem];
      localStorage.setItem('quoteItems', JSON.stringify(updatedQuoteItems));
      setQuoteItems(updatedQuoteItems);
     
      Swal.fire({
        title: "Added to Quote",
        text: `${product.name} has been added to your quote.`,
        icon: "success",
        timer: 2000, // Optional timer to close the alert automatically
        timerProgressBar: true, // Progress bar for timer
        showConfirmButton: false // Hide the "OK" button, since you may want to close the alert automatically
      });
      updateCart();
      location.reload();
    } else {
      Swal.fire({
        title: "Already in Quote",
        text: `${product.name} is already in your quote.`,
        icon: "info",
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false
      });
    }
  };

  if (!product) {
    return <p>Product not found.</p>; // Handle case where product isn't found
  }

  return (
    <>
      <Breadcrumb
        pageName="Single Product"
        description="Product details page."
      />

      <div className="bg-gray-100 py-8 dark:bg-gray-800">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="-mx-4 flex flex-col md:flex-row">
            <div className="px-4 md:flex-1">
              <div className="bg-300 dark:-700 mb-4 h-[460px] rounded-lg">
                <img
                  className="h-full w-full object-cover"
                  src={product.imageUrl}
                  alt={product.name}
                />
              </div>
            </div>
            <div className="px-4 md:flex-1">
              <h2 className="mb-2 text-2xl font-bold text-gray-800 dark:text-white">
                {product.name}
              </h2>
              <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
                {product.description}
              </p>
              <div className="mb-4 flex">
                <div>
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Availability:
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    {" "}Available
                  </span>
                </div>
              </div>
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Product Description:
                </span>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  {product.description}
                </p>
                <br />
                <br />
                <div className="w-1/2 px-2">
                  <button 
                    className="w-full rounded-full bg-gray-900 px-4 py-2 font-bold text-white hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-700"
                    onClick={addToQuote}
                  >
                   Add To Quote
                  </button>
                </div>
                {quoteItems.length > 0 && (
                  <div className="w-1/2 px-2 mt-4">
                    <Link 
                      href="/quote"
                      
                      className="w-full rounded-full bg-blue-600 px-4 mx-5 py-2 font-bold text-white text-center hover:bg-blue-500 dark:bg-blue-700 dark:hover:bg-blue-600"
                    >
                      View Quote
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function SuspenseWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SingleProduct />
    </Suspense>
  );
}

