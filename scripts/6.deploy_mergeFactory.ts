import { ethers, upgrades } from "hardhat"

async function main() {

    const MergeFactory = await ethers.getContractFactory("MergeFactory")
    console.log("Deploying MergeFactory...")
    // bullFactory, sushiFactory
    // matic
    const mergeFactory = await upgrades.deployProxy(MergeFactory, ["0xcb1A9B6Aaf9cFb40c365f90c2763da38CB53a84f", "0x5757371414417b8C6CAad45bAeF941aBc7d3Ab32"])

    console.log(mergeFactory.address, " MergeRouter(proxy) address")
    console.log(await upgrades.erc1967.getImplementationAddress(mergeFactory.address), " getImplementationAddress")
    console.log(await upgrades.erc1967.getAdminAddress(mergeFactory.address), " getAdminAddress")
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})