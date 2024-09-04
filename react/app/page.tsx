import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
	  <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Animations</strong>
          </p>
	   </div>
    </main>
  );
}
