import { ethers, upgrades } from "hardhat"

async function main() {

    const Factory = await ethers.getContractFactory("BullFactory")
    console.log("Deploying Factory...")
    //feetosetter
    const factory = await upgrades.deployProxy(Factory, ["0x57F07E8D28454BAEC743c5Af71a560Efb2b8F14c"])

    console.log(factory.address, " factory(proxy) address")
    console.log(await upgrades.erc1967.getImplementationAddress(factory.address), " getImplementationAddress")
    console.log(await upgrades.erc1967.getAdminAddress(factory.address), " getAdminAddress")
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})