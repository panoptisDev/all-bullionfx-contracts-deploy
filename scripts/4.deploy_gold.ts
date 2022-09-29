import { ethers, upgrades } from "hardhat"

async function main() {

    const GOLD = await ethers.getContractFactory("GoldToken")
    console.log("Deploying GOLD...")
    const gold = await upgrades.deployProxy(GOLD)

    console.log(gold.address, " gold(proxy) address")
    console.log(await upgrades.erc1967.getImplementationAddress(gold.address), " getImplementationAddress")
    console.log(await upgrades.erc1967.getAdminAddress(gold.address), " getAdminAddress")
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})