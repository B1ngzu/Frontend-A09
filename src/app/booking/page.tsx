import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import getUserProfile from "@/libs/getUserProfile";

export default async function BookingPage() {
  const session = await getServerSession(authOptions);

  let profile = null;
  if (session && session.user.token) {
    const result = await getUserProfile(session.user.token);
    if (result.success) {
      profile = result.data;
    }
  }

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">Venue Booking</h1>

      {profile && (
        <div className="mt-4 p-4 border rounded max-w-sm mx-auto">
          <h2 className="text-xl font-semibold mb-2">{profile.name}</h2>
          <p>Name: {profile.name}</p>
          <p>Email: {profile.email}</p>
          <p>Tel.: {profile.tel}</p>
          <p>Member Since: {profile.createdAt}</p>
        </div>
      )}
    </main>
  );
}
