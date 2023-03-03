import Link from "next/link";

function NavBar() {
  const user = undefined;
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
