import {
  getCountryCities,
  postCommunityCreate,
} from "../../../../../../../../reduxToolkit/portalSlices/communitySlice/communityExtraReducers";
import { communityCreateDataAdd } from "../../../../../../../../reduxToolkit/portalSlices/communitySlice/communitySlice";

export class CreateFunction {
  constructor(
    setData,
    site,
    setSite,
    communityCreateData,
    data,
    dispatch,
    confirm
  ) {
    this.setData = setData;
    this.setSite = setSite;
    this.site = site;
    this.communityCreateData = communityCreateData;
    this.data = data;
    this.confirm = confirm;
    this.dispatch = dispatch;
  }

  extraHandleSubmit = (e) => {
    e.preventDefault();
    if (this.confirm) {
      const newCommunityCreateData = {
        ...this.communityCreateData,
      };

      this.dispatch(communityCreateDataAdd(newCommunityCreateData));

      this.dispatch(
        postCommunityCreate({
          ...newCommunityCreateData,
          attachments: [newCommunityCreateData.attachments],
          site: newCommunityCreateData.site.join(","),
        })
      );
    }
  };

  extraHandleChangeApplication = ({ key, value, id }) => {
    if (key !== "link") {
      this.setData((prev) => ({ ...prev, [key]: value }));
    }
    if (key === "region_id") {
      this.dispatch(getCountryCities({ location_id: value }));
    }
    const newArr = this.site.map((el) => {
      if (el.id === id) {
        return {
          ...el,
          link: value,
        };
      }
      return el;
    });

    this.setSite(newArr);
    const newCommunityCreateData = {
      ...this.communityCreateData,
      [key]: key === "site" ? newArr.map((el) => el.link) : value,
    };

    this.dispatch(communityCreateDataAdd(newCommunityCreateData));
  };
}
