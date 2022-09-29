import { ethers, upgrades } from "hardhat"

async function main() {

    const BullPool = await ethers.getContractFactory("BullPool")
    console.log("Deploying BullPool...")
    // bull, mcv2, wallet 3, pid
    // const bullPool = await upgrades.deployProxy(BullPool, ["0x6a8042bd179229b6926b33F1d4aC053D8190309D", "0x8D2EdBf067ba5164b6884dE70b41802A111f6Dce", "0xD389104470281355Ca0Fb825F831B290875ba535", "0xD389104470281355Ca0Fb825F831B290875ba535", "0xD389104470281355Ca0Fb825F831B290875ba535", 0])
    const bullPool = await upgrades.deployProxy(BullPool, ["0x7D3258C5F0ef16598458c99B8aF2154e74aEb5b0", "0x6d53ce83faC6a9CCc98Dda785415b38ad62fd89a", "0xD389104470281355Ca0Fb825F831B290875ba535", "0xD389104470281355Ca0Fb825F831B290875ba535", "0xD389104470281355Ca0Fb825F831B290875ba535", 0])

    console.log(bullPool.address, " bullPool(proxy) address")
    console.log(await upgrades.erc1967.getImplementationAddress(bullPool.address), " getImplementationAddress")
    console.log(await upgrades.erc1967.getAdminAddress(bullPool.address), " getAdminAddress")
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})