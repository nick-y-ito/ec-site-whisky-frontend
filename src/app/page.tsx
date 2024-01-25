import { HeroSection } from '@/components/base/HeroSection';
import { LeftSideBar } from '@/components/base/LeftSideBar';
import { ItemFilterMobile } from '@/components/filter/ProductFilterMobile';
import { ItemList } from '@/components/base/ProductList';

const Home = () => {
  return (
    <main>
      <HeroSection />
      <div className="min-h-[120vh] p-10 flex gap-10 justify-center relative bg-amber-950 bg-opacity-10">
        <LeftSideBar />
        <div className="w-full max-w-screen-2xl">
          <ItemFilterMobile />
          <ItemList />
        </div>
      </div>
    </main>
  );
};

export default Home;
