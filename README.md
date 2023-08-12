# superhack-contracts-and-EAS
This repository contains the smart contracts and scripts used to test the [Teleporter](https://github.com/jvaleskadevs/superchain-teleporter-station) as well as the Ethereum Attestation Service contracts for Superhack, 2023.

Our project, the Superchain Teleporter Station can be found [here](https://github.com/jvaleskadevs/superchain-teleporter-station).

# EAS
The deployment of the EAS and Registry smart contracts to the Zora testnet has been made leveraging our [Teleporter](https://github.com/jvaleskadevs/superchain-teleporter-station), so there was no need for the EAS contracts themselves, but their bytecode via the etherscan API (from the original smart contracts deployed on the Ethereum mainnet). This repository contains the script used to perform an attestation after deploying and registering an schema using the Zora explorer.
- Zora Goerli EAS (teleported) [0x83Bf9F56E703A87fC05eabB6933E1A8D5ceC87f3](https://testnet.explorer.zora.energy/address/0x83Bf9F56E703A87fC05eabB6933E1A8D5ceC87f3?tab=contract)
- Zora Goerli Registry (teleported) [0xBb7ca7a34cE4D4808385c117101657026d861292](https://testnet.explorer.zora.energy/address/0xBb7ca7a34cE4D4808385c117101657026d861292?tab=contract)
# Supercontract
A basic contract to test our [Teleporter](https://github.com/jvaleskadevs/superchain-teleporter-station).
- Ethereum Goerli (deployed with Remix) [0xa2f729AAEA2434E4E1bb3455fe1D2eB172058D8a](https://goerli.etherscan.io/address/0xa2f729AAEA2434E4E1bb3455fe1D2eB172058D8a#code)
- Base Goerli (teleported) [0xBb7ca7a34cE4D4808385c117101657026d861292](https://goerli.basescan.org/address/0xbb7ca7a34ce4d4808385c117101657026d861292#code)
- Optimism Goerli (teleported) [0x5B95D080F83c4a69E3C5462f90AD569DCC31794e](https://goerli-optimism.etherscan.io/address/0x5B95D080F83c4a69E3C5462f90AD569DCC31794e#code)
# SupercontractWithArgs
A basic contract with args to test our [Teleporter](https://github.com/jvaleskadevs/superchain-teleporter-station).
- Ethereum Goerli (deployed with Remix) [0xFee1360fe085557D16c47124e1324517cF43B7B9](https://goerli.etherscan.io/address/0xFee1360fe085557D16c47124e1324517cF43B7B9#code)
- Base Goerli (teleported) [0x8a3f0a10f4f168fb817bfa9a0f8cff8db2d133cf](https://goerli.basescan.org/address/0x8a3f0a10f4f168fb817bfa9a0f8cff8db2d133cf#code)
- Optimism Goerli (teleported) [0x9bcc6bd2a72af329e28fe3df632b4db89a4ee9a7](https://goerli-optimism.etherscan.io/address/0x9bcc6bd2a72af329e28fe3df632b4db89a4ee9a7#code)
# SupercontractWithArgsAndImports
A basic contract with args and imports to test our [Teleporter](https://github.com/jvaleskadevs/superchain-teleporter-station).
- Ethereum Sepolia (deployed with Remix) [0x97aBfD858Cdac2d099116309B178452bA4025112](https://goerli-optimism.etherscan.io/address/0x9bcc6bd2a72af329e28fe3df632b4db89a4ee9a7#code)
- Optimism Goerli (teleported) [0x42c500eFe11424f479dE18C4095537478511BeB3](https://goerli-optimism.etherscan.io/address/0x42c500efe11424f479de18c4095537478511beb3#code)
- Optimism Goerli (teleported) [0xE89F808103aAc03663E080E7ff1B5ef6d9da562D](https://goerli-optimism.etherscan.io/address/0xe89f808103aac03663e080e7ff1b5ef6d9da562d#code)
- Zora Goerli (teleported) [0x569c819df088b7947f9db31f3271fe7cb92bca11](https://testnet.explorer.zora.energy/address/0x569c819dF088b7947f9dB31F3271FE7cb92Bca11?tab=contract)
- Mode tesnet (teleported) [0x8A3F0A10F4f168FB817BFa9A0F8cFF8dB2d133cf](https://sepolia.explorer.mode.network/address/0x8A3F0A10F4f168FB817BFa9A0F8cFF8dB2d133cf?tab=contract)
