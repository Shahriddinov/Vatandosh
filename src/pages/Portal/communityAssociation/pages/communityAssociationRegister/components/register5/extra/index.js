import { postCommunityCreate } from "../../../../../../../../reduxToolkit/portalSlices/communitySlice/communityExtraReducers";
import { communityCreateDataAdd } from "../../../../../../../../reduxToolkit/portalSlices/communitySlice/communitySlice";

export class CreateFunction {
  constructor(setData, setLinks, links, communityCreateData, data, dispatch) {
    this.setData = setData;
    this.setLinks = setLinks;
    this.links = links;
    this.communityCreateData = communityCreateData;
    this.data = data;
    this.dispatch = dispatch;
  }

  extraHandleSubmit = (e) => {
    console.log(this.data);
    e.preventDefault();
    if (this.data.confirm) {
      const newCommunityCreateData = {
        ...this.communityCreateData,
        site: this.links.map((link) => link.link).join(","),
      };

      this.dispatch(communityCreateDataAdd(newCommunityCreateData));

      this.dispatch(
        postCommunityCreate({
          ...newCommunityCreateData,
          attachments: [newCommunityCreateData.attachments],
        })
      );
    }
  };

  extraHandleChangeApplication = ({ key, value, id }) => {
    if (key !== "link") {
      this.setData((prev) => ({ ...prev, [key]: value }));
    }

    const newArr = this.links.map((el) => {
      if (el.id === id) {
        return {
          ...el,
          link: value,
        };
      }
      return el;
    });

    this.setLinks(newArr);
    const newCommunityCreateData = {
      ...this.communityCreateData,
      [key]: value,
    };
    this.dispatch(communityCreateDataAdd(newCommunityCreateData));
  };
}
