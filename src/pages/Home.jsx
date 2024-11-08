function Home() {
  // eslint-disable-next-line no-unused-vars
  const key = import.meta.env.VITE_API_KEY;

  return (
    <div className="flex items-center justify-center w-full h-full fixed inset-0">
      <h1 className="text-2xl md:text-4xl text-center font-bold">
        This is a home page
      </h1>
    </div>
  );

}

export default Home;
