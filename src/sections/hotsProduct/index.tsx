import CardItem from '@/components/card/card';
import type { TSection } from '@/types';
import { clsxm } from '@/utils';

const HotsProduct = ({ title, sectionStyle }: TSection) => {
  return (
    <section
      className={clsxm(
        sectionStyle && sectionStyle,
        'w-full mx-auto max-w-screen-2xl'
      )}
    >
      <div>
        <h4 className="mb-3 text-3xl font-bold">{title}</h4>
        <div className="relative">
          <div className="grid grid-cols-5 gap-2">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].slice(0, 5).map((card: number) => (
              <CardItem
                key={card}
                styleCard="h-[470px]"
                src="https://images.tokopedia.net/img/cache/500-square/hDjmkQ/2021/9/20/987b6942-7211-42ac-a763-cd8f24edf056.jpg.webp?ect=4g"
                alt="t-shirt adidas"
                slug="/tshirt/adidas"
                styleImg="object-cover"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default HotsProduct;
