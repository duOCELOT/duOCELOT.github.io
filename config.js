const {keyStores} = nearApi;
const CONTRACT_NAME = "nft-frontend-simple-mint.blockhead.testnet";

export function getConfig(network) {
    switch (network) {
    case "mainnet":
        return { 
            networkId: "mainnet",
            keyStore: new keyStores.BrowserLocalStorageKeyStore(),
            nodeUrl: "https://rpc.mainnet.near.org",
            contractName: CONTRACT_NAME,
            walletUrl: "https://wallet.near.org",
            helperUrl: "https://helper.mainnet.near.org",
        };
        case "testnet":
            return { 
                networkId: "testnet",
                keyStore: new keyStores.BrowserLocalStorageKeyStore(),
                nodeUrl: "https://rpc.testnet.near.org",
                contractName: CONTRACT_NAME,
                walletUrl: "https://wallet.testnet.near.org",
                helperUrl: "https://helper.testnet.near.org",
            };
        default: throw Error(`Unconfigured enviroment '$(network)' . Can be configured in`)
}}