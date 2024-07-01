import AdvertisementsSidebar from "../modules/AdvertisementsSidebar";
import AdvertisementsList from "../modules/AdvertisementsList";

const AdvertisementsPage = ({ query, advertisements }) => {
  return (
    <section className="my-10">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
          <AdvertisementsSidebar query={query} />
          <div className="flex-1">
            <AdvertisementsList advertisements={advertisements} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvertisementsPage;
