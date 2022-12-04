# PolyBond 

## Frontend Hosting URL: [https://polybond.vercel.app/](https://polybond.vercel.app/)
## PolyBond Diamond Address: [https://louper.dev/diamond/0x9eae3E4aF957137C0079DA73baa3484318e92BE2?network=mumbai](https://louper.dev/diamond/0x9eae3E4aF957137C0079DA73baa3484318e92BE2?network=mumbai)
## PolyBond Contracts Github: [https://github.com/link_to_contracts]()
## Demo Video: [https://youtu.be/ESgmX1-fAh4](https://youtu.be/ESgmX1-fAh4)
## Slides Explaining Protocol-Owned Liquidity: [https://docs.google.com/presentation/d/11J2I-2a_Mxl788OFwMz4VhndumFG2BSmNKjU_8wZeKw/edit?usp=sharing](https://docs.google.com/presentation/d/11J2I-2a_Mxl788OFwMz4VhndumFG2BSmNKjU_8wZeKw/edit?usp=sharing)

PolyBond is a bonding serivce operating on the Polygon layer 2 blockhain. It gives protocols deployed an opportunity to own their liquidity by buying them from the retail *Liquidity Providers*, paying them with the protocols native token. A special feature of PolyBond is it gives these protocols the chance to incentive their user to hodl the token and not dump into the market. The Modal for this appropch is a staking mechanism this is economically backed. The reward given to these users is gotten from the protocol whose bond is been purchased.

## Tech Stack

PolyBond was built on the Polygon blockchain. It was deployed on the Mumbai testnet using Alchemy. 

### Other Tools Used
1. [Solidity](https://soliditylang.org/about/)
1. [Hardhat](https://hardhat.org/)
1. [Next.js](https://nextjs.org/learn/foundations/about-nextjs/what-is-nextjs)
1. [Tailwind CSS](https://tailwindcss.com/)

It is an [EIP-2535 Diamond Standard](https://eips.ethereum.org/EIPS/eip-2535) compliant project. This means it follows the most up to date best practices for building software on EVM-compatible networks. Projects built with the Diamond Standard are more gas efficient, secure and flexible.

### How to run this project locally 

Clone the project's repo and change Directory
```bash 
git clone $PolyBond_URL bondii && cd bondii
```

Installing Dependencies
```bash 
npm i 
```

Run project locally 
```bash 
npm run dev
```


