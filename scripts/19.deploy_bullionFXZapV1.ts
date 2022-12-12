import { ethers, upgrades } from "hardhat"

async function main() {

    const BullionFXZapV1 = await ethers.getContractFactory("BullionFXZapV1")
    console.log("Deploying BullionFXZapV1...")
    //weth, bullRouter, 50
    // const bullionFXZapV1 = await upgrades.deployProxy(BullionFXZapV1, ["0xb4fbf271143f4fbf7b91a5ded31805e42b2208d6", "0xb66c5FbE976B7d57C995A83858539CAc9eEdcD94", 50])
    const bullionFXZapV1 = await upgrades.deployProxy(BullionFXZapV1, ["0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2", "0x100838b967DB5d714d5c0F2297e3D03bB62974C9", 50])

    console.log(bullionFXZapV1.address, " bullionFXZapV1(proxy) address")
    console.log(await upgrades.erc1967.getImplementationAddress(bullionFXZapV1.address), " getImplementationAddress")
    console.log(await upgrades.erc1967.getAdminAddress(bullionFXZapV1.address), " getAdminAddress")
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})