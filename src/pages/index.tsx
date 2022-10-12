import dynamic from 'next/dynamic';

import { Layout } from '@/layouts';
import { Meta } from '@/layouts/Meta';

const Slider = dynamic(() =>
  import('@/components').then((component) => component.Slider)
);
const Index = () => {
  return (
    <Layout
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <Slider />
    </Layout>
  );
};

export default Index;
