import Image from "next/image";

import Hero from "./_components/Hero";

import Navbar from "./_components/Navbar";



export default function Home() {

return (

<main className="relative bg-black">

<Navbar />

<Hero />

</main>

);

}