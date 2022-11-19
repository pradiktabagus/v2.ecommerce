import dynamic from 'next/dynamic';
import type { ReactNode } from 'react';

type IMainProps = {
  meta?: ReactNode;
  children: ReactNode;
};
const Header = dynamic<any>(() =>
  import('@/components').then((component) => component.Header)
);
const Footer = dynamic<any>(() =>
  import('@/components').then((component) => component.Footer)
);
export default function Main(props: IMainProps) {
  return (
    <div className="w-full text-gray-700 antialiased">
      {props.meta}
      <Header />
      <main className="w-full">
        <div className="content text-xl">{props.children}</div>
      </main>
      <Footer />
    </div>
  );
}
