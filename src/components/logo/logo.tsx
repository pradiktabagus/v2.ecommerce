import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="relative no-underline hover:border-b-0">
      <Image
        src="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/e5b8438b.svg"
        priority
        alt="logo"
        width={145}
        height={32}
      />
    </Link>
  );
}
