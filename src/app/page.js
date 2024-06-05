import Banner from '@/components/ui/Banner';
import Review from '@/components/ui/Review';
import Service from '@/components/ui/Service';
import Team from '@/components/ui/Team';

const page = () => {
  return (
    <div>
      <Banner/>
      <Service/>
      <Team/>
      <Review/>
    </div>

  );
};

export default page;