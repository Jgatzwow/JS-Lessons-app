import React from "react";
import CurrencyExchange from "../../components/CurrencyExchange/CurrencyExchange";
import { CurrencyState, CurrencyType } from "../../redux/currencyReducer";
import {
  changeActionAC,
  ChangeCurrencyFieldAC,
  changeCurrentCurrencyAC,
} from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { IGlobalState } from "../../redux/state";

export const CurrencyEContainer: React.FC = (props) => {
  const currencyProjectData = useSelector<IGlobalState, CurrencyState>(
    (state) => state.currency
  );
  const {
    currencies,
    currentCurrency,
    isBuying,
    amountOfBYN,
    amountOfCurrency,
    /*    setCurrencyAmount,
                setAction,
                changeCurrency,*/
  } = currencyProjectData;

  const dispatch = useDispatch();

  let currencyRate: number = 0;
  const currenciesName = currencies.map((currency: CurrencyType) => {
    if (currency.currencyName === currentCurrency) {
      currencyRate = isBuying ? currency.buyRate : currency.sellRate;
    }
    return currency.currencyName;
  });

  const changeCurrencyField = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.currentTarget.value;
    if (!isFinite(+value)) return;
    if (e.currentTarget.dataset.currency) {
      const trigger: string = e.currentTarget.dataset.currency;
      if (trigger === "byn") {
        if (value === "") {
          dispatch(ChangeCurrencyFieldAC(value, value));
        } else {
          dispatch(
            ChangeCurrencyFieldAC(
              value,
              (+Number(value).toFixed(2) / currencyRate).toFixed(2)
            )
          );
        }
      } else {
        if (value === "") {
          dispatch(ChangeCurrencyFieldAC(value, value));
        } else {
          dispatch(
            ChangeCurrencyFieldAC(
              (+Number(value).toFixed(2) * currencyRate).toFixed(2),
              value
            )
          );
        }
      }
    }
  };
  const changeAction = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.currentTarget.dataset.action === "buy"
      ? dispatch(changeActionAC(true))
      : dispatch(changeActionAC(false));
  };

  const changeCurrentCurrency = (e: React.MouseEvent<HTMLLIElement>) => {
    e.currentTarget.dataset.currency &&
      dispatch(changeCurrentCurrencyAC(e.currentTarget.dataset.currency));
  };

  return (
    <React.Fragment>
      <CurrencyExchange
        currenciesName={currenciesName}
        currentCurrency={currentCurrency}
        currencyRate={currencyRate}
        isBuying={isBuying}
        amountOfBYN={amountOfBYN}
        amountOfCurrency={amountOfCurrency}
        changeCurrencyField={changeCurrencyField}
        changeAction={changeAction}
        changeCurrentCurrency={changeCurrentCurrency}
      />
    </React.Fragment>
  );
};

/*const mapStateToProps = ({
  currency,
}: {
  currency: CurrencyState;
}): CurrencyState => {
  return {
    currencies: currency.currencies,
    currentCurrency: currency.currentCurrency,
    isBuying: currency.isBuying,
    amountOfBYN: currency.amountOfBYN,
    amountOfCurrency: currency.amountOfCurrency,
  };
};*/

/*const mapDispatchToProps = (dispatch: Dispatch<CurrencyReducersTypes>): any => {
  return {
    setCurrencyAmount(amountOfBYN: string, amountOfCurrency: string) {
      dispatch(ChangeCurrencyFieldAC(amountOfBYN, amountOfCurrency));
    },
    setAction(isBuying: boolean) {
      dispatch(ChangeActionAC(isBuying));
    },
    changeCurrency(currency: string) {
      dispatch(changeCurrentCurrencyAC(currency));
    },
  };
};*/

/*
const connector = connect(mapStateToProps, {
  setCurrencyAmount: ChangeCurrencyFieldAC,
  setAction: ChangeActionAC,
  changeCurrency: changeCurrentCurrencyAC,
});

type TProps = ConnectedProps<typeof connector>;

export default connector(CurrencyEContainer);
*/
