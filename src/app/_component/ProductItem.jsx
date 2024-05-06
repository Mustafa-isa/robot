import Image from "next/image";
import React from "react";
import Link from "next/link";

function ProductItem({user}) {
  return (
    <Link href="#" className="  group block overflow-hidden rounded-lg">
      <Image
    src={user.img}
        alt=""
        width={300}
        height={200}
        className="h-[350px] rounded-lg w-[300px] object-cover sm:h-[450px]"
      />

      <div className="mt-1.5 p-4">
      


        <div className="mt-3 flex justify-between text-sm">
        <h3>Name:</h3>
        <h3 className="p-2 bg-slate-500 bg-opacity-45 rounded-lg">{user.name}</h3>

      
        </div>
        <div className="mt-3 flex justify-between text-sm">
        

        <h3>Department:</h3>
        <h3 className="p-2 bg-teal-500 bg-opacity-45 rounded-lg">{user.Department}</h3>
        </div>
      </div>
    </Link>
  );
}

export default ProductItem;
