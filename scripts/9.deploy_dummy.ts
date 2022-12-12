import { ethers, upgrades } from "hardhat"

async function main() {

    const MockERC20 = await ethers.getContractFactory("MockERC20")
    console.log("Deploying MockERC20...")
    //
    const mockERC20 = await upgrades.deployProxy(MockERC20, ["dMCV2", "dMCV2", "0x8AC7230489E80000"])

    console.log(mockERC20.address, " masterChef(proxy) address")
    console.log(await upgrades.erc1967.getImplementationAddress(mockERC20.address), " getImplementationAddress")
    console.log(await upgrades.erc1967.getAdminAddress(mockERC20.address), " getAdminAddress")
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})