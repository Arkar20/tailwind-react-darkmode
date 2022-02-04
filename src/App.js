import useDarkMode from "./hooks/useDarkMode";
function App() {


  const {toggleDarkMode}=useDarkMode();

  return (
    <>
      <button className="p-3 bg-green-200 m-3 rounded-md shadow-green-400  " onClick={()=>toggleDarkMode()}>Toggle Dark Mode</button>
      
    <main className="flex min-h-screen  justify-center items-center dark:bg-black">
      <section className="p-8 bg-black text-white dark:bg-white dark:text-black">
        Non deserunt reprehenderit anim tempor dolore nostrud sint.
      </section>
      </main>
      </>
  );
}

export default App;
