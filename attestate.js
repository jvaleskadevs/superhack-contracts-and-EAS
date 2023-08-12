import { EAS, SchemaEncoder } from "@ethereum-attestation-service/eas-sdk";
import { ethers } from 'ethers';
import *  as dotenv from 'dotenv';
dotenv.config();

// Zora Goerli Testnet
const EASContractAddress = "0x83Bf9F56E703A87fC05eabB6933E1A8D5ceC87f3";
const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";

async function main() {

  const eas = new EAS(EASContractAddress);
  const provider = ethers.getDefaultProvider('https://testnet.rpc.zora.energy');
  const signer = new ethers.Wallet(process.env.PK, provider);
  eas.connect(signer);  

  console.log(await provider.getBalance(signer.getAddress()));
  
  const schemaEncoder = new SchemaEncoder("bool isSuper");
  /*
  const encodedData = schemaEncoder.encodeData([
    { name: "eventId", value: 1, type: "uint256" },
    { name: "voteIndex", value: 1, type: "uint8" },
  ]);
  */
  const encodedData = schemaEncoder.encodeData([
    { name: "isSuper", value: true, type: "bool" }
  ]);

  //const schemaUID = "0x2dc27bd454003d89c815c3407812ab29bd36c185b680b74503323c412f82d159";
  const schemaUID = ethers.solidityPackedKeccak256(
    ['string', 'address', 'bool'], 
    ['bool isSuper', ZERO_ADDRESS, false]
  );
  console.log(schemaUID);

  const tx = await eas.attest({
    schema: schemaUID,
    data: {
      recipient: "0xf21C24CB921071F886459Ba918309BEC51BF27b7",
      expirationTime: 0,
      revocable: false,
      data: encodedData,
    },
  });

  const newAttestationUID = await tx.wait();

  console.log("New attestation UID:", newAttestationUID);
  // 0x16b38191f6df1b4e7ff6ab9cedc8cfb0054725ce020187af2659e45a96eb65c6
}
main();
