import Logo from "./Logo";

type PageLayoutProps = {
  children: any;
};

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="pl-20 bg-gray-100 min-h-screen">
      {/* side header */}
      <header className="w-20 fixed left-0 top-0 bottom-0 z-50 bg-[#373B53] flex flex-col justify-between rounded-r-2xl overflow-hidden">
        {/* logo */}
        <Logo />
        {/* bottom */}
        <div>
          <div className="dark-mode-toggle py-4 grid place-items-center cursor-pointer">
            🌙
          </div>
          <div className="py-6 border-t border-solid border-gray-100 grid place-items-center">
            <div className="user-avatar h-12 w-12  bg-gray-100 rounded-full"></div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto py-20 px-10">{children}</main>
    </div>
  );
}
