import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Organizations } from "../components/Organizations";

export default async function Dashboard() {
  const { getUserOrganizations } = getKindeServerSession();
  const organizations = await getUserOrganizations();

  return (
    <div className="container">
      <div className="card start-hero">
        <p className="text-body-2 start-hero-intro">Woohoo!</p>
        <Organizations organizations={organizations} />
      </div>
    </div>
  );
}
