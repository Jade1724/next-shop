import Link from "next/link";
import { fetchJson } from "@/lib/api";
import { useUser } from "@/hooks/user";
import { useSignOut } from "@/hooks/user";

function NavBar() {
  const user = useUser();
  const signOut = useSignOut();

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
              <Link href="/sign-in" onClick={signOut}>
                Sign Out
              </Link>
            </li>
          </>
        ) : (
          <li>
            <Link href="/sign-in">Sign In</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
