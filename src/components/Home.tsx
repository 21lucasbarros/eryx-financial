export default function Home() {
  return (
    <section className="w-full h-screen bg-[#1a1a1a] relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full bg-grid-white/[0.05] bg-[size:50px_50px]"
          style={{
            backgroundImage: `
           linear-gradient(to right, #f7f7f7 1px, transparent 1px),
           linear-gradient(to bottom, #f7f7f7 1px, transparent 1px)
           `,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>
      <div className="flex flex-col gap-4 items-center justify-center h-screen">
        <h1 className="text-white text-4xl font-bold">
          Welcome to Eryx Financial
        </h1>
        <h3 className="text-white text-xl font-light">
          Elevate your finances with intelligently
        </h3>
        <p className="text-white font-light text-base">
          Experience the future of finance management with our cutting-edge
          tools and insights.
        </p>
        <div className="flex flex-row gap-10">
          <button className="bg-white text-black font-bold py-2 px-4 rounded">
            Get Started
          </button>
          <button className="bg-black text-white font-bold py-2 px-4 rounded">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
