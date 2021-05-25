const CLA = {
  POLKADOT: 0x90,
  POLYMESH: 0x91,
  DOCK: 0x92,
  CENTRIFUGE: 0x93,
  EDGEWARE: 0x94,
  EQUILIBRIUM: 0x95,
  STATEMINT: 0x96,
  STATEMINE: 0x97,
  RESERVED: 0x98,
  KUSAMA: 0x99,
}

// https://github.com/satoshilabs/slips/blob/master/slip-0044.md
const SLIP0044 = {
  POLKADOT: 0x80000162,
  POLYMESH: 0x80000253,
  DOCK: 0x80000252,
  CENTRIFUGE: 0x800002eb,
  EDGEWARE: 0x8000020b,
  EQUILIBRIUM: 0x85f5e0fd,
  STATEMINT: 0x80000162,
  STATEMINE: 0x800001b2,
  RESERVED: 0x0,
  KUSAMA: 0x800001b2,
}

const SS58_ADDR_TYPE = {
  POLKADOT: 0,
  KUSAMA: 2,
  EDGEWARE: 7,
  POLYMESH: 12,
  DOCK: 22, //mainnet
  CENTRIFUGE: 36,
  EQUILIBRIUM: 67,
  STATEMINT: 0,
  STATEMINE: 2,
  RESERVED: 42,
}

module.exports = {
  CLA,
  SLIP0044,
  SS58_ADDR_TYPE,
}
