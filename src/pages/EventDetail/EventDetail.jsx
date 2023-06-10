import DetailEvent from "../../component/DetailEvent/DetailEvent";
import { useEventDataFetching } from "./hooks/useEventDetailFetching";

export default function EventDetail() {
  const { siteNews } = useEventDataFetching();

  return <DetailEvent {...siteNews} />;
}
