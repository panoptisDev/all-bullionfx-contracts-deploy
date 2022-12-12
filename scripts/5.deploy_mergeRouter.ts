import { ethers, upgrades } from "hardhat"

async function main() {

    const MergeRouter = await ethers.getContractFactory("MergeRouter")
    console.log("Deploying MergeRouter...")
    // mergeFactory, bullFactory, router sushirouter weth
    // goerli
    // const mergeRouter = await upgrades.deployProxy(MergeRouter, ["0x481A2cdb80825372B9ec2cC91E82D9cC51c8316e", "0xb66c5FbE976B7d57C995A83858539CAc9eEdcD94", "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506", "0xb4fbf271143f4fbf7b91a5ded31805e42b2208d6"])
    // mainnet
    // const mergeRouter = await upgrades.deployProxy(MergeRouter, ["0x550fB01B6022fc986390f9a10278383F63d1b208", "0x100838b967DB5d714d5c0F2297e3D03bB62974C9", "0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F", "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"])
    // matic
    const mergeRouter = await upgrades.deployProxy(MergeRouter, ["0xB2e0407401069144e839a28Fb967C445E6F79852", "0xcb1A9B6Aaf9cFb40c365f90c2763da38CB53a84f", "0x7bC43CbbC4a750A597C82609eC6A2d78dB702BFA", "0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff", "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"])

    console.log(mergeRouter.address, " MergeRouter(proxy) address")
    console.log(await upgrades.erc1967.getImplementationAddress(mergeRouter.address), " getImplementationAddress")
    console.log(await upgrades.erc1967.getAdminAddress(mergeRouter.address), " getAdminAddress")
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})