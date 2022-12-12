import { ethers, upgrades } from "hardhat"

async function main() {

    // main
    const proxy = "0x100838b967DB5d714d5c0F2297e3D03bB62974C9"
    // goerli
    // const proxy = "0xb66c5FbE976B7d57C995A83858539CAc9eEdcD94"
    // matic
    // const proxy = "0x7bC43CbbC4a750A597C82609eC6A2d78dB702BFA"
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