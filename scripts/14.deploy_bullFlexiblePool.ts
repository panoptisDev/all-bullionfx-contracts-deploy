import { ethers, upgrades } from "hardhat"

async function main() {

    const BullFlexiblePool = await ethers.getContractFactory("BullFlexiblePool")
    console.log("Deploying BullFlexiblePool...")
    // bull, bullpool, admin, treasury
    // const bullFlexiblePool = await upgrades.deployProxy(BullFlexiblePool, ["0x6a8042bd179229b6926b33F1d4aC053D8190309D", "0x33FeE740Aa5C22df0874616688B90551FcB0531b", "0xD389104470281355Ca0Fb825F831B290875ba535", "0xD389104470281355Ca0Fb825F831B290875ba535"])
    const bullFlexiblePool = await upgrades.deployProxy(BullFlexiblePool, ["0x7D3258C5F0ef16598458c99B8aF2154e74aEb5b0", "0x29AFD54b5eA6eF0C46fB168cB569106116B13F69", "0xD389104470281355Ca0Fb825F831B290875ba535", "0xD389104470281355Ca0Fb825F831B290875ba535"])

    console.log(bullFlexiblePool.address, " bullFlexiblePool(proxy) address")
    console.log(await upgrades.erc1967.getImplementationAddress(bullFlexiblePool.address), " getImplementationAddress")
    console.log(await upgrades.erc1967.getAdminAddress(bullFlexiblePool.address), " getAdminAddress")
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})