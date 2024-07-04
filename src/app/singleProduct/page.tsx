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
    name: "Copperbond Earth Rods",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$10",
    imageUrl: "https://www.an-wallis.co.uk/wp-content/uploads/2018/07/Copperbond-Earth-Rods-1-282x300.jpg",
    category: "earthrod"
  },
  {
    id: 2,
    name: "Solid Copper Earth Rod",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$12",
    imageUrl: "https://www.an-wallis.co.uk/wp-content/uploads/2024/03/ERC-Image.jpg",
    category: "earthrod"
  },
  {
    id: 3,
    name: "Tinned Solid Copper Earth Rods",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "https://www.an-wallis.co.uk/wp-content/uploads/2019/06/Tinned-Solid-Copper-Earth-Rods200.jpg",
    category: "earthrod"
  },
  {
    id: 4,
    name: "Summit Hiking",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$12",
    imageUrl: "https://www.an-wallis.co.uk/wp-content/uploads/2018/06/WES0044.jpg",
    category: "earthrodseals"
  },
  {
    id: 5,
    name: "Heavy Duty Earth Inspection Housings",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$15",
    imageUrl: "https://www.an-wallis.co.uk/wp-content/uploads/2018/10/EPP001W-scaled.jpg",
     category: "earthinspectionhousing"
  },
  {
    id: 6,
    name: "Light Duty Earth Inspection Housing",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "https://www.an-wallis.co.uk/wp-content/uploads/2018/10/Light-Duty-Earth-Inspection-Housings.jpg",
       category: "earthinspectionhousing"
  },

  {
    id: 7,
    name: "Taper Pointed Air Rods",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "https://www.an-wallis.co.uk/wp-content/uploads/2018/10/Taper-Pointed-Air-Rods.jpg",
    category: "airrods"
  },
  {
    id: 8,
    name: "Air Rods",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "https://www.an-wallis.co.uk/wp-content/uploads/2018/11/Air-Rods.jpg",
    category: "airrods"
  },
  {
    id: 9,
    name: "Low resistance compound ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/menueimages/lrc.jpeg"
  },
  {
    id: 10,
    name: "Aluminum busbar ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/menueimages/Aluminum_busbar.png"
  },
  {
    id: 11,
    name: "tinned copper busbar type",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/menueimages/tinned copper busbar type.jpeg"
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

