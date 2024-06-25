import { useWriteContract } from 'wagmi';
import NFTSaleABI from "./ABI/NFT.json";
import ERC20ABI from "./ABI/ERC20.json";

import { publicClient } from './client'
import { NFT_SALE_ADDRESS, USDT_ADDRESS } from './constants';
export function writeTransactionNFTSale(functionName: string, args: any[], value?: bigint) {
    const { data: hash, error, writeContract, isPending } = useWriteContract();
    function executeContract() {
        writeContract({
            address: NFT_SALE_ADDRESS,
            abi: NFTSaleABI,
            functionName,
            args,
            ...(value !== null && { value })
        });
    }
    return {
        hash,
        error,
        isPending,
        executeContract,
    };
}


export async function viewNFTSale(functionName: string, args: any[]) {
    const data = await publicClient.readContract({
        address: NFT_SALE_ADDRESS,
        abi: NFTSaleABI,
        functionName,
        args
    })
    return data
}

export async function viewUSDT(functionName: string, args: any[]) {
    const data = await publicClient.readContract({
        address: USDT_ADDRESS,
        abi: ERC20ABI,
        functionName,
        args
    })
    return data
}

export function writeTransactionUSDT(functionName: string, args: any[], value?: bigint) {
    const { data: hash, error, writeContract, isPending } = useWriteContract();
    function executeContract() {
        writeContract({
            address: USDT_ADDRESS,
            abi: ERC20ABI,
            functionName,
            args,
            ...(value !== null && { value })
        });
    }
    return {
        hash,
        error,
        isPending,
        executeContract,
    };
}
