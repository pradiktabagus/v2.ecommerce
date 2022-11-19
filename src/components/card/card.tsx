import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';

import { clsxm } from '@/utils';

type TCardItem = {
  styleCard?: string;
  styleImg?: string;
  src: string;
  alt: string;
  slug: string;
};
const CardItem = ({ styleCard, styleImg, src, alt, slug }: TCardItem) => {
  return (
    <Link href={slug} className="text-white hover:border-b-0">
      <div
        className={clsxm(
          styleCard && styleCard,
          'relative flex flex-col shadow-md cursor-pointer rounded-md'
        )}
      >
        <div className="relative h-3/4">
          <Image
            src={src}
            alt={alt}
            fill
            className={clsxm(styleImg && styleImg)}
          />
        </div>
        <div id="foot__card" className="relative mt-2 h-1/4 p-2">
          <div>
            <h4 className="truncate text-base text-black">Name Product</h4>
            <h3 className="text-lg font-bold text-black">$ Price</h3>
          </div>
          <div className="mt-1 flex justify-end px-3">
            <div className="relative h-6 w-6">
              <FontAwesomeIcon
                icon={faCartPlus}
                className="text-slate-700 transition-all hover:text-green-600"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default CardItem;
