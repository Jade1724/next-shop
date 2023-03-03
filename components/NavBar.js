import Link from "next/link";
import { useState, useEffect } from "react";
import { fetchJson } from "@/lib/api";

function NavBar() {
  const [user, setUser] = useState();
  useEffect(() => {
    (async () => {
      try {
        const user = await fetchJson("/api/user");
        setUser(user);
      } catch (err) {
        // Not signed in
      }
    })();
  }, []);
  console.log("[NavbBar] user: ", user);

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
              <Link href="/sign-in">Sign Out</Link>
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
