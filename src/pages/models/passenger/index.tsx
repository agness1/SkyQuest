import TypesPage from "@component/src/components/page/Planes/planeList";
import { useRouter } from "next/router";
export default function Passenger() {
  const router = useRouter();
  const data = router.query;
  console.log(data);
  return <TypesPage typeData={data} />;
}
