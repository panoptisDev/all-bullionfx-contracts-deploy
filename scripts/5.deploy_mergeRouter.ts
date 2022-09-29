import { ethers, upgrades } from "hardhat"

async function main() {

    const MergeRouter = await ethers.getContractFactory("MergeRouter")
    console.log("Deploying MergeRouter...")
    // factory router sushirouter weth
    // const mergeRouter = await upgrades.deployProxy(MergeRouter, ["0x481A2cdb80825372B9ec2cC91E82D9cC51c8316e", "0xb66c5FbE976B7d57C995A83858539CAc9eEdcD94", "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506", "0xb4fbf271143f4fbf7b91a5ded31805e42b2208d6"])
    const mergeRouter = await upgrades.deployProxy(MergeRouter, ["0x550fB01B6022fc986390f9a10278383F63d1b208", "0x100838b967DB5d714d5c0F2297e3D03bB62974C9", "0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F", "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"])

    console.log(mergeRouter.address, " gold(proxy) address")
    console.log(await upgrades.erc1967.getImplementationAddress(mergeRouter.address), " getImplementationAddress")
    console.log(await upgrades.erc1967.getAdminAddress(mergeRouter.address), " getAdminAddress")
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})