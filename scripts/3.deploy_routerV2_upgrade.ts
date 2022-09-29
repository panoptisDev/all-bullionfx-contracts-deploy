import { ethers, upgrades } from "hardhat"

async function main() {

    const proxy = "0xb66c5FbE976B7d57C995A83858539CAc9eEdcD94"
    const Router = await ethers.getContractFactory("BullRouter")
    console.log("Deploying Router...")
    // factory, weth
    const router = await upgrades.upgradeProxy(proxy, Router)

    console.log(router.address, " router(proxy) address")
    console.log(await upgrades.erc1967.getImplementationAddress(router.address), " getImplementationAddress")
    console.log(await upgrades.erc1967.getAdminAddress(router.address), " getAdminAddress")
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})