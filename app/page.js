
import Image from "next/image";

export default function Page(){
return (
<main>

<section className="relative h-[80vh] text-white">
<Image src="/lounge.jpg" fill alt="" className="object-cover"/>
<div className="absolute inset-0 bg-black/60"/>
<div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
<h1 className="text-4xl font-bold">An He Massage</h1>
<p className="mt-3">Massage in Dublin City Centre</p>
<a href="tel:0851103879" className="mt-6 bg-white text-black px-6 py-3 rounded-full">Call Now</a>
</div>
</section>

<section className="p-8 text-center">
<h2 className="text-2xl font-semibold">Relaxing Environment</h2>
<p className="mt-2">Comfortable rooms and professional massage service.</p>
</section>

<section className="grid md:grid-cols-2 gap-4 p-6">
<Image src="/lounge.jpg" width={500} height={400} alt="" className="rounded-xl"/>
<Image src="/room.jpg" width={500} height={400} alt="" className="rounded-xl"/>
</section>

<section className="p-8 bg-gray-100 text-center">
<h2 className="text-2xl font-semibold">Visit Us</h2>
<p>3F, 45 Capel St, Dublin</p>
<p>Open daily 10:00–21:30</p>
<a href="tel:0851103879" className="mt-4 inline-block bg-black text-white px-6 py-3 rounded-full">Call 085 110 3879</a>
</section>

<section className="p-6">
<iframe
src="https://www.google.com/maps?q=3F,45+Capel+St,+Dublin&output=embed"
className="w-full h-[300px] border-0 rounded-xl"
/>
</section>

</main>
);
}
