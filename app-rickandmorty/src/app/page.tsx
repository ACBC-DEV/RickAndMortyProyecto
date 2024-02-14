export default async function Home() {
  return (
    <>
      <header className="bg-white h-96">
        <h1 className="text-center text-4xl text-black font-bold my-28 md:text-9xl">
          Rick And Morty
        </h1>
      </header>

      <section className="mt-8 mx-4 md:mx-12 lg:mx-24 xl:mx-48 2xl:mx-96 border-4 border-white rounded-3xl p-10">
        <h2 className="text-4xl">Descripcion</h2>
        <p className="text-2xl text-gray-400">
          Interactive Rick and Morty web project offering an in-depth
          exploration of the series universe, including character profiles,
          episodes, and locations, with interactive features and exclusive
          content for fans.
        </p>
      </section>

      <footer className="mt-12 p-4 bg-gray-100 bottom-0 ">
        <p className="text-center text-sm text-gray-500 mb-2">
          This is a sample project consuming the Rick and Morty API.
        </p>

        <p className="text-center text-sm text-gray-500"> Made by my hands</p>
      </footer>
    </>
  );
}
