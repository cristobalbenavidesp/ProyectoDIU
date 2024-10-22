function Card({ children }) {
  return (
    <article className="py-2 px-5 rounded-lg border w-full h-fit">
      {children}
    </article>
  );
}

export default Card;
