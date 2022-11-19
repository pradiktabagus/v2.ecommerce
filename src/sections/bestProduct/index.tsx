import CardItem from '@/components/card/card';
import type { TSection } from '@/types';
import { clsxm } from '@/utils';

const BestProduct = ({ title, sectionStyle }: TSection) => {
  return (
    <section
      className={clsxm(
        sectionStyle && sectionStyle,
        'w-full mx-auto max-w-screen-xl'
      )}
    >
      <div>
        <h4 className="mb-4 text-center text-2xl font-bold">{title}</h4>
        <div className="relative">
          <div className="grid grid-cols-5 gap-2">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].slice(0, 5).map((card: number) => (
              <CardItem
                key={card}
                styleCard="h-[370px]"
                src="https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/10/30/6dfbd810-ef6e-42ba-9c08-3a88451a23cf.jpg"
                alt="t-shirt adidas"
                slug="/tshirt/adidas"
                styleImg="object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default BestProduct;
