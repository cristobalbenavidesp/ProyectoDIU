function Card({ children }) {
  return (
    <article className="py-2 px-5 rounded-lg shadow w-full h-fit bg-white">
      {children}
    </article>
  );
}

export default Card;
