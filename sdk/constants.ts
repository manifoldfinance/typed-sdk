"use strict";

import { BigNumber, bigNumberify } from "./utils/bignumber";
import { smallestUnitName } from "./utils/units";

const AddressPrefix = "manifold";
const ValOperatorAddressPrefix = "manifoldDeveloper";
const KycAddressPrefix = "kyc";

// @test Do we have a zero address?
const AddressZero = "manifold1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqgcpfl3";
const HashZero =
  "0x0000000000000000000000000000000000000000000000000000000000000000";

const ZeroFee = {
  amount: [
    {
      amount: "0",
      denom: smallestUnitName,
    },
  ],
  gas: "0",
};

const NegativeOne: BigNumber = bigNumberify(-1);
const Zero: BigNumber = bigNumberify(0);
const One: BigNumber = bigNumberify(1);
const Two: BigNumber = bigNumberify(2);
const GweiPerMan: BigNumber = bigNumberify("1000000000000000000");
const MaxUint256: BigNumber = bigNumberify(
  "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
);

export {
  ZeroFee,
  AddressPrefix,
  ValOperatorAddressPrefix,
  KycAddressPrefix,
  AddressZero,
  HashZero,
  NegativeOne,
  Zero,
  One,
  Two,
  GweiPerMan,
  MaxUint256,
};
