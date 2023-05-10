import TypesPage from "@component/src/components/page/Planes/planeList";
import { useRouter } from "next/router";
export default function Military() {
  const router = useRouter();
  const data = router.query;

  return <TypesPage typeData={data} />;
}
