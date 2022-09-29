import { ethers, upgrades } from "hardhat"

async function main() {

    const proxy = "0x32F7958ce6B059684c6A5fc8272bf8C26A77Dbcc"
    const BullionFXZapV1 = await ethers.getContractFactory("BullionFXZapV1")
    console.log("Deploying BullionFXZapV1...")
    //weth, bullRouter, 50
    const bullionFXZapV1 = await upgrades.upgradeProxy(proxy, BullionFXZapV1)

    console.log(bullionFXZapV1.address, " bullionFXZapV1(proxy) address")
    console.log(await upgrades.erc1967.getImplementationAddress(bullionFXZapV1.address), " getImplementationAddress")
    console.log(await upgrades.erc1967.getAdminAddress(bullionFXZapV1.address), " getAdminAddress")
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})