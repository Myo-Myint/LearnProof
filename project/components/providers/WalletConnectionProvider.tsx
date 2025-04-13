"use client"
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-phantom";
import { clusterApiUrl } from "@solana/web3.js";
import { useMemo } from "react";





export const WalletConProvider = ({children} : {children: React.ReactNode}) => { 
    const network = WalletAdapterNetwork.Devnet

    const endpoint = useMemo(() => {
        if(network === WalletAdapterNetwork.Devnet){
            return 'https://virulent-weathered-knowledge.solana-devnet.quiknode.pro/e7bb78d46cabffdba53efab76e4317b0703f0c0f/'
        }

        return clusterApiUrl(network)
    },[network])


    const wallet = useMemo(() => 
        [new PhantomWalletAdapter()]
    ,[network])

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallet} autoConnect>
                <WalletModalProvider>
                    {children}
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    )


}