import { ethers, upgrades } from "hardhat"

async function main() {

    const BULL = await ethers.getContractFactory("BullToken")
    console.log("Deploying BULL...")
    const bull = await upgrades.deployProxy(BULL)

    console.log(bull.address, " bull(proxy) address")
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})