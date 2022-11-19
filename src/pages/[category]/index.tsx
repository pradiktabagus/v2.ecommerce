import { useRouter } from 'next/router';

import Main from '@/layouts/Main';

export default function Page() {
  const { query } = useRouter();
  return <Main>{query.category}</Main>;
}
