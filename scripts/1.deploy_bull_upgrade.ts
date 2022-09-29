import { ethers, upgrades } from "hardhat"

async function main() {

    const proxy = "0x6a8042bd179229b6926b33F1d4aC053D8190309D"
    const BULL = await ethers.getContractFactory("BullToken")
    console.log("Deploying BULL...")
    const bull = await upgrades.upgradeProxy(proxy, BULL)

    console.log(bull.address, " bull(proxy) address")
    console.log(await upgrades.erc1967.getImplementationAddress(bull.address), " getImplementationAddress")
    console.log(await upgrades.erc1967.getAdminAddress(bull.address), " getAdminAddress")
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})