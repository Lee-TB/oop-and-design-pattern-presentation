interface Bank {
    getBankName(): string;
}

class TPBank implements Bank {
    getBankName(): string {
        return 'TPBank';
    }
}

class VietcomBank implements Bank {
    getBankName(): string {
        return 'VietcomBank';
    }
}

class VietinBank implements Bank {
    getBankName(): string {
        return 'VietinBank';
    }
}

abstract class IBankFactory {
    abstract createBank(bankType: BankType): Bank;
}

class BankFactory extends IBankFactory {
    public createBank(bankType: BankType) {
        switch (bankType) {
            case BankType.TPBANK:
                return new TPBank();
            case BankType.VIETCOMBANK:
                return new VietcomBank();
            case BankType.VIETINBANK:
                return new VietinBank();
            default:
                throw new Error('This bank type is unsupported');
        }
    }
}

enum BankType {
    VIETCOMBANK,
    TPBANK,
    VIETINBANK,
}

const bankCreator: IBankFactory = new BankFactory();
const vietinbank: Bank = bankCreator.createBank(BankType.VIETINBANK);
console.log(vietinbank.getBankName()); // VietinBank

// cach 1
abstract class BankCreator {
    abstract createBank(): Bank;
}

class TPBankCreator extends BankCreator {
    createBank(): Bank {
        return new TPBank();
    }
}

class VietcomBankCreator extends BankCreator {
    createBank(): Bank {
        return new VietcomBank();
    }
}
