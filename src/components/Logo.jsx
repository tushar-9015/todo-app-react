import { SlNotebook } from "react-icons/sl";

const Logo = () => {
  return (
    <section className="flex px-4 py-2 items-center gap-2">
      <SlNotebook
        className="text-yellow-500"
        style={{ width: "2em", height: "2em" }}
      />
      <h1 className="text-yellow-500 text-2xl font-bold font-palanquin">
        Todo App
      </h1>
    </section>
  );
};

export default Logo;
