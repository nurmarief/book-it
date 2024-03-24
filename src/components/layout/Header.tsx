import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <nav className="navbar mb-2 py-2 sticky top-0 bg-base-100 shadow-md z-50">
      {/* Container */}
      <div className="w-full lg:w-10/12 lg:mx-auto">
        {/* Left */}
        <div className="flex-1">
          <Link href="/">
            <img
              src="/images/bookit_logo.png"
              alt="BookIT"
            />
          </Link>
        </div>
        {/* Right */}
        <div className="flex-none">
          {/* Dropdown */}
          <div className="dropdown dropdown-end">
            {/* Button */}
            <div tabIndex={0} role="button">
              {/* Avatar */}
              <div className="avatar">
                <div className="rounded-full" style={{height: "50px", width: "50px"}}>
                  <img
                    src="/images/default_avatar.jpg"
                    alt="John Doe"
                  />
                </div>
              </div>
            </div>
            {/* Content */}
            <div tabIndex={0} className="dropdown-content menu shadow rounded-box p-2 w-fit bg-base-100">
              <Link href="/admin/dashboard" className="btn btn-ghost leading-normal">
                Dashboard
              </Link>
              <Link href="/bookings/me" className="btn btn-ghost leading-normal">
                My Bookings
              </Link>
              <Link href="/me/update" className="btn btn-ghost leading-normal">
                Profile
              </Link>
              <Link href="/" className="btn btn-ghost leading-normal">
                Logout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;