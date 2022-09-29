import { ethers, upgrades } from "hardhat"

async function main() {

    const SmartChef = await ethers.getContractFactory("SmartChef")
    console.log("Deploying SmartChef...")
    //gold	bull	200000000000000000	7523994	7533994
    // const smartChef = await upgrades.deployProxy(SmartChef, ["0xa782EFE83e99271de6264764c9Cd05F58D68A4cD", "0x6a8042bd179229b6926b33F1d4aC053D8190309D", "0x2C68AF0BB140000", 7632383, 7832383])
    const smartChef = await upgrades.deployProxy(SmartChef, ["0x57c88ed53d53fDc6B41D57463E6C405dE162843e", "0x7D3258C5F0ef16598458c99B8aF2154e74aEb5b0", "0x2C68AF0BB140000", 15588106, 15588106])

    console.log(smartChef.address, " smartChef(proxy) address")
    console.log(await upgrades.erc1967.getImplementationAddress(smartChef.address), " getImplementationAddress")
    console.log(await upgrades.erc1967.getAdminAddress(smartChef.address), " getAdminAddress")
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})