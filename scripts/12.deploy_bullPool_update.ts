import { ethers, upgrades } from "hardhat"

async function main() {

    const BullPool = await ethers.getContractFactory("BullPool")
    const proxy = "0x33FeE740Aa5C22df0874616688B90551FcB0531b"
    console.log("Deploying BullPool...")
    // bull syrup dev perblock startblock
    const bullPool = await upgrades.upgradeProxy(proxy, BullPool)
    // const bullPool = await upgrades.deployProxy(BullPool, ["0x91FB1a287503c6Fa0bd97705b7d51c555714140b", "0x487eeE0285B5179385037Fcd0c8d602B58d21c45", "0xD389104470281355Ca0Fb825F831B290875ba535", "0xD389104470281355Ca0Fb825F831B290875ba535", "0xD389104470281355Ca0Fb825F831B290875ba535", 0])

    console.log(bullPool.address, " bullPool(proxy) address")
    console.log(await upgrades.erc1967.getImplementationAddress(bullPool.address), " getImplementationAddress")
    console.log(await upgrades.erc1967.getAdminAddress(bullPool.address), " getAdminAddress")
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})