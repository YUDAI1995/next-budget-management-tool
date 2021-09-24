import React from 'react';
import { Balance, balanceType, sumAmount } from '../Models/budget.model';
import styles from '../styles/Result.module.scss';

interface ResultProps {
    date: Date;
    filterActiveMonth: () => Balance[];
}

export const Result: React.FC<ResultProps> = (props) => {
    const month = props.date.getMonth() + 1;
    const thisMonth = new Date().getMonth() + 1;
    return (
        <section className={styles.resultSection}>
            <h2 className={styles.resultTitle}>{`${
                month === thisMonth ? '今' : month
            }月の${month > thisMonth ? '計画' : '結果'}`}</h2>
            <ul className={styles.monthlyResult}>
                {balanceType.map((type, index) => (
                    <li key={index}>
                        <h3>{`今月の${type.typename}`}</h3>
                        <p>
                            {`${index === 0 ? '+' : '-'} ${sumAmount(
                                props.filterActiveMonth(),
                                index
                            )}円`}
                        </p>
                    </li>
                ))}
            </ul>
        </section>
    );
};
