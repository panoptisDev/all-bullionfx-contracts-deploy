import { ethers, upgrades } from "hardhat"

async function main() {

    const SmartChefFactory = await ethers.getContractFactory("SmartChefFactory")
    console.log("Deploying SmartChefFactory...")
    //
    const smartChefFactory = await upgrades.deployProxy(SmartChefFactory)

    console.log(smartChefFactory.address, " smartChefFactory(proxy) address")
    console.log(await upgrades.erc1967.getImplementationAddress(smartChefFactory.address), " getImplementationAddress")
    console.log(await upgrades.erc1967.getAdminAddress(smartChefFactory.address), " getAdminAddress")
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})