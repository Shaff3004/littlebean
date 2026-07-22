import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-dvh w-full max-w-[768px] flex-col px-5">
      <main className="flex-1">{children}</main>
      <footer className="border-t border-border py-6 text-center">
        <p className="text-sm text-text-muted">
          Створено з ❤️ для Мами та Малюка
        </p>
      </footer>
    </div>
  );
}

export default Layout;
