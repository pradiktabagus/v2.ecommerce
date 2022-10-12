import dynamic from 'next/dynamic';
import type { ReactNode } from 'react';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};
const Header = dynamic<any>(() =>
  import('@/components').then((component) => component.Header)
);
export default function Main(props: IMainProps) {
  return (
    <div className="w-full px-1 text-gray-700 antialiased">
      {props.meta}
      <Header />
      <main className="mx-auto max-w-screen-xl">
        <div className="content py-5 text-xl">{props.children}</div>
      </main>
    </div>
  );
}
