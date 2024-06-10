import Banner from '@/components/ui/Banner';
import Portfolio from '@/components/ui/Portfolio';
import Review from '@/components/ui/Review';
import Service from '@/components/ui/Service';
import Team from '@/components/ui/Team';

const page = () => {
  return (
    <div>
      <Banner/>
      <Service/>
      <Team/>
      <Portfolio/>
      <Review/>
    </div>

  );
};

export default page;