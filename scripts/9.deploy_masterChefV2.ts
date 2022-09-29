import { ethers, upgrades } from "hardhat"

async function main() {

    const MasterChefV2 = await ethers.getContractFactory("MasterChefV2")
    console.log("Deploying MasterChefV2...")
    // mcv1, bull, masterid, burnadmin
    // const masterChefV2 = await upgrades.deployProxy(MasterChefV2, ["0x4Cd16dE03CC52e532403CC1Cd2Aa7663B914AC94", "0x6a8042bd179229b6926b33F1d4aC053D8190309D", 1, "0xD389104470281355Ca0Fb825F831B290875ba535"])
    const masterChefV2 = await upgrades.deployProxy(MasterChefV2, ["0xB35ef2E47Bffd03Ae197F48080afA752183e4F85", "0x7D3258C5F0ef16598458c99B8aF2154e74aEb5b0", 1, "0xD389104470281355Ca0Fb825F831B290875ba535"])

    console.log(masterChefV2.address, " masterChefV2(proxy) address")
    console.log(await upgrades.erc1967.getImplementationAddress(masterChefV2.address), " getImplementationAddress")
    console.log(await upgrades.erc1967.getAdminAddress(masterChefV2.address), " getAdminAddress")
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})