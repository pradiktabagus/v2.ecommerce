import dynamic from 'next/dynamic';

const Search = dynamic(() =>
  import('@/components').then((component) => component.Search)
);
const Logo = dynamic(() =>
  import('@/components').then((component) => component.Logo)
);
const Cart = dynamic(() =>
  import('@/components').then((component) => component.Cart)
);
const Auth = dynamic(() =>
  import('@/components').then((component) => component.Auth)
);

export default function Header() {
  return (
    <header id="header" className="relative mt-[110px]">
      <div>
        <div className="fixed inset-x-0 top-0 z-[99] flex h-[110px] w-full min-w-[1024px] flex-col items-center bg-white shadow-md">
          <div className="h-[32px]" />
          <div className="fixed top-[30px] left-[32px] flex h-[56px] w-[96%] items-center">
            <Logo />
            <div className="mr-2 mt-[1px] mb-0 ml-5">
              <button
                aria-label="category"
                type="button"
                className="flex h-[32px] w-[58px] items-center justify-center overflow-hidden text-ellipsis whitespace-normal text-xs font-semibold leading-normal"
              >
                Category
              </button>
            </div>
            <Search />
            <div className="flex w-36 flex-row justify-between">
              <Cart />
              <Auth />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
