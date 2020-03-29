import ethProvider from './eth_provider'
import { ethers } from 'ethers'
import config from 'config'
import ZCRT_ABI from './abi/ERC20.json'

export const ZCRT = new ethers.Contract(config.public.contracts.ZCRT.address, ZCRT_ABI, ethProvider)

export { ethProvider }
