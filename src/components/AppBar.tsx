import { FC } from 'react';
import Link from 'next/link';

import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useAutoConnect } from '../contexts/AutoConnectProvider';

export const AppBar: FC = (props) => {
  const { autoConnect, setAutoConnect } = useAutoConnect();

  return (
    <div>
      {/* NavBar / Header */}
      <div className="navbar flex flex-row md:mb-2 shadow-lg bg-neutral text-neutral-content">
        <div className="navbar-start">
          <div className="hidden sm:inline w-22 h-22 md:p-2">
            <svg
              width="100%"
              height="22"
              viewBox="0 0 646 96"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="paint0_linear_1064_606"
                  x1="10.81"
                  y1="98.29"
                  x2="98.89"
                  y2="-1.01005"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.08" stopColor="#9945FF" />
                  <stop offset="0.3" stopColor="#8752F3" />
                  <stop offset="0.5" stopColor="#5497D5" />
                  <stop offset="0.6" stopColor="#43B4CA" />
                  <stop offset="0.72" stopColor="#28E0B9" />
                  <stop offset="0.97" stopColor="#19FB9B" />
                </linearGradient>
                <clipPath id="clip0_1064_606">
                  <rect width="646" height="96" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>

        {/* Wallet & Settings */}
        <div className="navbar-end">
          <Link href="/">
            <a className="mr-8">Token Creator</a>
          </Link>
          <Link href="/update">
            <a className="mr-4">Update Metadata</a>
          </Link>
          <Link href="/uploader">
            <a className="mr-8">Upload Metadata</a>
          </Link>
          <Link href="/metadata">
            <a className="mr-4">Token Metadata</a>
          </Link>
          <div className="dropdown">
            <div tabIndex={0} className="btn btn-square btn-ghost text-right">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="p-2 shadow menu dropdown-content bg-base-100 rounded-box sm:w-52"
            >
              <li>
                <div className="form-control">
                  <label className="cursor-pointer label">
                    <a>Autoconnect</a>
                    <input
                      type="checkbox"
                      checked={autoConnect}
                      onChange={(e) => setAutoConnect(e.target.checked)}
                      className="toggle"
                    />
                  </label>
                </div>
              </li>
            </ul>
          </div>
          <WalletMultiButton className="btn btn-ghost mr-4" />
        </div>
      </div>
      {props.children}
    </div>
  );
};
