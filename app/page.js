import Image from "next/image";

import Hero from "./_components/Hero";

import Navbar from "./_components/Navbar";
import About from "./_components/About";



export default function Home() {

return (

<main className="relative bg-black">

<Navbar />

<Hero />

<About />

</main>

);

}