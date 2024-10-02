import { createConfig } from "./src/lib/config";
import { TOKEN_TRAIT_TYPE } from "./src/lib/types";

export default createConfig({
  logo: "https://pbs.twimg.com/profile_images/1660360628941324290/GQYSBPow_400x400.jpg",
  name: "Mangrove DAO",
  githubRepo: "mcgingras/demo-directory",
  tokenContracts: [
    {
      slug: "builders",
      image:
        "https://ipfs.io/ipfs/QmNq2i3Tm6NdgiktKRG6Xxk6BoJFAdzdKKxhBhsAuLjJD1",
      tokenStandard: "ERC721",
      chainId: 1,
      contractAddress: "0x33dbde2e093b7cf8446d9ac0de79220d42423501",
      creationBlock: 18629642,
      addTokenboundAccounts: true,
      traits: [],
      tokenTraits: [
        {
          sourceContractAddress: "0xd1502a7659eaad60278ae3ef27edea849504f4da",
          name: "Active",
          type: TOKEN_TRAIT_TYPE.ERC1155Ownership,
          data: {
            tokenIdSpecifier: "ANY",
          },
        },
        {
          sourceContractAddress: "0x5f120453dfd0c55f55370d1f718089ae0fcf6387",
          name: "Activity Score",
          type: TOKEN_TRAIT_TYPE.ERC20Balance,
          data: {},
        },
      ],
      description: "",
    },
    {
      slug: "pods",
      image:
        "https://ipfs.io/ipfs/QmRxi5XaxrzA2imnv2dEm4ZizVWXeKiCianpFxRbdFLRW9",
      tokenStandard: "ERC721",
      chainId: 1,
      contractAddress: "0x9763a9d2b17756b6531ecbf6c7097f7225e22da7",
      creationBlock: 18629889,
      addTokenboundAccounts: true,
      traits: [],
      tokenTraits: [
        {
          sourceContractAddress: "0xa2956d29d879ab7b9a1d16723e376d9e2be5c911",
          name: "Active",
          type: TOKEN_TRAIT_TYPE.ERC1155Ownership,
          data: {
            tokenIdSpecifier: "ANY",
          },
        },
        {
          sourceContractAddress: "0xd0805e6b373223322e341018cb8c024c3baa98b0",
          name: "Activity Score",
          type: TOKEN_TRAIT_TYPE.ERC20Balance,
          data: {},
        },
      ],
      description: "",
    },
    {
      slug: "protocol-council",
      image:
        "https://ipfs.io/ipfs/QmRkc5feASVrrqW69XRaLcsnbEmHN91rW7YWVMC5naRbri",
      tokenStandard: "ERC721",
      chainId: 1,
      contractAddress: "0x760559c824db794a307f3c98e03a87d1b10c12db",
      creationBlock: 18630656,
      addTokenboundAccounts: true,
      traits: [],
      tokenTraits: [
        {
          sourceContractAddress: "0xcb42f61a0e42eacd0091b9ffc6a182cdcec7bd4a",
          name: "Active",
          type: TOKEN_TRAIT_TYPE.ERC1155Ownership,
          data: {
            tokenIdSpecifier: "ANY",
          },
        },
      ],
      description: "",
    },
    {
      slug: "ecosystem-council",
      image:
        "https://ipfs.io/ipfs/QmcbUQe9rvBjF4NxymN2h3ZfnhN3gWaB1zdHVXXRhb9C4j",
      tokenStandard: "ERC721",
      chainId: 1,
      contractAddress: "0x93cf0a3b67962d475d9514d9955fe6621a26d42c",
      creationBlock: 18630638,
      addTokenboundAccounts: true,
      traits: [],
      tokenTraits: [
        {
          sourceContractAddress: "0x7c49ef1e6565af0e112f3727005f85208f81ba91",
          name: "Active",
          type: TOKEN_TRAIT_TYPE.ERC1155Ownership,
          data: {
            tokenIdSpecifier: "ANY",
          },
        },
      ],
      description: "",
    },
    {
      slug: "builder-score",
      image:
        "https://ipfs.io/ipfs/QmS14Xfd2ySVTHC77SpSaEgfhddgqKtGCSPa3XgK7Nv8yw",
      tokenStandard: "ERC20",
      chainId: 1,
      contractAddress: "0x5f120453dfd0c55f55370d1f718089ae0fcf6387",
      creationBlock: 18627720,
      traits: [],
      tokenTraits: [],
      description: "",
      showOnDashboard: false,
    },
    {
      slug: "pod-score",
      image:
        "https://ipfs.io/ipfs/QmS14Xfd2ySVTHC77SpSaEgfhddgqKtGCSPa3XgK7Nv8yw",
      tokenStandard: "ERC20",
      chainId: 1,
      contractAddress: "0xd0805e6b373223322e341018cb8c024c3baa98b0",
      creationBlock: 18642123,
      traits: [],
      tokenTraits: [],
      description: "",
      showOnDashboard: false,
    },
    {
      slug: "active-builders",
      image:
        "https://ipfs.io/ipfs/QmNhEMHqszbLATeGgxQt4hWS7dbDwACyr8gJGSSTb7cKWB",
      tokenStandard: "ERC1155",
      chainId: 1,
      contractAddress: "0xd1502a7659eaad60278ae3ef27edea849504f4da",
      creationBlock: 18627698,
      traits: [],
      tokenTraits: [],
      description: "",
      showOnDashboard: false,
    },
    {
      slug: "active-pods",
      image:
        "https://ipfs.io/ipfs/QmNhEMHqszbLATeGgxQt4hWS7dbDwACyr8gJGSSTb7cKWB",
      tokenStandard: "ERC1155",
      chainId: 1,
      contractAddress: "0xa2956d29d879ab7b9a1d16723e376d9e2be5c911",
      creationBlock: 18658230,
      traits: [],
      tokenTraits: [],
      description: "",
      showOnDashboard: false,
    },
    {
      slug: "active-protocol-council",
      image:
        "https://ipfs.io/ipfs/QmNhEMHqszbLATeGgxQt4hWS7dbDwACyr8gJGSSTb7cKWB",
      tokenStandard: "ERC1155",
      chainId: 1,
      contractAddress: "0xcb42f61a0e42eacd0091b9ffc6a182cdcec7bd4a",
      creationBlock: 18658220,
      traits: [],
      tokenTraits: [],
      description: "",
      showOnDashboard: false,
    },
    {
      slug: "active-ecosystem-council",
      image:
        "https://ipfs.io/ipfs/QmNhEMHqszbLATeGgxQt4hWS7dbDwACyr8gJGSSTb7cKWB",
      tokenStandard: "ERC1155",
      chainId: 1,
      contractAddress: "0x7c49ef1e6565af0e112f3727005f85208f81ba91",
      creationBlock: 18642109,
      traits: [],
      tokenTraits: [],
      description: "",
      showOnDashboard: false,
    },
  ],
  theme: {
    colors: {
      // accents
      action: "#AD72FF",
      red: "#FF5650",
      green: "#63EBAF",
      blue: "#5F6FFF",
      orange: "#FF9956",
      yellow: "#CEDC4B",
      purple: "#AD72FF",
      // green dark mode
      primary: "#FFFFFF",
      secondary: "#858585",
      highlight: "#1D5353",
      highlightFaint: "#103030",
      background: "#0B2121",
    },
  },
});
