// Automatically generated with Reach 0.1.12 (96568703)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (96568703)';
export const _backendVersion = 25;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc0]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Pitch(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Pitch expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Pitch expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Object({
    beneficiary: ctc0,
    nftId: ctc1,
    price: ctc2
    });
  const ctc4 = stdlib.T_Null;
  
  
  const v87 = stdlib.protect(ctc3, await interact.getSale(), {
    at: './index.rsh:19:68:application',
    fs: ['at ./index.rsh:18:13:application call to [unknown function] (defined at: ./index.rsh:18:17:function exp)'],
    msg: 'getSale',
    who: 'Pitch'
    });
  const v88 = v87.beneficiary;
  const v89 = v87.nftId;
  const v90 = v87.price;
  
  const txn1 = await (ctc.sendrecv({
    args: [v89, v90, v88],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:21:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1, ctc2, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:21:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v95, v96, v97], secs: v99, time: v98, didSend: v35, from: v94 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v95
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc2, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v95, v96, v97], secs: v99, time: v98, didSend: v35, from: v94 } = txn1;
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v94, v95, v97],
    evt_cnt: 0,
    funcNum: 1,
    lct: v98,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:24:9:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:22:15:decimal', stdlib.UInt_max, '1'), v95]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v106, time: v105, didSend: v42, from: v104 } = txn2;
      
      ;
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:22:15:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v95
        });
      
      sim_r.txns.push({
        kind: 'from',
        to: v97,
        tok: v95
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: v95
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v106, time: v105, didSend: v42, from: v104 } = txn2;
  ;
  ;
  const v113 = stdlib.addressEq(v94, v104);
  stdlib.assert(v113, {
    at: './index.rsh:24:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Pitch'
    });
  stdlib.protect(ctc4, await interact.saleReady(), {
    at: './index.rsh:25:27:application',
    fs: ['at ./index.rsh:25:27:application call to [unknown function] (defined at: ./index.rsh:25:27:function exp)', 'at ./index.rsh:25:27:application call to "liftedInteract" (defined at: ./index.rsh:25:27:application)'],
    msg: 'saleReady',
    who: 'Pitch'
    });
  
  ;
  return;
  
  
  
  
  };
