import Link from "next/link";
import BaseLayout from "../BaseLayout";


export default function Profile() {
  return(
    <BaseLayout>
      <div><Link href="/dashboard/Profile/EditProfile"><button>Profile</button></Link></div>
    </BaseLayout>
  );
}
