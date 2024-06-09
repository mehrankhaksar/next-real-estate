import AdvertisementsSidebar from "../modules/AdvertisementsSidebar";
import AdvertisementsList from "../modules/AdvertisementsList";

const AdvertisementsPage = ({ category, advertisements }) => {
  return (
    <section className="my-10">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row gap-5">
          <AdvertisementsSidebar category={category} />
          <div className="flex-1">
            <AdvertisementsList advertisements={advertisements} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvertisementsPage;