export async function User(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for User expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for User expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Null;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc0, ctc1, ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v95, v96, v97], secs: v99, time: v98, didSend: v35, from: v94 } = txn1;
  ;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v106, time: v105, didSend: v42, from: v104 } = txn2;
  ;
  ;
  const v113 = stdlib.addressEq(v94, v104);
  stdlib.assert(v113, {
    at: './index.rsh:24:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'User'
    });
  ;
  stdlib.protect(ctc3, await interact.showOutcome(), {
    at: './index.rsh:27:28:application',
    fs: ['at ./index.rsh:27:28:application call to [unknown function] (defined at: ./index.rsh:27:28:function exp)', 'at ./index.rsh:27:28:application call to "liftedInteract" (defined at: ./index.rsh:27:28:application)'],
    msg: 'showOutcome',
    who: 'User'
    });
  
  stdlib.protect(ctc3, await interact.deductPIT(), {
    at: './index.rsh:28:26:application',
    fs: ['at ./index.rsh:28:26:application call to [unknown function] (defined at: ./index.rsh:28:26:function exp)', 'at ./index.rsh:28:26:application call to "liftedInteract" (defined at: ./index.rsh:28:26:application)'],
    msg: 'deductPIT',
    who: 'User'
    });
  
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `ByAFAAEECKCNBiYCAAEAIjUAMRhBAU0oZEkiWzUBJVs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIwxAAGMjEkQjNAESRDQESSISTDQCEhFEKWRJNQOBIFs1/4AEmouRdLAjNP+IASw0A1cAIDEAEkSxIrIBI7ISJLIQNANXKCCyFDT/shGzsSKyASKyEiSyEDIJshUyCrIUNP+yEbNCAG1IIQSIANUiNAESRDQESSISTDQCEhFESTUFSUkiWzX/JVs1/lcQIDX9gARQPg6rNP8WUDT+FlA0/VCwIQSIAJyxIrIBIrISJLIQMgqyFDT/shGzMQA0/xZQNP1QKUsBVwBIZ0gjNQEyBjUCQgAcMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKDQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRIECMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk0AElKSSMINQA4FDIKEkQ4ECQSRDgRTwISRDgSEkSJ`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 72,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v95",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v96",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v97",
                "type": "address"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v95",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v96",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v97",
                "type": "address"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162000a8538038062000a858339810160408190526100249161023e565b60008055436003556040805133815282516020808301919091528084015180516001600160a01b039081168486015291810151606084015283015116608082015290517fbe1310b74ad59956b7ac6cce0f2c80e094f2f60d4eed55184b6dd91db80ec0eb9181900360a00190a161009d3415600761012a565b604080516060808201835260006020808401828152848601838152338087528884018051516001600160a01b039081168552905189015181168352600195869055439095558751938401529051831695820195909552935116908301529060800160405160208183030381529060405260029080519060200190610122929190610153565b505050610317565b8161014f5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b82805461015f906102dc565b90600052602060002090601f01602090048101928261018157600085556101c7565b82601f1061019a57805160ff19168380011785556101c7565b828001600101855582156101c7579182015b828111156101c75782518255916020019190600101906101ac565b506101d39291506101d7565b5090565b5b808211156101d357600081556001016101d8565b604051606081016001600160401b038111828210171561021c57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b038116811461023957600080fd5b919050565b6000818303608081121561025157600080fd5b604080519081016001600160401b038111828210171561028157634e487b7160e01b600052604160045260246000fd5b604052835181526060601f198301121561029a57600080fd5b6102a26101ec565b91506102b060208501610222565b8252604084015160208301526102c860608501610222565b604083015260208101919091529392505050565b600181811c908216806102f057607f821691505b6020821081141561031157634e487b7160e01b600052602260045260246000fd5b50919050565b61075e80620003276000396000f3fe6080604052600436106100405760003560e01c80631e93b0f1146100495780632c10a1591461006d5780638323075714610080578063ab53f2c61461009557005b3661004757005b005b34801561005557600080fd5b506003545b6040519081526020015b60405180910390f35b61004761007b36600461055c565b6100b8565b34801561008c57600080fd5b5060015461005a565b3480156100a157600080fd5b506100aa61022c565b6040516100649291906105a4565b6100c8600160005414600b6102c9565b6100e2813515806100db57506001548235145b600c6102c9565b6000808055600280546100f4906105de565b80601f0160208091040260200160405190810160405280929190818152602001828054610120906105de565b801561016d5780601f106101425761010080835404028352916020019161016d565b820191906000526020600020905b81548152906001019060200180831161015057829003601f168201915b5050505050806020019051810190610185919061062f565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133836040516101b89291906106b7565b60405180910390a16101cc341560086102c9565b6101e66101df33836020015160016102ef565b60096102c9565b80516101fe906001600160a01b03163314600a6102c9565b610212816020015182604001516001610307565b6000808055600181905561022890600290610506565b5050565b600060606000546002808054610241906105de565b80601f016020809104026020016040519081016040528092919081815260200182805461026d906105de565b80156102ba5780601f1061028f576101008083540402835291602001916102ba565b820191906000526020600020905b81548152906001019060200180831161029d57829003601f168201915b50505050509050915091509091565b816102285760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b60006102fd83853085610320565b90505b9392505050565b6103128383836103fa565b61031b57600080fd5b505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391610387916106ef565b60006040518083038185875af1925050503d80600081146103c4576040519150601f19603f3d011682016040523d82523d6000602084013e6103c9565b606091505b50915091506103da828260016104cb565b50808060200190518101906103ef919061070b565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391610459916106ef565b60006040518083038185875af1925050503d8060008114610496576040519150601f19603f3d011682016040523d82523d6000602084013e61049b565b606091505b50915091506104ac828260026104cb565b50808060200190518101906104c1919061070b565b9695505050505050565b606083156104da575081610300565b8251156104ea5782518084602001fd5b60405163100960cb60e01b8152600481018390526024016102e6565b508054610512906105de565b6000825580601f10610522575050565b601f0160209004906000526020600020908101906105409190610543565b50565b5b808211156105585760008155600101610544565b5090565b60006040828403121561056e57600080fd5b50919050565b60005b8381101561058f578181015183820152602001610577565b8381111561059e576000848401525b50505050565b82815260406020820152600082518060408401526105c9816060850160208701610574565b601f01601f1916919091016060019392505050565b600181811c908216806105f257607f821691505b6020821081141561056e57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b038116811461062a57600080fd5b919050565b60006060828403121561064157600080fd5b6040516060810181811067ffffffffffffffff8211171561067257634e487b7160e01b600052604160045260246000fd5b60405261067e83610613565b815261068c60208401610613565b602082015261069d60408401610613565b60408201529392505050565b801515811461054057600080fd5b6001600160a01b0383168152813560208083019190915260608201908301356106df816106a9565b8015156040840152509392505050565b60008251610701818460208701610574565b9190910192915050565b60006020828403121561071d57600080fd5b8151610300816106a956fea26469706673582212203f25d19ed2febc5b0c085f5e303d92be83bdca5f6b61aca17f807ed949ea78c764736f6c634300080c0033`,
  BytecodeLen: 2693,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:23:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:29:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Pitch": Pitch,
  "User": User
  };
export const _APIs = {
  };
