import { ProductList } from '@/components/ProductList';
import { HeroSection } from '@/components/base/HeroSection';
import { LeftSideBar } from '@/components/base/LeftSideBar';
import { ProductFilterMobile } from '@/components/filter/ProductFilterMobile';

interface HomePageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

const Home = ({ searchParams }: HomePageProps) => {
  return (
    <main>
      <HeroSection />
      <div className="min-h-[120vh] p-10 flex gap-10 justify-center relative bg-amber-950 bg-opacity-10">
        <LeftSideBar />
        <div className="w-full max-w-screen-2xl">
          <ProductFilterMobile />
          <ProductList searchParams={searchParams} />
        </div>
      </div>
    </main>
  );
};

export default Home;
