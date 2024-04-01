import {  WalletError } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider as ReactUIWalletModalProvider } from '@solana/wallet-adapter-react-ui';
import {
    PhantomWalletAdapter,
    // LedgerWalletAdapter,
    // SlopeWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { Connection } from '@solana/web3.js';
import { FC, ReactNode, useCallback, useMemo } from 'react';
import { AutoConnectProvider, useAutoConnect } from './AutoConnectProvider';
import { notify } from "../utils/notifications";

const WalletContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const connection = new Connection("https://solana-mainnet.core.chainstack.com/173ea881bf68267cb1f0ea9419fcd200", "confirmed");
    const { autoConnect } = useAutoConnect();
    const endpoint = useMemo(() => connection.rpcEndpoint, [connection]);

    const wallets = useMemo(
        () => [
            new PhantomWalletAdapter(),
            // new LedgerWalletAdapter(),
            // new SlopeWalletAdapter(),
        ],
        []
    );

    const onError = useCallback(
        (error: WalletError) => {
            notify({ type: 'error', message: error.message ? `${error.name}: ${error.message}` : error.name });
            console.error(error);
        },
        []
    );

    return (
        // TODO: updates needed for updating and referencing endpoint: wallet adapter rework
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} onError={onError} autoConnect={autoConnect}>
                <ReactUIWalletModalProvider>{children}</ReactUIWalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};

export const ContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <AutoConnectProvider>
            <WalletContextProvider>{children}</WalletContextProvider>
        </AutoConnectProvider>
    );
};
