import { Header } from "./components/Header";
import { Icon } from "./components/Icon";
import { Link } from "./components/Links";
import type { LinkProps } from "./components/Links/link";

type MenuLinks = LinkProps & { id: string };

const MENU: MenuLinks[] = [
  {
    id: crypto.randomUUID(),
    icon: <Icon.Pdf />,
    href: "#Pdf",
    label: "Currículo",
    description: "Baixe meu currículo completo em PDF."
  },
  {
    id: crypto.randomUUID(),
    icon: <Icon.Linkedin />,
    href: "https://www.linkedin.com/in/raniererocha",
    label: "LinkedIn",
    description: "Veja minha trajetória profissional no LinkedIn"
  },
  {
    id: crypto.randomUUID(),
    icon: <Icon.Github />,
    href: "#Github",
    label: "Github",
    description: "Explore meus projetos e contribuições no GitHub"
  },
  {
    id: crypto.randomUUID(),
    icon: <Icon.Mail />,
    href: "#Email",
    label: "Email",
    description: "Entre em contato comigo",
  },
];

function App() {
  return (
    <main className="flex flex-col h-screen md:w-md md:mx-auto justify-between">
      <Header />
      <Link.List>
        {MENU.map((item) => (
          <Link.Item key={item.id} {...item} />
        ))}
      </Link.List>
      <footer className="h-[10%] flex justify-center items-center text-center text-xs text-muted-foreground font-semibold">
        Desenvolvido com 💙 por {"<RRochaDev />"}
      </footer>
    </main>
  );
}

export default App;
