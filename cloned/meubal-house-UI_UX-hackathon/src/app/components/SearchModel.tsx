import React, { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { IoSearchOutline } from "react-icons/io5";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Product } from "./interface";

const SearchModel = () => {
  const [products, setProducts] = useState<
    Product[]
  >([]);
  const [filterProducts, setFilterProducts] = useState<
    Product[]
  >([]);
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    async function getData() {
      try {
        const data: Product[] = [
          {
            _id: "1",
            name: "Lorem Ipsum Dolor Sit Amet",
            price: 100,
            slug: "lorem-ipsum-dolor-sit-amet",
            category: "Category 1",
            imageUrl: "/pro1.png",
          },
          {
            _id: "2",
            name: "Consectetur Adipiscing Elit",
            price: 200,
            slug: "consectetur-adipiscing-elit",
            category: "Category 2",
            imageUrl: "/pro2.png",
          },
          {
            _id: "3",
            name: "Sed Do Eiusmod Tempor Incididunt",
            price: 300,
            slug: "sed-do-eiusmod-tempor-incididunt",
            category: "Category 3",
            imageUrl: "/pro3.png",
          },
          {
            _id: "4",
            name: "Ut Labore Et Dolore Magna Aliqua",
            price: 400,
            slug: "ut-labore-et-dolore-magna-aliqua",
            category: "Category 4",
            imageUrl: "/pro4.png",
          },
        ];
        setProducts(data);
        setFilterProducts(data);
      } catch (error) {
        console.error("error while fetching product", error);
      }
    }
    getData();
  }, []);

  useEffect(() => {
    if (!searchQuery) {
      setFilterProducts([]);
    } else {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilterProducts(filtered);
    }
  }, [searchQuery, products]);
  return (
    <Sheet>
      <SheetTrigger>
        <div className="flex items-center">
          <IoSearchOutline size={25} />
        </div>
      </SheetTrigger>
      <SheetContent className=" max-h-[90vh] overflow-y-scroll" side={"top"}>
        <div className="mt-8 lg:px-40 md:px-20 flex items-center gap-5">
          <Input
            placeholder='Search Products...'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border border-gray-400"
          />
          <Button className="bg-blue-500 text-white hover:bg-blue-700">
            Search
          </Button>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 xs:grid-cols-1 items-center justify-center gap-6 mt-10 pb-20">
            {filterProducts.map((_product) => {
              return (
                <Link
             href={`/product/${_product.slug}`}
            key={_product._id}
            className="flex flex-col items-center justify-between lg:w-[270px] md:w-[300px] xs:w-[350px] h-[350px] mt-10"
          >
            <div className="flex items-center w-full h-[250px] product hover:opacity-75">
              <Image
                className="w-full h-[250px] rounded-lg object-cover object-center"
                src={_product.imageUrl}
                alt={_product.name}
                priority
                height={0}
                width={300}
              ></Image>
            </div>
            <div className="flex flex-col items-start justify-between gap-5 w-full">
              <p className="font-normal text-base">{_product.name}</p>
              <div className="flex items-center justify-between w-full">
                <p className="font-medium text-xl">RS.{_product.price}</p>
                <p className="font-medium text-base text-gray-400">
                  {_product.category}
                </p>
              </div>
            </div>
          </Link>
              );
            })}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SearchModel;
