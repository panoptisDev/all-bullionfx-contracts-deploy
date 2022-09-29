import { ethers, upgrades } from "hardhat"

async function main() {

    const SyrupBar = await ethers.getContractFactory("SyrupBar")
    console.log("Deploying SyrupBar...")
    // bull
    // const syrupBar = await upgrades.deployProxy(SyrupBar, ["0x6a8042bd179229b6926b33F1d4aC053D8190309D"])
    const syrupBar = await upgrades.deployProxy(SyrupBar, ["0x7D3258C5F0ef16598458c99B8aF2154e74aEb5b0"])

    console.log(syrupBar.address, " syrupBar(proxy) address")
    console.log(await upgrades.erc1967.getImplementationAddress(syrupBar.address), " getImplementationAddress")
    console.log(await upgrades.erc1967.getAdminAddress(syrupBar.address), " getAdminAddress")
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})