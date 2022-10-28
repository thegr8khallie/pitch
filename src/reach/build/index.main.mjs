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
      1: [ctc0, ctc1],
      2: [ctc1, ctc0]
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
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '64'));
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v81, v82], secs: v84, time: v83, didSend: v29, from: v80 } = txn1;
  ;
  ;
  const v91 = stdlib.protect(ctc2, await interact.getBuyRequest(v81, v82), {
    at: './index.rsh:25:54:application',
    fs: ['at ./index.rsh:24:13:application call to [unknown function] (defined at: ./index.rsh:24:17:function exp)'],
    msg: 'getBuyRequest',
    who: 'Pitch'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v80, v81],
    evt_cnt: 0,
    funcNum: 1,
    lct: v83,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:28:9:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:27:15:decimal', stdlib.UInt_max, '1'), v81]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v94, time: v93, didSend: v39, from: v92 } = txn2;
      
      ;
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:27:15:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v81
        });
      sim_r.txns.push({
        kind: 'from',
        to: v80,
        tok: v81
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v94, time: v93, didSend: v39, from: v92 } = txn2;
  ;
  ;
  ;
  const txn3 = await (ctc.sendrecv({
    args: [v81, v92, v91],
    evt_cnt: 1,
    funcNum: 2,
    lct: v93,
    onlyIf: true,
    out_tys: [ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:31:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v111], secs: v113, time: v112, didSend: v49, from: v110 } = txn3;
      
      ;
      sim_r.txns.push({
        kind: 'halt',
        tok: v81
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
    tys: [ctc0, ctc1, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v111], secs: v113, time: v112, didSend: v49, from: v110 } = txn3;
  ;
  const v114 = stdlib.addressEq(v92, v110);
  stdlib.assert(v114, {
    at: './index.rsh:31:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Pitch'
    });
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
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '64'));
  
  
  const v76 = stdlib.protect(ctc0, interact.nftId, 'for User\'s interact field nftId');
  const v77 = stdlib.protect(ctc1, interact.wallet, 'for User\'s interact field wallet');
  
  const txn1 = await (ctc.sendrecv({
    args: [v76, v77],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:21:8:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:21:8:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v81, v82], secs: v84, time: v83, didSend: v29, from: v80 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v81
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v81, v82], secs: v84, time: v83, didSend: v29, from: v80 } = txn1;
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
  const {data: [], secs: v94, time: v93, didSend: v39, from: v92 } = txn2;
  ;
  ;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v111], secs: v113, time: v112, didSend: v49, from: v110 } = txn3;
  ;
  const v114 = stdlib.addressEq(v92, v110);
  stdlib.assert(v114, {
    at: './index.rsh:31:9:dot',
    fs: [],
    msg: 'sender correct',
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
  appApproval: `ByAFAAECBKCNBiYCAQAAIjUAMRhBAYYpZEkiWzUBgQhbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSMMQACnSSQMQABLJBJEJDQBEkQ0BEkiEkw0AhIRRChkNQNJNQU1/4AEgQ6ZYjT/ULA0A1cIIDEAEkSxIrIBIrISJbIQMgmyFTIKshQ0AyJbshGzQgC3SCM0ARJENARJIhJMNAISEUQoZEk1A4EgWzX/gASai5F0sCM0/4gBFLEisgEjshIlshA0A1cAILIUNP+yEbM0/xYxAFAoSwFXAChnSCQ1ATIGNQJCAH1IIQSIAMgiNAESRDQESSISTDQCEhFESTUFSSJbNf9XCCA1/oAE6ZLS0jT/FlA0/lCwIQSIAJixIrIBIrISJbIQMgqyFDT/shGzMQA0/xZQKEsBVwAoZ0gjNQEyBjUCQgAcMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCQxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiTQASUpJIwg1ADgUMgoSRDgQJRJEOBFPAhJEOBISRIk=`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 40,
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
                "name": "v81",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v82",
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
                "name": "v81",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v82",
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
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
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
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T6",
                "name": "v111",
                "type": "tuple"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
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
        "internalType": "struct T5",
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
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T6",
                "name": "v111",
                "type": "tuple"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162000cf738038062000cf783398101604081905262000026916200020d565b60008055436003556040517f7ef2bbfb2ea024d26186c284a79cb0c0f7ce810d4811d99d5fe360d4533f50fb9062000062903390849062000282565b60405180910390a16200007834156007620000e9565b6040805180820182526000602080830182815233845285820151516001600160a01b031690526001918290554390915591519091620000ba91839101620002cd565b60405160208183030381529060405260029080519060200190620000e092919062000113565b50505062000335565b816200010f5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200012190620002f8565b90600052602060002090601f01602090048101928262000145576000855562000190565b82601f106200016057805160ff191683800117855562000190565b8280016001018555821562000190579182015b828111156200019057825182559160200191906001019062000173565b506200019e929150620001a2565b5090565b5b808211156200019e5760008155600101620001a3565b604080519081016001600160401b0381118282101715620001ea57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200020857600080fd5b919050565b600081830360608112156200022157600080fd5b6200022b620001b9565b835181526040601f19830112156200024257600080fd5b6200024c620001b9565b91506200025c60208501620001f0565b82526200026c60408501620001f0565b6020830152816020820152809250505092915050565b6001600160a01b038316815281516020808301919091528201516080820190620002c5604084018280516001600160a01b03908116835260209182015116910152565b509392505050565b60408101620002f2828480516001600160a01b03908116835260209182015116910152565b92915050565b600181811c908216806200030d57607f821691505b602082108114156200032f57634e487b7160e01b600052602260045260246000fd5b50919050565b6109b280620003456000396000f3fe60806040526004361061004b5760003560e01c806316697f16146100545780631e93b0f1146100675780632c10a1591461008b578063832307571461009e578063ab53f2c6146100b357005b3661005257005b005b610052610062366004610794565b6100d6565b34801561007357600080fd5b506003545b6040519081526020015b60405180910390f35b6100526100993660046107ac565b610236565b3480156100aa57600080fd5b50600154610078565b3480156100bf57600080fd5b506100c86103e4565b6040516100829291906107ea565b6100e6600260005414600e610481565b610100813515806100f957506001548235145b600f610481565b60008080556002805461011290610824565b80601f016020809104026020016040519081016040528092919081815260200182805461013e90610824565b801561018b5780601f106101605761010080835404028352916020019161018b565b820191906000526020600020905b81548152906001019060200180831161016e57829003601f168201915b50505050508060200190518101906101a391906108e1565b604080513381528435602080830191909152850135818301529084013560608201529091507f197e80db022e32b8476ca4343b629571aeaca52f6fc2d988bf498d138193cadc9060800160405180910390a16102013415600c610481565b602081015161021c906001600160a01b03163314600d610481565b60008080556001819055610232906002906106be565b5050565b610246600160005414600a610481565b6102608135158061025957506001548235145b600b610481565b60008080556002805461027290610824565b80601f016020809104026020016040519081016040528092919081815260200182805461029e90610824565b80156102eb5780601f106102c0576101008083540402835291602001916102eb565b820191906000526020600020905b8154815290600101906020018083116102ce57829003601f168201915b505050505080602001905181019061030391906108e1565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338360405161033692919061090b565b60405180910390a161034a34156008610481565b61036461035d33836020015160016104a7565b6009610481565b6103788160200151826000015160016104bf565b60408051808201825260008082526020808301828152858201516001600160a01b0390811680865233835260029485905543600155865180850191909152915116818601528451808203860181526060909101909452835192936103de939101906106fb565b50505050565b6000606060005460028080546103f990610824565b80601f016020809104026020016040519081016040528092919081815260200182805461042590610824565b80156104725780601f1061044757610100808354040283529160200191610472565b820191906000526020600020905b81548152906001019060200180831161045557829003601f168201915b50505050509050915091509091565b816102325760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b60006104b5838530856104d8565b90505b9392505050565b6104ca8383836105b2565b6104d357600080fd5b505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392839291891691839161053f91610943565b60006040518083038185875af1925050503d806000811461057c576040519150601f19603f3d011682016040523d82523d6000602084013e610581565b606091505b509150915061059282826001610683565b50808060200190518101906105a7919061095f565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839161061191610943565b60006040518083038185875af1925050503d806000811461064e576040519150601f19603f3d011682016040523d82523d6000602084013e610653565b606091505b509150915061066482826002610683565b5080806020019051810190610679919061095f565b9695505050505050565b606083156106925750816104b8565b8251156106a25782518084602001fd5b60405163100960cb60e01b81526004810183905260240161049e565b5080546106ca90610824565b6000825580601f106106da575050565b601f0160209004906000526020600020908101906106f8919061077f565b50565b82805461070790610824565b90600052602060002090601f016020900481019282610729576000855561076f565b82601f1061074257805160ff191683800117855561076f565b8280016001018555821561076f579182015b8281111561076f578251825591602001919060010190610754565b5061077b92915061077f565b5090565b5b8082111561077b5760008155600101610780565b6000606082840312156107a657600080fd5b50919050565b6000604082840312156107a657600080fd5b60005b838110156107d95781810151838201526020016107c1565b838111156103de5750506000910152565b828152604060208201526000825180604084015261080f8160608501602087016107be565b601f01601f1916919091016060019392505050565b600181811c9082168061083857607f821691505b602082108114156107a657634e487b7160e01b600052602260045260246000fd5b80516001600160a01b038116811461087057600080fd5b919050565b60006040828403121561088757600080fd5b6040516040810181811067ffffffffffffffff821117156108b857634e487b7160e01b600052604160045260246000fd5b6040529050806108c783610859565b81526108d560208401610859565b60208201525092915050565b6000604082840312156108f357600080fd5b6104b88383610875565b80151581146106f857600080fd5b6001600160a01b038316815281356020808301919091526060820190830135610933816108fd565b8015156040840152509392505050565b600082516109558184602087016107be565b9190910192915050565b60006020828403121561097157600080fd5b81516104b8816108fd56fea2646970667358221220ab74dfe7532f8bb3d411ae2ad111ed391d39dd8ebbc767a85603ddd2e510630664736f6c634300080c0033`,
  BytecodeLen: 3319,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:22:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:30:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:32:11:after expr stmt semicolon',
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
