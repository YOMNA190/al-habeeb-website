import { Hero } from '@/components/sections/hero';
import { Counters } from '@/components/sections/counters';
import { ServicesOverview } from '@/components/sections/services-overview';
import { FeaturedProjects } from '@/components/sections/featured-projects';
import { WhyChooseUs } from '@/components/sections/why-choose-us';
import { Testimonials } from '@/components/sections/testimonials';
import { FinalCTA } from '@/components/sections/final-cta';

export default function Home() {
  return (
    <>
      <Hero />
      <Counters />
      <ServicesOverview />
      <FeaturedProjects />
      <WhyChooseUs />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
