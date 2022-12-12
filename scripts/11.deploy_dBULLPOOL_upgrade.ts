import { ethers, upgrades } from "hardhat"

async function main() {

    const proxy = "0x4980d5e4152030bFBE2c129C579BaA2bCd4CCD96"
    const MockERC20 = await ethers.getContractFactory("MockERC20")
    console.log("Deploying MockERC20...")
    // bull syrup dev perblock startblock
    const mockERC20 = await upgrades.upgradeProxy(proxy, MockERC20)

    console.log(mockERC20.address, " masterChef(proxy) address")
    console.log(await upgrades.erc1967.getImplementationAddress(mockERC20.address), " getImplementationAddress")
    console.log(await upgrades.erc1967.getAdminAddress(mockERC20.address), " getAdminAddress")
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})