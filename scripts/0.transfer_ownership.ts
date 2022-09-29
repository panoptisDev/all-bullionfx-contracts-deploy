import { ethers, upgrades } from "hardhat"

async function main() {

    const newAdmin = "0x57F07E8D28454BAEC743c5Af71a560Efb2b8F14c"

    console.log("Transferring ownership of ProxyAdmin...");

    await upgrades.admin.transferProxyAdminOwnership(newAdmin);
    console.log("Transferred ownership of proxyAdmin to:", newAdmin);
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})