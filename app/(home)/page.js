import { HomeCarousel } from "@/components/shared/home/home-carousel";
import data from "@/lib/data";

const page = () => {
  return (
    <HomeCarousel items={data.carousels} />
  )
}

export default page;