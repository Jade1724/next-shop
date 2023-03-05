import Link from "next/link";
import { useQuery } from "react-query";
import { fetchJson } from "@/lib/api";


function NavBar() {
 const query = useQuery("user", async () => {
    try {
      return await fetchJson("/api/user");
    } catch (err) {
      return undefined;
    }
  }, {
    cacheTime: Infinity, 
    staleTime: 30_000,
  });
  const user = query.data;
 
  const handleSignOut = async () => {
    await fetchJson("/api/logout");
    setUser(undefined);
  };

  return (
    <nav className="px-2 py-1 text-sm">
      <ul className="flex gap-2">
        <li className="text-lg font-extrabold">
          <Link href="/">Next Shop</Link>
        </li>
        <li className="flex-1" role="separator" />
        {user ? (
          <>
            <li>{user.name}</li>
            <li>
              <Link href="/sign-in" onClick={handleSignOut}>
                Sign Out
              </Link>
            </li>
          </>
        ) : (
          <li>
            <button>Sign In</button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
