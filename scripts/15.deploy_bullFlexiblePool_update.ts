import { ethers, upgrades } from "hardhat"

async function main() {

    const BullFlexiblePool = await ethers.getContractFactory("BullFlexiblePool")
    const proxy = "0xcc0d165f6f21A5EF952e5AeD97E6bd6c950b1bD1"
    console.log("Deploying BullFlexiblePool...")
    // bull, bullpool, admin, treasury
    const bullFlexiblePool = await upgrades.upgradeProxy(proxy, BullFlexiblePool)

    console.log(bullFlexiblePool.address, " bullFlexiblePool(proxy) address")
    console.log(await upgrades.erc1967.getImplementationAddress(bullFlexiblePool.address), " getImplementationAddress")
    console.log(await upgrades.erc1967.getAdminAddress(bullFlexiblePool.address), " getAdminAddress")
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})