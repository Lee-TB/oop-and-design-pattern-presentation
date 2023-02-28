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

// cach 2
class BankFactory {
    public static createBank(bankType: BankType) {
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

const bankCreator: BankCreator = new TPBankCreator();
const bank = bankCreator.createBank();
console.log(bank.getBankName());
