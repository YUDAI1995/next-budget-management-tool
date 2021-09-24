import React from "react";
import { Balance, balanceType, filterMoneyType } from "../Models/budget.model";
import styles from "../styles/ItemList.module.scss";

interface ItemListProps {
  moneyList: Balance[];
}

export const ItemList: React.FC<ItemListProps> = (props) => {
  return (
    <section className={styles.itemListSection}>
      <h2>収支一覧</h2>
      {props.moneyList.length === 0 ? (
        <p className={styles.noData}>データがありません</p>
      ) : (
        <div className={styles.result}>
          {balanceType.map((type, index) => (
            <div key={index} className={`${type.type}`}>
              <h3>{type.typename}</h3>
              <ul>
                {filterMoneyType(props.moneyList, type.typenum).map((item) => (
                  <li key={item.id}>
                    <span className={styles.date}>{`${
                      item.date.getMonth() + 1
                    }月${item.date.getDate()}日`}</span>
                    <span className={styles.amount}>{`${item.content}: ${
                      type.typenum === 0 ? "+" : "-"
                    } ${item.amount}円`}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
