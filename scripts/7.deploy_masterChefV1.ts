import { ethers, upgrades } from "hardhat"

async function main() {

    const MasterChef = await ethers.getContractFactory("MasterChef")
    console.log("Deploying MasterChef...")
    // bull syrup dev perblock startblock
    // const masterChef = await upgrades.deployProxy(MasterChef, ["0x6a8042bd179229b6926b33F1d4aC053D8190309D", "0xa9a7eD3E8527b5649007c89886Ef3d31951fe5FC", "0xD389104470281355Ca0Fb825F831B290875ba535", "0xDE0B6B3A7640000", 7633900])
    const masterChef = await upgrades.deployProxy(MasterChef, ["0x7D3258C5F0ef16598458c99B8aF2154e74aEb5b0", "0x1842eD4B402B10c4D06556A38C7E1F2fB136aD1C", "0xD389104470281355Ca0Fb825F831B290875ba535", "0xDE0B6B3A7640000", 15588468])

    console.log(masterChef.address, " masterChef(proxy) address")
    console.log(await upgrades.erc1967.getImplementationAddress(masterChef.address), " getImplementationAddress")
    console.log(await upgrades.erc1967.getAdminAddress(masterChef.address), " getAdminAddress")
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})