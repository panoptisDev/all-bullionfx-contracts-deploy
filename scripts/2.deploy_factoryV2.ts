import { ethers, upgrades } from "hardhat"

async function main() {

    const Factory = await ethers.getContractFactory("BullFactory")
    console.log("Deploying Factory...")
    const factory = await upgrades.deployProxy(Factory, ["0xD389104470281355Ca0Fb825F831B290875ba535"])

    console.log(factory.address, " factory(proxy) address")
    console.log(await upgrades.erc1967.getImplementationAddress(factory.address), " getImplementationAddress")
    console.log(await upgrades.erc1967.getAdminAddress(factory.address), " getAdminAddress")
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})