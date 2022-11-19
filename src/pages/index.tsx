import dynamic from 'next/dynamic';

import Main from '@/layouts/Main';
import type { TSection } from '@/types';

const HotsProduct = dynamic<TSection>(() =>
  import('@/sections').then((section) => section.HotsProduct)
);
const SectionHeadline = dynamic<TSection>(() =>
  import('@/sections').then((section) => section.SectionHeadline)
);
const BestProduct = dynamic<TSection>(
  () => import('@/sections').then((section) => section.BestProduct),
  {
    ssr: false,
  }
);
const AllProduct = dynamic<TSection>(
  () => import('@/sections').then((section) => section.AllProduct),
  {
    ssr: false,
  }
);
export default function Page() {
  return (
    <Main>
      <SectionHeadline />
      <HotsProduct title="What's Hot" sectionStyle="mt-[20px]" />
      <BestProduct title="Best Product" sectionStyle="mt-[50px]" />
      <section className="max-w-full">
        <div className="my-7 flex min-h-[150px] items-center justify-center bg-green-600">
          <div>
            <h3 className="max-w-lg text-xl font-bold capitalize text-white">
              DAFTARKAN EMAIL ANDA UNTUK MENDAPATKAN INFO DAN PENAWARAN SPESIAL
            </h3>
          </div>
          <div className="ml-4">
            <input
              type="text"
              placeholder="Your Email Address"
              className="h-12 rounded-md py-2 px-4"
            />
          </div>
        </div>
      </section>
      <AllProduct title="All Product" />
    </Main>
  );
}
