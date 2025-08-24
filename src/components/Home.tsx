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
      <h1 className="text-white text-4xl font-bold text-center pt-20 z-10">
        Welcome to Eryx Financial
      </h1>
    </section>
  );
}
