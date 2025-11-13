export function Header() {
  return (
    <section className="flex-1 flex flex-col justify-center items-center gap-2 md:gap-4">
      <img src="/img.jpeg" className=" size-40 md:size-48 rounded-4xl" />
      <div className="text-center">
        <h1 className="font-black text-2xl md:text-3xl">RRocha Dev</h1>
        <p className="text-sm text-purple-300 italic leading-4 px-6">
          Desenvolvedor Fullstack (5+ anos) especializado em React, Node.js e TypeScript. Focado em criar soluções escaláveis e performáticas com AWS, CI/CD e boas práticas de código.
        </p>
      </div>
    </section>
  );
}
