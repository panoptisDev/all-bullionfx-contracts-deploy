import { ethers, upgrades } from "hardhat"

async function main() {

    const proxy = "0xf18842edd44DC3724034713E3864F1ee01ccD16b"
    const MergeRouter = await ethers.getContractFactory("MergeRouter")
    console.log("Deploying MergeRouter...")
    // factory router sushirouter weth
    const mergeRouter = await upgrades.upgradeProxy(proxy, MergeRouter)

    console.log(mergeRouter.address, " gold(proxy) address")
    console.log(await upgrades.erc1967.getImplementationAddress(mergeRouter.address), " getImplementationAddress")
    console.log(await upgrades.erc1967.getAdminAddress(mergeRouter.address), " getAdminAddress")
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})