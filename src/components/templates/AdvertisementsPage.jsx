import AdvertisementsSidebar from "../modules/AdvertisementsSidebar";
import AdvertisementsList from "../modules/AdvertisementsList";

const AdvertisementsPage = (props) => {
  return (
    <div className="container mx-auto">
      <div className="flex gap-5">
        <AdvertisementsSidebar category={props.category} />
        <AdvertisementsList {...props} />
      </div>
    </div>
  );
};

export default AdvertisementsPage;
