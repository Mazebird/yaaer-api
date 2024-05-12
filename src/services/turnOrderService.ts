import TurnCard from "../models/TurnCard";
import { Utils } from '../utils/utils';

interface TurnOrderService {
    getTurnOrders: (nbPlayer:number) => TurnCard[];
}

const turnOrderService: TurnOrderService = {
    getTurnOrders: (nbPlayer:number): TurnCard[] => {
        let returner:TurnCard[] = new Array;
        switch (nbPlayer) {
            case 1:
                returner = [{ id: 1, type: "P1"  }, { id: 2, type:"P1" },{ id: 3, type: "P1"  },{ id: 5, type: "N"  },{ id: 6, type: "N"  }];
                break;
            case 2:
                returner = [{ id: 1, type: "P1"  }, { id: 2, type:"P1" },{ id: 3, type: "P2"  },{ id: 4, type: "P2"  },{ id: 5, type: "N"  },{ id: 6, type: "N"  }];
                break;
            case 3:
                returner = [{ id: 1, type: "P1"  }, { id: 2, type:"P2" },{ id: 3, type: "P3"  },{ id: 4, type: "W"  },{ id: 5, type: "N"  },{ id: 6, type: "N"  }];
                break;
            case 4:
                returner = [{ id: 1, type: "P1"  }, { id: 2, type:"P2" },{ id: 3, type: "P3"  },{ id: 4, type: "P4"  },{ id: 5, type: "N"  },{ id: 6, type: "N"  }];
                break;
            default:
                throw new Error("Erreur : Nombre de joueurs incorrect");
        }
        return Utils.shuffleArray(returner);
    }

};

export default turnOrderService;