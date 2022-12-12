import { ethers, upgrades } from "hardhat"

async function main() {

    const FarmBoosterProxyFactory = await ethers.getContractFactory("FarmBoosterProxyFactory")
    console.log("Deploying FarmBoosterProxyFactory...")
    // booster, mcv2, bull
    // const farmBoosterProxyFactory = await upgrades.deployProxy(FarmBoosterProxyFactory, ["0x4761387258BB0d74F8b3B70d72D91E79674B9257", "0x8D2EdBf067ba5164b6884dE70b41802A111f6Dce", "0x6a8042bd179229b6926b33F1d4aC053D8190309D"])
    const farmBoosterProxyFactory = await upgrades.deployProxy(FarmBoosterProxyFactory, ["0x6EaD4759313bAce0F9Eca19CE057F8dE95B66872", "0x6d53ce83faC6a9CCc98Dda785415b38ad62fd89a", "0x7D3258C5F0ef16598458c99B8aF2154e74aEb5b0"])

    console.log(farmBoosterProxyFactory.address, " farmBoosterProxyFactory(proxy) address")
    console.log(await upgrades.erc1967.getImplementationAddress(farmBoosterProxyFactory.address), " getImplementationAddress")
    console.log(await upgrades.erc1967.getAdminAddress(farmBoosterProxyFactory.address), " getAdminAddress")
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})