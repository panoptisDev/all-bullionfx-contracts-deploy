import { ethers, upgrades } from "hardhat"

async function main() {

    const Router = await ethers.getContractFactory("BullRouter")
    console.log("Deploying Router...")
    // factory, weth
    // goerli
    const router = await upgrades.deployProxy(Router, ["0x481A2cdb80825372B9ec2cC91E82D9cC51c8316e", "0xb4fbf271143f4fbf7b91a5ded31805e42b2208d6"])
    // mainnet
    // const router = await upgrades.deployProxy(Router, ["0x550fB01B6022fc986390f9a10278383F63d1b208", "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"])
    // polygon
    // const router = await upgrades.deployProxy(Router, ["0xcb1A9B6Aaf9cFb40c365f90c2763da38CB53a84f", "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"])

    console.log(router.address, " router(proxy) address")
    console.log(await upgrades.erc1967.getImplementationAddress(router.address), " getImplementationAddress")
    console.log(await upgrades.erc1967.getAdminAddress(router.address), " getAdminAddress")
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})