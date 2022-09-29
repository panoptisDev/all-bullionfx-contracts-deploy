import { ethers, upgrades } from "hardhat"

async function main() {

    const FarmBooster = await ethers.getContractFactory("FarmBooster")
    console.log("Deploying FarmBooster...")
    // bull, bullpool, mcv2, 1, 50000, 5
    // const farmBooster = await upgrades.deployProxy(FarmBooster, ["0x6a8042bd179229b6926b33F1d4aC053D8190309D", "0x33FeE740Aa5C22df0874616688B90551FcB0531b", "0x8D2EdBf067ba5164b6884dE70b41802A111f6Dce", 1, 50000, 5])
    const farmBooster = await upgrades.deployProxy(FarmBooster, ["0x7D3258C5F0ef16598458c99B8aF2154e74aEb5b0", "0x29AFD54b5eA6eF0C46fB168cB569106116B13F69", "0x6d53ce83faC6a9CCc98Dda785415b38ad62fd89a", 1, 50000, 5])

    console.log(farmBooster.address, " farmBooster(proxy) address")
    console.log(await upgrades.erc1967.getImplementationAddress(farmBooster.address), " getImplementationAddress")
    console.log(await upgrades.erc1967.getAdminAddress(farmBooster.address), " getAdminAddress")
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})