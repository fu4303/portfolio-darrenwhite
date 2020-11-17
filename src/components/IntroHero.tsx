import { FC } from 'react';

import { MoreLink } from '~/components';

const IntroHero: FC = () => (
  <div className="grid grid-cols-2 gap-16 lg:gap-5">
    <div className="bg-gray-700"></div>
    <div className="">
      <div className="text-base leading-6 font-semibold uppercase tracking-wider text-gray-500">Introduction</div>
      <h2 className="mt-2 text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10">
        html, css and js developer with over 15 years experience.
      </h2>
      <p className="mt-3 text-lg leading-7 text-gray-300">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque
        amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt duis.
      </p>
      <div className="mt-8">
        <MoreLink text="My Story" to="/about" />
      </div>
    </div>
  </div>
);

export default IntroHero;
