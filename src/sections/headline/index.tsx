import Image from 'next/image';

import type { TSection } from '@/types';
import { clsxm } from '@/utils';

const SectionHeadline = ({ sectionStyle }: Omit<TSection, 'title'>) => {
  return (
    <section className={clsxm(sectionStyle && sectionStyle, 'w-full')}>
      <div className="relative">
        <figure className="relative h-[calc(100vh-110px)] w-full">
          <Image
            priority
            fill
            src="https://www.adidas.co.id/media/scandiweb/slider/m/h/mh_and_mhplp.jpg"
            alt="promo"
            className="object-cover"
          />
        </figure>
        <figcaption className="absolute bottom-10 left-28">
          <div className="text-white">
            <h2 className="text-3xl font-bold">
              impossible
              <br /> is nothing
            </h2>
            <div>
              Meet the family. Every four years we get together
              <br />
              for the love of the game. This is our 2022 Family Reunion.
            </div>
          </div>
        </figcaption>
      </div>
    </section>
  );
};
export default SectionHeadline;
