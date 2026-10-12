import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="grid min-h-screen place-items-center bg-background px-6">
      <div className="text-center">
        <p className="eyebrow">Habitarte Imóveis</p>
        <h1 className="mt-4 font-display text-7xl text-foreground">404</h1>
        <p className="mt-3 text-muted-foreground">A página que você procura não existe.</p>
        <Link
          to="/"
          className="mt-7 inline-flex rounded-full bg-primary px-5 py-3 text-sm text-primary-foreground"
        >
          Voltar ao início
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="grid min-h-screen place-items-center bg-background px-6">
      <div className="text-center">
        <h1 className="font-display text-4xl text-foreground">Não foi possível carregar</h1>
        <p className="mt-3 text-muted-foreground">Tente novamente em instantes.</p>
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="mt-7 rounded-full bg-primary px-5 py-3 text-sm text-primary-foreground"
        >
          Tentar novamente
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Habitarte Imóveis | Curitiba" },
      {
        name: "description",
        content: "Imóveis selecionados e atendimento transparente em Curitiba e região.",
      },
      { name: "author", content: "Habitarte Imóveis" },
      { property: "og:title", content: "Habitarte Imóveis | Curitiba" },
      {
        property: "og:description",
        content: "Imóveis selecionados e atendimento transparente em Curitiba e região.",
      },
      { property: "og:type", content: "website" },
      { name: "theme-color", content: "#0a2e70" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@500;600&display=swap",
      },
      { rel: "icon", href: "/topicon.jpg", type: "image/jpeg" },
    ],
  }),
  shellComponent: ({ children }: { children: ReactNode }) => (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  ),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
