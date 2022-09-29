import { ethers, upgrades } from "hardhat"

async function main() {

    const IBull = await ethers.getContractFactory("IBull")
    console.log("Deploying IBull...")
    // bullpool, admin, 19958400
    const iBull = await upgrades.deployProxy(IBull, ["0x4c592d1a49a8583C027d921A7B162B2E1FF83712", "0xD389104470281355Ca0Fb825F831B290875ba535", 19958400])

    console.log(iBull.address, " iBull(proxy) address")
    console.log(await upgrades.erc1967.getImplementationAddress(iBull.address), " getImplementationAddress")
    console.log(await upgrades.erc1967.getAdminAddress(iBull.address), " getAdminAddress")
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})